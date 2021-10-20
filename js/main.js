//                          Chat.js qui rend fou 
import {Chat} from "./modules/chat.js";
// console.log(Chat);
// -----------------------------------------------------------------------
//                                      Docteur.js
import {Doctor} from "./modules/doctor.js";
// console.log(Doctor);
//                                   Diagnostiques (Docteur.js)
import {Diagnostiques} from "./modules/doctor.js"
// console.log(Diagnostiques);
//                                   Tariftraitements (Docteur.js)
import {Tariftraitements} from "./modules/doctor.js"
// console.log(Tariftraitements);
// -----------------------------------------------------------------------
//                                           Lieu
import {Lieu} from "./modules/lieux.js";
// console.log(Lieu);
// -----------------------------------------------------------------------
//                                         Les Ienclies 
import {Patient} from "./modules/patient.js";
// console.log(Patient);
// -----------------------------------
//                                         Instance Patiens 
let iencli = new Patient("Marcus","mal indenté",100,"vide","malade","ctrl+maj+f");
let iencli2 = new Patient("Optimus","unsave",200,"vide","malade","saveOnFocusChange");
let iencli3 = new Patient("Sangoku","404",80,"vide","malade","CheckLinkRelation");
let iencli4 = new Patient("DarthVader","azmatique",110,"vide","malade","Ventoline");
let iencli5 = new Patient("Semicolon","syntaxError",60,"vide","malade","f12+doc");
// -----------------------------------
//                              Tous les Ienclis dans la cage (Doctor.js)
let fullIencli = [iencli, iencli2, iencli3, iencli4, iencli5];
// -----------------------------------------------------------------------
//                                  Instance Doctor.js
let doc = new Doctor("Docdoc",0);
// -----------------------------------
//                              Instance Diagnostiques (Doctor.js)
let indenté = new Diagnostiques("mal indenté","ctrl+maj+f");
let unsave = new Diagnostiques("unsave","saveOnFocusChange");
let quatreCentquatre = new Diagnostiques("404","CheckLinkRelation");
let azmatique = new Diagnostiques("azmatique","Ventoline");
let syntaxError = new Diagnostiques("syntaxError","f12+doc");
// -----------------------------------
//                              Instance Tarifs traitements (Doctor.js)
let ctrlmajf = new Tariftraitements("ctrl+maj+f",60);
let saveOnFocusChange = new Tariftraitements("saveOnFocusChange",100);
let CheckLinkRelation = new Tariftraitements("CheckLinkRelation",35);
let Ventoline = new Tariftraitements("Ventoline",40);
let f12doc = new Tariftraitements("f12+doc",20);
let allTraitement = [ctrlmajf,saveOnFocusChange,CheckLinkRelation,Ventoline,f12doc]
// -----------------------------------------------------------------------
//                                    Instance Chat.js
let cat = new Chat("chatte");
// -----------------------------------------------------------------------
//                                    Instance Lieu.js
let vieOumort = new Lieu();
let vieOumort2 = new Lieu();
let vieOumort3 = new Lieu();
let vieOumort4 = new Lieu();
let vieOumort5 = new Lieu();
// -----------------------------------------------------------------------

// ------------------------ TEST SCRIPT ----------------------------------
fullIencli.forEach(el => {
    doc.salleDattende.push(el);
});
doc.cabinet.push(iencli.nom);
// ---------------------------------------- TEST --------------------------------------
fullIencli.forEach(el => {
    console.log(`il y a actuellement ${doc.salleDattende.length} personnes dans la salle d'attende`);
    doc.salleDattende.shift();
    doc.patientEntre(el);
    console.log(`${el.nom} rentre dans le cabinet`);
    doc.diagnostique(el);
    console.log(`la maladie de ${el.nom} est ${el.maladie}`);
    console.log(`le traitement est ${el.traitement}`);
    console.log(`${el.nom} a payer le ${doc.nom} 50€`);
    iencli.paye()
    console.log(`${el.nom} a actuellement ${el.argent}€`);
    doc.patientSort(el)
    console.log(`${el.nom} est sortie de la cabine`);
    console.log(`Solde du Doc : ${doc.argent}€`);
    console.log("------------------------------------");
});


