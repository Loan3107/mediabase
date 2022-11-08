import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { MovieDetails } from "src/common/schemas/movie-details.schema";
import { ApiService } from "src/common/services/api.service";

@Component({
    selector: 'app-home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    public isOpenedModal = false;
    public details!: MovieDetails;

    private getMovieDetailSubscription!: Subscription;

    constructor(private readonly apiService: ApiService) {}

    public cancelModal(): void {
        this.isOpenedModal = false;
    }

    public openModal(id: number): void {
        this.getMovieDetailSubscription = this.apiService.getDetail(id).subscribe(
            (result: MovieDetails) => {
                this.details = result;
            },
            () => {
                this.getMovieDetailSubscription.unsubscribe();
            }
        );
        this.isOpenedModal = true;
    }
}