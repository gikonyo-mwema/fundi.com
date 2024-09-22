import { AlignJustify, LogOut } from "lucide-react"; // Importing icons from lucide-react
import Button from "../UI/button.jsx"; // Importing Button component
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux
import { logoutUser } from "../../store/Auth-slice/auth.jsx"; // Importing logoutUser action from auth-slice

// AdminHeader component definition
function AdminHeader({ setOpen }) {
    const dispatch = useDispatch(); // Initializing dispatch function

    // Function to handle user logout
    const handleLogout = () => {
        dispatch(logoutUser()); // Dispatching logoutUser action
    };

    return (
        <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
            {/* Button to toggle the menu on smaller screens */}
            <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
                <AlignJustify /> {/* Menu icon */}
                <span className="sr-only">Toggle Menu</span> {/* Screen reader only text */}
            </Button>

            {/* Logout button */}
            <div className="flex flex-1 justify-end">
                <Button
                    onClick={handleLogout} // Handling logout on button click
                    className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
                    aria-label="Logout" // Added aria-label for accessibility
                >
                    <LogOut /> {/* Logout icon */}
                    Logout
                </Button>
            </div>
        </header>
    );
}

export default AdminHeader; // Exporting AdminHeader component as default

