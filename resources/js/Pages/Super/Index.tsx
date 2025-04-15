import NavLink from "@/Components/NavLink";
import { Link, router } from "@inertiajs/react";

export default function Index() {
    const handleLogout = () => {
        router.post("/logout");
    };

    const toProject = () => {
        router.get("/super/project");
    };

    return (
        <div className="">
            <h1 className="">Halo Super Admin!</h1>
            <button
                onClick={toProject}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                ke Halaman Project
            </button>
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </div>
    );
}
