function queue(){
    var items = [];

    this.enqueue = function(element){
        // adiciona um item
        items.push(element)
    }

    this.dequeue = function(){
        // remove um item
    }

    this.front = function() {
        // retorna o primeiro elemento da fila
    }

    this.isEmpty = function(){
        // verifica se a fila está vazia ou não
    }

    this.size = function(){
        // retorna o tamanho da fila
    }

    this.print = function(){
        // imprime a fila no console
    }
}