function queue(){
    var items = [];

    this.enqueue = function(element){
        // adiciona um item
        items.push(element)
    }

    this.dequeue = function(){
        // remove um item pela frente
        return items.shift()
    }

    this.front = function() {
        // retorna o primeiro elemento da fila
        return items[0]
    }

    this.isEmpty = function(){
        // verifica se a fila está vazia ou não
        return items.length === 0
    }

    this.size = function(){
        // retorna o tamanho da fila
        return items.length
    }

    this.print = function(){
        // imprime a fila no console
        console.log(items.toString())
    }
}