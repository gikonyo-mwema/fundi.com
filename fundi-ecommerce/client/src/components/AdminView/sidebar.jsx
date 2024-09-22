 
import {
  BadgeCheck,
  ChartNoAxesCombined,
  LayoutDashboard,
  ShoppingBasket,
} from "lucide-react"; // Importing icons from lucide-react
import { Fragment } from "react"; // Importing Fragment from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"; // Importing components from custom UI library

// Define the menu items for the admin sidebar
const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <BadgeCheck />,
  },
];

// Component to render the menu items
function MenuItems({ setOpen }) {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path); // Navigate to the selected path
            setOpen ? setOpen(false) : null; // Close the sidebar if setOpen is provided
          }}
          className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

// Component to render the admin sidebar
function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <Fragment>
      {/* Sidebar for mobile view */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} /> {/* Render menu items */}
          </div>
        </SheetContent>
      </Sheet>
      {/* Sidebar for desktop view */}
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems /> {/* Render menu items */}
      </aside>
    </Fragment>
  );
}

export default AdminSideBar; // Export the AdminSideBar component as default
