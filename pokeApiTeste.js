const fs = require('fs').promises;

async function escreverArquivoCallback(nomeArquivo, dados) {
    try{
        await fs.writeFile(nomeArquivo, dados);
    }catch(error){
        console.error(`Erro ao escrever dados no arquivo ${nomeArquivo}:`, error)
    }
}

async function lerArquivoCallback(nomeArquivo) {
    try{
        return await fs.readFile(nomeArquivo, 'utf-8')
    }catch(error){
        console.error(`Erro ao ler dados do arquivo ${nomeArquivo}`, error)
    }
}

async function getPokemon(){
		listPokemon = [];
		for(i = 1; i < 152; i++){
	        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i)
            console.log(i)
	        listPokemon.push( await response.json());
        }
        return listPokemon;
}

async function getPokemonDataWithCallbacks() {
    try{
        response = await getPokemon();
        pokemons = [];
        response.forEach((element) => {
	        pokemons.push({
                numeroDex: element.id,
	            nome: element.name,
	            tipos: element.types.map(type => type.type.name),
	            peso: element.weight,
	            altura: element.height,
                sprits: element.sprites.front_default
	        })
    	})
    	
        const pokemonInfoToJson = JSON.stringify(pokemons, null, 2)
        await escreverArquivo('pokemon.json', pokemonInfoToJson)
        await escreverArquivo('dados.txt', pokemonInfoToJson)
        console.log(await lerArquivoCallback('pokemon.json'))
    }catch(error){
        console.log( error);
    }
}


getPokemonDataWithCallbacks();
