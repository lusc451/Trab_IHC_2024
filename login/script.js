

document.addEventListener('submit', e => {
    const inputT = document.getElementById('user').value;
    const inputP = document.getElementById('pass').value;
    const btn = document.getElementById('bt')
    
    e.preventDefault();

    valida(inputT, inputP);

});

function valida(user, pass) {
    if(user === "ADM" && pass === "123") {
        alert("ADM logado")
        window.location.href = '../adm/home.html';
        return
    }

    if(user === "Cliente" && pass === "123") {
        alert("Cliente logado")
        window.location.href = '../cli/home.html';
        return
    }

    if(user === "Vet" && pass === "123") {
        alert("Veterinário logado")
        window.location.href = '../vet/home.html';
        return
    }

    if(user === "Secretaria" && pass === "123") {
        alert("Veterinário logado")
        window.location.href = '../sec/home.html';
        return
    }

    alert("Usuários ou Senhas incorretas")
    return

}