"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

type OfferForm = {
  title: string;
  subtitle: string;
  discount: string;
  image: string;
  description: string;
  valid_till: string;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function EditOfferPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<OfferForm>({
    title: "",
    subtitle: "",
    discount: "",
    image: "",
    description: "",
    valid_till: "",
  });

  // ✅ React 19 compatible
  useEffect(() => {
    let mounted = true;

    const loadOffer = async () => {
      const { data, error } = await supabase
        .from("offers")
        .select("*")
        .eq("id", id)
        .single();

      if (!mounted) return;

      if (!error && data) {
        setForm({
          title: data.title ?? "",
          subtitle: data.subtitle ?? "",
          discount: data.discount ?? "",
          image: data.image ?? "",
          description: data.description ?? "",
          valid_till: data.valid_till ?? "",
        });
      }

      setLoading(false);
    };

    void loadOffer();

    return () => {
      mounted = false;
    };
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase
      .from("offers")
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

    alert("Offer updated successfully!");
    router.push("/admin/offers");
    router.refresh();
  };

  if (loading) {
    return <div className="text-white text-lg">Loading offer...</div>;
  }

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
          Edit Offer
        </h2>

        <p className="mt-3 text-sm text-white/50">
          Update promotional offer details.
        </p>
      </div>

      <form
        onSubmit={handleUpdate}
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
            />

            <Input
              label="Discount"
              name="discount"
              value={form.discount}
              onChange={handleChange}
            />

            <Input
              label="Subtitle"
              name="subtitle"
              value={form.subtitle}
              onChange={handleChange}
            />

            <Input
              label="Valid Till"
              name="valid_till"
              value={form.valid_till}
              onChange={handleChange}
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
            className="w-full border border-white/10 bg-[#120d0a] p-4 text-white outline-none focus:border-[#d59a55]"
          />
        </div>

        <div className="flex gap-4 border-t border-white/10 pt-6">
          <button
            type="submit"
            disabled={saving}
            className="bg-[#d59a55] px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] hover:bg-[#e3b878]"
          >
            {saving ? "Updating..." : "Update Offer"}
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