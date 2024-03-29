import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table.component';
import { MatTableModule, MatPaginatorModule, MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule
  ],
  declarations: [ProductTableComponent],
  exports: [ProductTableComponent],
})
export class ProductTableModule { }
