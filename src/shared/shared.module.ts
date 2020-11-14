import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from './modules/shared-components.module';
import { SharedDirectivesModule } from './modules/shared-directives.module';
import { SharedPipesModule } from './modules/shared-pipes.module';
import { SharedServicesModule } from './modules/shared-services.module';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        SharedPipesModule,
        SharedComponentsModule,
        SharedDirectivesModule,
        SharedServicesModule
    ]
})
export class SharedModule {}
