const form=document.querySelector('form');
const question1=document.querySelector('.inputQuestion1');
const question2=document.querySelector('.inputQuestion2');
const question3=document.querySelector('.inputQuestion3');
const questionArea=document.querySelector('#txtArea');

 //Fonction de Paramétrage de message d'érreur.
const setErrorFeilds=(element, message)=>{
    const inputControl = element.parentElement;
    const errorDiplay = inputControl.querySelector('.error');
    errorDiplay.innerHTML=message;
  
  }
  //Fonction de Paramétrage de message de succès.
const setSuccessFeilds=element=>{
    const inputControl = element.parentElement;
    const errorDiplay = inputControl.querySelector('.error');
    errorDiplay.innerHTML='';
  }

  //Fonction de validation de formulaire.
const validateInputsFeilds=()=>{
    const question_value1=question1.value;
    const question_value2=question2.value;
    const question_value3=question3.value;
    const area_value=questionArea.value;
   // const questionArea_value=questionArea.value;
    if(question_value1===''){ 
    setErrorFeilds(question1, "*Veuillez saisir le nom du responsable ");
    }
    else{
       setSuccessFeilds(question1)
    }

    if(question_value2===''){ 
        setErrorFeilds(question2, "*Veuillez saisir le couriel");
    }
    else{
        setSuccessFeilds(question2)
    }
    if(question_value3===''){ 
        setErrorFeilds(question3, "*Veuillez saisir le numéro de téléphone");
    }
    else{
        setSuccessFeilds(question3);
    }
    if(area_value===''){ 
        setErrorFeilds(txtArea, "*Veuillez saisir le commentaire");
    }
    else{
        setSuccessFeilds(txtArea)
    }
}
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    validateInputsFeilds();
});