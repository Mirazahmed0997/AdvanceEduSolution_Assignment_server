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
Responsive UI built with ShadCN components and Tailwind CSS
Admin panel: Create, update, delete tours, tour types, and divisions
Super Admin: Full admin management


>>>>>>>
**Payment Getway:**

Online payment integration with SSLCommerz, After creating the booking there will be a payment link this >>>>>>>

 "paymentUrl": "https://sandbox.sslcommerz.com/gwprocess/v3/gw.php?Q=PAY&SESSIONKEY=31981B27C378A51BCA825F6C84746C17"
  }
This url will routed to the sslcommerce payment getway page, So click the url to pay for the booking.

>>>>>>>


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



