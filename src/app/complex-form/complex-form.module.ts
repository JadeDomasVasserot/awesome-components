import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComplexFormRoutingModule} from './complex-form-routing.module';
import {ComplexFormComponent} from './components/complex-form/complex-form.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ComplexFormService} from "./components/complex-form/services/complex-form.service";


@NgModule({
  declarations: [
    ComplexFormComponent
  ],
  imports: [
    CommonModule,
    ComplexFormRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    ComplexFormService
  ]
})
export class ComplexFormModule {
}
