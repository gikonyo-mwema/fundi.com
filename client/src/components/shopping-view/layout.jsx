import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header.jsx";

function ShoppingLayout() {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            <ShoppingHeader />
            <main className="flex flex-col w-full"></main>
            <Outlet />
        </div>
    );
}