export class BaseRepository {
    items;
    constructor(initialData = []) {
        this.items = initialData;
    }
    async getAll() {
        return this.items;
    }
    async getById(id) {
        return this.items.find((item) => item.id === id);
    }
    async create(item) {
        this.items.push(item);
        return item;
    }
    async update(item) {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            this.items[index] = item;
        }
        return item;
    }
    async delete(id) {
        const lengthBefore = this.items.length;
        this.items = this.items.filter((item) => item.id !== id);
        return this.items.length < lengthBefore;
    }
    async find(filter) {
        return this.items.filter((item) => Object.entries(filter).every(([key, value]) => item[key] === value));
    }
}
