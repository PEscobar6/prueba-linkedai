const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;

        // Path
        this.testPath = '/api/test'

        //Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use(cors());

        // Read and parse body
        this.app.use(express.json());

        // Public Directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.testPath, require('../routes/board'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;