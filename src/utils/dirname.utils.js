import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

export default (path) => {
	const __filename = fileURLToPath(path); 
	const __dirname = dirname(__filename); 
	return __dirname; 
}

