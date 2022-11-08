import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Movies } from "src/common/schemas/movies.schema";

@Component({
    selector: 'app-card',
    styleUrls: ['./card.component.scss'],
    templateUrl: './card.component.html',
})
export class CardComponent {
    @Input('movie')
    public movie!: Movies;

    @Output()
    public onClickEvent = new EventEmitter<number>();

    public onClick(id: number): void {
        this.onClickEvent.emit(id);
    }
}