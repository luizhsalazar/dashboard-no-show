import { Component } from '@angular/core';

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
	]
}