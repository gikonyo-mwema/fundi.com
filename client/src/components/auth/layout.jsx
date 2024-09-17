import { Outlet } from "react-router-dom";

// AuthLayout component serves as a layout for authentication-related pages
function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side of the layout, visible only on large screens */}
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to fundi - your home for all home decor and furniture needs
          </h1>
        </div>
      </div>
      {/* Right side of the layout, always visible */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        {/* Outlet component renders the matched child route */}
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;