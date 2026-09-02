"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EditTourPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

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

  useEffect(() => {
    const fetchTour = async () => {
      const { data, error } = await supabase
        .from("tours")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setForm({
          title: data.title ?? "",
          slug: data.slug ?? "",
          location: data.location ?? "",
          duration: data.duration ?? "",
          price: data.price ?? "",
          image: data.image ?? "",
          description: data.description ?? "",
          itinerary: data.itinerary ?? "",
        });
      }

      setLoading(false);
    };

    fetchTour();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    setSaving(true);

    const { error } = await supabase
      .from("tours")
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

    alert("Tour updated successfully!");
    router.push("/admin/tours");
    router.refresh();
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
          Edit Tour
        </h2>
      </div>

      <form
        onSubmit={handleUpdate}
        className="space-y-8 border border-white/10 bg-white/[0.03] p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input label="Title" name="title" value={form.title} onChange={handleChange}/>
          <Input label="Slug" name="slug" value={form.slug} onChange={handleChange}/>
          <Input label="Location" name="location" value={form.location} onChange={handleChange}/>
          <Input label="Duration" name="duration" value={form.duration} onChange={handleChange}/>
          <Input label="Price" name="price" value={form.price} onChange={handleChange}/>
          <Input label="Hero Image URL" name="image" value={form.image} onChange={handleChange}/>
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
            Itinerary
          </label>

          <textarea
            name="itinerary"
            rows={8}
            value={form.itinerary}
            onChange={handleChange}
            className="w-full border border-white/10 bg-[#120d0a] p-4 text-white outline-none focus:border-[#d59a55]"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={saving}
            className="bg-[#d59a55] px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914]"
          >
            {saving ? "Updating..." : "Update Tour"}
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

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function Input({ label, ...props }: InputProps){
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