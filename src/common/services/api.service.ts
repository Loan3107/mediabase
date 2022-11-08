import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { isNil } from "lodash";
import { Observable } from "rxjs";
import { MovieDetails } from "../schemas/movie-details.schema";
import { MoviesLists } from "../schemas/movies-lists.schema";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public httpOptions!: { headers: HttpHeaders };

    private readonly API_BASE_URL = 'https://api.themoviedb.org/3';

    constructor(
        private readonly http: HttpClient,
    ) {
        const token = localStorage.getItem('access_token');
        
        if (!isNil(token)) {
            this.httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
            };
        }
    }

    public getDetail(id: number): Observable<MovieDetails> {
        return this.http.get<MovieDetails>(`${this.API_BASE_URL}/movie/${id}?api_key=252a0ebfb24df02cf6c8bf7abaa7e8f0&append_to_response=credits&language=fr`, this.httpOptions);
    }

    public getNowPlaying(): Observable<MoviesLists> {
        return this.http.get<MoviesLists>(`${this.API_BASE_URL}/movie/now_playing?api_key=252a0ebfb24df02cf6c8bf7abaa7e8f0&language=fr`, this.httpOptions);
    }

    public getPopular(): Observable<MoviesLists> {
        return this.http.get<MoviesLists>(`${this.API_BASE_URL}/movie/popular?api_key=252a0ebfb24df02cf6c8bf7abaa7e8f0&language=fr`, this.httpOptions);
    }
}