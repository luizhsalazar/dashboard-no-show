import { Component } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	currentFileId: number;

	fileUploadSuccess(fileUploadId: number) {
		this.currentFileId = fileUploadId;
		console.log(fileUploadId);
	}
}