import { Application, Request } from 'express';
export const controller = (app: Application) => {
  app.get('/backend', (req, res) => {
    res.render('pages/dashboard', { dataset: {
        title: 'Dashboard',
        namespace: 'dashboard',
      },
    });
  });
};
