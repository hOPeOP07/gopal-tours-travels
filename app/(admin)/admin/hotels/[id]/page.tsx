"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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

export default function EditHotelPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<HotelForm>({
    name: "",
    slug: "",
    location: "",
    category: "",
    image: "",
    description: "",
    amenities: "",
    price: "",
    featured: true,
  });

  useEffect(() => {
    const fetchHotel = async () => {
      const { data, error } = await supabase
        .from("hotels")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setForm({
          name: data.name ?? "",
          slug: data.slug ?? "",
          location: data.location ?? "",
          category: data.category ?? "",
          image: data.image ?? "",
          description: data.description ?? "",
          amenities: data.amenities ?? "",
          price: data.price ?? "",
          featured: data.featured ?? true,
        });
      }

      setLoading(false);
    };

    void fetchHotel();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase
      .from("hotels")
      .update({
        ...form,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Hotel updated successfully!");
    router.push("/admin/hotels");
    router.refresh();
  };

  if (loading) {
    return <div className="text-white">Loading hotel...</div>;
  }

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
          Edit Hotel
        </h2>

        <p className="mt-3 text-sm text-white/50">
          Update hotel information.
        </p>
      </div>

      <form
        onSubmit={handleUpdate}
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
            />

            <Input
              label="Slug"
              name="slug"
              value={form.slug}
              onChange={handleChange}
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
            Amenities
          </label>

          <textarea
            name="amenities"
            rows={3}
            value={form.amenities}
            onChange={handleChange}
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
            {saving ? "Updating..." : "Update Hotel"}
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