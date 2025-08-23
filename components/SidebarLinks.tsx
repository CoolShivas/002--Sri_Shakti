"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const categorySubpages = {
  schooluniform: [
    { label: "CBSE School", href: "/schooluniform/cbseschooluniform" },
    { label: "Private School", href: "/schooluniform/privateschooluniform" },
    { label: "Plain School", href: "/schooluniform/plainschooluniform" },
    {
      label: "Government School",
      href: "/schooluniform/governmentschooluniform",
    },
    { label: "Shirtings", href: "/schooluniform/shirtingschooluniform" },
    { label: "Suitings", href: "/schooluniform/suitingschooluniform" },
  ],
  womenuniform: [
    { label: "Plain Sarees", href: "/womenuniform/plainuniformsarees" },
    { label: "Set Sarees", href: "/womenuniform/setsarees" },
    { label: "Staff Sarees", href: "/womenuniform/staffuniformsarees" },
    { label: "Teachers Sarees", href: "/womenuniform/teachersuniformsarees" },
    { label: "Chudithars", href: "/womenuniform/uniformchudithars" },
    { label: "Wedding Sarees", href: "/womenuniform/weddinguniformsarees" },
  ],
  menuniform: [
    { label: "Staff Wear", href: "/menuniform/mensstaffuniform" },
    { label: "Blazers", href: "/menuniform/uniformblazers" },
    { label: "Pants", href: "/menuniform/uniformpants" },
    { label: "Shirts", href: "/menuniform/uniformshirts" },
    { label: "T-Shirts", href: "/menuniform/uniformtshirts" },
    { label: "Waist Coats", href: "/menuniform/uniformwaistcoats" },
  ],
  hoteluniform: [
    { label: "Chef Kitchen", href: "/hoteluniform/chefkitchenstaffuniform" },
    { label: "Concierge", href: "/hoteluniform/conciergemanagerialuniform" },
    { label: "Housekeeping", href: "/hoteluniform/housekeepinguniform" },
    { label: "Reception", href: "/hoteluniform/receptionfrontdeskuniform" },
    { label: "Spa Wellness", href: "/hoteluniform/spawellnessuniform" },
    { label: "Wait Staff", href: "/hoteluniform/waitstaffserviceuniform" },
  ],
  hospitaluniform: [
    { label: "Doctor Coat", href: "/hospitaluniform/doctorcoat" },
    { label: "Doctor Saree", href: "/hospitaluniform/doctoruniformsaree" },
    { label: "Hospital Wear", href: "/hospitaluniform/hospitaluniform" },
    { label: "Hospital Pants", href: "/hospitaluniform/hospitaluniformpant" },
    { label: "Hospital Saree", href: "/hospitaluniform/hospitaluniformsaree" },
    { label: "Men's Staff", href: "/hospitaluniform/mensstaffuniform" },
    { label: "Hospital Shirt", href: "/hospitaluniform/hospitaluniformshirt" },
    { label: "Nurse Wear", href: "/hospitaluniform/nurseuniform" },
    {
      label: "Operation Theatre",
      href: "/hospitaluniform/operationtheatreuniform",
    },
    {
      label: "Staff Chudidhar",
      href: "/hospitaluniform/staffuniformchudidhar",
    },
  ],
  companyuniform: [
    { label: "Company Wear", href: "/companyuniform/companyuniform" },
    { label: "Industrial", href: "/companyuniform/industrialuniform" },
    { label: "Mechanic", href: "/companyuniform/mechanicuniform" },
    { label: "Staff Attire", href: "/companyuniform/staffuniform" },
  ],
  otheruniform: [
    { label: "Aviation Crew", href: "/otheruniform/aviationcrewuniform" },
    { label: "Security Guard", href: "/otheruniform/securityguarduniform" },
    { label: "Sports Team", href: "/otheruniform/sportsteamuniform" },
  ],
};

// ✅ Add human-readable labels for Discover More
const categoryLabels: Record<string, string> = {
  schooluniform: "School Uniform",
  womenuniform: "Women Uniform",
  menuniform: "Men Uniform",
  hoteluniform: "Hotel Uniform",
  hospitaluniform: "Hospital Uniform",
  companyuniform: "Company Uniform",
  otheruniform: "Other Uniform",
};

const SidebarLinks = () => {
  const pathname = usePathname();
  const currentCategory = pathname.split("/")[1] || "schooluniform";
  const [isOpen, setIsOpen] = useState(false);
  const currentSubpages = categorySubpages[currentCategory] || [];

  return (
    <div className="relative bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 rounded-lg shadow-lg">
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute top-2 right-2 text-indigo-600 hover:text-indigo-800 transition-colors p-2 rounded-full bg-white/80"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Content */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block space-y-6 p-4 bg-white/90 backdrop-blur-sm rounded-lg`}
      >
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4 animate-pulse">
          Explore Categories
        </h2>
        <ul className="space-y-3">
          <li>
            <Link
              href={`/${currentCategory}`}
              className="text-indigo-600 hover:text-indigo-800 hover:underline font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {categoryLabels[currentCategory] || currentCategory}
            </Link>
          </li>
          {currentSubpages.map((subpage) => (
            <li key={subpage.href}>
              <Link
                href={subpage.href}
                className="text-purple-600 hover:text-purple-800 hover:underline font-medium text-md transition-all duration-300 transform hover:scale-105"
              >
                {subpage.label}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 mt-6 mb-4 animate-pulse">
          Discover More
        </h2>
        <ul className="space-y-3">
          {Object.keys(categoryLabels).map((cat) => (
            <li key={cat}>
              <Link
                href={`/${cat}`}
                className="text-teal-600 hover:text-teal-800 hover:underline font-medium text-md transition-all duration-300 transform hover:scale-105"
              >
                {categoryLabels[cat]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarLinks;
