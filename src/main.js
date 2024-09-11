import { Bioma } from "./bioma.js";
import { RecintosZoo } from "./recintos-zoo.js";

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
let recinto4 = new Bioma(4, 'rio', 8);
let recinto5 = new Bioma(5, 'savana', 9);


let recinto = new RecintosZoo();
let resultado = recinto.analisaRecintos('LEAO', 1)
let verificar_animal = recinto.analisaRecintos('ONCA', 1)
console.log(verificar_animal)