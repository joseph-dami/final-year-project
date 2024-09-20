import express from 'express';
import { getResult, storeResult, dropResult } from '../controllers/authController.js';
import User from '../models/User.js';

const router = express.Router();

router.route('/')
    .get(getResult)
    .post(storeResult)
    .delete(dropResult);

// Endpoint to check if username exists
router.post('/check-username', async (req, res) => {
    const { username } = req.body;

    try {
      const user = await User.findOne({ username });

      if (user) {
        return res.status(200).json({ exists: true });
      } else {
        return res.status(200).json({ exists: false });
      }
    } catch (error) {
      console.error('Error checking username:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  });

export default router;
