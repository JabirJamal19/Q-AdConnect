# Q-AdConnect

Q-AdConnect is a full-stack digital advertising platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It streamlines ad campaign management, allowing agencies and billboard owners to coordinate, manage, and optimize advertisements seamlessly.

## Features

* **User Authentication**: JWT-based secure login and signup for different user roles (Admin, Agency, Customer).
* **Ad Creation**: Users can create and submit advertisement requests.
* **Billboard Management**: Admins can add, update, and manage billboard statuses and availability.
* **Payment Integration**: Stripe API for secure customer payments.
* **Content Approval**: Admin panel for approving or rejecting advertisement content.
* **Agency Workflow**: Agency approval process with dashboard features.
* **Dashboard**: Real-time tracking of ads, performance, and billing.

## Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (NoSQL)

### Authentication

* JWT (JSON Web Tokens)

### APIs

* Stripe for payment processing

## Installation

1. **Clone the repository**

```bash
https://github.com/yourusername/Q-AdConnect.git
```

2. **Backend Setup**

```bash
cd server
npm install
npm run dev
```

3. **Frontend Setup**

```bash
cd client
npm install
npm run dev
```

## Folder Structure

```
Q-AdConnect/
├── client/               # React frontend
│   ├── components/
│   ├── pages/
│   └── redux/
├── server/               # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
└── README.md
```

## My Contributions

* Designed and implemented frontend UI components using React and Tailwind CSS.
* Managed state using Redux Toolkit.
* Built RESTful APIs with Express.js for user authentication and ad management.
* Integrated Stripe for secure online payments.
* Designed MongoDB schemas and optimized queries for performance.
* Collaborated with a teammate under the supervision of a university instructor.

## Future Improvements

* Admin analytics dashboard
* Multi-language support
* Integration with external ad performance tracking APIs

 License
This project is for educational purposes.
