// Defina a URL do endpoint com o CEP formatado
const endpoint = "https://cep.awesomeapi.com.br/json/35300125"; 

// Faz uma requisição fetch para o endpoint da API
fetch(endpoint)
  .then(response => {
    // Verifica se a resposta da requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na conexão com response: ' + response.statusText);
    }
    // Converte a resposta para JSON e a retorna como uma Promise
    return response.json();
  })
  .then(dados => {
    // Verifica se as propriedades existem antes de acessá-las
    console.log(`Nome da cidade: ${dados.city || 'Informação indisponível'}`);
    console.log(`CEP: ${dados.cep || 'Informação indisponível'}`);
    console.log(`Rua: ${dados.address || 'Informação indisponível'}`);
    console.log(`Estado: ${dados.state || 'Informação indisponível'}`);
    console.log(`Bairro: ${dados.district || 'Informação indisponível'}`);
    console.log(`DDD: ${dados.ddd || 'Informação indisponível'}`);
  })
  .catch(error => {
    // Captura e trata erros ocorridos durante a requisição fetch ou processamento dos dados
    console.error('Erro durante a requisição fetch:', error);
    // Você pode adicionar mais ações aqui, se necessário, para lidar com o erro
  });
