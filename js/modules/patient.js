export class Patient {
    constructor(nom,maladie,argent,poche,etat,traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etat = etat;
        this.traitement = traitement;
    };
    endroit(){
   
    };
    medicamment(){
        
    };
    paye(){
        this.argent -= 50
    };
};
let pharmacie = {
    nom : "pharmacie",
    personne : [],
};