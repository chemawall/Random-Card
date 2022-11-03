function myFunction(){  

    let arrayNumber = ["2","3","4","5","6","7","8","9","10","J","Q","K","As"];
    let arrayGender = ["bi-suit-diamond-fill", "bi-suit-club-fill", "bi-heart-fill","bi-suit-spade-fill"];
    
    let number = Math.random((Math.floor)*arrayNumber);
    let gender = Math.random((Math.floor)*arrayGender); 
    
    let elem = document.querySelector("#icono-izq");
    let aux = document.createElement("i");
    aux.classList.add(gender);
    aux.style.fontSize="50px";
    elem.appendChild(aux);
  
    let divcentral = document.querySelector("#numero-central");
    let numerocarta = document.createElement("p");
    numerocarta.innerHTML=(number);
    numerocarta.style.fontSize="200px";
    numerocarta.style.textAlign="center";
    divcentral.appendChild(numerocarta);

    let elem2 = document.querySelector("#icono-der");
    let aux2 = document.createElement("i");
    aux2.classList.add(gender);
    aux2.style.fontSize="50px";
    elem2.appendChild(aux2);

    if (gender == "bi-suit-diamond-fill" || gender == "bi-heart-fill" ) {
        aux.style.color="red";
    };
};
