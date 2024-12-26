import { HostListener, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

export interface Menu {
  id?: number;
  headTitle1?: string;
  mainTitle?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  item?: Menu[];
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})
export class NavservicesService {
  public language: boolean = false;
  public collapseSidebar: boolean = window.innerWidth < 1200 ? true : false;
  public horizontal: boolean = window.innerWidth < 1200 ? false : true;
  public isDisplay!: boolean;
  public search!: boolean;
  public isShow: boolean = false;

  Nvabarmenu: Menu[] = [
    {
      id: 1,
      icon: "home",
      mainTitle: "Dashboard",
      headTitle1: "Dashboard",
      path: "admin/dashboard",
    },
    {
      id: 2,
      icon: "user",
      mainTitle: "User",
      headTitle1: "User",
      // path: "admin/user/list",
      item : [
        {
          title: "Expense",
          icon: "task",
          type: "sub",
          path: "admin/user/list",
          // permission: this.permission?.expenses,
        },
        {
          title: "User requests",
          icon: "task",
          type: "sub",
          path: "admin/user/user-list",

        },
      ]
    },
    
    // {
    //   id: 2,
    //   icon: "user",
    //   mainTitle: "Users",
    //   headTitle1: "Users",
    //   path: "admin/users/Profile",
    // },
    // {
    //   id: 2,
    //   icon: "user",
    //   mainTitle: "Registration",
    //   headTitle1: "Registration",
    //   path: "admin/authentication/registration",
    // },
    // {
    //   id:2,
    //   icon:"user",
    //   mainTitle: "changepassword",
    //   headTitle1: "changepassword",
    //   path: "admin/changepassword/change",
    // },

   
    {
      id: 2,
      icon: "user",
      mainTitle: "Addpage",
      headTitle1: "Addpage",
      item : [
        {
          title: "Add page",
          icon: "task",
          type: "sub",
          path: "admin/addpage/add",
          // permission: this.permission?.expenses,
        },
        {
          title: 'Dashboard',
          icon: 'home',
          type: 'sub',
          active: false,
          children: [
            { path: '/dashboard/default', title: 'Shopping Place', type: 'link' },
            { path: '/dashboard/crm-dashboard', title: 'CRM Dashboard', type: 'link' },
          ],
        },
      ]
      
    },
    // {
    //   id: 2,
    //   icon: "user",
    //   mainTitle: "setting",
    //   headTitle1: "setting",
    //   path: "admin/setting/update",
    // },
    

    
    
  ];

  constructor() {
    const data = localStorage.getItem('role') 
    let permission = false
    if (data) {
      permission = data !== 'Admin';
    }
    if (permission) {
      // this.Nvabarmenu = this.Nvabarmenu.filter((item) => item.id !== 2);
    }
  }
  items = new BehaviorSubject<Menu[]>(this.Nvabarmenu);
}
