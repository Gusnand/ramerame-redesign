import { router } from "@inertiajs/react";

export default function Index() {
  const handleLogout = () => {
    router.post("/logout");
  };

  const toDashboard = () => {
    router.get("/super/dashboard");
  };

  return (
    <div className="">
      <h1 className="">Halaman Project</h1>
      <button
        onClick={toDashboard}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        ke Halaman Dashboard
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
