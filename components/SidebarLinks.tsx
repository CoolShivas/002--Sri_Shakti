import Link from "next/link";

export default function SidebarLinks() {
  return (
    <aside className="space-y-6">
      <div className="card p-3">
        <h5 className="font-bold mb-2 text-2xl ml-10 text-sky-700">
          Quick Links
        </h5>
        <ul className="divide-y ml-6 text-xl p-2 font-semibold">
          <li className="p-2 hover:text-sky-500 hover:text-2xl">
            <Link href="/schooluniform">School Uniforms</Link>
          </li>
          <li className="p-2 hover:text-sky-500 hover:text-2xl">
            <Link href="/womenuniform">Women's Uniforms</Link>
          </li>
          <li className="p-2 hover:text-sky-500 hover:text-2xl">
            <Link href="/menuniform">Men's Uniforms</Link>
          </li>
          <li className="p-2 hover:text-sky-500 hover:text-2xl">
            <Link href="/companyuniform">Company Uniforms</Link>
          </li>
          <li className="p-2 hover:text-sky-500 hover:text-2xl">
            <Link href="/hospitaluniform">Hospital Uniforms</Link>
          </li>
          <li className="p-2 hover:text-sky-500 hover:text-2xl">
            <Link href="/hoteluniform">Hotel Uniforms</Link>
          </li>
          <li className="p-2 hover:text-sky-500 hover:text-2xl">
            <Link href="/otheruniform">Other Uniforms</Link>
          </li>
        </ul>
      </div>

      {/* <div className="card p-3 bg-red-300">
        <h5 className="font-semibold mb-2">Recommendations</h5>
        <ul className="space-y-2 text-sm">Lists of Recommendated links.</ul>
      </div> */}
    </aside>
  );
}
