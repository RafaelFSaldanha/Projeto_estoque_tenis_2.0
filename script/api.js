const url = 'https://mocki.io/v1/6509e41a-f733-4e35-81fc-975b22a5d469';
const options = {
    method: 'GET'
};

async function carregarCarrossel() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log('Resposta da API:', data);

        if (Array.isArray(data.images) && data.images.length > 0) {
            const carouselInner = document.querySelector('.carousel-inner');
            carouselInner.innerHTML = '';

            data.images.forEach((image, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
                carouselItem.setAttribute('data-bs-interval', '3000');

                carouselItem.innerHTML = `
                    <img src="${image}" alt="Imagem do produto ${index + 1}">
                `;
                carouselInner.appendChild(carouselItem);
            });
        } else {
            console.error('Nenhum dado de imagens encontrado ou estrutura inesperada.');
        }
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

carregarCarrossel();
