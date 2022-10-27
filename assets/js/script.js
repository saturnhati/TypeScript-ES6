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
    getacquistocapo(sconto) {
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
    console.log(capi);
    displayCapi(capi);
}
function displayCapi(arr) {
    console.log(arr);
    // funzione con cui poi posso creare delle card e displayare gli elementi sull'Html
}
