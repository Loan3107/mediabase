import { NgModule } from "@angular/core";
import { CardModule } from "src/common/components/card/card.module";
import { SharedModule } from "src/common/shared.module";
import { HomeComponent } from "./home/home.component";
import { MovieDetailsComponent } from "./home/movie-details/movie-details.component";
import { MovieListComponent } from "./home/movie-list/movie-list.component";
import { NowPlayingComponent } from "./home/now-playing/now-playing.component";
import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
    declarations: [HomeComponent, MovieDetailsComponent, MovieListComponent, NowPlayingComponent],
    imports: [CardModule, PagesRoutingModule, SharedModule]
})
export class PagesModule {}