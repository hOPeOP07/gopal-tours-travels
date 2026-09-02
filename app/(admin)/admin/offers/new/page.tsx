"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function NewOfferPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    discount: "",
    image: "",
    description: "",
    valid_till: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("offers").insert({
      title: form.title,
      subtitle: form.subtitle,
      discount: form.discount,
      image: form.image,
      description: form.description,
      valid_till: form.valid_till,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Offer added successfully!");
    router.push("/admin/offers");
    router.refresh();
  };

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
          Add New Offer
        </h2>

        <p className="mt-3 text-sm text-white/50">
          Create promotional offers for the website.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 border border-white/10 bg-white/[0.03] p-8"
      >
        <div>
          <h3 className="mb-5 text-lg font-medium text-[#e3b878]">
            Offer Details
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Offer Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />

            <Input
              label="Discount"
              name="discount"
              value={form.discount}
              onChange={handleChange}
              placeholder="30% OFF"
              required
            />

            <Input
              label="Subtitle"
              name="subtitle"
              value={form.subtitle}
              onChange={handleChange}
              placeholder="Limited Time Holiday Package"
            />

            <Input
              label="Valid Till"
              name="valid_till"
              value={form.valid_till}
              onChange={handleChange}
              placeholder="31 Dec 2026"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
            Hero Image URL
          </label>

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://..."
            required
            className="w-full border border-white/10 bg-[#120d0a] px-4 py-3 text-white outline-none focus:border-[#d59a55]"
          />
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
            Description
          </label>

          <textarea
            name="description"
            rows={6}
            value={form.description}
            onChange={handleChange}
            required
            className="w-full border border-white/10 bg-[#120d0a] p-4 text-white outline-none focus:border-[#d59a55]"
          />
        </div>

        <div className="flex gap-4 border-t border-white/10 pt-6">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#d59a55] px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] hover:bg-[#e3b878] disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Offer"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="border border-white/10 px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:border-white/30"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
        {label}
      </label>

      <input
        {...props}
        className="w-full border border-white/10 bg-[#120d0a] px-4 py-3 text-white outline-none focus:border-[#d59a55]"
      />
    </div>
  );
}