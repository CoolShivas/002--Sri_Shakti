export default function SidebarLinks() {
  return (
    <aside className="space-y-6">
      <div className="card p-3">
        <h5 className="font-semibold mb-2">Quick Links</h5>
        <ul className="divide-y">Lists of Quick links.</ul>
      </div>
      <div className="card p-3 bg-red-300">
        <h5 className="font-semibold mb-2">Recommendations</h5>
        <ul className="space-y-2 text-sm">Lists of Recommendated links.</ul>
      </div>
    </aside>
  );
}
