
import { useEffect, useState } from "react";
import UserProfile from "../components/dashboardComponents/UserProfile";
import axios from "axios";
import { useParams } from "react-router";
import { Skeleton } from "@mui/material";

const User = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/customers/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const customerData = response.data;
        if (customerData.image) {
          const base64Image = `data:image/jpeg;base64,${customerData.image}`;
          customerData.image = base64Image;
        }

        setCustomer(customerData);
        setLoading(false);
        console.log(customerData);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton variant="circular" width={100} height={100} />
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="text" width={300} height={30} />
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton variant="rectangular" width="100%" height={200} />
          </div>
        </div>
      </section>
    );
  }

  if (!customer) {
    return (
      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <p>Customer not found</p>
        </div>
      </section>
    );
  }

  return <UserProfile customer={customer} id ={id}/>;
};

export default User;
