import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from 'react-redux';
import { logoutUser } from "../../store/auth-slice"; // Adjusted path

function AdminHeader({ setOpen }) {
    const dispatch = useDispatch();

    // Function to handle user logout
    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
            {/* Button to toggle the menu on smaller screens */}
            <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
                <AlignJustify />
                <span className="sr-only">Toggle Menu</span>
            </Button>

            {/* Logout button */}
            <div className="flex flex-1 justify-end">
                <Button
                    onClick={handleLogout}
                    className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
                    aria-label="Logout" // Added aria-label for accessibility
                >
                    <LogOut />
                    Logout
                </Button>
            </div>
        </header>
    );
}

export default AdminHeader;


