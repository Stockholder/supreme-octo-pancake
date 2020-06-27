import express from 'express';
import bodyParser from 'body-parser';

class App {
  public app: express.Application;

  public port: number;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.controllers(controllers);
  }

  private middlewares() {
    this.app.use(bodyParser.json());
  }

  private controllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;