import * as express from 'express';
import userRoutes from './routes/UserRoutes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    const acessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Acess-Control-Allow-Origin', '*');
      res.header('Acess-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Acess-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(acessControl);
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/user', userRoutes);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
  }
}

export { App };

export const { app } = new App();
