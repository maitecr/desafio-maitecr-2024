class Bioma {


    constructor(numero, bioma, tamanho_total) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanho_total = tamanho_total;
        this.tamanho_disponivel = tamanho_total;
        this.animais_existentes = [];
    }

    analisarAnimalRecinto(animal, quantidade) {
        let bioma_animal_valido = this.verificarBiomaValidoAnimal(animal);
        let checar_espaco = this.checarEspacoDisponivel(animal, quantidade);
        let dietas_iguais = this.dietasIguais(animal);
        let especies_iguais = this.especiesIguais(animal);
        let recinto_valido_macaco = this.recintoAdequadadoParaMacaco(quantidade);
        let recinto_valido_hipopotamo = this.recintoAdequadadoParaHipopotamo(animal);

        if(animal.especie === 'MACACO' && !recinto_valido_macaco) {
            return {erro: 'Não há recinto viável'};
        }

        if(animal.especie === 'HIPOPOTAMO' & !recinto_valido_hipopotamo) {
            return {erro: 'Não há recinto viável'};
        }

        if(bioma_animal_valido && this.recintoVazio() && checar_espaco) {
            this.adicionarAnimal(animal, quantidade);

            if(this.temMaisDeUmaEspecie(animal)) {
                this.tamanho_disponivel -= 1;            }
            
                return true;
        } else if(bioma_animal_valido && checar_espaco && dietas_iguais && animal.dieta == 'herbivoro') {
            this.adicionarAnimal(animal, quantidade);
            
            if(this.temMaisDeUmaEspecie(animal)) {
                this.tamanho_disponivel -= 1;            }
            
                return true;
        } else if(bioma_animal_valido && checar_espaco && especies_iguais && dietas_iguais && animal.dieta == 'carnivoro') {
            this.adicionarAnimal(animal, quantidade);
            
            if(this.temMaisDeUmaEspecie(animal)) {
                this.tamanho_disponivel -= 1;            
            }
            
                return true; 
        } else {
            return false;
        }
    }

    adicionarAnimal(animal, quantidade) {
        for(let i = 0; i < quantidade; i++) {
            this.animais_existentes.push(animal);
            this.tamanho_disponivel -= animal.tamanho;   
        }
    }

    recintoVazio() { //retorna true ou false
        return this.animais_existentes.length === 0;
    }

    verificarBiomaValidoAnimal(animal) { //retonar true ou false se o animal faz parte do bioma
        //let verificar_bioma_animal1 = this.bioma.includes(animal.habitat); //bioma: 2 pra 1 (animal) e 1 pra 1 = true
        //let verificar_bioma_animal2 = animal.habitat.includes(this.bioma) //animal array: 2 pra 1 (bioma) = true
        //let verificar_bioma_animal3 = animal.habitat.every((habitat) => this.bioma.includes(habitat)) // 2 habitats animal pra 2 habitats = true
        //let verificar_bioma_animal4 = animal.habitat.some(habitat => this.bioma.includes(habitat)) //2 habitats animal para 1 bioma
    
        if(Array.isArray(animal.habitat)) {
            if(animal.habitat.includes(this.bioma)) {
                return true;
            } else if(animal.habitat.every((habitat) => this.bioma.includes(habitat))) {
                return true;
            } else if(animal.habitat.some(habitat => this.bioma.includes(habitat))) {
                return true;
            } else {
                return false;
            }
        } else if (Array.isArray(this.bioma)) {
            if(this.bioma.includes(animal.habitat)) {
                return true;
            } else {
                return false;
            }
        } else if (!(Array.isArray(this.bioma))) {
            
            if(this.bioma.includes(animal.habitat)) {
                return true;
            }  else {
                return false;
            }
        }

    }

    checarEspacoDisponivel(animal, quantidade) {
        let espaco_a_ocupar = animal.tamanho * quantidade;
        if(espaco_a_ocupar < this.tamanho_disponivel) {
            return true;
        } else {
            return false;
        }
    }

    dietasIguais(animal) { //retorna true se forem iguais 
        return this.animais_existentes.some(animal_lista => animal_lista.dieta === animal.dieta);
    }

    especiesIguais(animal) { //retorna true se especies forem iguais
        return this.animais_existentes.some(animal_lista => animal_lista.especie === animal.especie);
    }

    temMaisDeUmaEspecie() { 
        const especies = this.animais_existentes.map(animal => animal.especie);
        const especiesUnicas = new Set(especies);
        return especiesUnicas.size > 1;    
    }

    recintoAdequadadoParaMacaco(quantidade) { //refatorar para true ou false depois
        if(quantidade === 1 && this.recintoVazio()) {
            return false
        } else {
            return true
        }
    }

    recintoAdequadadoParaHipopotamo(animal) { // verifica especie, condições e retorna true ou false
        let bioma_array = Array.isArray(this.bioma);
        let habitat_valido;
        
        if(Array.isArray(animal.habitat)) {
            habitat_valido = animal.habitat.every((valor, i) => valor === this.bioma[i]); 
            if(bioma_array && habitat_valido && !this.recintoVazio()) { //pode adicionar
                return true;
            } else {
                return false;
            }//verifica se array igual
        } 
    }

}

export { Bioma as Bioma };
