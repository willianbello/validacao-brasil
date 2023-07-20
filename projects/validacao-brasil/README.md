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
      celular: ['', ValidacaoBrasil.celular(true, false)]
});

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
será enviado o objeto: { nove: true } quando ele não começar com 9.

FIQUE ATENTO A VARIÁVEL "TEM DDD" E "DDD3DIGITOS" TANTO NO FORMS QUANTO NO ELEMENTO HTML SE FOR UTILIZAR MASCARA.

No caso dos telefones há mais configurações disponíveis como:
tem ddd?
  segundo parâmetro (boolean)
o ddd tem 3 dígitos?
  terceiro parâmetro (boolean)
  
celular: ['', ValidacaoBrasil.celular(true, true, true)]

![image](https://github.com/willianbello/validacao-brasil/assets/38074391/319825b4-bc9d-47a9-bf7f-219a3a9abacf)

![image](https://github.com/willianbello/validacao-brasil/assets/38074391/c1b407e7-98a9-4e07-9c4d-2d34c0e49e6c)

![image](https://github.com/willianbello/validacao-brasil/assets/38074391/440e9490-f790-42d4-a2ee-520df9a2d048)

![image](https://github.com/willianbello/validacao-brasil/assets/38074391/6726d1fc-dad5-4f7a-a367-08d5bfb0fdf1)

