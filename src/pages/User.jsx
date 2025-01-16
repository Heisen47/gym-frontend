import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

const User = () => {
//   const { id } = useParams();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user data from the backend
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`/api/users/${id}`);
//         const data = await response.json();
//         setUserData(data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

const userData = {
    id: 1,
    name: 'John Doe',
    email: 'hon.haha@email.com'
}

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: 
        {userData.id}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Render other user data as needed */}
    </div>
  );
};

export default User;