"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function NewTourPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    location: "",
    duration: "",
    price: "",
    image: "",
    description: "",
    itinerary: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "title"
        ? {
            slug: value
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, ""),
          }
        : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("tours").insert({
      title: form.title,
      slug: form.slug,
      location: form.location,
      duration: form.duration,
      price: form.price,
      image: form.image,
      description: form.description,
      itinerary: form.itinerary,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Tour added successfully!");
    router.push("/admin/tours");
    router.refresh();
  };

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
          Add New Tour
        </h2>

        <p className="mt-3 text-sm text-white/50">
          Create a new travel package.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 border border-white/10 bg-white/[0.03] p-8"
      >
        <div>
          <h3 className="mb-5 text-lg font-medium text-[#e3b878]">
            Basic Details
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Tour Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />

            <Input
              label="Slug"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              required
            />

            <Input
              label="Location"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />

            <Input
              label="Duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder="5 Days · 4 Nights"
              required
            />
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-medium text-[#e3b878]">
            Pricing & Media
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Price"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Enquire for Price or ₹12,999"
              required
            />

            <Input
              label="Hero Image URL"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
            Description
          </label>

          <textarea
            name="description"
            rows={5}
            value={form.description}
            onChange={handleChange}
            required
            className="w-full border border-white/10 bg-[#120d0a] p-4 text-white outline-none focus:border-[#d59a55]"
          />
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
            Itinerary
          </label>

          <textarea
            name="itinerary"
            rows={8}
            value={form.itinerary}
            onChange={handleChange}
            placeholder={`Day 1: Arrival

Day 2: Sightseeing

Day 3: Departure`}
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
            {loading ? "Saving..." : "Save Tour"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="border border-white/10 px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em]"
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