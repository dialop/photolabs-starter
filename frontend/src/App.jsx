import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';


const sampleDataForPhotoListItem = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    userProfileImage: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "New York",
      country: "USA",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Alice Smith",
    userProfileImage: `${process.env.PUBLIC_URL}/profile-2.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Paris",
      country: "France",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    username: "Bob Johnson",
    userProfileImage: `${process.env.PUBLIC_URL}/profile-3.jpg`,
  },
];

const App = () => (
  <div className="App">
    {sampleDataForPhotoListItem.map((data) => (
      <PhotoListItem key={data.id} data={data} />
    ))}
  </div>
);

export default App;
