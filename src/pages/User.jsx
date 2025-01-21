import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import UserProfile from '../components/dashboardComponents/UserProfile';

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


  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default User;