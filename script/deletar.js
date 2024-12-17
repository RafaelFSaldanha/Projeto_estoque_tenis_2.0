export function deletarCadastro(id) {
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    const cadastrosAtualizados = cadastros.filter(tenis => tenis && tenis.id !== id);

    localStorage.setItem('cadastros', JSON.stringify(cadastrosAtualizados));

    carregarCadastros();
}