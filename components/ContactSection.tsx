"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Building, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
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

  const MotionCard = motion(Card);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}

        {/* <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Get in touch with us for all your uniform requirements
          </p>
        </div> */}

        <div className="text-center mb-14">
          {/* <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-brand-red to-brand-blue bg-clip-text text-transparent mb-4 drop-shadow-md text-green-800"
          >
            Contact Information
          </motion.h2> */}

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
          {/* Main Office */}

          <MotionCard
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="hover:shadow-xl transition-shadow bg-yellow-100 text-9xl font-bold hover:bg-sky-100 cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-red">
                <span className="bg-brand-red/10 p-2 rounded-full">
                  <Building className="w-5 h-5 text-brand-red" />
                </span>
                Main Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-brand-blue" />
                <div>
                  <p className="font-semibold">Sri Sakthi Uniforms</p>
                  <p className="text-gray-600">
                    D.No. 391, Easwaran Koil Street,
                    <br />
                    Erode, Tamilnadu, India - 638001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue" />
                <div className="space-x-2">
                  <a
                    href="tel:+919786197831"
                    className="text-brand-red hover:underline"
                  >
                    +91 97861 97831
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href="tel:+919786597835"
                    className="text-brand-red hover:underline"
                  >
                    +91 97865 97835
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue" />
                <a
                  href="mailto:contact@sakthiuniforms.com"
                  className="text-brand-red hover:underline"
                >
                  contact@sakthiuniforms.com
                </a>
              </div>
            </CardContent>
          </MotionCard>

          {/* Branch Office */}

          <MotionCard
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="hover:shadow-xl transition-shadow bg-yellow-100 text-9xl font-bold hover:bg-sky-100 cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-red">
                <span className="bg-brand-red/10 p-2 rounded-full">
                  <Building className="w-5 h-5 text-brand-red" />
                </span>
                Branch Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-brand-blue" />
                <div>
                  <p className="font-semibold">Sri Sakthi Uniforms</p>
                  <p className="text-gray-600">
                    D.No. 29, Ramasamy Street,
                    <br />
                    Erode, Tamilnadu, India - 638001
                  </p>
                </div>
              </div>
            </CardContent>
          </MotionCard>

          {/* GST and Bank Details */}

          <MotionCard
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="hover:shadow-xl transition-shadow bg-yellow-100 text-9xl font-bold hover:bg-sky-100 cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-red">
                <span className="bg-brand-red/10 p-2 rounded-full">
                  <CreditCard className="w-5 h-5 text-brand-red" />
                </span>
                Business Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-800">GST No:</p>
                <p className="text-gray-600">33AUBPS5016P2ZC</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Bank Details:</p>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>Account Name: Sri Sakthi Uniforms</p>
                  <p>Account No: 5020 003 8888427</p>
                  <p>IFSC code: HDFC0001589</p>
                  <p>Branch: Gandhiji Road, Erode</p>
                </div>
              </div>
            </CardContent>
          </MotionCard>
        </div>

        {/* Service Areas */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-brand-red text-xl">
              Our Service Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-gradient-to-r from-brand-red/10 to-brand-blue/10 text-gray-700 rounded-full text-sm font-medium hover:from-brand-red/20 hover:to-brand-blue/20 transition-colors"
                >
                  {area}
                </span>
              ))}
              <span className="px-4 py-1.5 bg-gradient-to-r from-brand-red to-brand-blue text-white rounded-full text-sm font-semibold shadow">
                + All India
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
