// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { MapPin, Phone, Mail, Building, CreditCard } from "lucide-react";
// import { motion } from "framer-motion";

// const ContactSection = () => {
//   const serviceAreas = [
//     "Erode",
//     "Coimbatore",
//     "Salem",
//     "Tirupur",
//     "Namakkal",
//     "Dharmapuri",
//     "Thanjavur",
//     "Madurai",
//     "Chennai",
//     "Bangalore",
//     "Palakkad",
//     "Trivandrum",
//     "Ernakulam",
//     "Kollam",
//     "Surat",
//     "Bhilwara",
//     "Bhiwandi",
//     "Mumbai",
//   ];

//   // ✅ Updated to motion.create to remove deprecation warning
//   const MotionCard = motion.create(Card);

//   return (
//     <section className="py-20 bg-gradient-to-br from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <motion.h2
//             className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-700 via-fuchsia-500 to-amber-500 text-green-900 bg-clip-text text-transparent drop-shadow-lg hover:text-slate-500 cursor-pointer"
//             initial={{ scale: 0.95 }}
//             animate={{ scale: [0.95, 1.02, 1] }}
//             transition={{
//               duration: 2,
//               ease: "easeInOut",
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           >
//             Contact Information
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-lg md:text-xl text-o max-w-xl mx-auto leading-relaxed text-fuchsia-500 font-bold"
//           >
//             Get in touch with us for all your uniform requirements. We are just
//             a call or email away.
//           </motion.p>
//         </div>

//         {/* Starting of Contact Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//           {/* Main Office */}
//           <MotionCard
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="hover:shadow-xl transition-shadow bg-yellow-100 text-9xl font-bold hover:bg-sky-100 cursor-pointer"
//           >
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-brand-red">
//                 <span className="bg-brand-red/10 p-2 rounded-full">
//                   <Building className="w-5 h-5 text-brand-red" />
//                 </span>
//                 Main Office
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4 text-sm">
//               <div className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 mt-1 text-brand-blue" />
//                 <div>
//                   <p className="font-semibold">Sri Sakthi Uniforms</p>
//                   <p className="text-gray-600">
//                     D.No. 391, Easwaran Koil Street,
//                     <br />
//                     Erode, Tamilnadu, India - 638001
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Phone className="w-4 h-4 text-brand-blue" />
//                 <div className="space-x-2">
//                   <a
//                     href="tel:+919786197831"
//                     className="text-brand-red hover:underline"
//                   >
//                     +91 97861 97831
//                   </a>
//                   <span className="text-gray-400">|</span>
//                   <a
//                     href="tel:+919786597835"
//                     className="text-brand-red hover:underline"
//                   >
//                     +91 97865 97835
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 text-brand-blue" />
//                 <a
//                   href="mailto:contact@sakthiuniforms.com"
//                   className="text-brand-red hover:underline"
//                 >
//                   contact@sakthiuniforms.com
//                 </a>
//               </div>
//             </CardContent>
//           </MotionCard>

//           {/* Branch Office */}
//           <MotionCard
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="hover:shadow-xl transition-shadow bg-yellow-100 text-9xl font-bold hover:bg-sky-100 cursor-pointer"
//           >
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-brand-red">
//                 <span className="bg-brand-red/10 p-2 rounded-full">
//                   <Building className="w-5 h-5 text-brand-red" />
//                 </span>
//                 Branch Office
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-3 text-sm">
//               <div className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 mt-1 text-brand-blue" />
//                 <div>
//                   <p className="font-semibold">Sri Sakthi Uniforms</p>
//                   <p className="text-gray-600">
//                     D.No. 29, Ramasamy Street,
//                     <br />
//                     Erode, Tamilnadu, India - 638001
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </MotionCard>

//           {/* GST and Bank Details */}
//           <MotionCard
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="hover:shadow-xl transition-shadow bg-yellow-100 text-9xl font-bold hover:bg-sky-100 cursor-pointer"
//           >
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-brand-red">
//                 <span className="bg-brand-red/10 p-2 rounded-full">
//                   <CreditCard className="w-5 h-5 text-brand-red" />
//                 </span>
//                 Business Details
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-3 text-sm">
//               <div>
//                 <p className="font-semibold text-gray-800">GST No:</p>
//                 <p className="text-gray-600">33AUBPS5016P2ZC</p>
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-800">Bank Details:</p>
//                 <div className="text-gray-600 text-sm space-y-1">
//                   <p>Account Name: Sri Sakthi Uniforms</p>
//                   <p>Account No: 5020 003 8888427</p>
//                   <p>IFSC code: HDFC0001589</p>
//                   <p>Branch: Gandhiji Road, Erode</p>
//                 </div>
//               </div>
//             </CardContent>
//           </MotionCard>
//         </div>

//         {/* Service Areas */}
//         <div className="text-center mb-14">
//           <motion.h2
//             className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-700 via-fuchsia-500 to-amber-500 text-green-900 bg-clip-text text-transparent drop-shadow-lg hover:text-slate-500 cursor-pointer"
//             initial={{ scale: 0.95 }}
//             animate={{ scale: [0.95, 1.02, 1] }}
//             transition={{
//               duration: 2,
//               ease: "easeInOut",
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           >
//             Our Service Areas
//           </motion.h2>
//         </div>
//         <Card className="shadow-md bg-slate-200">
//           <CardHeader></CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap justify-center gap-3 rounded-xl">
//               {serviceAreas.map((area, i) => (
//                 <span
//                   key={i}
//                   className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6ccfbf] text-white text-base sm:text-lg font-semibold shadow-lg hover:bg-[#c4ee6f] transition duration-300 ease-in-out group cursor-pointer transform hover:scale-110"
//                 >
//                   <span className="relative z-10">{area}</span>
//                   <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />
//                 </span>
//               ))}
//               <span className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#728385] text-white text-base sm:text-lg font-semibold shadow-lg hover:bg-[#1f2937] transition duration-300 ease-in-out group transform hover:scale-110">
//                 <span className="relative z-10">+ All India</span>
//                 <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />
//               </span>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

//////////*************************************************************************************** *//////////////////////////

// app/contact/page.tsx
"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContactDetailsApiServer } from "@/app/redux/detailSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Building, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

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
            className="text-lg md:text-xl text-o max-w-xl mx-auto leading-relaxed text-fuchsia-500 font-bold"
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
                  {item.address && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-1 text-brand-blue" />
                      <div>
                        <p className="font-semibold">Sri Sakthi Uniforms</p>
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
                      <p className="font-semibold text-gray-800">
                        Bank Details:
                      </p>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Account Name: {item.bankDetails.accountName}</p>
                        <p>Account No: {item.bankDetails.accountNo}</p>
                        <p>IFSC code: {item.bankDetails.ifsc}</p>
                        <p>Branch: {item.bankDetails.branch}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </MotionCard>
            ))
          )}
        </div>

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
        <Card className="shadow-md bg-slate-200">
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
