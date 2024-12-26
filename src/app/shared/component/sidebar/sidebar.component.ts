import { Component } from '@angular/core';
import { NavservicesService, Menu } from '../../services/nav/navservices.service';
import { LayoutService } from '../../services/layout/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  public menus = this.navService.Nvabarmenu;
  public mainMenu: boolean = false;
  public menuItem = {}
  public active: boolean = false;
  public screenWidth: number;
  public screenHeight: number;
  public isCurrentRoute: boolean = false;

  constructor(public navService: NavservicesService,
    public layout: LayoutService,
    private router: Router) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

  }

  isActiveRoute(url: any) {
    this.active = false;
    this.isCurrentRoute = this.router.isActive(url, true);
    return this.isCurrentRoute ? 'txt-primary' : '';
  }

  isCurrentSubMenue() {
    return this.isCurrentRoute;
  }

  updateActiveState(menuItems: any) {
    let anyItemActive = false;
    if (menuItems && menuItems.length > 0) {
      menuItems.forEach((item: { title: string, icon: string, type: string, active: boolean, path: string }) => {
        item.active = this.router.isActive(item.path, true);
        anyItemActive = anyItemActive || item.active;
      });
    }
    return anyItemActive ? "txt-primary" : "";
  }

  toggleMenu(item: Menu) {
   
    if (item) {
      if (!item.active) {
        this.menus.forEach((a: Menu) => {
          if (this.menus.includes(item)) {
            a.active = false;
          }
          if (!a.children) {
            return false;
          }
          a.children.forEach((b: Menu) => {
            if (a.children?.includes(item)) {
              b.active = false;
            }
          });
          return;
        });
      }
      item.active = !item.active;
      if (item.active == true) {
        this.navService.isShow = true;
      } else {
        this.navService.isShow = false;
      }
    }else{
      item = {
active : false
      }
      // item.active =false
    }

   

  }

  toggle(item: Menu, mainMenu?: Menu) {
     if (!item.active) {
      this.menus.forEach((a: Menu) => {
        a.item?.forEach((child) => {
          if (a.item?.includes(item)) {
            child.active = false;
          }
          if (child.children) {
            child.children.forEach((subChild) => {
              if (child.children?.includes(item)) {
                subChild.active = false;
              }
            })
          }
        })
        return;
      });
    }
    item.active = !item.active;
    if (mainMenu) {
      mainMenu.active = false
      this.navService.isShow = false
    }
  }

}