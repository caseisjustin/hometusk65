"use strict";
class Database {
    constructor() {
        this.items = [];
    }
    connect() {
        console.log("Connecting to database...");
    }
    disconnect() {
        console.log("Disconnecting from database...");
    }
    create(item) {
        this.items.push(item);
    }
    read() {
        return this.items;
    }
    update(id, item) {
        if (id >= 0 && id < this.items.length) {
            this.items[id] = item;
        }
        else {
            throw new Error("Invalid id");
        }
    }
    delete(id) {
        if (id >= 0 && id < this.items.length) {
            this.items.splice(id, 1);
        }
        else {
            throw new Error("Invalid id");
        }
    }
}
class MongoDB extends Database {
    create(item) {
        this.items.push(item);
    }
    read() {
        return this.items;
    }
    update(id, item) {
        if (id >= 0 && id < this.items.length) {
            this.items[id] = item;
        }
        else {
            throw new Error("Invalid id");
        }
    }
    delete(id) {
        if (id >= 0 && id < this.items.length) {
            this.items.splice(id, 1);
        }
        else {
            throw new Error("Invalid id");
        }
    }
}
class SQLDB extends Database {
    create(item) {
        this.items.push(item);
    }
    read() {
        return this.items;
    }
    update(id, item) {
        if (id >= 0 && id < this.items.length) {
            this.items[id] = item;
        }
        else {
            throw new Error("Invalid id");
        }
    }
    delete(id) {
        if (id >= 0 && id < this.items.length) {
            this.items.splice(id, 1);
        }
        else {
            throw new Error("Invalid id");
        }
    }
}
const mongoDb = new MongoDB();
mongoDb.connect();
mongoDb.create({ name: 'Ali', age: 30 });
console.log(mongoDb.read());
mongoDb.update(0, { name: 'Vali', age: 25 });
console.log(mongoDb.read());
mongoDb.delete(0);
console.log(mongoDb.read());
mongoDb.disconnect();
const sqlDb = new SQLDB();
sqlDb.connect();
sqlDb.create({ name: 'Hasan', age: 40 });
console.log(sqlDb.read());
sqlDb.update(0, { name: 'Husan', age: 35 });
console.log(sqlDb.read());
sqlDb.delete(0);
console.log(sqlDb.read());
sqlDb.disconnect();
