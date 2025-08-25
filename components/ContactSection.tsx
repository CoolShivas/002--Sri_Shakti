"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContactDetailsApiServer } from "@/app/redux/detailSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Building, CreditCard, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define interface for API response (adjust based on actual structure)
interface ContactDetail {
  officeType: string; // e.g., 'Main Office', 'Branch Office'
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

// Define state shape for TypeScript
interface RootState {
  contactDetails: {
    detailArr: ContactDetail[];
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

  const MotionCard = motion.create(Card);

  // Fallback static data if API fails or is empty
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

  // Use API data if available, else fallback
  const dataToDisplay =
    status === "succeeded" && detailArr.length > 0 ? detailArr : fallbackData;

  const renderCardContent = (item: ContactDetail, modal = false) => (
    <>
      {item.address && (
        <div className="flex items-start gap-2">
          <MapPin className={`w-4 h-4 mt-1 text-brand-blue`} />
          <div>
            <p className="font-semibold text-xl mb-2">Sri Sakthi Uniforms</p>
            <p className="text-gray-600">{item.address}</p>
          </div>
        </div>
      )}

      {item.phone && item.phone.length > 0 && (
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-brand-blue" />
          <div className="space-x-2">
            {item.phone.map((phone, i) => (
              <span key={i}>
                <a
                  href={`tel:${phone}`}
                  className="text-brand-red hover:underline"
                >
                  {phone}
                </a>
                {i < item.phone.length - 1 && (
                  <span className="text-gray-400"> | </span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {item.email && (
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-brand-blue" />
          <a
            href={`mailto:${item.email}`}
            className="text-brand-red hover:underline"
          >
            {item.email}
          </a>
        </div>
      )}

      {item.gst && (
        <div>
          <p className="font-semibold text-gray-800">GST No:</p>
          <p className="text-gray-600">{item.gst}</p>
        </div>
      )}

      {item.bankDetails && (
        <div>
          <p className="font-semibold text-gray-800">Bank Details:</p>
          <div
            className={`${
              modal ? "text-base" : "text-sm"
            } text-gray-600 space-y-1`}
          >
            <p>Account Name: {item.bankDetails.accountName}</p>
            <p>Account No: {item.bankDetails.accountNo}</p>
            <p>IFSC code: {item.bankDetails.ifsc}</p>
            <p>Branch: {item.bankDetails.branch}</p>
          </div>
        </div>
      )}
    </>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-700 via-fuchsia-500 to-amber-500 text-green-900 bg-clip-text text-transparent drop-shadow-lg hover:text-slate-500 cursor-pointer"
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-o max-w-xl mx-auto leading-relaxed text-fuchsia-500 font-bold mt-6"
          >
            Get in touch with us for all your uniform requirements. We are just
            a call or email away.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {status === "loading" ? (
            <p className="text-center col-span-full">Loading...</p>
          ) : status === "failed" ? (
            <p className="text-center col-span-full text-red-500">
              Error loading contact details
            </p>
          ) : (
            dataToDisplay.map((item, index) => (
              <MotionCard
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="hover:shadow-xl transition-shadow bg-yellow-100 font-bold hover:bg-sky-100 cursor-pointer"
                onClick={() => setSelectedCard(item)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-brand-red">
                    <span className="bg-brand-red/10 p-2 rounded-full">
                      {item.officeType === "Business Details" ? (
                        <CreditCard className="w-5 h-5 text-brand-red" />
                      ) : (
                        <Building className="w-5 h-5 text-brand-red" />
                      )}
                    </span>
                    {item.officeType}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 text-sm">
                  {renderCardContent(item)}
                </CardContent>
              </MotionCard>
            ))
          )}
        </div>

        {/* BIG Overlay Modal */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                className="relative w-[96vw] max-w-5xl"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  aria-label="Close modal"
                  onClick={() => setSelectedCard(null)}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-1.5 shadow-lg hover:scale-105 transition"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                {/* Same card look, just larger */}
                <Card className="bg-yellow-100 font-bold rounded-2xl shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-brand-red">
                      <span className="bg-brand-red/10 p-2 rounded-full">
                        {selectedCard.officeType === "Business Details" ? (
                          <CreditCard className="w-5 h-5 text-brand-red" />
                        ) : (
                          <Building className="w-5 h-5 text-brand-red" />
                        )}
                      </span>
                      {selectedCard.officeType}
                    </CardTitle>
                  </CardHeader>

                  {/* Bigger text inside modal for readability */}
                  <CardContent className="space-y-5 text-base md:text-lg">
                    {renderCardContent(selectedCard, true)}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Service Areas */}
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-700 via-fuchsia-500 to-amber-500 text-green-900 bg-clip-text text-transparent drop-shadow-lg hover:text-slate-500 cursor-pointer"
            initial={{ scale: 0.95 }}
            animate={{ scale: [0.95, 1.02, 1] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Our Service Areas
          </motion.h2>
        </div>

        <Card className="shadow-md bg-slate-200 m-4 p-4 rounded-2xl">
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3 rounded-xl">
              {serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6ccfbf] text-white text-base sm:text-lg font-semibold shadow-lg hover:bg-[#c4ee6f] transition duration-300 ease-in-out group cursor-pointer transform hover:scale-110"
                >
                  <span className="relative z-10">{area}</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />
                </span>
              ))}
              <span className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#728385] text-white text-base sm:text-lg font-semibold shadow-lg hover:bg-[#1f2937] transition duration-300 ease-in-out group transform hover:scale-110">
                <span className="relative z-10">+ All India</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
