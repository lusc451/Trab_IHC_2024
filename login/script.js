

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
        return
    }

    if(user === "Cliente" && pass === "123") {
        alert("Cliente logado")
        return
    }

    if(user === "Vet" && pass === "123") {
        alert("Veterinário logado")
        return
    }

    if(user === "Secretaria" && pass === "123") {
        alert("Veterinário logado")
        return
    }

    alert("Usuários ou Senhas incorretas")
    return

}