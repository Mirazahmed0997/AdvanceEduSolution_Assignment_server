"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const User_controller_1 = require("./User.controller");
const User_interface_1 = require("./User.interface");
const express_1 = require("express");
const CheckAuth_1 = require("../../app/middlewares/CheckAuth");
const multer_config_1 = require("../../app/Config/multer.config");
const router = (0, express_1.Router)();
router.post('/register', 
// multerUpload.single("file"),
// validateRequest(createUserZodSchema),
User_controller_1.userControllers.createUser);
router.get('/AllUsers', (0, CheckAuth_1.verifyAuth)(User_interface_1.Role.ADMIN, User_interface_1.Role.SUPER_ADMIN), User_controller_1.userControllers.getAllUsers);
// router.get('/AllUsers',userControllers.getAllUsers)
router.get('/userProfile', (0, CheckAuth_1.verifyAuth)(...Object.values(User_interface_1.Role)), User_controller_1.userControllers.getUsersProfile);
router.get('/:id', (0, CheckAuth_1.verifyAuth)(User_interface_1.Role.ADMIN, User_interface_1.Role.SUPER_ADMIN), User_controller_1.userControllers.getSingleUser);
router.patch('/:id', (0, CheckAuth_1.verifyAuth)(...Object.values(User_interface_1.Role)), multer_config_1.multerUpload.single("file"), User_controller_1.userControllers.updateUser);
router.delete('/:id', (0, CheckAuth_1.verifyAuth)(User_interface_1.Role.ADMIN, User_interface_1.Role.SUPER_ADMIN), User_controller_1.userControllers.deleteUser);
exports.userRoutes = router;
//# sourceMappingURL=User.route.js.map