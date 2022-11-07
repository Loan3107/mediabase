import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        NzLayoutModule
    ]
})
export class SharedModule {}