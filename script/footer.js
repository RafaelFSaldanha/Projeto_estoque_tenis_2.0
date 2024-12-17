document.addEventListener('DOMContentLoaded', () => {
    fetch('../components/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;  // Insere o conteúdo dentro da div com id "footer"
        })
});
