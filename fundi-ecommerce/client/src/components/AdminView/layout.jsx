import { Outlet } from 'react-router-dom';
import AdminSideBars from "./sidebar.jsx";
import AdminHeader from "./header.jsx";
import { useState } from 'react';

function AdminLayout() {
    // State to manage the sidebar open/close status
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        // Main container with flex layout to cover the full height and width of the screen
        <div className="flex min-h-screen w-full">
            {/* Sidebar component with props to control its open/close state */}
            <AdminSideBars open={openSidebar} setOpen={setOpenSidebar} />
            
            {/* Main content area */}
            <div className='flex flex-1 flex-col'>
                {/* Header component with a prop to control the sidebar */}
                <AdminHeader setOpen={setOpenSidebar} />
                
                {/* Main section where the nested routes will be rendered */}
                <main className='flex-1 flex-col flex bg-muted/40 p-4 md:p-6'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;

