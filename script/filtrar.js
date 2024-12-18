export let filtros = {};

export function adicionarFiltro(campo) {
    if (filtros[campo]) {
        delete filtros[campo];
    } else {
        filtros[campo] = true;
    }

    aplicarFiltros();
}


export function aplicarFiltros() {
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    const listaCadastros = document.getElementById('lista-cadastros');

    let listaFiltrada = [...cadastros];

    Object.keys(filtros).forEach(campo => {
        listaFiltrada.sort((a, b) => {
            if (campo === 'preco' || campo === 'estoque') {
                return parseFloat(a[campo]) - parseFloat(b[campo]);
            }

            return a[campo].toString().localeCompare(b[campo].toString());
        });
    });

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