fetch('./src/data/services.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar os dados.');
    }
    return response.json();
  })
  .then(data => {
    const cardsContainer = document.getElementById('cardsContainer');
    data.forEach(item => {
      const cardHTML = `
        <div class="card " style="width: 18rem;">
          <div class="card-body " >
            <h5 class="card-title">${item.titulo}</h5>
            <p class="card-text"><strong>Descrição: </strong> ${item.descricao}</p>
            <p class="card-text"><strong>Público: </strong> ${item.publico}</p>
            <p class="card-text"><strong>Setor responsável: </strong> ${item.setorResponsavel}</p>
            <hr>
            <p class="card-text"><strong>Telefone: </strong> ${item.telefone}</p>
            <p class="card-text"><strong>E-mail: </strong> ${item.email}</p>
          </div>
        </div>
      `;
      cardsContainer.innerHTML += cardHTML;
    });
  })
  .catch(error => {
    console.error('Erro ao carregar os dados:', error.message);
  });
