import express from 'express';

const router = express.Router();

// Health check route
router.get('/health', (_, res) => {
  res.send('OK');
});

export default router;
