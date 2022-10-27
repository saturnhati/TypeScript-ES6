class Abbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;
  constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
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

  getsaldocapo(): number {
    let sconto = this.prezzoivainclusa * (this.saldo / 100);
    return sconto;
  }
  getacquistocapo(sconto: number): number {
    let prezzoTot = this.prezzoivainclusa - sconto;
    return prezzoTot;
  }
}

let promise = fetch("./assets/json/Abbigliamento.json").then((response) => response.json());
promise.then((data) => getCapi(data));

function getCapi(data: any) {
  let capi: any = [];
  data.forEach((element: any) => {
    let { id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo } = element;
    capi.push(new Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo));
  });
  console.log(capi);
  displayCapi(capi);
}

function displayCapi(arr: Abbigliamento[]) {
  console.log(arr);
  // funzione con cui poi posso creare delle card e displayare gli elementi sull'Html
}
