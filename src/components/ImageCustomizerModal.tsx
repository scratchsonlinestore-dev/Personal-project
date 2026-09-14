import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Image as ImageIcon,
  Lock,
  Unlock,
  RotateCcw,
  Check,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Maximize2,
  Move,
  Sliders,
  Sparkles,
  Info,
  ShieldCheck,
  Eye,
  LogOut,
  Layers,
  Type,
  Trash2,
} from 'lucide-react';
import { HeroImageConfig } from '../types';
import {
  DEFAULT_HERO_IMAGE_CONFIG,
  isOwnerAuthenticated,
  setOwnerAuthenticated,
  verifyOwnerCredentials,
  saveHeroImageConfig,
  resetHeroImageConfig,
} from '../utils/imageConfig';

interface ImageCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: HeroImageConfig;
  onUpdateConfig: (newConfig: HeroImageConfig) => void;
}

export const ImageCustomizerModal: React.FC<ImageCustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}) => {
  // Authentication state
  const [authenticated, setAuthenticated] = useState<boolean>(() => isOwnerAuthenticated());
  const [usernameInput, setUsernameInput] = useState<string>('scratchsonlinestore@gmail.com');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  // Active customizer tab
  const [activeTab, setActiveTab] = useState<'upload' | 'icons' | 'alignment' | 'size' | 'position' | 'styling'>('upload');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // File input refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const brandIconInputRef = useRef<HTMLInputElement>(null);
  const snapshotIconInputRef = useRef<HTMLInputElement>(null);

  const [dragActive, setDragActive] = useState<boolean>(false);
  const [brandDragActive, setBrandDragActive] = useState<boolean>(false);
  const [snapshotDragActive, setSnapshotDragActive] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (verifyOwnerCredentials(usernameInput, passwordInput)) {
      setAuthenticated(true);
      if (rememberMe) {
        setOwnerAuthenticated(true);
      }
    } else {
      setAuthError('Invalid credentials. Please enter the correct password (e.g. arshad2026 or admin).');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setOwnerAuthenticated(false);
    setPasswordInput('');
  };

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, JPEG, WEBP).');
      return;
    }

    // Limit to 8MB
    if (file.size > 8 * 1024 * 1024) {
      alert('Image size exceeds 8MB. Please select a smaller photo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        const updated = {
          ...config,
          imageUrl: dataUrl,
          presetKey: 'custom' as const,
        };
        onUpdateConfig(updated);
        saveHeroImageConfig(updated);
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleBrandIconUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, JPEG, SVG, WEBP).');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size exceeds 5MB. Please select a smaller icon.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        const updated: HeroImageConfig = {
          ...config,
          brandIconType: 'image',
          brandIconUrl: dataUrl,
        };
        onUpdateConfig(updated);
        saveHeroImageConfig(updated);
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSnapshotIconUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, JPEG, SVG, WEBP).');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size exceeds 5MB. Please select a smaller image.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        const updated: HeroImageConfig = {
          ...config,
          commercialSnapshotIconUrl: dataUrl,
        };
        onUpdateConfig(updated);
        saveHeroImageConfig(updated);
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleReset = () => {
    if (window.confirm('Reset hero image and positioning to factory default settings?')) {
      const reset = resetHeroImageConfig();
      onUpdateConfig(reset);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  const handleSaveAndClose = () => {
    saveHeroImageConfig(config);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#171717] text-white rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111111]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F5A400] text-[#111111] flex items-center justify-center font-black">
              {authenticated ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight text-white flex items-center gap-2">
                Owner Control Panel
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#F5A400]/20 text-[#F5A400] border border-[#F5A400]/30">
                  Owner Access
                </span>
              </h2>
              <p className="text-xs text-stone-400">
                {authenticated
                  ? 'Customize Hero Photo, Brand Icon (ATV), Commercial Snapshot Icon & Layout'
                  : 'Enter owner credentials to access layout and image controls'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {authenticated && (
              <button
                type="button"
                onClick={handleLogout}
                title="Lock / Sign Out"
                className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {!authenticated ? (
          /* STEP 1: CREDENTIAL ACCESS FORM */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="p-4 rounded-2xl bg-[#222222] border border-white/10 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#F5A400] shrink-0 mt-0.5" />
              <div className="text-xs text-stone-300 space-y-1">
                <p className="font-bold text-white">Protected Owner Control</p>
                <p>
                  This panel enables image uploads, left/right alignment, and precise sizing adjustments for Arshad TV.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#F5A400] bg-[#111111] p-2 rounded-lg border border-white/5">
                  Hint: Email: <span className="text-white">scratchsonlinestore@gmail.com</span> | Password: <span className="text-white">arshad2026</span> (or <span className="text-white">admin</span>)
                </div>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1.5 uppercase tracking-wider">
                  Owner Email or Username
                </label>
                <input
                  type="text"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="scratchsonlinestore@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-white/15 text-white text-sm focus:outline-hidden focus:border-[#F5A400] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1.5 uppercase tracking-wider">
                  Security Password
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter arshad2026 or admin"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-white/15 text-white text-sm focus:outline-hidden focus:border-[#F5A400] transition-colors"
                  autoFocus
                  required
                />
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/50 text-xs text-red-200">
                  {authError}
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-xs text-stone-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded-md border-white/20 text-[#F5A400] focus:ring-[#F5A400] bg-[#111111]"
                  />
                  <span>Remember session on this device</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#F5A400] text-[#111111] font-black text-sm uppercase tracking-wider hover:bg-[#e59900] shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock Image Controls</span>
              </button>
            </form>
          </div>
        ) : (
          /* STEP 2: IMAGE CUSTOMIZATION DASHBOARD */
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Customizer Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-[#111111] border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab('upload')}
                className={`flex-1 min-w-[85px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'upload'
                    ? 'bg-[#F5A400] text-[#111111] shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Hero Photo</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('icons')}
                className={`flex-1 min-w-[85px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'icons'
                    ? 'bg-[#F5A400] text-[#111111] shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Icons</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('alignment')}
                className={`flex-1 min-w-[85px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'alignment'
                    ? 'bg-[#F5A400] text-[#111111] shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <AlignLeft className="w-3.5 h-3.5" />
                <span>Alignment</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('size')}
                className={`flex-1 min-w-[85px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'size'
                    ? 'bg-[#F5A400] text-[#111111] shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Size</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('position')}
                className={`flex-1 min-w-[85px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'position'
                    ? 'bg-[#F5A400] text-[#111111] shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Move className="w-3.5 h-3.5" />
                <span>Position</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('styling')}
                className={`flex-1 min-w-[85px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'styling'
                    ? 'bg-[#F5A400] text-[#111111] shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Styling</span>
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className="space-y-5">
              
              {/* TAB 1: UPLOAD & IMAGE SOURCE */}
              {activeTab === 'upload' && (
                <div className="space-y-5">
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      dragActive
                        ? 'border-[#F5A400] bg-[#F5A400]/10'
                        : 'border-white/20 hover:border-[#F5A400] bg-[#111111]/70'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleFileUpload(e.target.files[0]);
                        }
                      }}
                    />
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-[#F5A400] mx-auto flex items-center justify-center mb-3">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-white mb-1">
                      Click to upload or drag & drop image
                    </p>
                    <p className="text-xs text-stone-400">
                      Supports PNG, JPG, JPEG, WEBP (up to 8MB)
                    </p>
                  </div>

                  {/* Preset Selector */}
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                      Or Choose Preset Portrait:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          const updated = {
                            ...config,
                            imageUrl: '/arshad-portrait.jpg',
                            presetKey: 'studio' as const,
                          };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          config.presetKey === 'studio'
                            ? 'border-[#F5A400] bg-[#F5A400]/10 text-white'
                            : 'border-white/10 bg-[#111111] text-stone-300 hover:border-white/30'
                        }`}
                      >
                        <img
                          src="/arshad-portrait.jpg"
                          alt="Studio"
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="text-xs">
                          <p className="font-bold">Studio Portrait</p>
                          <p className="text-[10px] text-stone-400">Default Light</p>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const updated = {
                            ...config,
                            imageUrl: '/arshad-portrait-dark.jpg',
                            presetKey: 'suit' as const,
                          };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          config.presetKey === 'suit'
                            ? 'border-[#F5A400] bg-[#F5A400]/10 text-white'
                            : 'border-white/10 bg-[#111111] text-stone-300 hover:border-white/30'
                        }`}
                      >
                        <img
                          src="/arshad-portrait-dark.jpg"
                          alt="Suit"
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="text-xs">
                          <p className="font-bold">Dark Suit View</p>
                          <p className="text-[10px] text-stone-400">Formal Studio</p>
                        </div>
                      </button>

                      {config.presetKey === 'custom' && (
                        <div className="p-2.5 rounded-xl border border-[#F5A400] bg-[#F5A400]/10 text-white flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <img
                              src={config.imageUrl}
                              alt="Custom"
                              className="w-10 h-10 rounded-lg object-cover shrink-0"
                            />
                            <div className="text-xs truncate">
                              <p className="font-bold truncate">Custom Photo</p>
                              <p className="text-[10px] text-stone-400">Uploaded</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* FRAME & TEXT OVERLAY DISPLAY MODE (TRANSPARENT VS FRAMED) */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/15 space-y-3">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#F5A400]" />
                        <span>Background & Frame Options</span>
                      </h4>
                      <p className="text-[11px] text-stone-400 mt-0.5">
                        Remove card frame and text overlay so transparent background photos display 100% transparently.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          const updated = {
                            ...config,
                            showFrame: false,
                            showTextOverlay: false,
                            objectFit: 'contain' as const,
                            border: 'none' as const,
                            shadow: 'none' as const,
                          };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1 ${
                          !config.showFrame
                            ? 'border-[#25D366] bg-[#25D366]/15 text-white shadow-sm'
                            : 'border-white/10 bg-[#171717] text-stone-400 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-[#25D366] flex items-center gap-1">
                            ✨ Transparent Cutout (No Frame, No Text)
                          </span>
                          {!config.showFrame && <Check className="w-4 h-4 text-[#25D366]" />}
                        </div>
                        <p className="text-[11px] text-stone-300 leading-snug">
                          No black background card, no borders, and no text. Displays transparent PNG/WEBP directly on the page background.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const updated = {
                            ...config,
                            showFrame: true,
                            showTextOverlay: true,
                            objectFit: 'cover' as const,
                            border: 'thin' as const,
                            shadow: 'deep' as const,
                          };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1 ${
                          config.showFrame
                            ? 'border-[#F5A400] bg-[#F5A400]/15 text-white shadow-sm'
                            : 'border-white/10 bg-[#171717] text-stone-400 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-[#F5A400] flex items-center gap-1">
                            🃏 Framed Card (Dark Background + Text)
                          </span>
                          {config.showFrame && <Check className="w-4 h-4 text-[#F5A400]" />}
                        </div>
                        <p className="text-[11px] text-stone-300 leading-snug">
                          Dark card container with status badge, name title, 5.0 star rating, and platform icons.
                        </p>
                      </button>
                    </div>

                    {/* Fine-grain toggles */}
                    <div className="pt-2 border-t border-white/10 flex flex-wrap gap-4 text-xs">
                      <label className="flex items-center gap-2 cursor-pointer text-stone-300 hover:text-white">
                        <input
                          type="checkbox"
                          checked={config.showFrame !== false}
                          onChange={(e) => {
                            const updated = { ...config, showFrame: e.target.checked };
                            onUpdateConfig(updated);
                            saveHeroImageConfig(updated);
                          }}
                          className="rounded text-[#F5A400] focus:ring-[#F5A400] w-4 h-4"
                        />
                        <span>Show Card Frame & Dark Background</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer text-stone-300 hover:text-white">
                        <input
                          type="checkbox"
                          checked={config.showTextOverlay !== false}
                          onChange={(e) => {
                            const updated = { ...config, showTextOverlay: e.target.checked };
                            onUpdateConfig(updated);
                            saveHeroImageConfig(updated);
                          }}
                          className="rounded text-[#F5A400] focus:ring-[#F5A400] w-4 h-4"
                        />
                        <span>Show Text Overlays (Name, 5.0 Rating, Tags)</span>
                      </label>
                    </div>

                    {/* Quick link to Icons tab */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 bg-[#111111] p-3 rounded-xl">
                      <div className="flex items-center gap-2.5">
                        <Layers className="w-4 h-4 text-[#F5A400] shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-white">
                            Looking to change your Brand Icon (ATV) or Snapshot Icon?
                          </p>
                          <p className="text-[11px] text-stone-400">
                            Upload custom logos or edit initials for Navbar, Footer &amp; About card
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab('icons')}
                        className="px-3 py-1.5 rounded-lg bg-[#F5A400] text-[#111111] text-xs font-bold hover:bg-[#e59900] transition-colors cursor-pointer shrink-0"
                      >
                        Change Icons →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: ICONS & BRANDING (Navbar Brand Icon & Commercial Snapshot Icon) */}
              {activeTab === 'icons' && (
                <div className="space-y-6">
                  {/* Top explanation banner */}
                  <div className="p-3.5 rounded-2xl bg-[#111111] border border-white/10 flex items-start gap-3">
                    <Layers className="w-4 h-4 text-[#F5A400] shrink-0 mt-0.5" />
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Customize the two badges highlighted across the site: the <strong className="text-white">Brand Icon</strong> (floating top Navbar &amp; Footer next to &quot;Arshad TV&quot;) and the <strong className="text-white">Commercial Snapshot Icon</strong> (About section card header).
                    </p>
                  </div>

                  {/* ICON 1: BRAND IDENTITY ICON (NAVBAR & FOOTER) */}
                  <div className="p-5 rounded-2xl bg-[#111111] border border-white/15 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                            1. Brand Icon (Navbar &amp; Footer)
                          </h3>
                        </div>
                        <p className="text-[11px] text-stone-400 mt-0.5">
                          The circular badge shown beside &quot;Arshad TV • E-Commerce Specialist&quot;
                        </p>
                      </div>

                      {/* Display Mode Toggle */}
                      <div className="inline-flex rounded-xl bg-[#171717] p-1 border border-white/10">
                        <button
                          type="button"
                          onClick={() => {
                            const updated = { ...config, brandIconType: 'text' as const, brandIconUrl: '' };
                            onUpdateConfig(updated);
                            saveHeroImageConfig(updated);
                          }}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            !config.brandIconUrl
                              ? 'bg-[#F5A400] text-[#111111] shadow-xs'
                              : 'text-stone-400 hover:text-white'
                          }`}
                        >
                          <Type className="w-3 h-3" />
                          <span>Initials Badge (ATV)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = {
                              ...config,
                              brandIconType: 'image' as const,
                              brandIconUrl: config.brandIconUrl || '/arshad-portrait.jpg',
                            };
                            onUpdateConfig(updated);
                            saveHeroImageConfig(updated);
                          }}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            config.brandIconUrl
                              ? 'bg-[#F5A400] text-[#111111] shadow-xs'
                              : 'text-stone-400 hover:text-white'
                          }`}
                        >
                          <ImageIcon className="w-3 h-3" />
                          <span>Custom Photo / Logo</span>
                        </button>
                      </div>
                    </div>

                    {/* Live Preview of Navbar Brand Pill */}
                    <div>
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                        Live Preview (Navbar &amp; Footer Appearance)
                      </span>
                      <div className="p-3.5 rounded-2xl bg-[#171717] border border-white/10 flex flex-wrap items-center justify-between gap-4">
                        {/* Navbar style pill preview */}
                        <div className="flex items-center gap-3 bg-[#111111] px-4 py-2 rounded-full border border-white/10 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-[#F5A400] text-[#111111] font-extrabold text-xs flex items-center justify-center tracking-wider overflow-hidden shrink-0 border border-white/10">
                            {config.brandIconUrl ? (
                              <img
                                src={config.brandIconUrl}
                                alt="Brand Icon Preview"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span>{config.brandIconText || 'ATV'}</span>
                            )}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-sm font-bold text-white leading-none">Arshad TV</span>
                            <span className="text-[10px] text-stone-400 font-medium leading-tight mt-0.5">
                              E-Commerce Specialist
                            </span>
                          </div>
                        </div>

                        {/* Footer style preview */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-full bg-[#F5A400] text-[#111111] font-black text-sm flex items-center justify-center shadow-xs overflow-hidden shrink-0 border border-white/10">
                            {config.brandIconUrl ? (
                              <img
                                src={config.brandIconUrl}
                                alt="Brand Icon Preview"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span>{config.brandIconText || 'ATV'}</span>
                            )}
                          </div>
                          <span className="text-xs text-stone-400 font-medium">(Footer 40px icon)</span>
                        </div>
                      </div>
                    </div>

                    {/* If Image Mode is Active */}
                    {config.brandIconUrl ? (
                      <div className="space-y-3 pt-1">
                        {/* Hidden input for brand icon */}
                        <input
                          ref={brandIconInputRef}
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleBrandIconUpload(e.target.files[0]);
                            }
                          }}
                          className="hidden"
                        />

                        {/* Drag and Drop / Click Upload for Brand Icon */}
                        <div
                          onDragOver={(e) => {
                            e.preventDefault();
                            setBrandDragActive(true);
                          }}
                          onDragLeave={(e) => {
                            e.preventDefault();
                            setBrandDragActive(false);
                          }}
                          onDrop={(e) => {
                            e.preventDefault();
                            setBrandDragActive(false);
                            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                              handleBrandIconUpload(e.dataTransfer.files[0]);
                            }
                          }}
                          onClick={() => brandIconInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                            brandDragActive
                              ? 'border-[#F5A400] bg-[#F5A400]/10'
                              : 'border-white/20 hover:border-[#F5A400] bg-[#171717]'
                          }`}
                        >
                          <Upload className="w-5 h-5 text-[#F5A400] mx-auto mb-1.5" />
                          <p className="text-xs font-bold text-white">
                            Upload New Icon Image or Logo
                          </p>
                          <p className="text-[11px] text-stone-400 mt-0.5">
                            Click or drag PNG (transparent supported), WEBP, JPG, or SVG
                          </p>
                        </div>

                        {/* Quick Presets for Brand Icon */}
                        <div>
                          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                            Quick Presets for Brand Icon:
                          </span>
                          <div className="grid grid-cols-3 gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                const updated = { ...config, brandIconUrl: '/arshad-portrait.jpg', brandIconType: 'image' as const };
                                onUpdateConfig(updated);
                                saveHeroImageConfig(updated);
                              }}
                              className="p-2 rounded-xl bg-[#171717] hover:bg-white/10 border border-white/10 text-left flex items-center gap-2 cursor-pointer transition-colors"
                            >
                              <img src="/arshad-portrait.jpg" alt="Preset" className="w-7 h-7 rounded-full object-cover shrink-0" />
                              <span className="text-xs font-medium text-stone-200 truncate">Light Studio</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                const updated = { ...config, brandIconUrl: '/arshad-portrait-dark.jpg', brandIconType: 'image' as const };
                                onUpdateConfig(updated);
                                saveHeroImageConfig(updated);
                              }}
                              className="p-2 rounded-xl bg-[#171717] hover:bg-white/10 border border-white/10 text-left flex items-center gap-2 cursor-pointer transition-colors"
                            >
                              <img src="/arshad-portrait-dark.jpg" alt="Preset" className="w-7 h-7 rounded-full object-cover shrink-0" />
                              <span className="text-xs font-medium text-stone-200 truncate">Dark Studio</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                const updated = { ...config, brandIconUrl: config.imageUrl, brandIconType: 'image' as const };
                                onUpdateConfig(updated);
                                saveHeroImageConfig(updated);
                              }}
                              className="p-2 rounded-xl bg-[#171717] hover:bg-white/10 border border-white/10 text-left flex items-center gap-2 cursor-pointer transition-colors"
                            >
                              <img src={config.imageUrl} alt="Preset" className="w-7 h-7 rounded-full object-cover shrink-0" />
                              <span className="text-xs font-medium text-stone-200 truncate">Use Hero Photo</span>
                            </button>
                          </div>
                        </div>

                        {/* Button to remove image & revert to ATV text */}
                        <div className="pt-2 flex justify-end">
                          <button
                            type="button"
                            onClick={() => {
                              const updated = { ...config, brandIconUrl: '', brandIconType: 'text' as const };
                              onUpdateConfig(updated);
                              saveHeroImageConfig(updated);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-xs font-bold text-red-200 cursor-pointer transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove Image &amp; Revert to &quot;ATV&quot; Badge</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* If Text Mode is Active */
                      <div className="space-y-3 pt-1">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                            Initials / Monogram Text (e.g. ATV, AT, A)
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              maxLength={5}
                              value={config.brandIconText || 'ATV'}
                              onChange={(e) => {
                                const updated = { ...config, brandIconText: e.target.value.toUpperCase() };
                                onUpdateConfig(updated);
                                saveHeroImageConfig(updated);
                              }}
                              placeholder="ATV"
                              className="flex-1 px-4 py-2 rounded-xl bg-[#171717] border border-white/15 text-white font-black text-sm tracking-widest uppercase focus:outline-hidden focus:border-[#F5A400]"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const updated = { ...config, brandIconText: 'ATV' };
                                onUpdateConfig(updated);
                                saveHeroImageConfig(updated);
                              }}
                              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-stone-300 hover:text-white cursor-pointer transition-colors"
                            >
                              Reset to ATV
                            </button>
                          </div>
                        </div>

                        <p className="text-[11px] text-stone-400">
                          Or switch to <strong className="text-white">&quot;Custom Photo / Logo&quot;</strong> above to display your actual portrait or company logo instead of initials.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* ICON 2: COMMERCIAL SNAPSHOT CARD ICON (ABOUT SECTION) */}
                  <div className="p-5 rounded-2xl bg-[#111111] border border-white/15 space-y-4">
                    <div className="pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                          2. Commercial Snapshot Icon (About Section)
                        </h3>
                      </div>
                      <p className="text-[11px] text-stone-400 mt-0.5">
                        The 12x12 thumbnail displayed in the Commercial Snapshot overview card
                      </p>
                    </div>

                    {/* Live Preview of Snapshot Header Card */}
                    <div>
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                        Live Preview (About Section Card Header)
                      </span>
                      <div className="p-4 rounded-2xl bg-[#171717] border border-white/10 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/20 shadow-xs shrink-0 bg-[#111111]">
                          <img
                            src={config.commercialSnapshotIconUrl || '/arshad-portrait-dark.jpg'}
                            alt="Snapshot Icon Preview"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-base font-black text-white leading-tight">
                            Commercial Snapshot
                          </span>
                          <span className="text-xs text-stone-400 font-medium leading-tight mt-0.5">
                            Core platforms &amp; technical toolkit
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hidden input for commercial snapshot icon */}
                    <input
                      ref={snapshotIconInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleSnapshotIconUpload(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />

                    {/* Drag and Drop / Click Upload for Commercial Snapshot */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setSnapshotDragActive(true);
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault();
                        setSnapshotDragActive(false);
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        setSnapshotDragActive(false);
                        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                          handleSnapshotIconUpload(e.dataTransfer.files[0]);
                        }
                      }}
                      onClick={() => snapshotIconInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                        snapshotDragActive
                          ? 'border-[#F5A400] bg-[#F5A400]/10'
                          : 'border-white/20 hover:border-[#F5A400] bg-[#171717]'
                      }`}
                    >
                      <Upload className="w-5 h-5 text-[#F5A400] mx-auto mb-1.5" />
                      <p className="text-xs font-bold text-white">
                        Upload New Commercial Snapshot Icon
                      </p>
                      <p className="text-[11px] text-stone-400 mt-0.5">
                        Click or drag PNG, WEBP, JPG or SVG photo
                      </p>
                    </div>

                    {/* Presets & Reset */}
                    <div>
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                        Quick Presets for Commercial Snapshot:
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const updated = { ...config, commercialSnapshotIconUrl: '/arshad-portrait-dark.jpg' };
                            onUpdateConfig(updated);
                            saveHeroImageConfig(updated);
                          }}
                          className={`p-2 rounded-xl border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                            (config.commercialSnapshotIconUrl || '/arshad-portrait-dark.jpg') === '/arshad-portrait-dark.jpg'
                              ? 'bg-[#F5A400]/15 border-[#F5A400] text-white'
                              : 'bg-[#171717] hover:bg-white/10 border-white/10 text-stone-300'
                          }`}
                        >
                          <img src="/arshad-portrait-dark.jpg" alt="Preset" className="w-7 h-7 rounded-lg object-cover object-top shrink-0" />
                          <span className="text-xs font-medium truncate">Dark Studio (Default)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            const updated = { ...config, commercialSnapshotIconUrl: '/arshad-portrait.jpg' };
                            onUpdateConfig(updated);
                            saveHeroImageConfig(updated);
                          }}
                          className={`p-2 rounded-xl border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                            config.commercialSnapshotIconUrl === '/arshad-portrait.jpg'
                              ? 'bg-[#F5A400]/15 border-[#F5A400] text-white'
                              : 'bg-[#171717] hover:bg-white/10 border-white/10 text-stone-300'
                          }`}
                        >
                          <img src="/arshad-portrait.jpg" alt="Preset" className="w-7 h-7 rounded-lg object-cover shrink-0" />
                          <span className="text-xs font-medium truncate">Light Studio</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            const updated = { ...config, commercialSnapshotIconUrl: config.imageUrl };
                            onUpdateConfig(updated);
                            saveHeroImageConfig(updated);
                          }}
                          className={`p-2 rounded-xl border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                            config.commercialSnapshotIconUrl === config.imageUrl
                              ? 'bg-[#F5A400]/15 border-[#F5A400] text-white'
                              : 'bg-[#171717] hover:bg-white/10 border-white/10 text-stone-300'
                          }`}
                        >
                          <img src={config.imageUrl} alt="Preset" className="w-7 h-7 rounded-lg object-cover shrink-0" />
                          <span className="text-xs font-medium truncate">Use Hero Photo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ALIGNMENT & LAYOUT */}
              {activeTab === 'alignment' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                      Image Alignment Position
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          const updated = { ...config, alignment: 'left' as const };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-2 ${
                          config.alignment === 'left'
                            ? 'border-[#F5A400] bg-[#F5A400]/15 text-white shadow-md'
                            : 'border-white/10 bg-[#111111] text-stone-400 hover:text-white'
                        }`}
                      >
                        <AlignLeft className="w-6 h-6 text-[#F5A400]" />
                        <span className="text-xs font-black uppercase">Left Aligned</span>
                        <span className="text-[10px] text-stone-400">Image on Left</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const updated = { ...config, alignment: 'center' as const };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-2 ${
                          config.alignment === 'center'
                            ? 'border-[#F5A400] bg-[#F5A400]/15 text-white shadow-md'
                            : 'border-white/10 bg-[#111111] text-stone-400 hover:text-white'
                        }`}
                      >
                        <AlignCenter className="w-6 h-6 text-[#F5A400]" />
                        <span className="text-xs font-black uppercase">Center Aligned</span>
                        <span className="text-[10px] text-stone-400">Image Centered</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const updated = { ...config, alignment: 'right' as const };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-2 ${
                          config.alignment === 'right'
                            ? 'border-[#F5A400] bg-[#F5A400]/15 text-white shadow-md'
                            : 'border-white/10 bg-[#111111] text-stone-400 hover:text-white'
                        }`}
                      >
                        <AlignRight className="w-6 h-6 text-[#F5A400]" />
                        <span className="text-xs font-black uppercase">Right Aligned</span>
                        <span className="text-[10px] text-stone-400">Image on Right</span>
                      </button>
                    </div>
                  </div>

                  {/* Layout Arrangement Mode */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                      Hero Arrangement Style
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          const updated = { ...config, layoutStyle: 'side-by-side' as const };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          config.layoutStyle === 'side-by-side'
                            ? 'border-[#F5A400] bg-[#F5A400]/10 text-white'
                            : 'border-white/10 bg-[#111111] text-stone-400'
                        }`}
                      >
                        <p className="text-xs font-bold text-white">Side-by-Side (Desktop)</p>
                        <p className="text-[11px] text-stone-400">Text & image adjacent columns</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const updated = { ...config, layoutStyle: 'stacked' as const };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          config.layoutStyle === 'stacked'
                            ? 'border-[#F5A400] bg-[#F5A400]/10 text-white'
                            : 'border-white/10 bg-[#111111] text-stone-400'
                        }`}
                      >
                        <p className="text-xs font-bold text-white">Stacked Vertically</p>
                        <p className="text-[11px] text-stone-400">Full-width centered flow</p>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: MANUALLY SIZE ADJUST */}
              {activeTab === 'size' && (
                <div className="space-y-5">
                  {/* Width slider */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Image Width:</span>
                      <span className="font-mono text-[#F5A400] font-bold">{config.width}px</span>
                    </div>
                    <input
                      type="range"
                      min={220}
                      max={680}
                      step={10}
                      value={config.width}
                      onChange={(e) => {
                        const updated = { ...config, width: Number(e.target.value) };
                        onUpdateConfig(updated);
                        saveHeroImageConfig(updated);
                      }}
                      className="w-full accent-[#F5A400] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>220px (Compact)</span>
                      <span>380px (Standard)</span>
                      <span>680px (Wide)</span>
                    </div>
                  </div>

                  {/* Height slider */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Image Height:</span>
                      <span className="font-mono text-[#F5A400] font-bold">{config.height}px</span>
                    </div>
                    <input
                      type="range"
                      min={260}
                      max={680}
                      step={10}
                      value={config.height}
                      onChange={(e) => {
                        const updated = { ...config, height: Number(e.target.value) };
                        onUpdateConfig(updated);
                        saveHeroImageConfig(updated);
                      }}
                      className="w-full accent-[#F5A400] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>260px (Square/Short)</span>
                      <span>470px (Half Portrait)</span>
                      <span>680px (Tall)</span>
                    </div>
                  </div>

                  {/* Scale Multiplier */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Overall Scale:</span>
                      <span className="font-mono text-[#F5A400] font-bold">{(config.scale * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min={0.7}
                      max={1.3}
                      step={0.05}
                      value={config.scale}
                      onChange={(e) => {
                        const updated = { ...config, scale: Number(e.target.value) };
                        onUpdateConfig(updated);
                        saveHeroImageConfig(updated);
                      }}
                      className="w-full accent-[#F5A400] cursor-pointer"
                    />
                  </div>

                  {/* Corner Border Radius */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Corner Rounding:</span>
                      <span className="font-mono text-[#F5A400] font-bold">{config.borderRadius}px</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={48}
                      step={4}
                      value={config.borderRadius}
                      onChange={(e) => {
                        const updated = { ...config, borderRadius: Number(e.target.value) };
                        onUpdateConfig(updated);
                        saveHeroImageConfig(updated);
                      }}
                      className="w-full accent-[#F5A400] cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* TAB 4: MANUALLY POSITION ADJUST */}
              {activeTab === 'position' && (
                <div className="space-y-5">
                  {/* Horizontal Offset X */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Horizontal Offset (X-Axis):</span>
                      <span className="font-mono text-[#F5A400] font-bold">{config.offsetX}px</span>
                    </div>
                    <input
                      type="range"
                      min={-150}
                      max={150}
                      step={5}
                      value={config.offsetX}
                      onChange={(e) => {
                        const updated = { ...config, offsetX: Number(e.target.value) };
                        onUpdateConfig(updated);
                        saveHeroImageConfig(updated);
                      }}
                      className="w-full accent-[#F5A400] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>-150px (Shift Left)</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = { ...config, offsetX: 0 };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className="text-[#F5A400] hover:underline"
                      >
                        Reset 0px
                      </button>
                      <span>+150px (Shift Right)</span>
                    </div>
                  </div>

                  {/* Vertical Offset Y */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Vertical Offset (Y-Axis):</span>
                      <span className="font-mono text-[#F5A400] font-bold">{config.offsetY}px</span>
                    </div>
                    <input
                      type="range"
                      min={-100}
                      max={100}
                      step={5}
                      value={config.offsetY}
                      onChange={(e) => {
                        const updated = { ...config, offsetY: Number(e.target.value) };
                        onUpdateConfig(updated);
                        saveHeroImageConfig(updated);
                      }}
                      className="w-full accent-[#F5A400] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>-100px (Shift Up)</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = { ...config, offsetY: 0 };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className="text-[#F5A400] hover:underline"
                      >
                        Reset 0px
                      </button>
                      <span>+100px (Shift Down)</span>
                    </div>
                  </div>

                  {/* Object Position Focus (Focal Point Y) */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Photo Focal Focus (Top to Bottom):</span>
                      <span className="font-mono text-[#F5A400] font-bold">{config.objectPositionY}%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={5}
                      value={config.objectPositionY}
                      onChange={(e) => {
                        const updated = { ...config, objectPositionY: Number(e.target.value) };
                        onUpdateConfig(updated);
                        saveHeroImageConfig(updated);
                      }}
                      className="w-full accent-[#F5A400] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>0% (Head/Hair Focus)</span>
                      <span>50% (Center)</span>
                      <span>100% (Torso)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: STYLING & BADGE */}
              {activeTab === 'styling' && (
                <div className="space-y-5">
                  {/* Quick Mode Switcher */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/15 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Display Mode
                      </span>
                      {!config.showFrame && (
                        <span className="text-[10px] font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                          Transparent Cutout Active
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          const updated = {
                            ...config,
                            showFrame: false,
                            showTextOverlay: false,
                            objectFit: 'contain' as const,
                            border: 'none' as const,
                            shadow: 'none' as const,
                          };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                          !config.showFrame
                            ? 'border-[#25D366] bg-[#25D366]/20 text-white'
                            : 'border-white/10 bg-[#171717] text-stone-400 hover:text-white'
                        }`}
                      >
                        ✨ Transparent (No Frame / Text)
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const updated = {
                            ...config,
                            showFrame: true,
                            showTextOverlay: true,
                            objectFit: 'cover' as const,
                            border: 'thin' as const,
                            shadow: 'deep' as const,
                          };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className={`p-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                          config.showFrame
                            ? 'border-[#F5A400] bg-[#F5A400]/20 text-white'
                            : 'border-white/10 bg-[#171717] text-stone-400 hover:text-white'
                        }`}
                      >
                        🃏 Framed Card (Dark Frame)
                      </button>
                    </div>
                  </div>

                  {/* Shadow Style */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                      Drop Shadow Style
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {(['none', 'soft', 'deep', 'amber'] as const).map((shadowOpt) => (
                        <button
                          key={shadowOpt}
                          type="button"
                          onClick={() => {
                            const updated = { ...config, shadow: shadowOpt };
                            onUpdateConfig(updated);
                            saveHeroImageConfig(updated);
                          }}
                          className={`p-3 rounded-xl border text-center capitalize text-xs font-bold transition-all cursor-pointer ${
                            config.shadow === shadowOpt
                              ? 'border-[#F5A400] bg-[#F5A400]/15 text-white'
                              : 'border-white/10 bg-[#111111] text-stone-400'
                          }`}
                        >
                          {shadowOpt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Border Accent */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                      Card Border Accent
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {(['none', 'thin', 'amber', 'bold'] as const).map((borderOpt) => (
                        <button
                          key={borderOpt}
                          type="button"
                          onClick={() => {
                            const updated = { ...config, border: borderOpt };
                            onUpdateConfig(updated);
                            saveHeroImageConfig(updated);
                          }}
                          className={`p-3 rounded-xl border text-center capitalize text-xs font-bold transition-all cursor-pointer ${
                            config.border === borderOpt
                              ? 'border-[#F5A400] bg-[#F5A400]/15 text-white'
                              : 'border-white/10 bg-[#111111] text-stone-400'
                          }`}
                        >
                          {borderOpt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status Badge Toggle */}
                  <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Show Status Badge Over Photo</span>
                      <input
                        type="checkbox"
                        checked={config.showBadge}
                        onChange={(e) => {
                          const updated = { ...config, showBadge: e.target.checked };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        className="rounded text-[#F5A400] focus:ring-[#F5A400] w-4 h-4"
                      />
                    </div>
                    {config.showBadge && (
                      <input
                        type="text"
                        value={config.badgeText}
                        onChange={(e) => {
                          const updated = { ...config, badgeText: e.target.value };
                          onUpdateConfig(updated);
                          saveHeroImageConfig(updated);
                        }}
                        placeholder="e.g. Founder @ Scratch"
                        className="w-full px-3 py-2 rounded-xl bg-[#1c1c1c] border border-white/15 text-xs text-white"
                      />
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-bold border border-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Factory Defaults</span>
              </button>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                {saveSuccess && (
                  <span className="text-xs text-[#25D366] font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Saved!
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleSaveAndClose}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#F5A400] text-[#111111] font-black text-xs uppercase tracking-wider hover:bg-[#e59900] shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  Save & Close
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
