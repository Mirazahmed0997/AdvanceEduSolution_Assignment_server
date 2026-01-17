import express, {  Request, Response } from 'express';
import cors from "cors"
import { router } from './app/routes';
import { envVars } from './app/Config/env';
import { globalError } from './app/middlewares/GlobalErrorHandler';
import notFound from './app/middlewares/NotFound';
import cookieParser from "cookie-parser"
import passport from 'passport';
import expressSession  from 'express-session';
import './app/Config/passport'

const app= express();
app.use(cookieParser())
app.use(express.json())
app.set("trust proxy",1)
app.use(express.urlencoded({extended:true}))


app.use(cors({
  origin: true,        
  credentials: true    
}));


app.use(expressSession({
    secret: envVars.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "lax",
      secure: false,
    }
  }))
  


app.use(passport.initialize())




app.use('/api/v1', router)




app.get('/',(req:Request,res:Response)=>
{
    res.status(200).json({
        message: "welcome To management system"
    })
})

app.use(globalError)

app.use(notFound)

export default app;

