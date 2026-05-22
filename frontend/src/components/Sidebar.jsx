export default function Sidebar() {

    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen p-5">

            <h2 className="text-2xl font-bold mb-6">
                Dashboard
            </h2>

            <ul className="space-y-4">

                <li className="hover:text-blue-400 cursor-pointer">
                    All Tasks
                </li>

                <li className="hover:text-blue-400 cursor-pointer">
                    Completed
                </li>

                <li className="hover:text-blue-400 cursor-pointer">
                    Pending
                </li>

            </ul>

        </div>
    );
}