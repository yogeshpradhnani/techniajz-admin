import { Routes } from "@angular/router";
export const dashData: Routes = [
  {
    path: "admin",
    data: {
      title: "Dashboard",
      breadcrumb: "Dashboard",
    },
    loadChildren: () => import("../../admin/dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },
  {
    path: "admin/user",
    data: {
      title: "User",
      breadcrumb: "User",
    },
    loadChildren: () => import("../../admin/user/user.module").then((m) => m.UserModule),
  },
  
  
  {
    path: "admin/user-profile",
    data: {
      title: "User's'",
      breadcrumb: "User's'",
    },
    loadChildren: () => import("../../admin/user-detail/user-profile.module").then((m) => m.UserProfileModule),
  },
  {
    path: "admin/authentication",
    data: {
      title: "User's'",
      breadcrumb: "User's'",
    },
    loadChildren: () => import("../../admin/authentication/authentication.module").then((m) => m.AuthenticationModule),
  },
  {
    path: "admin/propertys",
    data: {
      title: "User's'",
      breadcrumb: "User's'",
    },
    loadChildren: () => import("../../admin/propertys/propertys.module").then((m) => m.PropertysModule),
  },
  {
    path: "admin/changepassword",
    data: {
      title: "changepassword",
      breadcrumb: "changepassword'",
    },
    loadChildren: () => import("../../admin/changepassword/changepassword.module").then((m) => m.ChangepasswordModule),
  },
  {
    path: "admin/teams",
    data: {
      title: "Teams",
      breadcrumb: "Teams'",
    },
    loadChildren: () => import("../../admin/teams/teams.module").then((m) => m.TeamsModule),
  },
  {
    path: "admin/addpage",
    data: {
      title: "Addpage",
      breadcrumb: "Addpage'",
    },
    loadChildren: () => import("../../admin/addpage/addpage.module").then((m) => m.AddpageModule),
  },
  {
    path: "admin/setting",
    data: {
      title: "setting",
      breadcrumb: "setting'",
    },
    loadChildren: () => import("../../admin/setting/setting.module").then((m) => m.SettingModule),
  }
  
  
    
    
];
