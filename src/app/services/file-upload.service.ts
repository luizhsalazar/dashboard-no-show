import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FileUploadService {
	private baseUrl = 'http://localhost:8000';

	constructor(private http: HttpClient) { }

	upload(file: File): Observable<HttpEvent<any>> {
		const formData: FormData = new FormData();

		formData.append('file', file);

		const req = new HttpRequest('POST', `${this.baseUrl}/files`, formData, {
			reportProgress: true,
			responseType: 'json'
		});

		return this.http.request(req);
	}

	getFile(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/files/${id}/predict`);
	}
}