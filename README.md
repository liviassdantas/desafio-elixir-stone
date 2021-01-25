
# Stone's Challenger

  

## Tecnologias utilizadas:

<p>NodeJS - version 10.19.0</p>

<p>NestJS - version 7.5.4</p>

  

## Como inicializar o serviço:

<p><b>Verificar se seu computador possui o Node instalado corretamente.</b></p>

<p>Após isso, rodar o comando <b>npm install</b></p>

<p>Para inicializar o serviço, digitar o comando <b>npm run start</b> ou <b>nest start</b></p>

  

### Testando o serviço

#### Rota da API: localhost:3001/shopping-list

#### Tipo da API: Post

#### Modelo de JSON a ser enviado no corpo da requisição:

#### {
		"purchase": [
		{
			"item": "Farinha",
			"itemQuantity": 2,
			"unitaryPrice": 599,
			"unityOfMeasure": "KG"
			},
		{
			"item": "Ovo",
			"itemQuantity": 3,
			"unitaryPrice": 1199,
			"unityOfMeasure": "cartela"
		}
	],
		"emails": [
		"ciclano@gmail.com",
		"joao@gmail.com",
		"fulano@gmail.com"
		]
	}

### Modelo de resposta da requisição
###
		{
			"ciclano@gmail.com": "15.98",
			"joao@gmail.com": "15.98",
			"fulano@gmail.com": "15.99"
		} 
