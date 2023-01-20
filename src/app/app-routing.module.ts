import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './user/components/home/home.component';
import { DashboardComponent as UserAdminDashboard } from './user-admin/components/dashboard/dashboard.component';
import { LayoutComponent as UserAdminLayout  } from './user-admin/layout/layout.component';
import {SignupComponent} from './signup/signup.component';


const routes: Routes = [
  { path:"signup", component: SignupComponent},
  { path: "admin", component: LayoutComponent, children: [
    { path: "", component: DashboardComponent},
    { path: "ads", loadChildren: () => import("./admin/components/ads/ads.module").then(m => m.AdsModule) },
    { path: "channels", loadChildren: () => import("./admin/components/channels/channels.module").then(m => m.ChannelsModule) },
    { path: "comments", loadChildren: () => import("./admin/components/comments/comments.module").then(m => m.CommentsModule) },
    { path: "users", loadChildren: () => import("./admin/components/users/users.module").then(m => m.UsersModule) },
    { path: "videos", loadChildren: () => import("./admin/components/videos/videos.module").then(m => m.VideosModule) },
  ]
},
{path: "user-admin", component: UserAdminLayout, children: [
    { path: "", component: UserAdminDashboard},
    { path: "channels", loadChildren: () => import("./user-admin/components/channels/channels.module").then(m => m.ChannelsModule) },
    { path: "comments", loadChildren: () => import("./user-admin/components/comments/comments.module").then(m => m.CommentsModule) },
    { path: "videos", loadChildren: () => import("./user-admin/components/videos/videos.module").then(m => m.VideosModule) },]
},
{path:"", component: HomeComponent},
{path:"channels", loadChildren:()=> import("./user/components/channels/channels.module").then(m=>m.ChannelsModule)},
{path:"dashboard", loadChildren:()=> import("./user/components/dashboard/dashboard.module").then(m=>m.DashboardModule)},
{path:"profile", loadChildren:()=> import("./user/components/profile/profile.module").then(m=>m.ProfileModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
