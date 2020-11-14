import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature-component/feature.component';

@NgModule({
    declarations: [FeatureComponent],
    imports: [SharedModule, FeatureRoutingModule]
})
export class FeatureModule {}
