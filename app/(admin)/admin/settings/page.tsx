"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Settings = {
  company_name: string;
  tagline: string;
  logo_url: string;
  favicon_url: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  google_maps: string;
  instagram: string;
  facebook: string;
  youtube: string;
};

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Logo upload states
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState("");

  const [form, setForm] = useState<Settings>({
    company_name: "",
    tagline: "",
    logo_url: "",
    favicon_url: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    google_maps: "",
    instagram: "",
    facebook: "",
    youtube: "",
  });

  useEffect(() => {
    let mounted = true;

    const loadSettings = async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("*")
        .eq("id", 1)
        .single();

      if (!mounted) return;

      if (data) {
        setForm({
          company_name: data.company_name ?? "",
          tagline: data.tagline ?? "",
          logo_url: data.logo_url ?? "",
          favicon_url: data.favicon_url ?? "",
          phone: data.phone ?? "",
          whatsapp: data.whatsapp ?? "",
          email: data.email ?? "",
          address: data.address ?? "",
          google_maps: data.google_maps ?? "",
          instagram: data.instagram ?? "",
          facebook: data.facebook ?? "",
          youtube: data.youtube ?? "",
        });

        setLogoPreview(data.logo_url ?? "");
      }

      setLoading(false);
    };

    void loadSettings();

    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Upload logo to Supabase Storage
  const uploadLogo = async () => {
    if (!logoFile) return;

    setSaving(true);

    const extension = logoFile.name.split(".").pop();
    const fileName = `logo-${Date.now()}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("branding")
      .upload(fileName, logoFile, {
        upsert: true,
      });

    if (uploadError) {
      alert(uploadError.message);
      setSaving(false);
      return;
    }

    const { data } = supabase.storage
      .from("branding")
      .getPublicUrl(fileName);

    setForm((prev) => ({
      ...prev,
      logo_url: data.publicUrl,
    }));

    setLogoPreview(data.publicUrl);

    alert("Logo uploaded successfully!");
    setSaving(false);
  };

  const saveSettings = async (e: React.FormEvent) => {
    e.preventDefault();

    setSaving(true);

    const { error } = await supabase
      .from("site_settings")
      .update({
        ...form,
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Website settings updated successfully!");
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
          Website Settings
        </h2>

        <p className="mt-3 text-sm text-white/50">
          Change branding, logo and contact information.
        </p>
      </div>

      <form
        onSubmit={saveSettings}
        className="space-y-8 border border-white/10 bg-white/[0.03] p-8"
      >
        {/* Branding */}
        <div>
          <h3 className="mb-5 text-lg font-medium text-[#e3b878]">
            Website Branding
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Website Name"
              name="company_name"
              value={form.company_name}
              onChange={handleChange}
            />

            <Input
              label="Tagline"
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
            />
          </div>

          {/* LOGO UPLOAD */}
          <div className="mt-6">
            <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/45">
              Website Logo
            </label>

            <div className="flex flex-col gap-5 rounded-lg border border-white/10 bg-[#120d0a] p-5 md:flex-row md:items-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-lg border border-white/10 bg-[#1b1511]">
                {logoPreview ? (
                  <Image
                    src={logoPreview}
                    alt="Logo Preview"
                    width={90}
                    height={90}
                    className="max-h-[90px] max-w-[90px] object-contain"
                  />
                ) : (
                  <span className="text-xs text-white/30">No Logo</span>
                )}
              </div>

              <div className="flex-1">
                <p className="text-sm text-white">
                  Upload PNG, JPG or JPEG
                </p>
                <p className="mt-1 text-xs text-white/45">
                  High-resolution images supported. Recommended: 500×500px or above.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <label className="cursor-pointer bg-[#d59a55] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#211914] hover:bg-[#e3b878]">
                    Choose Image
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        setLogoFile(file);
                        setLogoPreview(URL.createObjectURL(file));
                      }}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={uploadLogo}
                    disabled={!logoFile || saving}
                    className="border border-[#d59a55] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d59a55] hover:bg-[#d59a55] hover:text-[#211914] disabled:opacity-40"
                  >
                    {saving ? "Uploading..." : "Upload Logo"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Favicon */}
          <div className="mt-6">
            <Input
              label="Favicon URL"
              name="favicon_url"
              value={form.favicon_url}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-medium text-[#e3b878]">
            Contact Information
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <Input
              label="WhatsApp"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
            />

            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <Input
              label="Google Maps Link"
              name="google_maps"
              value={form.google_maps}
              onChange={handleChange}
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/45">
              Office Address
            </label>

            <textarea
              name="address"
              rows={3}
              value={form.address}
              onChange={handleChange}
              className="w-full border border-white/10 bg-[#120d0a] p-4 text-white outline-none focus:border-[#d59a55]"
            />
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-5 text-lg font-medium text-[#e3b878]">
            Social Media
          </h3>

          <div className="grid gap-5">
            <Input
              label="Instagram"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
            />

            <Input
              label="Facebook"
              name="facebook"
              value={form.facebook}
              onChange={handleChange}
            />

            <Input
              label="YouTube"
              name="youtube"
              value={form.youtube}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Save */}
        <div className="border-t border-white/10 pt-6">
          <button
            type="submit"
            disabled={saving}
            className="bg-[#d59a55] px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] hover:bg-[#e3b878] disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Website Settings"}
          </button>
        </div>
      </form>
    </>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

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