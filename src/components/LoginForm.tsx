// app/components/LoginForm.tsx
"use client";

import { loginAction } from "../app/actions/auth.action";

export default function LoginForm() {
  return (
    <form
      action={loginAction}
      className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-2 border rounded"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-2 border rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Login
      </button>
    </form>
  );
}
