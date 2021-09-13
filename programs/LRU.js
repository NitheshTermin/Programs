//Least Recently used cache

class Node {
    constructor(key, value, next = null, prev = null){
        this.vlaue = value;
        this.key = key;
        this.next = next;
        this.prev = prev;
    }
}

class LRU {
    constructor(limit=5){
        this.limit = 5;
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.cacheMap = new Map();
    }
}

