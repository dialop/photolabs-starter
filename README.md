# PhotoLabs

PhotoLabs is a client side React-based single-page (SPA) application that allows users to view photos in a react view-layer library.

## Description

This project enables users to interact with photos from different categories using NODE with CSS/SCSS, REACT for the front-end, and EXPRESS and PSQL for the back-end.

## Features

- Users can view photos from the homepage loaded from the API.
- Users can navigate to different photo categories, also known as topics.
- Users can click on a photo to view a larger version of the photo and relevant/similar photos.
- Users can like a photo from anywhere within the application where the photo is displayed.
- Users can view a heart icon with a notification in the navigation if there are liked photos.

## PhotoLabs App Demonstration Animation

![PhotoLabs App Demonstration](./frontend/public/images/PhotoLabs_Demo.gif)

## Getting Started

To get started with PhotoLabs, follow these steps:

Install dependencies with `npm install` in both the `/frontend` and `/backend` directories.
Set up the PSQL database by creating and seeding it in the backend.

### Frontend Setup

```sh
cd frontend
npm start
```

### Backend Setup

```sh
cd backend
npm start
```

### Dependencies

- Node 16 or above
- PSQL version 8.5
- Express version 4.16
- Body-parser
- Cors
- Dotenv
- React version 18.2
- Axios
- SASS

## Conclusion

Thank you for checking the PhotoLabs project!
