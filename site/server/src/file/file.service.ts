import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs'

@Injectable()
export class FileService {
    async createFile(file, name:string ){
        console.log(path.resolve(__dirname, '..', 'static',   name))
        
        try{
            const fileName = name+'.jpg'
            const filePath = path.resolve(__dirname, '..', 'static')
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }

            fs.writeFileSync(path.join(filePath,fileName), file.buffer)
            return `${fileName}`

        }

        catch(err){
            throw new HttpException('Ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

