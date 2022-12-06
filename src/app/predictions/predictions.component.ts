import { Component, Input } from '@angular/core';
import { FileUploadService } from 'app/services/file-upload.service';

export interface Paciente {
	nome: string,
	cidade: string,
	idade: number,
	especialidade: string,
	previsao: boolean
}

@Component({
	selector: 'app-predictions',
	templateUrl: './predictions.component.html',
	styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent {

	@Input('currentFileId') currentFileId: number;

	pacientes: Paciente[] = [
		{
			nome: 'João da Silva',
			cidade: 'Itajaí',
			idade: 25,
			especialidade: 'Fonoaudiologia',
			previsao: false
		},
		{
			nome: 'Pedro de Paula',
			cidade: 'Balneário Camboriu',
			idade: 49,
			especialidade: 'Terapia Ocupacional',
			previsao: true
		},
	];

	constructor(private fileUploadService: FileUploadService) {

	}

	getFile() {
		this.fileUploadService.getFile(this.currentFileId)
			.subscribe(result => {
				console.log(result);
			})
	}
}