import express from "express";
import axios from "axios";
const roverRouter = express.Router();

import dotenv from "dotenv";
dotenv.config({ path: './.env' });
const apiKey = process.env.NASA_API_KEY;

enum Cameras {
  FHAZ = "FHAZ",
  RHAZ = "RHAZ",
  MAST = "MAST",
  CHEMCAM = "CHEMCAM",
  MAHLI = "MAHLI = 5",
  MARDI = "MARDI",
  NAVCAM = "NAVCAM",
  PANCAM = "PANCAM",
  MINITES = "MINITES"
}

interface Camera {
  id?: number;
  name: string;
  rover_id?: number;
  full_name: string;
}

interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: Camera[];
}

interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

roverRouter.get('/', (req: any, res: any) => {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${apiKey}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error(error);
      res.render("error");
    })
});

roverRouter.get('/photos', (req: any, res: any) => {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${Cameras.NAVCAM}&api_key=${apiKey}`)
    .then(response => {
      const photos: Photo[] = response.data.photos;
      const urls: string[] = [];
      photos.forEach(photo => {
        urls.push(photo.img_src);
      });
      res.send(urls);
    })
    .catch(error => {
      console.error(error);
      res.render("error");
    })
});

export default roverRouter;