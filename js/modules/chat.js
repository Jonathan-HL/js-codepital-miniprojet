// Chat
export class Chat {
    constructor(nom){
        this.nom = nom;
    };
// que Miauler cette vieille chatte
    miaule(){
        setTimeout(()=> {
            console.log("MiAOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU !");
            }, 2000)        
    };
};
let cat = new Chat("chatte");