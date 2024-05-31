# Sharelive TFG

<p align="center">

  <img src="https://github.com/jmcamposdev/shareLive/assets/108521775/8bcd51b6-4e96-465b-b2c0-ce0a0639fbee" width="300px" />


  

</p>


## Project Link 🌐
Access to the website here -> [Sharelive](https://sharelive.jmcampos.dev)

## Table of Contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Project Structure](#project-structure)
* [RESTful API](#restful-api)
* [Key Features](#key-features)

## General Info
Sharelive is a web application oriented to the search and publication of room rental ads. The platform stands out for its intuitive and easy-to-navigate interface, allowing users to filter their searches by various criteria such as price, size, location, among others.

Sharelive's main objective is to help students, workers and anyone who needs to move home to find a room for rent quickly and easily. Sharelive seeks to simplify the process of searching and posting room listings, providing an accessible and efficient platform for both renters and landlords.

### Entity Relationship Diagram
![SCR-20240531-kybn](https://github.com/jmcamposdev/shareLive/assets/108521775/2d649e96-cea0-4ae1-a733-ae80451bd0cc)


## Technologies

Project is created with:
<table>
  <tr>
    <td align="center">
      <img width="441" height="1">
      <p><strong>FRONTEND</strong></p>
    </td>
    <td align="center">
      <img width="441" height="1">
      <p><strong>BACKEND</strong></p>
    </td>
    <td align="center">
      <img width="441" height="1">
      <p><strong>TOOLS</strong></p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
      <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35" alt="Vite" title="Vite"/>
      <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/ecd443af-ebba-4af8-a46e-1bf64d863b5b" alt="Babel" title="Babel"/>
    </td>
    <td align="center">
      <img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="MongoDB" title="MongoDB"/>
    </td>
    <td align="center">
      <img width="50" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm"/>
      <img width="50" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" title="Postman"/>
    </td>
  </tr>
</table>

## Setup

### Prerequisites
1. Node.js and npm installed
2. MySQL installed and configured

### Steps to Start the Application
To clone and run this applicaion, you'll need [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download) (which comes with [npm](https://www.npmjs.com/)) installed on you computer.

Next you will have to create a **MongoDB Atlas** database and copy the Cluster's URL

This is an example of what the MongoDB URL would look like 
- Copy the URL to the ENV file on ```/backend/.env.development```

```
mongodb+srv://<username>:<password>@cluster0.off3wjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

Clone the repository and start the project

```
# Clone this repository
$ git clone https://github.com/jmcamposdev/sharelive.git

# Go into the repository
$ cd sharelive

# Install dependencies on the Server and Client
$ cd frontend && npm i --force
$ cd ../backend && npm i

# Run the app
$ npm run dev // On the Client and Server
```

## Project Structure

```bash
integralProjectIZV/
│
├── frontend/
│ ├── public/
│ │ └── ... (React public files)
│ ├── src/
│ │ ├── assets/
│ │ │ ├── img/
│ │ │ ├── logos/
│ │ │ ├── vectors/
│ │ │ └── lottifiles/
│ │ ├── components/
│ │ │ ├── commons/
│ │ │ └── ... (React components)
│ │ ├── pages/
│ │ │ └── ... (React pages)
│ │ ├── constants/
│ │ ├── context/ (Custom Context)
│ │ ├── hooks/ (Custom Hooks)
│ │ ├── css/
│ │ ├── data/ (Mock Data)
│ │ ├── fonts/ (All Fonts)
│ │ ├── services/ (Backend Connections)
│ │ ├── utils/ (Global Functions)
│ │ ├── App.js
│ │ └── index.js
│ │
│ ├── .gitignore
│ ├── .env.development
│ ├── .env.production
│ ├── package.json
│ └── README.md
│
├── backend/
│ ├── database/
│ ├── faker/ (Generate Fake Data)
│ ├── listeners/
│ │ └── ... (Socket.io connections)
│ ├── middlewares/
│ │ └── ... (Node.js middlewares)
│ ├── controllers/
│ │ └── ... (Node.js controllers)
│ ├── models/
│ │ └── ... (Database models)
│ ├── routes/
│ │ └── ... (Express routes)
│ ├── index.js
│ │
│ ├── .gitignore
│ ├── package.json
│ └── README.md
│
├── .gitignore
├── package.json
├── README.md
└── ...
```

## RESTful API
Welcome to the Sharelive RESTful API. This API provides access to the management of all available resources.

### Base URL 
The API will only be accessible from the **web**, access from outside the url [https://sharelive.jmcampos.dev](sharelive.jmcampos.dev) is prohibited for security reasons. In localhost you can make requests from outside the web.

### Authentication

To access certain resources, authentication is required. Be sure to include the `x-access-token` header with a valid token in the relevant requests.

### Endpoints

#### Auth
- `POST /auth/signin`: Sign in a user. Returns a `JSON` object with the user's data and a token. Requires a `JSON` object with the user's data.
- `POST /auth/signup`: Sign up a new user. Returns a `JSON` object with the new user's data and a token. Requires a `JSON` object with the user's data.

#### Message
- `GET /messages/:from/:to`: Get all messages between two users. Returns a `JSON` array of messages sorted by creation date. Each message includes `_id`, `fromSelf` (a boolean indicating if the message is from the requesting user), `message`, and `createdAt`.
- `POST /messages`: Create a new message. Returns a `JSON` object with the new message's data. Requires a `JSON` object with `from` (sender ID), `to` (recipient ID), and `message` (message content).

#### Review
- `GET /reviews/:id`: Get all reviews for a user. Returns a `JSON` array of reviews. Requires the user ID as a URL parameter.
- `POST /reviews`: Create a new review. Returns a `JSON` object with the new review's data. Requires a `JSON` object with `ownerId`, `assignedId`, `reviewRate`, and `reviewContent`.
- `PUT /reviews/:id`: Update a review by ID. Returns a `JSON` object with the updated review's data. Requires a `JSON` object with `ownerId`, `ownerName`, `ownerAvatar`, `reviewRate`, `reviewContent`, `helpful`, and `notHelpful`.
- `DELETE /reviews/:id`: Delete a review by ID. Returns a `JSON` object with a success message. Requires the review ID as a URL parameter.

#### Room
- `GET /rooms`: Get all rooms. Returns a `JSON` array of all rooms.
- `GET /rooms/:id`: Get a room by ID. Returns a `JSON` object with the room's data. 
- `POST /rooms`: Create a new room. Returns a `JSON` object with the new room's data. Requires a `JSON` object with the room's data.
- `PUT /rooms/:id`: Update a room by ID. Returns a `JSON` object with the updated room's data. Requires a `JSON` object with the room's data.
- `DELETE /rooms/:id`: Delete a room by ID. Returns a `JSON` object with the deleted room's data.
- `POST /rooms/:id/images`: Upload images for a room. Returns a `JSON` array of the uploaded images' URLs. Requires a `form-data` object with the images.
- `DELETE /rooms/:id/images`: Delete images for a room. Returns a `JSON` object with a success message. Requires a `JSON` object with the images' URLs to delete.
- `GET /rooms/:id/visits`: Increment and get the visit count for a room. Returns a `JSON` object with the updated visit count.

#### User
- `GET /users`: Get all users. Returns a `JSON` array of all users.
- `GET /users/:id`: Get a user by ID. Returns a `JSON` object with the user's data.
- `POST /users`: Create a new user. Returns a `JSON` object with the new user's data. Requires a `JSON` object with the user's data.
- `PUT /users/:id`: Update a user by ID. Returns a `JSON` object with the updated user's data. Requires a `JSON` object with the user's data.
- `DELETE /users/:id`: Delete a user by ID. Returns a `JSON` object with the deleted user's data.
- `POST /users/:id/avatar`: Upload an avatar for a user. Returns a `JSON` object with the user's data, including the new avatar URL. Requires a `form-data` object with the avatar image.
- `PUT /users/:id/password`: Change a user's password. Returns a `JSON` object with the updated user's data. Requires a `JSON` object with the current and new passwords.
- `GET /users/:id/rooms`: Get all rooms created by a user. Returns a `JSON` array of the user's rooms.
- `GET /users/:id/favourite-rooms`: Get all favourite rooms of a user. Returns a `JSON` array of the user's favourite rooms.
- `POST /users/:id/favourite-rooms`: Toggle a favourite room for a user. Returns a `JSON` object with the updated user's data. Requires a `JSON` object with the room ID.
- `GET /users/contacts`: Get the contact list of the current user. Returns a `JSON` array of the user's contacts.
- `POST /users/:id/contacts`: Add a user to the contact list. Returns a `JSON` object with the updated user's data. Requires a `JSON` object with the contact ID.
- `DELETE /users/contacts/:contactId`: Delete a user from the contact list. Returns a `JSON` object with the updated user's data.

#### Statistics
- `GET /statistics/rooms`: Get statistics about rooms. Returns a `JSON` object with the total number of rooms, total visits to rooms, and total number of rooms marked as favorites.
- `GET /statistics/reviews`: Get statistics about reviews. Returns a `JSON` object with the total number of reviews and the average review rate.
- `GET /statistics/weekly`: Get weekly statistics. Returns a `JSON` object with the number of new users, new rooms, and new reviews for the past week.
- `GET /statistics/activities/:limit?`: Get activity logs. Returns a `JSON` array of activity logs, limited by the optional `limit` parameter.

## User Features
- View rooms: Browse through available rooms.
- Filter rooms: Filter rooms by price range, number of bedrooms, bathrooms, structure type, square meters, and amenities such as microwave, refrigerator, dishwasher, etc.
- Sort results: Sort room listings by newest, lowest price, or highest price.
- Change room layout: Switch between grid and list view for room listings.
- View room details: Access detailed information and photos of each room.
- Save favorites: Save favorite rooms for future reference.
- Share rooms: Share room listings via WhatsApp, Facebook, and Twitter.
- Message room owner: Communicate with room owners through the integrated messaging system connected via socket.
- View street scores: Check street scores for walking, driving, and cycling.
- View owner profile: Explore the profile of room owners, including their posted rooms and reviews.
- Message owner: Send messages to room owners directly from their profile.
- View owner's published rooms: Access a list of all rooms published by a specific owner.
- View owner's reviews: Read reviews received by a room owner, and sort them as per preference.
- Write reviews: Write reviews for rooms and vote on existing reviews (requires login).
- Login/Register: Log in or register to access features such as the dashboard, room creation, room management, profile modification, and message viewing.
- Dashboard: Access a personalized dashboard to manage rooms, view reviews, modify profile, and check received messages.
- Dark/Light mode switch: Toggle between light and dark mode for better readability.

#### Admin Features
- View rooms: Browse through available rooms.
- Filter rooms: Filter rooms by price range, number of bedrooms, bathrooms, structure type, square meters, and amenities such as microwave, refrigerator, dishwasher, etc.
- Sort results: Sort room listings by newest, lowest price, or highest price.
- Change room layout: Switch between grid and list view for room listings.
- View room details: Access detailed information and photos of each room.
- Save favorites: Save favorite rooms for future reference.
- Share rooms: Share room listings via WhatsApp, Facebook, and Twitter.
- Message room owner: Communicate with room owners through the integrated messaging system connected via socket.
- View street scores: Check street scores for walking, driving, and cycling.
- View owner profile: Explore the profile of room owners, including their posted rooms and reviews.
- Message owner: Send messages to room owners directly from their profile.
- View owner's published rooms: Access a list of all rooms published by a specific owner.
- View owner's reviews: Read reviews received by a room owner, and sort them as per preference.
- Write reviews: Write reviews for rooms and vote on existing reviews (requires login).
- Login/Register: Log in or register to access features such as the dashboard, room creation, room management, profile modification, and message viewing.
- Dashboard: Access a personalized dashboard to manage rooms, view reviews, modify profile, and check received messages.
- Dark/Light mode switch: Toggle between light and dark mode for better readability.
- Manage users: View and administer all users, including changing their role to administrator or user, modifying any user's details, and deleting users.
- Manage rooms: Edit, create, and delete any room listing.
- Edit profile: Modify the admin's profile information.

## License
This project is under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
Campos Trujillo, José María - [jmcamposdev](https://github.com/jmcamposdev)

Carlos Hernandez Palma - [carloshpdev](https://github.com/carloshpdev)

Carlos Hernandez Palma - [carloshpdev](https://github.com/carloshpdev)


## Acknowledgments
We appreciate the collaboration of IES Zaidín-Vergeles in this project.
