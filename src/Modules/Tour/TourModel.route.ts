import { Router } from "express";
import { Role } from "../User/User.interface";
import { TourControllers, TourTypeControllers } from "./Tour.controller";
import { verifyAuth } from "../../app/middlewares/CheckAuth";
import { multerUpload } from "../../app/Config/multer.config";



const router =Router()

router.post('/create',multerUpload.array("files"), verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),TourControllers.createTour)
router.get('/',TourControllers.getAllTour)
router.get('/:id',TourControllers.getSingleTour)
router.patch('/:id',multerUpload.array("files"),verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),TourControllers.updateTour)
router.delete('/:id',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),TourControllers.deleteTour)

export const TourRoute= router