import express from 'express';
import { getEventsBySource, getSingleEvent, filterEvents} from '../controllers/eventController.js';
const router = express.Router();

router.get('/source/:sourceId', getEventsBySource);
router.get('/:eventId', getSingleEvent);
router.get('/', filterEvents);
export default router;