import { Router } from 'express';




export class Authroutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    // router.use('/api/todos', /*TodoRoutes.routes */ );
    router.post('/login', /*TodoRoutes.routes */);
    router.post('/register', /*TodoRoutes.routes */);
    router.get('/validate-email/:token', /*TodoRoutes.routes*/);


    return router;
  }


}