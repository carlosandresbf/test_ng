
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from '../services/auth.service';


import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';

import { CompaniasReaseguradorasListComponent } from './modules/companias-reaseguradoras/list/companias-reaseguradoras-list/companias-reaseguradoras-list.component';
import { DataTablesModule } from 'angular-datatables';
import { RegistrarCorredorComponent } from './modules/corredores/registrar-corredor/registrar-corredor.component';
import { ContratosListComponent } from './modules/contratos/list/contratos-list/contratos-list.component';
import { PolizasReasegurosListComponent } from './modules/reaseguros-polizas/list/polizas-reaseguros-list/polizas-reaseguros-list.component';
import { ContratosNewComponent } from './modules/contratos/contratos-new/contratos-new.component';
import { ReacoexUploadComponent } from './modules/companias-reaseguradoras/reacoex-upload/reacoex-upload.component';
import { RegistrarReaseguradorComponent } from './modules/reaseguradores/registrar-reasegurador/registrar-reasegurador.component';
import { AutomaticosListComponent } from './modules/contratos/automaticos/automaticos-list/automaticos-list.component';
import { FacultativosListComponent } from './modules/contratos/facultativos/facultativos-list/facultativos-list.component';
import { CuotaAparteComponent } from './modules/contratos/automaticos/proporcionales/cuota-aparte/cuota-aparte.component';
import { ExcedenteComponent } from './modules/contratos/automaticos/proporcionales/excedente/excedente.component';
import { CuotaAparteDetalleComponent } from './modules/contratos/automaticos/proporcionales/cuota-aparte-detalle/cuota-aparte-detalle.component';
import { ExcedenteDetalleComponent } from './modules/contratos/automaticos/proporcionales/excedente-detalle/excedente-detalle.component';
import { CatastroficoXlComponent } from './modules/contratos/automaticos/noProporcionales/catastrofico-xl/catastrofico-xl.component';
import { CatastroficoXlDetalleComponent } from './modules/contratos/automaticos/noProporcionales/catastrofico-xl-detalle/catastrofico-xl-detalle.component';
import { OperativoWxlComponent } from './modules/contratos/automaticos/noProporcionales/operativo-wxl/operativo-wxl.component';
import { OperativoWxlDetalleComponent } from './modules/contratos/automaticos/noProporcionales/operativo-wxl-detalle/operativo-wxl-detalle.component';
import { StopLossComponent } from './modules/contratos/automaticos/noProporcionales/stop-loss/stop-loss.component';
import { StopLossDetalleComponent } from './modules/contratos/automaticos/noProporcionales/stop-loss-detalle/stop-loss-detalle.component';
import { FacultativoObligatorioComponent } from './modules/contratos/facultativos/proporcionales/facultativo-obligatorio/facultativo-obligatorio.component';
import { FacultativoObligatiorioDetalleComponent } from './modules/contratos/facultativos/proporcionales/facultativo-obligatiorio-detalle/facultativo-obligatiorio-detalle.component';
import { FacultativoPComponent } from './modules/contratos/facultativos/proporcionales/facultativo-p/facultativo-p.component';
import { FacultativoPdetalleComponent } from './modules/contratos/facultativos/proporcionales/facultativo-pdetalle/facultativo-pdetalle.component';
import { FacultativoNpComponent } from './modules/contratos/facultativos/noProporcionales/facultativo-np/facultativo-np.component';
import { FacultativoNpDetalleComponent } from './modules/contratos/facultativos/noProporcionales/facultativo-np-detalle/facultativo-np-detalle.component';
import { AseguradorasComponent } from './modules/aseguradoras/new/aseguradoras.component';
import { ListAseguradorasComponent } from './modules/aseguradoras/list-aseguradoras/list-aseguradoras.component';
import { FacobComponent } from './modules/contratos/automaticos/proporcionales/facob/facob.component';
import { FacobDetalleComponent } from './modules/contratos/automaticos/proporcionales/facob-detalle/facob-detalle.component';
import { AjusteSobreComisionComponent } from './modules/contratos/ajusteContratos/ajuste-sobre-comision/ajuste-sobre-comision.component';
import { TentPlanComponent } from './modules/contratos/automaticos/noProporcionales/tent-plan/tent-plan.component';
import { TentPlanDetalleComponent } from './modules/contratos/automaticos/noProporcionales/tent-plan-detalle/tent-plan-detalle.component';
import { AseguradorasUploadComponent } from './modules/companias-reaseguradoras/aseguradoras-upload/aseguradoras-upload.component';
import { AutomaticosProporcionalesListComponent } from './modules/contratos/automaticos/proporcionales/automaticos-proporcionales-list/automaticos-proporcionales-list.component';
import { AutomaticosNoProporcionalesListComponent } from './modules/contratos/automaticos/noProporcionales/automaticos-no-proporcionales-list/automaticos-no-proporcionales-list.component';
import { FacultativosProporcionalesListComponent } from './modules/contratos/facultativos/proporcionales/facultativos-proporcionales-list/facultativos-proporcionales-list.component';
import { FacultativosNoProporcionalesListComponent } from './modules/contratos/facultativos/noProporcionales/facultativos-no-proporcionales-list/facultativos-no-proporcionales-list.component';
import { AjusteNoProporcionalesComponent } from './modules/contratos/ajusteContratos/ajuste-no-proporcionales/ajuste-no-proporcionales.component';




@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule 
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    CompaniasReaseguradorasListComponent,
    RegistrarCorredorComponent,
    ContratosListComponent,
    PolizasReasegurosListComponent,
    ContratosNewComponent,
    ReacoexUploadComponent,
    RegistrarReaseguradorComponent,
    AutomaticosListComponent,
    FacultativosListComponent,
    CuotaAparteComponent,
    ExcedenteComponent,
    CuotaAparteDetalleComponent,
    ExcedenteDetalleComponent,
    CatastroficoXlComponent,
    CatastroficoXlDetalleComponent,
    OperativoWxlComponent,
    OperativoWxlDetalleComponent,
    StopLossComponent,
    StopLossDetalleComponent,
    FacultativoObligatorioComponent,
    FacultativoObligatiorioDetalleComponent,
    FacultativoPComponent,
    FacultativoPdetalleComponent,
    FacultativoNpComponent,
    FacultativoNpDetalleComponent,
    AseguradorasComponent,
    ListAseguradorasComponent,
    FacobComponent,
    FacobDetalleComponent,
    AjusteSobreComisionComponent,
    TentPlanComponent,
    TentPlanDetalleComponent,
    AseguradorasUploadComponent,
    AutomaticosProporcionalesListComponent,
    AutomaticosNoProporcionalesListComponent,
    FacultativosProporcionalesListComponent,
    FacultativosNoProporcionalesListComponent,
    AjusteNoProporcionalesComponent,
  ],
  providers: [
    AuthService,
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
