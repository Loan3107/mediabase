import { Component, Input } from "@angular/core";
import { MovieDetails } from "src/common/schemas/movie-details.schema";

@Component({
    selector: 'app-movie-details',
    styleUrls: ['./movie-details.component.scss'],
    templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent {
    @Input('details')
    public details!: MovieDetails;
}