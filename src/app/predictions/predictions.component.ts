import { Component, Input } from '@angular/core';
import { Prediction } from 'app/models';

@Component({
	selector: 'app-predictions',
	templateUrl: './predictions.component.html',
	styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent {

	@Input('predictions') predictions: Prediction[];
}