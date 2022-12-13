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
var pilha = new Stack()


// testando
/* 
pilha.push(2)
pilha.push(4)
pilha.push(6)
pilha.push(8)
pilha.push(10)
*/

//pilha.clear()

//console.log(pilha.isEmpty())
//pilha.print()

/*

console.log(pilha.isEmpty())
pilha.push(5)
pilha.print()
pilha.push(8)
pilha.print()
pilha.push(11)
pilha.print()
pilha.push(15)
pilha.print()
pilha.push(19)
pilha.print()
pilha.push(23)
pilha.print()


pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()

console.log(pilha.isEmpty())
*/