import { Router } from "express";
import path from "path";
import { userRoutes } from "../../Modules/User/User.route";
import { authRoutes } from "../../Modules/Auth/auth.route";



export const router= Router()

const moduleRoutes=[
    {
        path:'/user',
        route: userRoutes
    },
    {
        path:'/auth',
        route: authRoutes
    },
    
  
]

moduleRoutes.forEach((route)=>
{
    router.use(route.path,route.route)
})