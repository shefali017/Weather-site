import axios from 'axios'
//import dotenv from 'dotenv'

//dotenv.config();

const URL= 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY='f0f9571d50d76ff5038a7d131ca0192a'

export const getData =async(city,country)=>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
} 