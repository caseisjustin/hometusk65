class Database<T> {
    protected items: T[] = [];
    connect(): void {
        console.log("Connecting to database...");    }

    disconnect(): void {
        console.log("Disconnecting from database...");    }

    create(item: T): void {
        this.items.push(item);
    }

    read(): T[] {
        return this.items;
    }

    update(id: number, item: T): void {
        if (id >= 0 && id < this.items.length) {
            this.items[id] = item;
        } else {
            throw new Error("Invalid id");
        }
    }

    delete(id: number): void {
        if (id >= 0 && id < this.items.length) {
            this.items.splice(id, 1);
        } else {
            throw new Error("Invalid id");
        }
    }
}

class MongoDB<T> extends Database<T> {    override create(item: T): void {
        this.items.push(item);
    }

    override read(): T[] {
        return this.items;
    }

    override update(id: number, item: T): void {
        if (id >= 0 && id < this.items.length) {
            this.items[id] = item;
        } else {
            throw new Error("Invalid id");
        }
    }

    override delete(id: number): void {
        if (id >= 0 && id < this.items.length) {
            this.items.splice(id, 1);
        } else {
            throw new Error("Invalid id");
        }
    }
}
class SQLDB<T> extends Database<T> {    override create(item: T): void {
        this.items.push(item);
    }

    override read(): T[] {
        return this.items;
    }

    override update(id: number, item: T): void {
        if (id >= 0 && id < this.items.length) {
            this.items[id] = item;
        } else {
            throw new Error("Invalid id");
        }
    }

    override delete(id: number): void {
        if (id >= 0 && id < this.items.length) {
            this.items.splice(id, 1);
        } else {
            throw new Error("Invalid id");
        }
    }
}

const mongoDb = new MongoDB<any>();
mongoDb.connect();
mongoDb.create({ name: 'Ali', age: 30 });
console.log(mongoDb.read());
mongoDb.update(0, { name: 'Vali', age: 25 });
console.log(mongoDb.read());
mongoDb.delete(0);
console.log(mongoDb.read());
mongoDb.disconnect();

const sqlDb = new SQLDB<any>();
sqlDb.connect();
sqlDb.create({ name: 'Hasan', age: 40 });
console.log(sqlDb.read());
sqlDb.update(0, { name: 'Husan', age: 35 });
console.log(sqlDb.read());
sqlDb.delete(0);
console.log(sqlDb.read());
sqlDb.disconnect();