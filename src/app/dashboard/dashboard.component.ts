import { Component } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	currentFile: File;

	fileUploadSuccess(file: File) {
		this.currentFile = file;
		console.log(file);
	}
}