const url = 'https://shoes-collections.p.rapidapi.com/shoes';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '95bb6d927emshe72e4702c36d87cp121dc7jsn2ed5a1ed12a2',
        'x-rapidapi-host': 'shoes-collections.p.rapidapi.com'
    }
};

async function fetchAndLoadCarousel() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            const carouselInner = document.querySelector('.carousel-inner');
            carouselInner.innerHTML = '';

            data.forEach((item, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
                carouselItem.setAttribute('data-bs-interval', '3000');
                carouselItem.innerHTML = `
                    <img src="${item.image}" class="d-block w-100" alt="${item.name}">
                `;
                carouselInner.appendChild(carouselItem);
            });
        } else {
            console.error('Nenhum dado retornado da API ou estrutura inesperada.');
        }
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

fetchAndLoadCarousel();
