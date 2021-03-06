import {NgModule} from '@angular/core';

import {WelcomeRoutingModule} from './welcome-routing.module';

import {WelcomeComponent} from './welcome.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [WelcomeRoutingModule, CommonModule, NgZorroAntdModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
}
