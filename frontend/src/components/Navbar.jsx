export default function Navbar() {

    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

            <h1 className="text-2xl font-bold">
                Task Manager
            </h1>

            <button
                className="bg-white text-blue-600 px-4 py-2 rounded"
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                }}
            >
                Logout
            </button>

        </nav>
    );
}