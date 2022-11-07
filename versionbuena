 function myFunction(){  

    let arrayNumber = ["2","3","4","5","6","7","8","9","10","J","Q","K","As"];
    let arrayGender = ["bi-suit-diamond-fill", "bi-suit-club-fill", "bi-heart-fill","bi-suit-spade-fill"];

    let randomNumber = (long) => {
        return Math.floor(Math.random()*long);
    };

    let number = arrayNumber[randomNumber(arrayNumber.length)];
    let gender = arrayGender[randomNumber(arrayGender.length)];

    let constructionCard = (identificador,tag,elementoVariable,tamaño) => {
        let elem = document.querySelector(identificador);
        let aux = document.createElement(tag);
            if (identificador == "#numero-central"){
                 aux.innerHTML=elementoVariable;
                aux.style.textAlign="center";
                  } else {
                aux.classList.add(elementoVariable);
             }
        aux.style.fontSize=tamaño;
            if (gender == "bi-suit-diamond-fill" || gender == "bi-heart-fill" ) {
            aux.style.color="red";
        }
        elem.appendChild(aux);
    };
    
    constructionCard("#icono-izq","i",gender,"50px");
    constructionCard("#numero-central","p",number,"200px");
    constructionCard("#icono-der","i",gender,"50px");

    
    

};
    


   

  

    
   

