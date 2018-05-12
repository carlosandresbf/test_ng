
import { AseguradorasUploadComponent } from './../modules/companias-reaseguradoras/aseguradoras-upload/aseguradoras-upload.component';
import { ListAseguradorasComponent } from './../modules/aseguradoras/list-aseguradoras/list-aseguradoras.component';
import { AseguradorasComponent } from './../modules/aseguradoras/new/aseguradoras.component';
import { ReacoexUploadComponent } from './../modules/companias-reaseguradoras/reacoex-upload/reacoex-upload.component';
import { ContratosNewComponent } from './../modules/contratos/contratos-new/contratos-new.component';
import { ContratosListComponent } from './../modules/contratos/list/contratos-list/contratos-list.component';
import { CompaniasReaseguradorasListComponent } from './../modules/companias-reaseguradoras/list/companias-reaseguradoras-list/companias-reaseguradoras-list.component';

import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RegistrarCorredorComponent } from '../modules/corredores/registrar-corredor/registrar-corredor.component';
import { PolizasReasegurosListComponent } from '../modules/reaseguros-polizas/list/polizas-reaseguros-list/polizas-reaseguros-list.component';
import { RegistrarReaseguradorComponent } from '../modules/reaseguradores/registrar-reasegurador/registrar-reasegurador.component';
import { AutomaticosListComponent } from './../modules/contratos/automaticos/automaticos-list/automaticos-list.component';
import { FacultativosListComponent } from './../modules/contratos/facultativos/facultativos-list/facultativos-list.component';
import { CuotaAparteComponent } from './../modules/contratos/automaticos/proporcionales/cuota-aparte/cuota-aparte.component';
import { ExcedenteComponent } from './../modules/contratos/automaticos/proporcionales/excedente/excedente.component';
import { CuotaAparteDetalleComponent } from './../modules/contratos/automaticos/proporcionales/cuota-aparte-detalle/cuota-aparte-detalle.component';
import { ExcedenteDetalleComponent } from './../modules/contratos/automaticos/proporcionales/excedente-detalle/excedente-detalle.component';
import { CatastroficoXlComponent } from './../modules/contratos/automaticos/noProporcionales/catastrofico-xl/catastrofico-xl.component';
import { CatastroficoXlDetalleComponent } from './../modules/contratos/automaticos/noProporcionales/catastrofico-xl-detalle/catastrofico-xl-detalle.component';
import { OperativoWxlComponent } from './../modules/contratos/automaticos/noProporcionales/operativo-wxl/operativo-wxl.component';
import { OperativoWxlDetalleComponent } from './../modules/contratos/automaticos/noProporcionales/operativo-wxl-detalle/operativo-wxl-detalle.component';
import { StopLossComponent } from './../modules/contratos/automaticos/noProporcionales/stop-loss/stop-loss.component';
import { StopLossDetalleComponent } from './../modules/contratos/automaticos/noProporcionales/stop-loss-detalle/stop-loss-detalle.component';
import { FacultativoObligatorioComponent } from './../modules/contratos/facultativos/proporcionales/facultativo-obligatorio/facultativo-obligatorio.component';
import { FacultativoObligatiorioDetalleComponent } from './../modules/contratos/facultativos/proporcionales/facultativo-obligatiorio-detalle/facultativo-obligatiorio-detalle.component';
import { FacultativoPComponent } from './../modules/contratos/facultativos/proporcionales/facultativo-p/facultativo-p.component';
import { FacultativoPdetalleComponent } from './../modules/contratos/facultativos/proporcionales/facultativo-pdetalle/facultativo-pdetalle.component';
import { FacultativoNpComponent } from './../modules/contratos/facultativos/noProporcionales/facultativo-np/facultativo-np.component';
import { FacultativoNpDetalleComponent } from './../modules/contratos/facultativos/noProporcionales/facultativo-np-detalle/facultativo-np-detalle.component';
import { AutomaticosProporcionalesListComponent } from '../modules/contratos/automaticos/proporcionales/automaticos-proporcionales-list/automaticos-proporcionales-list.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          {
            path: 'dashboard1',
            component: AdminDashboard1Component
          },
         
          {
            path: 'companiasreaseguradoras',
            component: CompaniasReaseguradorasListComponent
          },
          {
            path: 'companiasreaseguradoras/list',
            component: CompaniasReaseguradorasListComponent
          },
          {
            path: 'companiasreaseguradoras/corredor/registrar',
            component: RegistrarCorredorComponent
          },
          {
            path: 'companiasreaseguradoras/aseguradoras/registrar/:type',
            component: AseguradorasComponent
          },

          {
            path: 'companiasreaseguradoras/aseguradoras/list',
            component: ListAseguradorasComponent
          },
          {
            path: 'companiasreaseguradoras/reasegurador/registrar',
            component: RegistrarReaseguradorComponent
          },
        
          {
            path: 'contratos',
            component: ContratosListComponent
          },

     
          {
            path: 'contratos/list',
            component: ContratosListComponent
          },
          
          {
            path: 'contratos/new',
            component: ContratosNewComponent
          },
          
          {
            path: 'reasegurospolizas',
            component: PolizasReasegurosListComponent
          },
          {
            path: 'reasegurospolizas/list',
            component: PolizasReasegurosListComponent
          },
          {
            path: 'companiasreaseguradoras/reacoex/upload',
            component: ReacoexUploadComponent
          },
          
          {
            path: 'companiasreaseguradoras/aseguradoras/upload',
            component: AseguradorasUploadComponent
          },
          {
            path: 'contratos/automaticos/list',
            component: AutomaticosListComponent
          },

          {
            path: 'contratos/automaticos/proporcionales/list',
            component: AutomaticosProporcionalesListComponent
          },

        
          {
            path: 'contratos/automaticos/proporcionales/cuota-aparte',
            component: CuotaAparteComponent
          },
          {
            path: 'contratos/automaticos/proporcionales/cuota-aparte/detalle',
            component: CuotaAparteDetalleComponent
          },

         
          {
            path: 'contratos/automaticos/proporcionales/excedente',
            component: ExcedenteComponent
          },
          {
            path: 'contratos/automaticos/proporcionales/excedente/detalle',
            component: ExcedenteDetalleComponent
          },
          {
            path: 'contratos/automaticos/noproporcionales/catastroficoxl',
            component: CatastroficoXlComponent
          },
          {
            path: 'contratos/automaticos/noproporcionales/catastroficoxl/detalle',
            component: CatastroficoXlDetalleComponent
          },
          {
            path: 'contratos/automaticos/noproporcionales/operativowxl',
            component: OperativoWxlComponent
          },
          {
            path: 'contratos/automaticos/noproporcionales/operativowxl/detalle',
            component: OperativoWxlDetalleComponent
          },
          {
            path: 'contratos/automaticos/noproporcionales/stoploss',
            component: StopLossComponent
          },
          {
            path: 'contratos/automaticos/noproporcionales/stoploss/detalle',
            component: StopLossDetalleComponent
          },
       
         
          {
            path: 'contratos/facultativos/list',
            component: FacultativosListComponent
          },

       
          {
            path: 'contratos/facultativos/proporcionales/facultativo/obligatorio',
            component: FacultativoObligatorioComponent
          },
          {
            path: 'contratos/facultativos/proporcionales/facultativo/obligatorio/detalle',
            component: FacultativoObligatiorioDetalleComponent
          },
          {
            path: 'contratos/facultativos/proporcionales/facultativo',
            component: FacultativoPComponent
          },
          {
            path: 'contratos/facultativos/proporcionales/facultativo/detalle',
            component: FacultativoPdetalleComponent
          },
          {
            path: 'contratos/facultativos/noproporcionales/facultativo',
            component: FacultativoNpComponent
          },
          {
            path: 'contratos/facultativos/noproporcionales/facultativo/detalle',
            component: FacultativoNpDetalleComponent
          }    
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
