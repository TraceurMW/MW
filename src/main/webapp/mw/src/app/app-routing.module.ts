import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TreeListComponent} from "./template/tree-list/tree-list.component";
import {ListComponent} from "./template/list/list.component";
import {TestComponent} from "./template/test/test.component";
import {LoginComponent} from "./pages/login/login/login.component";
import {FlexTestComponent} from "./template/flex-test/flex-test.component";
import {SiderFrameComponent} from "./pages/sider-frame/sider-frame.component";

const routes: Routes = [
  // {path: 'login', component:LoginComponent},
  // { path: 'frame', component: SiderFrameComponent },
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  // { path: '**', component: LoginComponent }
  // {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
