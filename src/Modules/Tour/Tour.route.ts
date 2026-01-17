import { Router } from "express";
import { Role } from "../User/User.interface";
import { TourTypeControllers } from "./Tour.controller";
import { verifyAuth } from "../../app/middlewares/CheckAuth";



const router =Router()

router.post('/create',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),TourTypeControllers.createTourType)
router.get('/',TourTypeControllers.getAllTourTypes)
router.get('/:id',TourTypeControllers.getSingleTourType)
router.patch('/:id',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),TourTypeControllers.updateTourType)
router.delete('/:id',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),TourTypeControllers.deleteTourType)
export const TourTypeRoute= router