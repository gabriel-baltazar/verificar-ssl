# Verificador de SSL!

A aplicação foi criada como uma solução para uma tarefa que era executada manualmente, que é a verificação da validade do SSL dos sites.

- Node.JS
- Puppeteer 

Para rodar a aplicação instale todas as dependências com o comando:

		npm install

Alimente o data.json com os sites que deseja verificar o ssl:
		exemplo:

		{
			"Sites":[{
					"url":"example.com.br",
					}
					{
					"url":"example2.com.br",
					},
			]
		}
		
O retorno será dado no data.txt !
