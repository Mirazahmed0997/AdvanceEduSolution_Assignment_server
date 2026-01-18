To run this app >>>>>
add env variables from .env.example
npm install,
npm run dev
>>>>>>>>>>>>>>
vercel live link : https://advance-edu-phi.vercel.app/
>>>>>>>>>>
endpoints: 
User: 
POST: http://localhost:5000/api/v1/user/register
GET: http://localhost:5000/api/v1/user
GET: http://localhost:5000/api/v1/user/:id
PATCH: http://localhost:5000/api/v1/user/:id
>>>>>>>>>>>
Auth:
POST: http://localhost:5000/api/v1/auth/login
POST: http://localhost:5000/api/v1/auth/google
POST: http://localhost:5000/api/v1/auth/log-out
POST: http://localhost:5000/api/v1/auth/setPassword
POST: http://localhost:5000/api/v1/auth/forgotPassword
POST: http://localhost:5000/api/v1/auth/resetPassword
>>>>>>>>>>>
Division: 
POST: http://localhost:5000/api/v1/division/create
GET: http://localhost:5000/api/v1/division
GET: http://localhost:5000/api/v1/:id
PATCH: http://localhost:5000/api/v1/:id
>>>>>>>>>>>
Tour Type:
POST: http://localhost:5000/api/v1/TourType/create
GET: http://localhost:5000/api/v1/TourType
GET: http://localhost:5000/api/v1/TourType/:id
PATCH: http://localhost:5000/api/v1/TourType/:id
>>>>>>>>>>>
Tour:
POST: http://localhost:5000/api/v1/Tour/create
GET: http://localhost:5000/api/v1/Tour
GET: http://localhost:5000/api/v1/Tour/:id
PATCH: http://localhost:5000/api/v1/Tour/:id
>>>>>>>>
Bookings: 
POST: http://localhost:5000/api/v1/Booking/create
GET: http://localhost:5000/api/v1/Booking
GET: http://localhost:5000/api/v1/Booking/my-bookings
>>>>>>>>
OTP:
POST: http://localhost:5000/api/v1/Otp/send
POST: http://localhost:5000/api/v1/Otp/verify



