import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrimPipe} from './pipes/trim.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TrimPipe
  ],
  exports: [
    TrimPipe
  ]
})
export class SharedModule {
}
