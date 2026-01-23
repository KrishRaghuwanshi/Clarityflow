import { create } from 'zustand';

interface UIState {
  isMobileMenuOpen: boolean;
  isPricingAnnual: boolean;
  activeDevice: 'desktop' | 'mobile';
  setMobileMenuOpen: (open: boolean) => void;
  setPricingAnnual: (annual: boolean) => void;
  setActiveDevice: (device: 'desktop' | 'mobile') => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isPricingAnnual: false,
  activeDevice: 'desktop',
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  setPricingAnnual: (annual) => set({ isPricingAnnual: annual }),
  setActiveDevice: (device) => set({ activeDevice: device }),
}));
