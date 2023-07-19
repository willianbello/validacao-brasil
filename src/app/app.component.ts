import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidacaoBrasil } from 'projects/validacao-brasil/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brasil-validation';

  form: FormGroup = new FormGroup([]);

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formLoad();
  }

  formLoad() {
    this.form = this.fb.group({
      cpf: ['', ValidacaoBrasil.cpf()],
      cnpj: ['', ValidacaoBrasil.cnpj()],
      cep: ['', ValidacaoBrasil.cep()],
      telefone: ['', ValidacaoBrasil.telefone(false)],
      celular: ['', ValidacaoBrasil.celular(true, false)]
    })
  }

  onChange(control: any) {
    
  }
}
