"use client" // This tells Next.js that this component should be rendered on the client

import React, { useState } from "react";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";  // Use router hook here

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle signup logic here
    try {
      // Simulating successful signup
      console.log({ fullName, email, password });
      // Redirect after signup
      router.push("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an Account</h2>
          <p className="mt-2 text-sm text-gray-600">Please sign up to create an account</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)} // Handle change
                required
                placeholder="Enter your full name"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Handle change
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Handle change
                required
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign up"}
          </Button>
        </form>
      </div>
    </div>
  );
}