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
let pharm = new Lieu("Pharmacie")
let cim = new Lieu("Cimetière")
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
let doc = new Doctor("Doc",0);
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
// -----------------------------------------------------------------------
//                                    Instance Chat.js
let cat = new Chat("chatte");
// -----------------------------------------------------------------------
// ------------------------ TEST SCRIPT ----------------------------------
fullIencli.forEach(el => {
    doc.salleDattende.push(el);
});
// ---------------------------------------- TEST --------------------------------------
// test2-
fullIencli.forEach(el => {
    console.log(`il y a actuellement ${doc.salleDattende.length} personnes dans la salle d'attende`);
    doc.salleDattende.shift();
    console.log(`${el.nom} rentre dans le cabinet`);
    doc.cabinet.push(el.nom)
    console.log(doc.cabinet);
    cat.miaule(el);
    doc.diagnostique(el);
    console.log(`la maladie de ${el.nom} est : ${el.maladie}.`);
    console.log(`le traitement de ${el.nom} est : ${el.traitement}.`);
    console.log(`${el.nom} a payer le ${doc.nom} 50€`);
    el.paye(el)
    doc.patientSort(el)
    console.log(`${el.nom} est sortie de la cabine`);
    doc.cabinet.shift(el);
    console.log(doc.cabinet);
    console.log(`${el.nom} a actuellement : ${el.argent}€`);
    doc.traitement(el)
    el.seDeplacer(el.nom)
    console.log(`Solde du Doc : ${doc.argent}€`);
    console.log("------------------------------------");
});




