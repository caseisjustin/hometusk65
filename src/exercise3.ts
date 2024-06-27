interface CRUDOperations<T> {
    create(item: T): void;
    read(): T[];
    update(index: number, updatedItem: T): void;
    delete(index: number): void;
}
class CRUD<T> implements CRUDOperations<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }
    create(item: T): void {
        this.items.push(item);
    }
    read(): T[] {
        return this.items;
    }
    update(index: number, updatedItem: T): void {
        if (index >= 0 && index < this.items.length) {
            this.items[index] = updatedItem;
        } else {
            throw new Error("Index out of bounds");
        }
    }

    delete(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        } else {
            throw new Error("Index out of bounds");
        }
    }
}
class Users<T> extends CRUD<T> {}
interface User {
    id: number;
    name: string;
}
const usersManager = new Users<User>();

usersManager.create({ id: 1, name: "Alice" });
usersManager.create({ id: 2, name: "Bob" });


console.log("All Users:", usersManager.read());


usersManager.update(0, { id: 1, name: "Alice Smith" });
console.log("All Users after update:", usersManager.read());


usersManager.delete(1);


console.log("All Users after deletion:", usersManager.read());
