import React, { useEffect, useRef, useState } from "react";
import PaymentHistoryTable from "./PaymentHistoryTable";
import axios from "axios";
import UpdateProfileModal from "./UpdateProfileModal";
import { Camera } from "lucide-react";
import { Button, CircularProgress } from "@mui/material";
import DeleteProfileAlert from "./DeleteProfileAlert";
import { useNavigate } from "react-router";
import UpdatePaymentsModal from "./UpdatePaymentsModal";
import * as XLSX from "xlsx";
import dayjs from "dayjs";
import { Download } from "@mui/icons-material";

export default function UserProfile({ customer, id }) {
  const [loading, setLoading] = useState(true);
  const [payment, setPayment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [image, setImage] = useState(customer.image);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoadingImage(true);
      await uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.put(
        `http://localhost:8080/customers/${id}/image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setImage(response.data.image);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoadingImage(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/payments/user/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setPayment(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false);
      }
    };

    fetchPayments();
  }, [id]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleOpenPaymentModal = () => setPaymentModalOpen(true);
  const handleClosePaymentModal = () => setPaymentModalOpen(false);

  const handleOpenDeleteModal = () => setDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setDeleteModalOpen(false);

  const handleDeleteProfile = async () => {
    try {
      await axios.put(`http://localhost:8080/customers/${id}/delete`);
      handleCloseDeleteModal();
      navigate("/admin/customers");
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

    const handleDownload = () => {
      const worksheet = XLSX.utils.json_to_sheet(
        payment.map((row) => ({
          "User ID": row.user.id,
          Name: row.user.name,
          Amount: row.paymentAmount,
          "Payment Date": dayjs(row.paymentDate).format("DD-MMM-YYYY"),
          "Payment Method": row.paymentMethod,
          Validity: dayjs(row.validity).format("DD-MMM-YYYY"),
        }))
      );
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");
      XLSX.writeFile(workbook, "Payments.xlsx");
    };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white rounded-lg shadow p-5 text-center mb-6">
              {/* image container */}

              <div className="relative group w-36 mx-auto">
                {loadingImage ? (
                  <div className="w-36 h-36 flex items-center justify-center">
                    <CircularProgress size={20} />
                  </div>
                ) : (
                  <img
                    src={image}
                    alt="avatar"
                    className="rounded-full w-36 h-36 mb-3"
                  />
                )}

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
                {/* Hover icon container */}
                <div
                  className="absolute bottom-3 right-0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-gray-800/75 p-2 rounded-full hover:bg-gray-800 cursor-pointer">
                    <Camera
                      className="w-5 h-5 text-white"
                      onClick={triggerFileInput}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  onClick={handleOpenModal}
                >
                  Update Profile
                </button>
                <button
                  className="border border-gray-300 py-2 px-4 rounded hover:bg-gray-100"
                  onClick={handleOpenDeleteModal}
                >
                  Delete Profile
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <ul className="divide-y">
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fas fa-globe text-yellow-500"></i>
                  <a
                    href="https://mdbootstrap.com"
                    className="text-blue-500 hover:underline"
                  >
                    Generate invoice
                  </a>
                </li>
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fab fa-github text-gray-800"></i>
                  <span>mdbootstrap</span>
                </li>
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fab fa-twitter text-blue-400"></i>
                  <span>@mdbootstrap</span>
                </li>
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fab fa-instagram text-pink-500"></i>
                  <span>mdbootstrap</span>
                </li>
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fab fa-facebook text-blue-700"></i>
                  <span>mdbootstrap</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-lg shadow p-5 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4">
                <p className="font-semibold">Full Name</p>
                <p className="col-span-2 text-gray-600">{customer.name}</p>
                <p className="font-semibold">Email</p>
                <p className="col-span-2 text-gray-600">{customer.email}</p>
                <p className="font-semibold">Phone</p>
                <p className="col-span-2 text-gray-600">
                  {customer.phoneNumber}
                </p>
              </div>
            </div>

            {/* payment history */}

            <div className="w-full">
              <div className="bg-white rounded-lg shadow p-5">
                <div className="flex justify-between items-center">
                  <p className="mb-4 text-lg font-medium text-primary">
                    Payment History
                  </p>
                  <div className="flex gap-4">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleOpenPaymentModal}
                    >
                      Update Payment
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleDownload}
                    >
                      <Download /> excel
                    </Button>
                  </div>
                </div>

                <div className="h-[300px] overflow-hidden">
                  <div>
                    <PaymentHistoryTable payment={payment} loading={loading} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Profile Modal */}
      <UpdateProfileModal
        open={modalOpen}
        handleClose={handleCloseModal}
        customer={customer}
      />

      {/* Delete Profile Modal */}
      <DeleteProfileAlert
        open={deleteModalOpen}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleDeleteProfile}
      />

      {/* Update Payments Modal */}
      <UpdatePaymentsModal
        open={paymentModalOpen}
        handleClose={handleClosePaymentModal}
        userId={id}
      />
    </section>
  );
}
