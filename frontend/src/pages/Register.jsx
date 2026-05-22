import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";

export default function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {

        try {

            await API.post("/auth/register", {
                name,
                email,
                password
            });

            alert("Registration Successful");

            navigate("/");

        } catch(err) {

            console.log(err);

            alert("Registration Failed");
        }
    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
                    Register
                </h1>

                <div className="space-y-4">

                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full border p-3 rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="w-full border p-3 rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full border p-3 rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={handleRegister}
                        className="w-full bg-green-600 text-white p-3 rounded-lg"
                    >
                        Register
                    </button>

                </div>

            </div>

        </div>
    );
}