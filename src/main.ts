import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const VERSION_STORAGE_KEY = 'portfolio-app-version';

async function refreshIfNewVersionIsAvailable(): Promise<void> {
  try {
    const response = await fetch(`/version.json?check=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) {
      return;
    }

    const { version } = (await response.json()) as { version?: string };
    if (!version) {
      return;
    }

    const currentVersion = localStorage.getItem(VERSION_STORAGE_KEY);
    if (!currentVersion) {
      localStorage.setItem(VERSION_STORAGE_KEY, version);
      return;
    }

    if (currentVersion !== version) {
      localStorage.setItem(VERSION_STORAGE_KEY, version);
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('app-version', version);
      window.location.replace(currentUrl.toString());
    }
  } catch (error) {
    // A version check must never prevent the application from starting.
    console.warn('Version check failed', error);
  }
}

refreshIfNewVersionIsAvailable().finally(() => {
  bootstrapApplication(App, appConfig).catch((err) => console.error(err));
});
