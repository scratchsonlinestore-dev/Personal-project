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
    <section id="contact" className="py-20 md:py-28 bg-[#F4F2E8] border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
          <span>Initiate Collaboration</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight mb-4 max-w-2xl">
          Let&apos;s discuss <span className="text-[#F5A400]">e-commerce</span>, trading, or new roles.
          <span className="text-[#F5A400] ml-2">✦</span>
        </h2>
        
        <p className="text-sm sm:text-base text-[#777777] font-medium max-w-xl mb-12">
          Whether you have an open position in India or the GCC, need marketplace growth assistance, or want to consult on Shopify store architecture, let&apos;s connect.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Direct Details & Social Links (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Social Media Channels Card */}
            <div className="p-6 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-xl hover:shadow-2xl transition-all duration-300">
              <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block mb-3">
                Social Profiles & Direct Outreach
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#111111] border border-white/10 flex flex-col items-center justify-center text-center gap-1.5 hover:border-[#0077b5] transition-all hover:scale-105 group"
                >
                  <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  <span className="text-[11px] font-bold text-stone-200 group-hover:text-[#0077b5]">
                    LinkedIn
                  </span>
                </a>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#111111] border border-white/10 flex flex-col items-center justify-center text-center gap-1.5 hover:border-[#E4405F] transition-all hover:scale-105 group"
                >
                  <Instagram className="w-5 h-5 text-[#E4405F]" />
                  <span className="text-[11px] font-bold text-stone-200 group-hover:text-[#E4405F]">
                    Instagram
                  </span>
                </a>
                <a
                  href={profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#111111] border border-white/10 flex flex-col items-center justify-center text-center gap-1.5 hover:border-[#1877F2] transition-all hover:scale-105 group"
                >
                  <Facebook className="w-5 h-5 text-[#1877F2]" />
                  <span className="text-[11px] font-bold text-stone-200 group-hover:text-[#1877F2]">
                    Facebook
                  </span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#F5A400] border border-white/10 flex items-center justify-center shadow-xs">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm sm:text-base font-black text-white hover:text-[#F5A400] transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(profile.email, 'email')}
                  title="Copy email"
                  className="p-2.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-all active:scale-90 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#F5A400] border border-white/10 flex items-center justify-center shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">
                      Direct Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-black text-white hover:text-[#F5A400] transition-colors"
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
                    className="p-2.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-all active:scale-90 cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-xl space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#F5A400] border border-white/10 flex items-center justify-center shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">
                    Location & Mobility
                  </span>
                  <p className="text-sm sm:text-base font-black text-white">
                    Malappuram, Kerala, India
                  </p>
                  <p className="text-xs font-bold text-[#F5A400] mt-0.5">
                    Ready for immediate relocation: GCC (Qatar, UAE, Saudi)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right 7 Cols) in Card Black (#171717) with Thin Black Border */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-1">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-medium mb-6">
                Fill out the details below and I will respond within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-3xl bg-[#111111] border border-[#F5A400]/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#F5A400] text-[#111111] flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-lg font-black text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed font-medium">
                    Thank you for reaching out regarding {formData.purpose}. I will review your note and respond via email promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-black text-[#F5A400] underline pt-2 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-black text-stone-300 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jenny Scott"
                        className="w-full px-4 py-3 rounded-2xl bg-[#111111] border border-white/10 text-sm text-white placeholder-stone-500 focus:outline-hidden focus:border-[#F5A400] transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black text-stone-300 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#111111] border border-white/10 text-sm text-white placeholder-stone-500 focus:outline-hidden focus:border-[#F5A400] transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-black text-stone-300 block mb-1.5">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Retail Brands Ltd."
                        className="w-full px-4 py-3 rounded-2xl bg-[#111111] border border-white/10 text-sm text-white placeholder-stone-500 focus:outline-hidden focus:border-[#F5A400] transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black text-stone-300 block mb-1.5">
                        Purpose of Contact
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#111111] border border-white/10 text-sm text-white focus:outline-hidden focus:border-[#F5A400] transition-all font-medium cursor-pointer"
                      >
                        <option value="Job Opportunity" className="bg-[#171717] text-white">Full-time Job Opportunity</option>
                        <option value="E-Commerce Consultation" className="bg-[#171717] text-white">E-Commerce Consultation</option>
                        <option value="Marketplace Management" className="bg-[#171717] text-white">Marketplace Management</option>
                        <option value="Shopify Store Architecture" className="bg-[#171717] text-white">Shopify Store Architecture</option>
                        <option value="General Inquiry" className="bg-[#171717] text-white">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black text-stone-300 block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your requirements, store goals, or open opportunity..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#111111] border border-white/10 text-sm text-white placeholder-stone-500 focus:outline-hidden focus:border-[#F5A400] resize-none transition-all font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F5A400] text-[#111111] font-black text-xs uppercase tracking-wider hover:bg-[#e59900] shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Send Inquiry</span>
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
