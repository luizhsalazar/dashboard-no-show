import { Component } from '@angular/core';
import { Prediction } from 'app/models';
import { FileUploadService } from 'app/services/file-upload.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	predictions: Prediction[] = []
	currentFileId: number;

	constructor(private fileUploadService: FileUploadService) {}

	fileUploadSuccess(fileUploadId: number) {
		this.currentFileId = fileUploadId;

		this.fileUploadService.getFile(this.currentFileId)
			.subscribe(predictions => {
				this.predictions = predictions;
			});
	}
}