import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

import { PanelAdminComponent } from './componentes/admin/panel-admin/panel-admin.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegistroComponent } from './componentes/user/registro/registro.component';

import { HomeComponent } from './componentes/home/home.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import { MapaComponent } from './componentes/mapa/mapa.component';



export const routes: Routes = [
    { path: 'admin', component: PanelAdminComponent, canActivate: [authGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'home', component: HomeComponent},
    { path: 'calendario', component: CalendarioComponent},
    { path: 'graficos', component: GraficosComponent},
    { path: 'mapa', component: MapaComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

