export class Patient {
    constructor(nom,maladie,argent,poche,etat,traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etat = etat;
        this.traitement = traitement;
    };
    endroit(a,b){
        a.Patient.push(this.nom)
        b.Patient.unshift(this.nom)
    };
    medicamment(){

    };
    paye(){
        this.argent -= 50
    };
};
