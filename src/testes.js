import { Bioma } from "./bioma.js";

const AnimaisEnum = {
    LEAO: {especie: 'LEAO', tamanho: 3, habitat: 'savana', dieta: 'carnivoro'},
    LEOPARDO: {especie: 'LEOPARDO', tamanho: 2, habitat: 'savana', dieta: 'carnivoro'},
    CROCODILO: {especie: 'CROCODILO', tamanho: 3, habitat: 'rio', dieta: 'carnivoro'}, 
    MACACO: {especie: 'MACACO', tamanho: 1, habitat: ['savana', 'floresta'], dieta: 'herbivoro'},
    GAZELA: {especie: 'GAZELA', tamanho: 2, habitat: 'savana', dieta: 'herbivoro'},
    HIPOPOTAMO: {especie: 'HIPOPOTAMO', tamanho: 4, habitat: ['savana', 'rio'], dieta: 'herbivoro'}
}

let recinto1 = new Bioma(1, 'savana', 10);
let recinto2 = new Bioma(2, 'floresta', 5);
let recinto3 = new Bioma(3, ['savana', 'rio'], 7);


recinto3.analisarAnimalRecinto(AnimaisEnum.GAZELA, 1)
recinto3.analisarAnimalRecinto(AnimaisEnum.MACACO, 1)
recinto3.analisarAnimalRecinto(AnimaisEnum.HIPOPOTAMO, 1)
recinto3.analisarAnimalRecinto(AnimaisEnum.GAZELA, 1)
recinto3.analisarAnimalRecinto(AnimaisEnum.LEOPARDO, 1)
recinto3.analisarAnimalRecinto(AnimaisEnum.LEAO, 1) 
console.log(recinto3)



//let mac = recinto1.analisarAnimalRecinto(AnimaisEnum.MACACO, 1)

//console.log(recinto3)

recinto1.analisarAnimalRecinto(AnimaisEnum.MACACO, 2);
recinto1.analisarAnimalRecinto(AnimaisEnum.HIPOPOTAMO, 1);
//console.log(recinto1)



//console.log(recinto3.especiesIguais(AnimaisEnum.LEOPARDO));

//################################# INSERIDO DA FUNÇÃO #################################
//let verificar_bioma_animal4 = AnimaisEnum.MACACO.habitat.includes(recinto3.bioma); //2 pra 1 = true && 1 pra 1 = true
//console.log(verificar_bioma_animal4)

//let verificar_bioma_animal1 = AnimaisEnum.MACACO.habitat.includes(recinto2.bioma); // 2 para 1 = true
//console.log(verificar_bioma_animal1)

//let verificar_bioma_animal2 = AnimaisEnum.HIPOPOTAMO.habitat.every((valor, i) => valor === recinto3.bioma[i]); //2 pra 2 = true
//console.log(verificar_bioma_animal2)

//let verificar_bioma_animal5 = AnimaisEnum.MACACO.habitat.some(habitat => recinto3.bioma.includes(habitat)); //1 entre 2 = true 
//console.log(verificar_bioma_animal5)

//#######################################################################################

//let teste = recinto3.recintoAdequadadoParaHipopotamo(AnimaisEnum.HIPOPOTAMO)
//console.log(teste)