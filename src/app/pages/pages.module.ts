import { NgModule } from "@angular/core";
import { SharedModule } from "src/common/shared.module";
import { HomeComponent } from "./home/home.component";
import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
    declarations: [HomeComponent],
    imports: [PagesRoutingModule, SharedModule]
})
export class PagesModule {}