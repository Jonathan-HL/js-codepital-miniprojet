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
    // traitement(){
    //     // if (doc.Tariftraitements == "ctrl+maj+f" || doc.Tariftraitements == "saveOnFocusChange" || doc.Tariftraitements == "CheckLinkRelation" || doc.Tariftraitements == "Ventoline" || doc.Tariftraitements == "f12+doc") {
            
    //     // }
    // }
    patientEntre(b){

    };
    patientSort(c){

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