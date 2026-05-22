import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const res = await API.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data.token);

            navigate("/dashboard");

        } catch(err) {

            console.log(err);

            alert("Invalid Credentials");
        }
    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
                    Task Manager Login
                </h1>

                <div className="space-y-4">

                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold"
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
}