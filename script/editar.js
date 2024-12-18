export function editarCadastro(id) {
    const cadastros = JSON.parse(localStorage.getItem('cadastros'));

    const cadastro = cadastros.find(tenis => tenis.id === id);

    document.getElementById('editar-marca').value = cadastro.marca || '';
    document.getElementById('editar-modelo').value = cadastro.modelo || '';
    document.getElementById('editar-cor').value = cadastro.cor || '';
    document.getElementById('editar-tamanho').value = cadastro.tamanho || '';
    document.getElementById('editar-preco').value = cadastro.preco || '';
    document.getElementById('editar-estoque').value = cadastro.estoque || '';

    document.getElementById('modal-editar').setAttribute('editando', id);

    const modal = new bootstrap.Modal(document.getElementById('modal-editar'));
    modal.show();
}


export function salvarEdicao() {
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    const id = parseInt(document.getElementById('modal-editar').getAttribute('editando'));

    const index = cadastros.findIndex(tenis => tenis.id === id);

    if (id !== -1) {
        cadastros[index] = {
            id: id,
            marca: document.getElementById('editar-marca').value,
            modelo: document.getElementById('editar-modelo').value,
            cor: document.getElementById('editar-cor').value,
            tamanho: document.getElementById('editar-tamanho').value,
            preco: parseFloat(document.getElementById('editar-preco').value),
            estoque: parseInt(document.getElementById('editar-estoque').value, 10),
        };

        localStorage.setItem('cadastros', JSON.stringify(cadastros));

        carregarCadastros();

        const modal = bootstrap.Modal.getInstance(document.getElementById('modal-editar'));
        modal.hide();
    }
}