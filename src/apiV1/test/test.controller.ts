import { Request, Response } from 'express';
import * as fs from 'fs';
import * as Path from 'path'
import Test from './test.model';
import config from '../../config/config';
import axios from 'axios'
export default class UserController {
  public api1 = async (req: Request, res: Response): Promise<any> => {
    axios.get(config.API1)
    .then(async (data) => {
      const dataList:Array<any> = data.data.Search;
      let i=0;
      dataList.forEach(async (item) =>{
        const test = await Test.find({imdbID:item.imdbID});
        if(test.length===0){
          const filename = Date.now() + 'test.jpg';
          const path = Path.resolve('upload', filename)
          const writer = fs.createWriteStream(path)
          const response = await axios({
            url:'https://images.dog.ceo/breeds/weimaraner/n02092339_4346.jpg',
            method:'GET',
            responseType:'stream'
          })
          fs.writeFileSync(path, response.data.toString('base64'));
          let newTest = new Test({
            Title:item.Title,
            Type:item.Type,
            Year:item.Year,
            imdbID:item.imdbID,
            Poster:""+filename,
            from:'api1'
          });
          await newTest.save()
          console.log('save   ' + i++)
        }
      })
      console.log('done')
      const responseData = await Test.find({from:'api1'});
      console.log('response')
      return res.status(200).send(dataList);
    })
  };

  public api2 = async (req: Request, res: Response): Promise<any> => {
    axios.get(config.API2)
    .then(async (data) => {
      const dataList:Array<any> = data.data.Search;
      let i=0;
      dataList.forEach(async (item) =>{
        const test = await Test.find({imdbID:item.imdbID});
        if(test.length===0){
          const filename = Date.now() + 'test.jpg';
          const path = Path.resolve('upload', filename)
          const writer = fs.createWriteStream(path)
          const response = await axios({
            url:'https://images.dog.ceo/breeds/weimaraner/n02092339_4346.jpg',
            method:'GET',
            responseType:'stream'
          })
          response.data.pipe(writer)

          new Promise((resolve, reject) => {
            writer.on('finish', resolve)
            writer.on('error', reject)
          })
          let newTest = new Test({
            Title:item.Title,
            Type:item.Type,
            Year:item.Year,
            imdbID:item.imdbID,
            Poster:""+filename,
            from:'api2'
          });
          await newTest.save()
          console.log('save   ' + i++)
        }
      })
      console.log('done')
      const responseData = await Test.find({from:'api2'});
      console.log('response')
      return res.status(200).send(dataList);
    })
  };

  public api3 = async (req: Request, res: Response): Promise<any> => {
    axios.get(config.API3)
    .then(async (data) => {
      const dataList:Array<any> = data.data.Search;
      let i=0;
      dataList.forEach(async (item) =>{
        const test = await Test.find({imdbID:item.imdbID});
        if(test.length===0){
          const filename = Date.now() + 'test.jpg';
          const path = Path.resolve('upload', filename)
          const writer = fs.createWriteStream(path)
          const response = await axios({
            url:'https://images.dog.ceo/breeds/weimaraner/n02092339_4346.jpg',
            method:'GET',
            responseType:'stream'
          })
          response.data.pipe(writer)

          new Promise((resolve, reject) => {
            writer.on('finish', resolve)
            writer.on('error', reject)
          })
          let newTest = new Test({
            Title:item.Title,
            Type:item.Type,
            Year:item.Year,
            imdbID:item.imdbID,
            Poster:""+filename,
            from:'api3'
          });
          await newTest.save()
          console.log('save   ' + i++)
        }
      })
      console.log('done')
      const responseData = await Test.find({from:'api3'});
      console.log('response')
      return res.status(200).send(dataList);
    })
  };
}
