import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  response.render('index', { message: 'Hello, world!' });
});

export default router;
