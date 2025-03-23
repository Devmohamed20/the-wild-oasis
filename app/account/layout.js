import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-4 h-full gap-12">
      <SideNavigation />

      <div className="col-span-3">{children}</div>
    </div>
  );
}
