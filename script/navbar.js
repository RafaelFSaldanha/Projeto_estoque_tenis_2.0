document.addEventListener('DOMContentLoaded', () => {
    fetch('../components/nav/nav.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            const page = window.location.pathname.split('/').pop();

            if (page === 'index.html') {
                document.getElementById('navbar-landingpage').classList.remove('d-none');
            }  
            else if (page === 'formulario.html') {
                document.getElementById('navbar-formulario').classList.remove('d-none');
            }
            else if (page === 'cadastros.html') {
                document.getElementById('navbar-cadastros').classList.remove('d-none');
            }
        })
});