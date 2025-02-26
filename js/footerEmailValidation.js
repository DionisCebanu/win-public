
const btnSubmit = document.getElementById('submitBouton');
btnSubmit.addEventListener('click', function (e) {
    let emailInput = document.getElementById('email');
    let erreurMsg = document.getElementById('error');

    if(emailInput.value === ""){
        erreurMsg.innerHTML = "*Veuillez saisir votre Email";
    }
    else{
        erreurMsg.innerHTML = "";
    }
})

