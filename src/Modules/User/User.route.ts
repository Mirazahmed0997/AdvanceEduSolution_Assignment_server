import { userControllers } from "./User.controller";
import { Role } from "./User.interface";
import { Router } from "express";
import { verifyAuth } from "../../app/middlewares/CheckAuth";
import { multerUpload } from "../../app/Config/multer.config";
import { createUserZodSchema } from "./User.validation";
import { validateRequest } from "../../app/middlewares/validateRequest";





    

const router =Router()



router.post('/register',
    multerUpload.single("file"),
    validateRequest(createUserZodSchema),
    userControllers.createUser)

router.get('/AllUsers',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),userControllers.getAllUsers)
// router.get('/AllUsers',userControllers.getAllUsers)
router.get('/userProfile',verifyAuth(...Object.values(Role)),userControllers.getUsersProfile)



router.get('/:id',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),userControllers.getSingleUser)



router.patch('/:id', verifyAuth(...Object.values(Role)),multerUpload.single("file"),userControllers.updateUser)
router.delete('/:id',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),userControllers.deleteUser)

export const userRoutes= router