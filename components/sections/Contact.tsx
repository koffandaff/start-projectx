"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ShieldCheck, MessageSquare, Mail } from "lucide-react";
import posthog from "posthog-js";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/GlassInput";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactSchema, isUrgentDeadline } from "@/lib/validations";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isUrgent, setIsUrgent] = useState(false);

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      whatsapp: formData.get('whatsapp') as string,
      deadline: formData.get('deadline') as string,
      projectType: formData.get('projectType') as string,
      requirements: formData.get('requirements') as string,
    };

    const validation = contactSchema.safeParse(data);
    
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const path = issue.path[0];
        if (path) {
          fieldErrors[path.toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setLoading(false);
      return;
    }

    setLoading(true);
    posthog.capture('contact_form_submit', data);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        console.error('Failed to transmit requirements');
      }
    } catch (error) {
      console.error('Transmission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#F0EEE9] border-t-2 border-[#064E3B] overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#10B981]/5 to-transparent pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <SectionHeading
            title="Start The Build"
            subtitle="Secure, confidential, and rapid implementation."
            centered
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left / Top Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="p-8 flex items-start gap-4 border-[3px] border-[#064E3B] bg-[#FAFAF8] shadow-[6px_6px_0_#064E3B]">
              <div className="w-12 h-12 rounded-xl bg-[#064E3B] flex items-center justify-center shrink-0">
                <MessageSquare className="text-[#F0EEE9] w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-black text-[#022C22] mb-1 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>WhatsApp Direct</h4>
                <p className="text-sm text-[#064E3B]/80 mb-2 font-medium" style={{ fontFamily: "var(--font-body)" }}>Fastest response time.</p>
                <a href={`https://wa.me/919904270301?text=I%20need%20help%20with%20the%20project`} target="_blank" rel="noreferrer" className="text-[#10B981] font-bold hover:text-[#064E3B] transition-colors uppercase tracking-widest text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                  Initiate Chat →
                </a>
              </div>
            </div>

            <div className="p-8 flex items-start gap-4 border-[3px] border-[#064E3B] bg-[#FAFAF8] shadow-[6px_6px_0_#064E3B]">
              <div className="w-12 h-12 rounded-xl bg-[#064E3B] flex items-center justify-center shrink-0">
                <Mail className="text-[#F0EEE9] w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-black text-[#022C22] mb-1 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Email Protocol</h4>
                <p className="text-sm text-[#064E3B]/80 mb-2 font-medium" style={{ fontFamily: "var(--font-body)" }}>For long-form requirements.</p>
                <a href="mailto:unprojectus@gmail.com" className="text-[#10B981] font-bold hover:text-[#064E3B] transition-colors uppercase tracking-widest text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                  unprojectus@gmail.com →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right / Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 lg:p-12 border-[3px] border-[#064E3B] bg-[#FAFAF8] shadow-[8px_8px_0_#064E3B]">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-[#064E3B]/20">
                <div className="w-3 h-3 bg-[#10B981]" />
                <span className="text-sm font-bold text-[#064E3B] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                  Requirement Intake Form
                </span>
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 bg-[#10B981]/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#022C22] mb-3 uppercase" style={{ fontFamily: "var(--font-display)" }}>Specs Received</h3>
                  <p className="text-[#064E3B] font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    Our engineering team is reviewing your requirements. We will contact you shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8 uppercase tracking-widest"
                    onClick={() => setSuccess(false)}
                    type="button"
                  >
                    Submit Another
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input id="name" name="name" type="text" label="Full Name" placeholder="John Doe" required error={errors.name} />
                    <Input id="email" name="email" type="email" label="Email Address" placeholder="john@example.com" required error={errors.email} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input id="whatsapp" name="whatsapp" type="tel" label="WhatsApp Number" placeholder="9876543210" required error={errors.whatsapp} />
                    <div className="flex flex-col gap-1 w-full">
                      <Input
                        id="deadline"
                        name="deadline"
                        type="date"
                        label="Hard Deadline"
                        required
                        min={todayStr}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsUrgent(isUrgentDeadline(e.target.value))}
                        error={errors.deadline}
                      />
                      {isUrgent && (
                        <p className="text-[10px] font-bold text-red-600 uppercase tracking-tight animate-pulse ml-1">
                          Contact through WhatsApp for fast reply in urgency
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-start font-[var(--font-body)]">
                    <label htmlFor="projectType" className="text-xs sm:text-sm font-bold text-[#064E3B] mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>Project Stack</label>
                    <select id="projectType" name="projectType" required className="w-full h-14 px-5 bg-[#F0EEE9] border-[2px] border-[#064E3B] outline-none text-[#022C22] font-medium transition-all focus:bg-[#FAFAF8] focus:shadow-[4px_4px_0_#064E3B]">
                      <option value="fullstack">Full Stack</option>
                      <option value="aiml">AI / ML</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="datascience">Data Science</option>
                      <option value="cpp">C++</option>
                      <option value="custom">Custom Stack</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Input
                    id="requirements"
                    name="requirements"
                    label="Detailed Specifications"
                    placeholder="Provide a link to your rubric, or paste your requirements here..."
                    isTextarea
                    required
                    error={errors.requirements}
                  />

                  <div className="flex items-center gap-3 bg-[#064E3B]/5 p-4 border border-[#064E3B]/10 rounded-sm">
                    <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
                    <p className="text-xs text-[#064E3B] font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Your information and project details are encrypted and maintained with absolute confidentiality.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-lg uppercase tracking-widest pt-5 pb-5"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                          <span className="block w-5 h-5 border-2 border-[#F0EEE9] border-t-transparent rounded-full" />
                        </motion.div>
                        Transmitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Dispatch Requirements
                      </span>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
