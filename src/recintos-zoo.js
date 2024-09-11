
class RecintosZoo {

    static AnimaisEnum = {
        LEAO: {especie: 'LEAO', tamanho: 3, habitat: 'savana', dieta: 'carnivoro'},
        LEOPARDO: {especie: 'LEOPARDO', tamanho: 2, habitat: 'savana', dieta: 'carnivoro'},
        CROCODILO: {especie: 'CROCODILO', tamanho: 3, habitat: 'rio', dieta: 'carnivoro'}, 
        MACACO: {especie: 'MACACO', tamanho: 1, habitat: ['savana', 'floresta'], dieta: 'herbivoro'},
        GAZELA: {especie: 'GAZELA', tamanho: 2, habitat: 'savana', dieta: 'herbivoro'},
        HIPOPOTAMO: {especie: 'HIPOPOTAMO', tamanho: 4, habitat: ['savana', 'rio'], dieta: 'herbivoro'}
    }

    constructor() {

    }    

    analisaRecintos(animal, quantidade) { 
        let verificar_animal = this.buscarEnumPorEspecie(animal);

        if(quantidade <= 0) return {erro: "Quantidade inválida"};
        if(!verificar_animal) return {erro: "Animal inválido"};
        if(verificar_animal) return verificar_animal;
    }

    buscarEnumPorEspecie(especie) {
        let tem_especie = Object.values(RecintosZoo.AnimaisEnum).find(animal => animal.especie === especie);

        if(tem_especie) return tem_especie;
        else return 
    } //busca o enum e o retorna a partir da string informada 

}

export { RecintosZoo as RecintosZoo };
