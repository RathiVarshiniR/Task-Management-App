export default function TaskCard({ task, onDelete }) {

    return (
        <div className="bg-white shadow-md rounded-lg p-4 border">

            <h2 className="text-xl font-bold">
                {task.title}
            </h2>

            <p className="text-gray-600 mt-2">
                {task.description}
            </p>

            <div className="flex justify-between items-center mt-4">

                <span
                    className={`px-3 py-1 rounded text-white ${
                        task.completed
                            ? "bg-green-500"
                            : "bg-yellow-500"
                    }`}
                >
                    {
                        task.completed
                            ? "Completed"
                            : "Pending"
                    }
                </span>

                <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => onDelete(task._id)}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}