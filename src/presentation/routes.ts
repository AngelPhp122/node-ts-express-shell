import { Router } from 'express';
import { Authroutes } from './auth/routes';





export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    //console.log(Authroutes.routes, 'rutas del auth')
    // Definir las rutas
    // router.use('/api/todos', /*TodoRoutes.routes */ );
    router.use('/api/auth', Authroutes.routes );

    return router;
  }


}

