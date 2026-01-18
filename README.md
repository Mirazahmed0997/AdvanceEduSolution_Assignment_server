To run this app >>>>>
add env variables from .env.example
npm install,
npm run dev
>>>>>>>>>>>>>>
vercel live link : https://advance-edu-phi.vercel.app/
>>>>>>>>>>>>>
PORT: 5000
>>>>>>>>>>

A modern, feature-rich tour booking platform built with the MERN stack (MongoDB, Express, React, Node.js). Users can browse, book, and pay for tours securely, while admins manage tours, divisions, and tour types. Super admins have full control over user roles.
Key features:
Role-based access: User, Admin, Super Admin(JWT Authentication)
Secure authentication with Email/Password + Google OAuth (Passport.js + Google Cloud)
OTP verification & booking confirmation emails powered by Redis
Online payment integration with SSLCommerz
Responsive UI built with ShadCN components and Tailwind CSS
Admin panel: Create, update, delete tours, tour types, and divisions
Super Admin: Full admin management


API endpoints: 
User: 
POST: api/v1/user/register
GET: api/v1/user
GET: api/v1/user/:id
PATCH:api/v1/user/:id
>>>>>>>>>>>
Auth:
POST: api/v1/auth/login
POST: api/v1/auth/google
POST: api/v1/auth/log-out
POST: api/v1/auth/setPassword
POST: api/v1/auth/forgotPassword
POST: api/v1/auth/resetPassword
>>>>>>>>>>>
Division: 
POST: api/v1/division/create
GET:  api/v1/division
GET: api/v1/:id
PATCH: api/v1/:id
>>>>>>>>>>>
Tour Type:
POST: api/v1/TourType/create
GET: api/v1/TourType
GET: api/v1/TourType/:id
PATCH: api/v1/TourType/:id
>>>>>>>>>>>
Tour:
POST: api/v1/Tour/create
GET: api/v1/Tour
GET: api/v1/Tour/:id
PATCH: api/v1/Tour/:id
>>>>>>>>
Bookings: 
POST: api/v1/Booking/create
GET: api/v1/Booking
GET: api/v1/Booking/my-bookings
>>>>>>>>
OTP:
POST: api/v1/Otp/send
POST: api/v1/Otp/verify



