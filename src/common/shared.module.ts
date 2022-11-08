import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        NzAlertModule,
        NzCardModule,
        NzGridModule,
        NzLayoutModule,
        NzModalModule,
        NzSpinModule,
    ]
})
export class SharedModule {}