import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tieuli248.masoionline',
  appName: 'Ma Sói Online',
  webDir: 'www',
  server: {
    cleartext: false
  },
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile'
  }
};

export default config;
