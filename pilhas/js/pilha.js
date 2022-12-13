function Stack() {
    var itens = []

    this.push = function(element) {
        // adiciona um novo item à pilha
        itens.push(element)

    }

    this.pop = function() {
        //remover o item do topo da pilha
        itens.pop()
    }

    this.peek = function() {
        // devolve o elemento que está no topo da pilha
        return itens[itens.length - 1]
    }

    this.isEmpty = function() {
        //informar se a pilha está vazia ou não
        return itens.length === 0
    }

    this.clear = function(){
        //limpa a pilha
         itens = []
    }

    this.size = function() {
        //informa o tamanho da pilha
        return itens.length
    }

    this.print = function() {
        // imprime a pilha no console
        console.log(itens.toString())
    }
}