import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedPipesModule } from './shared-pipes.module';
import { SharedComponentsModule } from './shared-components.module';
import { SharedDirectivesModule } from './shared-directives.module';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        SharedPipesModule,
        SharedComponentsModule,
        SharedDirectivesModule
    ]
})
export class SharedModule {}
