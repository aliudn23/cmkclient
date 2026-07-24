"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { resetpassword } from "@/app/services/auth.service";

export default function ResetPassword() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Check password with confirm password
        if (password !== confirmPassword) {
            alert("Password doesn't match");
        }

        if (token == null) {
            alert("Invalid session request")
            return;
        }

        try {
            setLoading(true);
            const result = await resetpassword({
                token,
                password
            });

            alert(result.message);

            router.replace("/login");
        } catch (error: any) {
            console.error(error)
            alert("Reset password failed or token is expired")
        } finally {
            setLoading(false);
        }
    }

    return <div className="bg-white rounded-lg border border-gray-300 p-6">
        <div className="xl:w-4xl max-w-md">
            <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Reset Password</h1>
            <p className="mt-1 text-sm text-pretty text-gray-600 dark:text-gray-200">
                Create your new password to continue login.
            </p>
            <form className="mx-auto max-w-md space-y-4 mt-6" onSubmit={handleSubmit}>
                <div className="w-full">
                    <label htmlFor="Password" className="relative">
                         <input
                            type="password"
                            id="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder=""
                            className="peer bg-white w-full px-4 py-3 border rounded border-gray-300 shadow-sm sm:text-sm"
                            required
                        />

                        <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                            <button
                                type="button"
                                aria-label="Submit"
                                className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                            >
                                <svg
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5s8.577 3.01 9.964 7.183a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5s-8.577-3.01-9.964-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <span className="absolute -inset-y-1 inset-s-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
                            Password
                        </span>
                    </label> 
                </div>
                <div className="w-full">
                    <label htmlFor="ConfirmPassword" className="relative">
                        <input
                            type="password"
                            id="ConfirmPassword"
                            name="confirm-password"
                            placeholder=""
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="peer bg-white w-full px-4 py-3 border rounded border-gray-300 shadow-sm sm:text-sm"
                            required
                        />
                        <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                            <button
                                type="button"
                                aria-label="Submit"
                                className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                            >
                                <svg
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5s8.577 3.01 9.964 7.183a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5s-8.577-3.01-9.964-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </button>
                        </span>

                        <span className="absolute -inset-y-1 inset-s-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
                            Confirm Password
                        </span>
                    </label> 
                </div>

                <div className="flex justify-between">
                    <button 
                        className="inline-flex items-center justify-center rounded-md border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none" 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? "Resetting now..." : "Confirm"}
                    </button>
                </div>

                <p className="mt-1 text-sm text-pretty text-gray-600 dark:text-gray-200">
                    Remember your password?
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