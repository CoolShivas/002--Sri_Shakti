"use client";

import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogoHeroBgImageServer } from "@/app/redux/thirdSlice";
import { fetchContactDetailsApiServer } from "@/app/redux/detailSlice";

const Header = () => {
  const dispatch = useDispatch();

  // Redux state
  const logoHeroArr = useSelector(
    (state: any) => state.logoHeroImages.logoHeroArr
  );
  const logoStatus = useSelector((state: any) => state.logoHeroImages.status);

  const contactDetails = useSelector(
    (state: any) => state.contactDetails.detailArr
  );
  const contactStatus = useSelector(
    (state: any) => state.contactDetails.status
  );

  // Fetch data if idle
  useEffect(() => {
    if (logoStatus === "idle") dispatch(fetchLogoHeroBgImageServer());
    if (contactStatus === "idle") dispatch(fetchContactDetailsApiServer());
  }, [dispatch, logoStatus, contactStatus]);

  // Find logo from thirdSlice
  const logoItem = logoHeroArr.find((item: any) => item?.type === "logo");
  const logoSrc = logoItem?.url || "/images/default-logo.jpg";

  // Contact numbers (expecting two numbers)
  const contactNumbers = contactDetails?.[0]?.contactNumbers || [
    "+91 97861 97831",
    "+91 97865 97835",
  ];

  return (
    <div className="bg-white border-b border-gray-200 text-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Image
            src={logoSrc}
            alt="Sri Sakthi Uniforms Logo"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
            priority
          />
          <span className="text-lg sm:text-xl font-bold tracking-wide uppercase text-center sm:text-left">
            SRI <span className="text-red-600">SAKTHI</span> UNIFORMS
          </span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600 font-bold">
          {contactNumbers.map((number, index) => (
            <div key={index} className="flex items-center gap-1">
              <FaPhoneAlt className="text-blue-600" />
              <Link
                href="/contact"
                className="hover:text-red-600 hover:text-xl"
              >
                {number}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
