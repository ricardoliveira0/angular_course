import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardRoutes } from "./dashboard";
import { CalculadoraRoutes } from "./calculator";
import { ConverterRoutes } from "./converter";
import { TaskRoutes } from "./tasks";
import { TicTacToeRoutes } from "./tic-tac-toe";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConverterRoutes,
    ...TaskRoutes,
    ...TicTacToeRoutes
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