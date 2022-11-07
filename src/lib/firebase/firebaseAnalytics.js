import { getAnalytics } from 'firebase/analytics';
import app from './firebaseApp.server.js';

export const firebaseAnalytics = getAnalytics(app);
