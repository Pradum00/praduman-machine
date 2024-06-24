import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { error} from '../utills/responseWrapper.js';
import { generateCSV } from '../services/csv.service.js';


export async function downloadCSVController(req,res){
    try {
        await generateCSV();
        const currentDir = dirname(fileURLToPath(import.meta.url));
        const filePath = join(currentDir, "../../interviews.csv");
        res.download(filePath, (err) => {
            if (err) {
              console.error('Error downloading file:', err);
              res.status(500).send('Error downloading file');
            } else {
              console.log('File downloaded successfully');
            }
          });
        
    } catch (err) {
        return res.send(error(500,err.message));
    }
}