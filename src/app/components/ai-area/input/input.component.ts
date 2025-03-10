import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailsModel } from '../../../models/details.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-input',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css'
})
export class InputComponent {
    public details = new DetailsModel();
    @Output()
    public selected = new EventEmitter<DetailsModel>();

    public async send(){
        this.selected.emit(this.details);
    }
}
