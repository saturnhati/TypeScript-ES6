"use strict";
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        let sconto = this.prezzoivainclusa * (this.saldo / 100);
        return sconto;
    }
    getacquistocapo() {
        let sconto = this.prezzoivainclusa * (this.saldo / 100);
        let prezzoTot = this.prezzoivainclusa - sconto;
        return prezzoTot;
    }
}
let promise = fetch("./assets/json/Abbigliamento.json").then((response) => response.json());
promise.then((data) => getCapi(data));
function getCapi(data) {
    let capi = [];
    data.forEach((element) => {
        let { id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo } = element;
        capi.push(new Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo));
    });
    displayCapi(capi);
}
function displayCapi(arr) {
    console.log(arr);
    let container = document.querySelector("#container");
    arr.forEach((prodotto) => {
        let card = document.createElement("div");
        card.classList.add("class");
        card.style.width = "200px";
        card.style.height = "400px";
        card.style.background = "lavender";
        card.innerHTML = ` 
    <h1>${prodotto.capo}</h1>
    <h2>${prodotto.collezione}</h2>
    <h3>Prezzo totale: ${prodotto.prezzoivainclusa}€</h3>  
    <h3> Sconto disponibile: ${prodotto.saldo}%</h3>
    <h3>Prezzo con sconto applicato: ${Math.round(prodotto.getacquistocapo())}€</h3> 
    `;
        container === null || container === void 0 ? void 0 : container.appendChild(card);
    });
}
