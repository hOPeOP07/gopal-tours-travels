"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("gt-admin-auth");
    if (auth === "true") {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (
      email === "admin@gopaltravels.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("gt-admin-auth", "true");
      router.replace("/admin/dashboard");
      router.refresh();
      return;
    }

    setLoading(false);
    alert("Invalid email or password");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120e0b] px-6">
      <div className="w-full max-w-md border border-white/10 bg-[#17110d] p-8">
        <div className="mb-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8a15e]">
            Gopal Travels
          </p>
          <h1 className="mt-3 text-3xl font-medium text-white">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-white/45">
            Enter your administrator credentials.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-white/10 bg-[#120d0a] px-4 py-3 text-white outline-none focus:border-[#d59a55]"
              placeholder="admin@gopaltravels.com"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-white/10 bg-[#120d0a] px-4 py-3 text-white outline-none focus:border-[#d59a55]"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d59a55] py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] transition hover:bg-[#e3b878] disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}