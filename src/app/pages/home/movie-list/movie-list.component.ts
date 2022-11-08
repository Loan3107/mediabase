import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { MoviesLists } from "src/common/schemas/movies-lists.schema";
import { Movies } from "src/common/schemas/movies.schema";
import { ApiService } from "src/common/services/api.service";

@Component({
    selector: 'app-movie-list',
    styleUrls: ['./movie-list.component.scss'],
    templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
    @Output()
    private readonly onClickEvent = new EventEmitter<number>();

    public movieList: Movies[] = [];

    private getMovieListSubscription!: Subscription;

    constructor(private readonly apiService: ApiService) {}

    public ngOnInit(): void {
        this.getMovieListSubscription = this.apiService.getPopular().subscribe(
            (data: MoviesLists) => {
                data.results.forEach((movie: Movies) => {
                    this.movieList.push(movie);
                });
            },
            () => {
                this.getMovieListSubscription.unsubscribe();
            }
        );
    }

    public onClick(id: number): void {
        this.onClickEvent.emit(id);
    }
}