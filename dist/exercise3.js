"use strict";
class CRUD {
    constructor() {
        this.items = [];
    }
    create(item) {
        this.items.push(item);
    }
    read() {
        return this.items;
    }
    update(index, updatedItem) {
        if (index >= 0 && index < this.items.length) {
            this.items[index] = updatedItem;
        }
        else {
            throw new Error("Index out of bounds");
        }
    }
    delete(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
        else {
            throw new Error("Index out of bounds");
        }
    }
}
class Users extends CRUD {
}
const usersManager = new Users();
usersManager.create({ id: 1, name: "Alice" });
usersManager.create({ id: 2, name: "Bob" });
console.log("All Users:", usersManager.read());
usersManager.update(0, { id: 1, name: "Alice Smith" });
console.log("All Users after update:", usersManager.read());
usersManager.delete(1);
console.log("All Users after deletion:", usersManager.read());
