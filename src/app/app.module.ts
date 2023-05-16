import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header_section/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderMenuComponent } from './components/header_section/header/header-menu/header-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderClienteComponent } from './components/header_section/header/header-cliente/header-cliente.component';
import { SelectClienteDialogComponent } from './components/header_section/header/header-cliente/select-cliente-dialog/select-cliente-dialog.component';
import { SelectClienteFormComponent } from './components/header_section/header/header-cliente/select-cliente-dialog/select-cliente-form/select-cliente-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AgregarClienteDialogFormComponent } from './components/header_section/header/header-menu/agregar-cliente-dialog-form/agregar-cliente-dialog-form.component';
import { DefaultBodyComponent } from './components/body_section/default-body/default-body.component';
import { LibrosComponent } from './components/body_section/libros/libros.component';
import { LibroComprasComponent } from './components/body_section/libro-compras/libro-compras.component';
import { LibroVentasComponent } from './components/body_section/libro-ventas/libro-ventas.component';
import { LiquidacionIvaDialogComponent } from './components/body_section/liquidacion-iva-dialog/liquidacion-iva-dialog.component';
import { NotFoundComponent } from './components/body_section/not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ImportComprobantesDialogComponent } from './components/body_section/libro-compras/import-comprobantes-dialog/import-comprobantes-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComprobantesComprasTableComponent } from './components/body_section/libro-compras/comprobantes-compras-table/comprobantes-compras-table.component';
import { AddComprobanteDialogComponent } from './components/body_section/libro-compras/add-comprobante-dialog/add-comprobante-dialog.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    HeaderClienteComponent,
    SelectClienteDialogComponent,
    SelectClienteFormComponent,
    AgregarClienteDialogFormComponent,
    DefaultBodyComponent,
    LibrosComponent,
    LibroComprasComponent,
    LibroVentasComponent,
    LiquidacionIvaDialogComponent,
    NotFoundComponent,
    ImportComprobantesDialogComponent,
    ComprobantesComprasTableComponent,
    AddComprobanteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
