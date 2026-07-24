

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { forgotpassword } from "@/app/services/auth.service";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const result = await forgotpassword({
                email,
            });

            if (result.success) {
                alert(result.message)
                router.replace("/login");
            }

        } catch (error: any) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    return <div className="bg-white rounded-lg border border-gray-300 p-6">
        <div className="xl:w-4xl max-w-md">
            <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Forgot Password Area</h1>
            <p className="mt-1 text-sm text-pretty text-gray-600 dark:text-gray-200">
                Enter your email address to continue.
            </p>
            <form className="mx-auto max-w-md space-y-4 mt-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Email" className="relative">
                        <input
                            type="email"
                            id="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=""
                            className="peer bg-white w-full px-4 py-3 border rounded border-gray-300 shadow-sm sm:text-sm"
                        />

                        <span className="absolute -inset-y-1 inset-s-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
                            Email address
                        </span>
                    </label> 
                </div>

                <div className="flex justify-between">
                    <button 
                        className="inline-flex items-center justify-center rounded-md border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none" 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>

                <p className="mt-1 text-sm text-pretty text-gray-600 dark:text-gray-200">
                    Remeber your password?
                    <a
                        className="rounded-full px-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-500 focus-visible:ring-4 focus-visible:ring-slate-200 focus-visible:outline-none"
                        href="/login"
                        >
                        Sign In
                    </a>
                </p>
            </form>
        </div>
    </div>
}