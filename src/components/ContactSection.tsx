import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Send, Copy, Check, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { Profile } from '../types';

interface ContactSectionProps {
  profile: Profile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    purpose: 'Job Opportunity',
    message: '',
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        purpose: 'Job Opportunity',
        message: '',
      });
    }, 500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#EDE7D9] dark:border-stone-800 bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight mb-4 max-w-2xl">
          Let&apos;s discuss <span className="text-[#FF9F0A]">e-commerce</span>, digital trading, or new opportunities.
          <span className="text-[#FF9F0A] ml-2">✦</span>
        </h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-xl mb-12">
          Whether you have an open position, need marketplace scaling assistance, or want to consult on Shopify store architecture, I look forward to connecting.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Direct Details & Social Links (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Social Media Channels Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-xs hover:shadow-md transition-all duration-300">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-3">
                Social Media Profiles
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 flex flex-col items-center justify-center text-center gap-1.5 hover:border-[#0077b5] transition-all hover:scale-105 group"
                >
                  <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200 group-hover:text-[#0077b5]">
                    LinkedIn
                  </span>
                </a>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 flex flex-col items-center justify-center text-center gap-1.5 hover:border-[#E4405F] transition-all hover:scale-105 group"
                >
                  <Instagram className="w-5 h-5 text-[#E4405F]" />
                  <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200 group-hover:text-[#E4405F]">
                    Instagram
                  </span>
                </a>
                <a
                  href={profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 flex flex-col items-center justify-center text-center gap-1.5 hover:border-[#1877F2] transition-all hover:scale-105 group"
                >
                  <Facebook className="w-5 h-5 text-[#1877F2]" />
                  <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200 group-hover:text-[#1877F2]">
                    Facebook
                  </span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-xs hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F4EC] dark:bg-stone-800 text-[#FF9F0A] border border-[#EDE7D9] dark:border-stone-700 flex items-center justify-center shadow-xs">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm sm:text-base font-bold text-[#141311] dark:text-stone-100 hover:text-[#FF9F0A] transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(profile.email, 'email')}
                  title="Copy email"
                  className="p-2.5 rounded-full text-stone-500 hover:text-[#141311] dark:hover:text-stone-100 hover:bg-[#F7F4EC] dark:hover:bg-stone-800 transition-all active:scale-90 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-xs hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F4EC] dark:bg-stone-800 text-[#FF9F0A] border border-[#EDE7D9] dark:border-stone-700 flex items-center justify-center shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                      Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-bold text-[#141311] dark:text-stone-100 hover:text-[#FF9F0A] transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    className="p-2.5 rounded-full text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all transform hover:scale-105 active:scale-95 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    title="Copy phone"
                    className="p-2.5 rounded-full text-stone-500 hover:text-[#141311] dark:hover:text-stone-100 hover:bg-[#F7F4EC] dark:hover:bg-stone-800 transition-all active:scale-90 cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-xs space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F7F4EC] dark:bg-stone-800 text-[#FF9F0A] border border-[#EDE7D9] dark:border-stone-700 flex items-center justify-center shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    Location & Relocation
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#141311] dark:text-stone-100">
                    Malappuram, Kerala, India
                  </p>
                  <p className="text-xs font-semibold text-[#FF9F0A] mt-0.5">
                    Open to relocation — GCC / Middle East
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-xl">
              <h3 className="text-2xl font-bold text-[#141311] dark:text-stone-100 mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mb-6">
                Fill out the details below and I will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-3xl bg-[#FF9F0A]/10 border border-[#FF9F0A]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#FF9F0A] text-[#141311] flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#141311] dark:text-stone-100">
                    Thank you! Your message has been sent.
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 max-w-sm mx-auto leading-relaxed">
                    I will review your inquiry regarding {formData.purpose} and respond via email within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#FF9F0A] underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#141311] dark:text-stone-100 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jenny Scott"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-700 text-sm text-[#141311] dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-[#FF9F0A] transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#141311] dark:text-stone-100 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-700 text-sm text-[#141311] dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-[#FF9F0A] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#141311] dark:text-stone-100 block mb-1.5">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Retail Brands Ltd."
                        className="w-full px-4 py-3 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-700 text-sm text-[#141311] dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-[#FF9F0A] transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#141311] dark:text-stone-100 block mb-1.5">
                        Purpose of Contact
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-700 text-sm text-[#141311] dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-[#FF9F0A] transition-all"
                      >
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="E-Commerce Consultation">E-Commerce Consultation</option>
                        <option value="Marketplace Management">Marketplace Management</option>
                        <option value="Freelance Project">Freelance Project</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#141311] dark:text-stone-100 block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your requirements, store goals, or open opportunity..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-700 text-sm text-[#141311] dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-[#FF9F0A] resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF9F0A] text-[#141311] font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffaa2b] shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
