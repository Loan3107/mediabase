import { Cast } from "./cast.schema";
import { Genre } from "./genre.schema";

export interface MovieDetails {
    overview: string;
    genres: Genre[];
    credits: Cast;
}