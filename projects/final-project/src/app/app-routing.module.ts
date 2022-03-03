import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardRoutes } from "./dashboard";
import { CalculadoraRoutes } from "./calculator";
import { ConverterRoutes } from "./converter";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConverterRoutes
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}