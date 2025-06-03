import { useState } from "react";
import axios from "axios";
import Input from "@/components/common/input.tsx";

const SignInForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const payload = { email, password };
            const response = await axios.post<{
                message: string;
                token: string;
                user: { id: string; email: string; username: string };
            }>(
                "http://localhost:3000/user/signin",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setSuccess("Signin successful");
            localStorage.setItem("token", response.data.token);

            setEmail("");
            setPassword("");
        } catch (err: any) {
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center pt-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full max-w-md gap-4 px-4"
            >
                <Input
                    placeholder="Enter email address"
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Enter your password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="cursor-pointer active:translate-y-[2px] font-[Bicyclette] w-full text-lg py-4 rounded-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] text-white font-light transition duration-200 ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <div className="flex items-center justify-center w-full">
                        {loading ? "Signing In..." : "Login to account"}
                    </div>
                </button>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                {success && <p className="text-green-600 text-sm text-center">{success}</p>}
            </form>
        </div>
    );
};

export default SignInForm;
