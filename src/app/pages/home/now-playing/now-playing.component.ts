import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { MoviesLists } from "src/common/schemas/movies-lists.schema";
import { Movies } from "src/common/schemas/movies.schema";
import { ApiService } from "src/common/services/api.service";

@Component({
    selector: 'app-now-playing',
    styleUrls: ['./now-playing.component.scss'],
    templateUrl: './now-playing.component.html',
})
export class NowPlayingComponent implements OnInit {
    @Output()
    private readonly onClickEvent = new EventEmitter<number>();

    public nowPlaying: Movies[] = [];

    private getMoviesNowPlayingSubscription!: Subscription;

    constructor(private readonly apiService: ApiService) {}

    public ngOnInit(): void {
        this.getMoviesNowPlayingSubscription = this.apiService.getNowPlaying().subscribe(
            (data: MoviesLists) => {
                data.results.forEach((movie: Movies) => {
                    this.nowPlaying.push(movie);
                });
            },
            () => {
                this.getMoviesNowPlayingSubscription.unsubscribe();
            }
        );
    }

    public onClick(id: number): void {
        this.onClickEvent.emit(id);
    }
}