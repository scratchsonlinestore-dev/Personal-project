import { HeroImageConfig } from '../types';

export const DEFAULT_HERO_IMAGE_CONFIG: HeroImageConfig = {

  imageUrl: `${import.meta.env.BASE_URL}arshad-founder.jpg`,

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

  brandIconType: 'text',

  brandIconText: 'ATV',

  brandIconUrl: undefined,

  commercialSnapshotIconUrl: undefined,

};

export function getSavedHeroImageConfig(): HeroImageConfig {

  return DEFAULT_HERO_IMAGE_CONFIG;

}