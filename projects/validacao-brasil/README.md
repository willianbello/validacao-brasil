# BrasilValidation

Contem pipes / directives / validators / Angular

Suporte para o Angular 15 + (Ainda não testado em outras versões mais antigas)

Este projeto foi testado somente com Angular 15 puro, mas não tem nenhuma dependência fora do próprio framework,
todo o código foi criado com Typescript e Javascript puro para evitar outras dependências.

Atualmente tem as seguintes opções:

Validações:
CPF
CNPJ
CEP
Telefone
Celular

Pipes:
CPF
CNPJ
CEP
Telefone
Celular

Diretivas:
CPF
CNPJ
CEP
Telefone
Celular

Sobre Validações:

    this.form = this.fb.group({
          cpf: ['', ValidacaoBrasil.cpf()],
          cnpj: ['', ValidacaoBrasil.cnpj()],
          cep: ['', ValidacaoBrasil.cep()],
          telefone: ['', ValidacaoBrasil.telefone(false)],
          celular: ['', ValidacaoBrasil.celular(true, true, true)]
    })

o primeiro parâmetro de todas as validações é se ele é "required" ou não.
se for "required" e houver erro ira retorna um objeto { required: true }.

para as outras validações será enviado um objeto com o nome da validação.
Exemplo:

cpf => { cpf: true }
cnpj => { cnpj: true }
cep => { cep: true }
telefone => { telefone: true }
celular => { celular: true }

OBS: para o celular há uma validação adicional que é a verificação de começar com 9
será enviado o objeto: *{ nove: true }* quando ele não começar com 9.

***FIQUE ATENTO A VARIÁVEL "TEM DDD" E "DDD3DIGITOS" TANTO NO FORMS QUANTO NO ELEMENTO HTML SE FOR UTILIZAR MASCARA.***

No caso dos telefones há mais configurações disponíveis como:
tem ddd?
  segundo parâmetro (boolean)
o ddd tem 3 dígitos?
  terceiro parâmetro (boolean)

    celular: ['', ValidacaoBrasil.celular(true, true, true)]

<div>
    <div>
      cpf: 48103288055 | {{ '48103288055' | cpf }}
      cnpj: 76601670000125 | {{ '76601670000125' | cnpj }}
      cep: 77064202 | {{ '77064202' | cep }}
    </div>
    <div>
      telefone: 5131234567 | {{ '5131234567' | telefone }}
      telefone: 05131234567 | {{ '05131234567' | telefone:true:true }}
      telefone: 31234567 | {{ '31234567' | telefone:false }}
    </div>
    <div>
      celular: 51991234567 | {{ '51991234567' | celular }}
      celular: 051991234567 | {{ '051991234567' | celular:true:true }}
      celular: 991234567 | {{ '991234567' | celular:false }}
    </div>
  </div>
  
      <div>
          <p>Celular</p>
          <input type="text" formControlName="celular" 
     placeholder="celular" bCelular [ddd]="false" [ddd3Digitos]="true">
          
          <span *ngIf="form.get('celular')?.hasError('celular')">celular inválido</span><br>
          <span *ngIf="form.get('celular')?.hasError('required')">celular requerido</span>
          <span *ngIf="form.get('celular')?.hasError('nove')">celular precisa começar com 9</span>
        
          <p>Telefone</p>
          <input type="text" formControlName="telefone" placeholder="telefone" bTelefone>
          
          <span *ngIf="form.get('telefone')?.hasError('telefone')">telefone inválido</span><br>
          <span *ngIf="form.get('telefone')?.hasError('required')">telefone requerido</span>
        </div>
    
        <div>
          <p>CEP</p>
          <input type="text" formControlName="cep" placeholder="cep" id="cep" bCep>
          <br><br>
          <span *ngIf="form.get('cep')?.hasError('cep')">cep inválido</span><br>
          <span *ngIf="form.get('cep')?.hasError('required')">cep requerido</span>
        </div>
