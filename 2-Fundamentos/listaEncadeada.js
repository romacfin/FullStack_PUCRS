/** LISTA ENCADEADA
 *      Consiste de um determinado número de nodos, cada um com uma referência para o próximo.
 * 
 *  NODOS
 *      São conectados por links e normalmente apresentam dois atributos:
 *          1. Element: representando o elemento armazenado no nodo;
 *          2. Next: representando o próximo nodo no encadeamento da lista.
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.count=0
        this.header=null
        this.tail=null
    }
    add(element){
        if(this.count==0)
            this.header=this.tail=element
        else
            this.tail.next=element
            this.tail=element
        this.count++
    }
    print(){
        var aux = this.header
        while(aux!=null){
            console.log(aux.element)
            aux=aux.next
        }
    }
}

var myLL = new LinkedList()

myLL.add(new Node(1))
myLL.print()

myLL.add(new Node(2))
myLL.print()

myLL.add(new Node(4))
myLL.print()

myLL.add(new Node(3))
myLL.print()