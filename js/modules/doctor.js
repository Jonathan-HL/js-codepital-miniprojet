import { Patient } from "./patient.js";
// Le Docteur
export class Doctor {
    constructor(nom,argent){
        this.nom = nom;
        this.argent = argent;
        this.salleDattende = [];
        this.cabinet = [];
    };
    diagnostique(a){
        if (a.maladie == "mal indenté" || a.maladie == "unsave" || a.maladie == "404" || a.maladie == "azmatique" || a.maladie == "syntaxError") {
            this.argent+= 50;
        }
    };
    traitement(a){
        if (a.maladie == "mal indenté") {
            a.argent -= 60
            console.log("le prix du Traitement ctrl+maj+f est de : 60€");
        }
        else if ( a.maladie == "unsave") {
            a.argent -= 100
            console.log("le prix du Traitement saveOnFocusChange est de : 100€");
        }
        else if ( a.maladie == "404") {
            a.argent -= 35
            console.log("le prix du Traitement CheckLinkRelation est de 35€");
        }
        else if ( a.maladie == "azmatique") {
            a.argent -= 40
            console.log("le prix du Traitement Ventoline est de : 40€");
        }
        else if ( a.maladie == "syntaxError") {
            a.argent -= 20
            console.log("le prix du Traitement f12+doc est de : 20€");
        }
    }
    patientEntre(a){
        
    };
    patientSort(b){
       
    };
};
// -----------------------------------------------------------------------
// Les Diagnostiques
export class Diagnostiques {
    constructor(maladie,traitement){
        this.maladie = maladie;
        this.traitement = traitement;
    };
};
// -----------------------------------------------------------------------
// Les Tarifs et Ttraitements 
export class Tariftraitements {
    constructor(traitement,prix){
        this.traitement = traitement;
        this.prix = prix;
    };
};
// -----------------------------------------------------------------------
