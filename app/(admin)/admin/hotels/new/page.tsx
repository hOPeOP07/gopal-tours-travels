"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type HotelForm = {
  name: string;
  slug: string;
  location: string;
  category: string;
  image: string;
  description: string;
  amenities: string;
  price: string;
  featured: boolean;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function NewHotelPage() {
  const router = useRouter();

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<HotelForm>({
    name: "",
    slug: "",
    location: "",
    category: "",
    image: "",
    description: "",
    amenities: "",
    price: "Enquire for Price",
    featured: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "name") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      setForm((prev) => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase.from("hotels").insert({
      ...form,
      created_at: new Date().toISOString(),
    });

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Hotel added successfully!");
    router.push("/admin/hotels");
    router.refresh();
  };

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
          Add Hotel
        </h2>

        <p className="mt-3 text-sm text-white/50">
          Create a new hotel listing for your website.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 border border-white/10 bg-white/[0.03] p-8"
      >
        <div>
          <h3 className="mb-5 text-lg font-medium text-[#e3b878]">
            Hotel Details
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Hotel Name"
              name="name"
              value={form.name}
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
            />

            <Input
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Luxury Stay"
            />

            <Input
              label="Price"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
            Hotel Image URL
          </label>

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border border-white/10 bg-[#120d0a] px-4 py-3 text-white outline-none focus:border-[#d59a55]"
          />

          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="mt-4 h-48 w-full rounded object-cover"
            />
          )}
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
            className="w-full border border-white/10 bg-[#120d0a] p-4 text-white outline-none focus:border-[#d59a55]"
          />
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
            Amenities (comma separated)
          </label>

          <textarea
            name="amenities"
            rows={3}
            value={form.amenities}
            onChange={handleChange}
            placeholder="WiFi, Pool, Breakfast, Spa"
            className="w-full border border-white/10 bg-[#120d0a] p-4 text-white outline-none focus:border-[#d59a55]"
          />
        </div>

        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
          />
          Show on Homepage
        </label>

        <div className="flex gap-4 border-t border-white/10 pt-6">
          <button
            type="submit"
            disabled={saving}
            className="bg-[#d59a55] px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] hover:bg-[#e3b878]"
          >
            {saving ? "Saving..." : "Add Hotel"}
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

function Input({ label, ...props }: InputProps) {
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