

import { Router } from "express";
import { Role } from "../User/User.interface";
import { BookingControllers } from "./Booking.controller";
import { CreateBookingZodSchema, UpdateBookingZodSchema } from "./Booking.validation";
import { verifyAuth } from "../../app/middlewares/CheckAuth";
import { validateRequest } from "../../app/middlewares/validateRequest";



const router =Router()

router.post('/create',verifyAuth(...Object.values(Role)),
validateRequest(CreateBookingZodSchema),
BookingControllers.createBooking)


router.get('/',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),BookingControllers.getAllBookings)


router.get('/my-bookings',verifyAuth(...Object.values(Role)),BookingControllers.getUserBooking)


router.get('/:id',verifyAuth(...Object.values(Role)),BookingControllers.getSingleBookings)

router.patch('/:id',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),
validateRequest(UpdateBookingZodSchema),
BookingControllers.updateBooking)
router.delete('/:id',verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),BookingControllers.deleteBooking)


export const BookingRoutes= router
