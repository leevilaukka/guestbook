const fs = require('fs');
const path = require('path');

class DB {
    constructor(jsonFilePath) {
        this.jsonFilePath = jsonFilePath;
        this.data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
        if(!this.data.messages) this.data.messages = [];
    }

    #update() {
        fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.data, null, 4));
    }

    push(message) {
        const newData = {
            id: this.data.messages.length,
            username: message.username,
            message: message.message,
            country: message.country,
            date: new Date()
        };
        this.data.messages.push(newData);
        this.#update();
    }

    getAll() {
        return this.data.messages;
    }
}

module.exports = database = new DB(path.join(__dirname, '../database/data.json'));