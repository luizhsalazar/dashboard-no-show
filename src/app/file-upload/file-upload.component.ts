import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileUploadService } from 'app/services/file-upload.service';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

	selectedFiles?: FileList;
	currentFile?: File;
	progress = 0;
	message = '';

	constructor(private uploadService: FileUploadService) { }

	selectFile(event: any): void {
		this.selectedFiles = event.target.files;
	}

	upload(): void {
		this.progress = 0;

		if (this.selectedFiles) {
			const file: File | null = this.selectedFiles.item(0);

			if (file) {
				this.currentFile = file;

				this.uploadService.upload(this.currentFile).subscribe({
					next: (event: any) => {
						if (event.type === HttpEventType.UploadProgress) {
							this.progress = Math.round(100 * event.loaded / event.total);
						} else if (event instanceof HttpResponse) {
							this.message = event.body.message;
						}
					},
					error: (err: any) => {
						console.log(err);
						this.progress = 0;

						if (err.error && err.error.message) {
							this.message = err.error.message;
						} else {
							this.message = 'Could not upload the file!';
						}

						this.currentFile = undefined;
					}
				});
			}

			this.selectedFiles = undefined;
		}
	}
}