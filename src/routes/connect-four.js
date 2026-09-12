import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  response.render('connect-four/index', { message: 'Hello, connect 4!' });
});

export default router;
