import { Bioma } from "./bioma.js";

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
        this.recinto1 = new Bioma(1, 'savana', 10);
        this.recinto2 = new Bioma(2, 'floresta', 5);
        this.recinto3 = new Bioma(3, ['savana', 'rio'], 7);
        this.recinto4 = new Bioma(4, 'rio', 8);
        this.recinto5 = new Bioma(5, 'savana', 9);

        this.recinto1.adicionarAnimal(RecintosZoo.AnimaisEnum.MACACO, 3);
        this.recinto3.adicionarAnimal(RecintosZoo.AnimaisEnum.GAZELA, 1);
        this.recinto5.adicionarAnimal(RecintosZoo.AnimaisEnum.LEAO, 1);
    }    

    analisaRecintos(animal, quantidade) { 
        let animal_verificado = this.buscarEnumPorEspecie(animal);
        let recintosViaveis = [];

        if(quantidade <= 0) return {erro: "Quantidade inválida"};
        if(!animal_verificado) return {erro: "Animal inválido"};

        if(this.recinto1.analisarAnimalRecinto(animal_verificado, quantidade)) {
            recintosViaveis.push(`Recinto 1 (espaço livre: ${this.recinto1.tamanho_disponivel} total: ${this.recinto1.tamanho_total})`);
            console.log(`Recinto 1 (espaço livre: ${this.recinto1.tamanho_disponivel} total: ${this.recinto1.tamanho_total})`);
        } else if(!(this.recinto1.checarEspacoDisponivel(animal_verificado, quantidade))) {
            return {erro: 'Não há recinto viável'}
        }

        if(this.recinto2.analisarAnimalRecinto(animal_verificado, quantidade)) {
            recintosViaveis.push(`Recinto 2 (espaço livre: ${this.recinto2.tamanho_disponivel} total: ${this.recinto2.tamanho_total})`);
            console.log(`Recinto 2 (espaço livre: ${this.recinto2.tamanho_disponivel} total: ${this.recinto2.tamanho_total})`)
        } else if(!(this.recinto2.checarEspacoDisponivel(animal_verificado, quantidade))) {
            return {erro: 'Não há recinto viável'}
        }


        if(this.recinto3.analisarAnimalRecinto(animal_verificado, quantidade)) {
            recintosViaveis.push(`Recinto 3 (espaço livre: ${this.recinto3.tamanho_disponivel} total: ${this.recinto3.tamanho_total})`);
            console.log(`Recinto 3 (espaço livre: ${this.recinto3.tamanho_disponivel} total: ${this.recinto3.tamanho_total})`)
        } else if(!(this.recinto3.checarEspacoDisponivel(animal_verificado, quantidade))) {
            return {erro: 'Não há recinto viável'}
        }


        if(this.recinto4.analisarAnimalRecinto(animal_verificado, quantidade)) {
            recintosViaveis.push(`Recinto 4 (espaço livre: ${this.recinto4.tamanho_disponivel} total: ${this.recinto4.tamanho_total})`);
            console.log(`Recinto 4 (espaço livre: ${this.recinto4.tamanho_disponivel} total: ${this.recinto4.tamanho_total})`)
        } else if(!(this.recinto4.checarEspacoDisponivel(animal_verificado, quantidade))) {
            return {erro: 'Não há recinto viável'}
        }


        if(this.recinto5.analisarAnimalRecinto(animal_verificado, quantidade)) {
            recintosViaveis.push(`Recinto 5 (espaço livre: ${this.recinto5.tamanho_disponivel} total: ${this.recinto5.tamanho_total})`);
            console.log(`Recinto 5 (espaço livre: ${this.recinto5.tamanho_disponivel} total: ${this.recinto5.tamanho_total})`)
        } else if(!(this.recinto5.checarEspacoDisponivel(animal_verificado, quantidade))) {
            return {erro: 'Não há recinto viável'}
        }


        return {recintosViaveis: recintosViaveis}
    }

    buscarEnumPorEspecie(especie) {
        let tem_especie = Object.values(RecintosZoo.AnimaisEnum).find(animal => animal.especie === especie);

        if(tem_especie) return tem_especie;
        else return 
    } //busca o enum e o retorna a partir da string informada 

    

}

export { RecintosZoo as RecintosZoo };
