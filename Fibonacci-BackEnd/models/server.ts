import express, { Application } from "express";
import fibonacciRoutes from "../routes/fibonacci";
import cors from "cors";

class Server {

    private app: Application;
    private port: string;

    private apiPaths = {
        fibonacci: "/api/fibonacci",
    };

    constructor() {
        this.app = express();
        this.port = "8080";
        
        this.middlewares();
        this.routes();
    };


    middlewares() {
        
        this.app.use( cors() );
    
    };

    routes() {
        this.app.use( this.apiPaths.fibonacci, fibonacciRoutes );
    };

    listen() {
        this.app.listen( this.port, () => {
            console.log("Server on in port " + this.port);
        });
    };

}

export default Server;