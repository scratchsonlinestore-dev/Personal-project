import { HeroImageConfig } from '../types';

export const DEFAULT_HERO_IMAGE_CONFIG: HeroImageConfig = {
  imageUrl: '/arshad-founder.jpg',
  presetKey: 'studio',
  alignment: 'left',
  layoutStyle: 'side-by-side',
  width: 420,
  height: 420,
  scale: 1,
  borderRadius: 24,
  offsetX: 0,
  offsetY: 0,
  objectFit: 'contain',
  objectPositionY: 50,
  shadow: 'none',
  border: 'none',
  showBadge: false,
  badgeText: 'Founder, Multi-Channel E-Commerce Business',
  showFrame: false,
  showTextOverlay: false,
  showBottomActionPill: false,
  brandIconType: 'image',
  brandIconText: 'ATV',
  brandIconUrl: '/arshad-avatar.jpg',
  commercialSnapshotIconUrl: '/arshad-avatar.jpg',
};

export function getSavedHeroImageConfig(): HeroImageConfig {
  return DEFAULT_HERO_IMAGE_CONFIG;
}

