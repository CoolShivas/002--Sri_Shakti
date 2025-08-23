"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categorySubpages = {
  schooluniform: [
    { label: "CBSE School Uniforms", href: "/schooluniform/cbseschooluniform" },
    {
      label: "Private School Uniforms",
      href: "/schooluniform/privateschooluniform",
    },
    {
      label: "Plain School Uniforms",
      href: "/schooluniform/plainschooluniform",
    },
    {
      label: "Government School Uniforms",
      href: "/schooluniform/govtschooluniform",
    },
    { label: "Uniform Shirtings", href: "/schooluniform/uniformshirtings" },
    { label: "Uniform Suitings", href: "/schooluniform/uniformsuitings" },
  ],
  womenuniform: [
    { label: "Plain Uniform Sarees", href: "/womenuniform/plainuniformsarees" },
    { label: "Set Sarees", href: "/womenuniform/setsarees" },
    { label: "Staff Uniform Sarees", href: "/womenuniform/staffuniformsarees" },
    {
      label: "Teachers Uniform Sarees",
      href: "/womenuniform/teachersuniformsarees",
    },
    { label: "Uniform Chudithars", href: "/womenuniform/uniformchudithars" },
    {
      label: "Wedding Uniform Sarees",
      href: "/womenuniform/weddinguniformsarees",
    },
  ],
  menuniform: [
    { label: "Men's Staff Uniform", href: "/menuniform/mensstaffuniform" },
    { label: "Uniform Blazers", href: "/menuniform/uniformblazers" },
    { label: "Uniform Pants", href: "/menuniform/uniformpants" },
    { label: "Uniform Shirts", href: "/menuniform/uniformshirts" },
    { label: "Uniform T-Shirts", href: "/menuniform/uniformtshirts" },
    { label: "Uniform Waistcoats", href: "/menuniform/uniformwaistcoats" },
  ],
  hoteluniform: [
    {
      label: "Chef Kitchen Staff Uniform",
      href: "/hoteluniform/chefkitchenstaffuniform",
    },
    {
      label: "Concierge Managerial Uniform",
      href: "/hoteluniform/conciergemanagerialuniform",
    },
    {
      label: "Housekeeping Uniform",
      href: "/hoteluniform/housekeepinguniform",
    },
    {
      label: "Reception Front Desk Uniform",
      href: "/hoteluniform/receptionfrontdeskuniform",
    },
    { label: "Spa Wellness Uniform", href: "/hoteluniform/spawellnessuniform" },
    {
      label: "Wait Staff Service Uniform",
      href: "/hoteluniform/waitstaffserviceuniform",
    },
  ],
  hospitaluniform: [
    { label: "Doctor Coat", href: "/hospitaluniform/doctorcoat" },
    {
      label: "Doctor Uniform Saree",
      href: "/hospitaluniform/doctoruniformsaree",
    },
    { label: "Hospital Uniform", href: "/hospitaluniform/hospitaluniform" },
    {
      label: "Hospital Uniform Pant",
      href: "/hospitaluniform/hospitaluniformpant",
    },
    {
      label: "Hospital Uniform Saree",
      href: "/hospitaluniform/hospitaluniformsaree",
    },
    { label: "Men's Staff Uniform", href: "/hospitaluniform/mensstaffuniform" },
    {
      label: "Hospital Uniform Shirt",
      href: "/hospitaluniform/hospitaluniformshirt",
    },
    { label: "Nurse Uniform", href: "/hospitaluniform/nurseuniform" },
    {
      label: "Operation Theatre Uniform",
      href: "/hospitaluniform/operationtheatreuniform",
    },
    {
      label: "Staff Uniform Chudidhar",
      href: "/hospitaluniform/staffuniformchudidhar",
    },
  ],
  companyuniform: [
    { label: "Company Uniform", href: "/companyuniform/companyuniform" },
    { label: "Industrial Uniform", href: "/companyuniform/industrialuniform" },
    { label: "Mechanic Uniform", href: "/companyuniform/mechanicuniform" },
    { label: "Staff Uniform", href: "/companyuniform/staffuniform" },
  ],
  otheruniform: [
    {
      label: "Aviation Crew Uniform",
      href: "/otheruniform/aviationcrewuniform",
    },
    {
      label: "Security Guard Uniform",
      href: "/otheruniform/securityguarduniform",
    },
    { label: "Sports Team Uniform", href: "/otheruniform/sportsteamuniform" },
  ],
};

const SidebarLinks = () => {
  const pathname = usePathname();
  const currentCategory = pathname.split("/")[1] || "schooluniform";

  const currentSubpages = categorySubpages[currentCategory] || [];

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h2>
      <ul className="space-y-3">
        <li>
          <Link
            href={`/${currentCategory}`}
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          >
            {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}{" "}
            Uniforms
          </Link>
        </li>
        {currentSubpages.map((subpage) => (
          <li key={subpage.href}>
            <Link
              href={subpage.href}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
            >
              {subpage.label}
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
        Recommendations
      </h2>
      <ul className="space-y-3">
        {Object.keys(categorySubpages).map((cat) => (
          <li key={cat}>
            <Link
              href={`/${cat}`}
              className="text-green-600 hover:text-green-800 hover:underline transition-colors duration-200"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)} Uniforms
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarLinks;
