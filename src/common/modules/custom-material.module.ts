import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';

const matModules = [
    MatSliderModule
];

@NgModule({
    providers: [...matModules],
    exports: [...matModules]
})
export class CustomMaterialModule { }