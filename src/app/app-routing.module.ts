import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'feature',
        loadChildren: () =>
            import('./feature/feature.module').then(
                (module) => module.FeatureModule
            )
    },
    {
        path: '',
        redirectTo: 'feature',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
