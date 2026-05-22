import { useState } from "react";

export default function TaskForm({ onAddTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        onAddTask({
            title,
            description
        });

        setTitle("");
        setDescription("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-5 rounded shadow-md"
        >

            <input
                type="text"
                placeholder="Task Title"
                className="border p-2 w-full mb-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <textarea
                placeholder="Task Description"
                className="border p-2 w-full mb-4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Task
            </button>

        </form>
    );
}