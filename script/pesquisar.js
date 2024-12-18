export function pesquisar(event) {
    event.preventDefault();

    const query = document.getElementById('barra-pesquisa').value.toLowerCase();
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    const listaFiltrada = cadastros.filter(tenis => 
        tenis.marca.toLowerCase().includes(query) ||
        tenis.modelo.toLowerCase().includes(query) ||
        tenis.cor.toLowerCase().includes(query) ||
        tenis.tamanho.toLowerCase().includes(query) ||
        tenis.preco.toString().includes(query) ||
        tenis.estoque.toString().includes(query)
    );

    const listaCadastros = document.getElementById('lista-cadastros');
    listaCadastros.innerHTML = '';

    listaFiltrada.forEach(tenis => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${tenis.marca}</td>
            <td>${tenis.modelo}</td>
            <td>${tenis.cor}</td>
            <td>${tenis.tamanho}</td>
            <td>R$ ${parseFloat(tenis.preco).toFixed(2)}</td>
            <td>${tenis.estoque}</td>
            <td>
                <button onClick="editarCadastro(${tenis.id})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick="deletarCadastro(${tenis.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;

        listaCadastros.appendChild(row);
    });
}