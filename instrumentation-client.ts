import posthog from 'posthog-js';

export function register() {
  posthog.init(process.env.NEXT_PUBLIC_POST_HOG_TOKEN!, {
    api_host: process.env.NEXT_PUBLIC_POST_HOG_HOST,
    defaults: '2026-01-30'
  });
}
