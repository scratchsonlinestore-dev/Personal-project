import { HeroImageConfig } from '../types';

export const DEFAULT_HERO_IMAGE_CONFIG: HeroImageConfig = {
  imageUrl: '/arshad-portrait.jpg',
  presetKey: 'studio',
  alignment: 'right',
  layoutStyle: 'side-by-side',
  width: 380,
  height: 470,
  scale: 1,
  borderRadius: 24,
  offsetX: 0,
  offsetY: 0,
  objectFit: 'cover',
  objectPositionY: 15,
  shadow: 'deep',
  border: 'thin',
  showBadge: true,
  badgeText: 'Specialist • Founder @ Scratch',
};

const STORAGE_KEY = 'arshad_hero_image_config_v2';
const AUTH_KEY = 'arshad_owner_authenticated_v2';

export function getSavedHeroImageConfig(): HeroImageConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_HERO_IMAGE_CONFIG, ...parsed };
    }
  } catch (err) {
    console.error('Failed to parse saved hero image config', err);
  }
  return DEFAULT_HERO_IMAGE_CONFIG;
}

export function saveHeroImageConfig(config: HeroImageConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (err) {
    console.error('Failed to save hero image config', err);
  }
}

export function resetHeroImageConfig(): HeroImageConfig {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to reset hero image config', err);
  }
  return DEFAULT_HERO_IMAGE_CONFIG;
}

export function isOwnerAuthenticated(): boolean {
  try {
    return localStorage.getItem(AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setOwnerAuthenticated(status: boolean): void {
  try {
    if (status) {
      localStorage.setItem(AUTH_KEY, 'true');
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  } catch {
    // Ignore storage quota or access issues
  }
}

// Credentials validation: allows owner email scratchsonlinestore@gmail.com, arshad, scratch, or admin
export function verifyOwnerCredentials(usernameInput: string, passwordInput: string): boolean {
  const username = usernameInput.trim().toLowerCase();
  const password = passwordInput.trim();

  const validUsernames = [
    'scratchsonlinestore@gmail.com',
    'scratchsonlinestore',
    'scratch',
    'arshad',
    'arshad tv',
    'admin',
  ];

  const validPasswords = [
    'arshad2026',
    'scratch777',
    'scratch2026',
    'admin123',
    'admin',
    '777',
  ];

  // If user enters matching username and password, or master admin password
  if (validUsernames.includes(username) && (validPasswords.includes(password) || password === 'admin')) {
    return true;
  }

  // Also allow quick direct access if password is valid
  if (validPasswords.includes(password)) {
    return true;
  }

  return false;
}
