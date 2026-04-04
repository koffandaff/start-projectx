"use client";

import { Suspense, useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import PostHogPageView from "./PostHogPageView";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POST_HOG_TOKEN!, {
      api_host: process.env.NEXT_PUBLIC_POST_HOG_HOST,
      capture_pageview: false, // Handled by PostHogPageView
      capture_pageleave: true,
      persistence: 'localStorage',
      session_recording: {
        maskAllInputs: false,
        maskTextSelector: '.mask-text',
      },
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  )
}
