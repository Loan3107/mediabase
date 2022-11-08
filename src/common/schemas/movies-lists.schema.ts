import { Movies } from "src/common/schemas/movies.schema";

export interface MoviesLists {
    page: number;
    results: Movies[];
}