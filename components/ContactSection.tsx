"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContactDetailsApiServer } from "@/app/redux/detailSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, CreditCard, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactDetail {
  officeType: string;
  address?: string;
  phone?: string[];
  email?: string;
  gst?: string;
  bankDetails?: {
    accountName: string;
    accountNo: string;
    ifsc: string;
    branch: string;
  };
}

interface RootState {
  contactDetails: {
    detailArr: any;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  };
}

const ContactSection = () => {
  const dispatch = useDispatch();
  const detailArr = useSelector(
    (state: RootState) => state.contactDetails.detailArr
  );
  const status = useSelector((state: RootState) => state.contactDetails.status);

  const [selectedCard, setSelectedCard] = useState<ContactDetail | null>(null);

  useEffect(() => {
    dispatch(fetchContactDetailsApiServer());
  }, [dispatch]);

  const serviceAreas = [
    "Erode",
    "Coimbatore",
    "Salem",
    "Tirupur",
    "Namakkal",
    "Dharmapuri",
    "Thanjavur",
    "Madurai",
    "Chennai",
    "Bangalore",
    "Palakkad",
    "Trivandrum",
    "Ernakulam",
    "Kollam",
    "Surat",
    "Bhilwara",
    "Bhiwandi",
    "Mumbai",
  ];

  const fallbackData: ContactDetail[] = [
    {
      officeType: "Main Office",
      address:
        "D.No. 391, Easwaran Koil Street, Erode, Tamilnadu, India - 638001",
      phone: ["+91 97861 97831", "+91 97865 97835"],
      email: "contact@sakthiuniforms.com",
    },
    {
      officeType: "Branch Office",
      address: "D.No. 29, Ramasamy Street, Erode, Tamilnadu, India - 638001",
    },
    {
      officeType: "Business Details",
      gst: "33AUBPS5016P2ZC",
      bankDetails: {
        accountName: "Sri Sakthi Uniforms",
        accountNo: "5020 003 8888427",
        ifsc: "HDFC0001589",
        branch: "Gandhiji Road, Erode",
      },
    },
  ];

  const normalizedData: ContactDetail[] = detailArr
    ? Array.isArray(detailArr)
      ? detailArr
      : [
          {
            officeType: "Main Office",
            address: detailArr.mainOffice,
            phone: [detailArr.contactNo1, detailArr.contactNo2].filter(Boolean),
            email: detailArr.email,
          },
          {
            officeType: "Branch Office",
            address: detailArr.branchOffice,
          },
          {
            officeType: "Business Details",
            gst: detailArr.GSTNO,
            bankDetails: {
              accountName: detailArr.accountName,
              accountNo: detailArr.accountNumber,
              ifsc: detailArr.IFSCcode,
              branch: detailArr.branch,
            },
          },
        ]
    : [];

  const dataToDisplay =
    status === "succeeded" && normalizedData.length > 0
      ? normalizedData
      : fallbackData;

  const renderCardContent = (item: ContactDetail) => (
    <div className="space-y-3 text-base sm:text-xl">
      {item.address && <p className="text-gray-700">{item.address}</p>}
      {item.phone &&
        item.phone.map((phone, i) => (
          <p key={i} className="text-brand-red font-semibold">
            {phone}
          </p>
        ))}
      {item.email && <p className="text-blue-600">{item.email}</p>}
      {item.gst && (
        <p className="text-gray-700 font-semibold">GST No: {item.gst}</p>
      )}
      {item.bankDetails && (
        <div className="text-gray-700 space-y-1">
          <p>Account Name: {item.bankDetails.accountName}</p>
          <p>Account No: {item.bankDetails.accountNo}</p>
          <p>IFSC: {item.bankDetails.ifsc}</p>
          <p>Branch: {item.bankDetails.branch}</p>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-700 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: [0.95, 1.02, 1] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Contact Information
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium mt-6">
            Get in touch with us for all your uniform requirements. We are just
            a call or email away.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataToDisplay.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedCard(item)}
            >
              <Card
                className={`shadow-lg rounded-2xl transition-all duration-300 ${
                  item.officeType === "Main Office"
                    ? "bg-blue-100"
                    : item.officeType === "Branch Office"
                    ? "bg-yellow-100"
                    : "bg-amber-100"
                }`}
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  {item.officeType === "Main Office" && (
                    <Building className="w-6 h-6 text-red-500" />
                  )}
                  {item.officeType === "Branch Office" && (
                    <MapPin className="w-6 h-6 text-orange-500" />
                  )}
                  {item.officeType === "Business Details" && (
                    <CreditCard className="w-6 h-6 text-pink-500" />
                  )}
                  <CardTitle className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    {item.officeType}
                  </CardTitle>
                </CardHeader>
                <CardContent>{renderCardContent(item)}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overlay Modal */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.7 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 w-[90%] max-w-sm sm:max-w-lg md:max-w-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Header with Icon + Title */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  {selectedCard.officeType === "Main Office" && (
                    <Building className="w-7 h-7 text-red-500" />
                  )}
                  {selectedCard.officeType === "Branch Office" && (
                    <MapPin className="w-7 h-7 text-orange-500" />
                  )}
                  {selectedCard.officeType === "Business Details" && (
                    <CreditCard className="w-7 h-7 text-pink-500" />
                  )}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-fuchsia-600 text-center">
                    {selectedCard.officeType}
                  </h2>
                </div>

                {renderCardContent(selectedCard)}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
