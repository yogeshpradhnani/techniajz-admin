import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, Subject, debounceTime, delay, of, pipe, switchMap, tap } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { SUPPORTDB, supportDB } from '../../data/component/support-ticket/support-ticket';
import { SortColumn, SortDirection } from '../../directives/support-ticket.directive';

interface SearchResult {
  support: supportDB[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(support: supportDB[], column: SortColumn, direction: string): supportDB[] {
  if (direction === '' || column === '') {
    return support;
  } else {
    return [...support].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(country: supportDB, term: string, pipe: PipeTransform) {
  return (
    country.name.toLowerCase().includes(term.toLowerCase()) ||
    country.position.toLowerCase().includes(term.toLowerCase()) ||
    country.office.toLowerCase().includes(term.toLowerCase()) ||
    country.email.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(country.salary).includes(term)
  );
}

@Injectable({
  providedIn: 'root'
})

export class SupportTicketService {

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _support$ = new BehaviorSubject<supportDB[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false)),
      )
      .subscribe((result) => {
        this._support$.next(result.support);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get support$() {
    return this._support$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let support = sort(SUPPORTDB, sortColumn, sortDirection);

    // 2. filter
    support = support.filter((country) => matches(country, searchTerm, this.pipe));
    const total = support.length;

    // 3. paginate
    support = support.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ support, total });
  }
}

