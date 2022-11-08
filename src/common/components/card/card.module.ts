import { NgModule } from "@angular/core";
import { SharedModule } from "src/common/shared.module";
import { CardComponent } from "./card.component";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [SharedModule]
})
export class CardModule {}