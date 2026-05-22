import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {

    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {

        try {

            const res = await API.get("/tasks");

            setTasks(res.data);

        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (taskData) => {

        try {

            const res = await API.post("/tasks", taskData);

            setTasks([...tasks, res.data]);

        } catch(err) {
            console.log(err);
        }
    };

    const deleteTask = async (id) => {

        try {

            await API.delete(`/tasks/${id}`);

            setTasks(tasks.filter(task => task._id !== id));

        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div>

            <Navbar />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 p-6 bg-gray-100 min-h-screen">

                    <TaskForm onAddTask={addTask} />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

                        {
                            tasks.map(task => (
                                <TaskCard
                                    key={task._id}
                                    task={task}
                                    onDelete={deleteTask}
                                />
                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    );
}