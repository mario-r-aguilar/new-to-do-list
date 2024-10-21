import express from 'express';
import path from 'node:path';
import getDirName from './utils/dirname.utils.js';
import { connectServer } from './config/connection.config.js';

const app = express();
const __dirname = getDirName(import.meta.url);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

connectServer(app);
