"use client";

import { useState } from "react";
import { Check, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { brand, courses } from "@/data/site";

export default function EnrolmentSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "shopify",
    notes: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const selectedCourse = courses.find((c) => c.slug === formData.course);
    const courseTitle = selectedCourse
      ? `${selectedCourse.title} (${selectedCourse.promo})`
      : formData.course;

    const serviceId = process.env["NEXT_PUBLIC_EMAILJS_SERVICE_ID"];
    const templateId = process.env["NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"];
    const publicKey = process.env["NEXT_PUBLIC_EMAILJS_PUBLIC_KEY"];

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      course: courseTitle,
      notes: formData.notes || "No additional notes provided.",
      reply_to: formData.email,
      to_name: brand.name,
    };

    try {
      if (serviceId && templateId && publicKey && serviceId !== "your_service_id") {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Simulated submission when keys are not configured yet
        console.log(
          "EmailJS Submission (Simulation - Configure .env.local for production):",
          templateParams,
        );
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setIsSubmitted(true);
      toast.success("Enrolment request submitted successfully!");
    } catch (err: unknown) {
      console.error("EmailJS Error:", err);
      const errorObj = err as { text?: string; message?: string };
      const msg =
        errorObj?.text ||
        errorObj?.message ||
        "Failed to send request. Please check your connection or EmailJS credentials.";
      setError(msg);
      toast.error("Failed to send enrolment request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#FAF8F5]" id="enrol">
      <div className="mx-auto max-w-4xl px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-900/10 relative">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#C59B27] uppercase tracking-widest">
              TAKE THE NEXT STEP
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[#2C1A0B] mt-2">
              REQUEST <span className="text-[#C59B27]">ENROLMENT</span>
            </h2>
            <p className="mt-2 text-sm text-[#6E5540]">
              Reserve your seat for the upcoming cohort. Seats are limited to ensure small group
              interaction.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {isSubmitted ? (
            <div className="p-8 bg-[#FAF6EE] border border-[#C59B27]/30 rounded-2xl text-center space-y-3 animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-[#C59B27] text-white flex items-center justify-center mx-auto shadow-md">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wide text-[#2C1A0B]">
                ENROLMENT REQUEST RECEIVED!
              </h3>
              <p className="text-xs md:text-sm text-[#6E5540] max-w-md mx-auto">
                Thank you for submitting your details. Our admissions mentor will contact you
                shortly to confirm your seat and course schedule.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    course: "shopify",
                    notes: "",
                  });
                }}
                className="mt-4 px-6 py-2.5 bg-[#C59B27] text-white text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-[#B8860B] transition-colors"
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. Ayesha Rahman"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    disabled={isSubmitting}
                    placeholder={brand.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                    Select Course *
                  </label>
                  <select
                    value={formData.course}
                    disabled={isSubmitting}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all font-semibold disabled:opacity-60"
                  >
                    {courses.map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.title} — ({c.promo})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                  Questions / Business Background (Optional)
                </label>
                <textarea
                  rows={3}
                  disabled={isSubmitting}
                  placeholder="Tell us about your product idea or background..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all disabled:opacity-60"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:opacity-95 text-white text-xs font-extrabold uppercase tracking-widest rounded-full shadow-xl shadow-amber-950/20 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SUBMITTING...
                    </>
                  ) : (
                    "SUBMIT ENROLMENT REQUEST"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
