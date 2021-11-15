import { Lieu } from "./lieux.js";
export class Patient {
    constructor(nom,maladie,argent,poche,etat,traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etat = etat;
        this.traitement = traitement;
    };
    seDeplacer(a){
       if (this.argent > 0) {
           console.log(`${this.nom} vas a la ${pharm.nom} acheter c'est médicament.`);
           pharm.intérieur.push(a)
           console.log(pharm.intérieur);
       }else{
           console.log(`${this.nom} n'as pas asser de sous pour les médocs donc il vas aux ${cim.nom} se promener pour l'éternité.`);
           cim.intérieur.push(a)
           console.log(cim.intérieur);
       }
       
    };
    paye(){
        this.argent -= 50
    }; 
};
let pharm = new Lieu("Pharmacie")
let cim = new Lieu("Cimetière")