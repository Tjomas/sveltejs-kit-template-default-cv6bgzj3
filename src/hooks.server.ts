import { building } from '$app/environment';
import { auth } from '$lib/server/auth.js';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import TestAssetUrl from '$lib/assets/asset.xslx?url';
import { readTestAsset } from '$lib/server/assetreader';

const authHandle: Handle = async ({ event, resolve }) => {
  const fetchSession = await auth.api.getSession({
    headers: event.request.headers,
  });

  if (fetchSession !== null) {
    const { user, session } = fetchSession;
  }

  return svelteKitHandler({ auth, event, resolve, building });
};

const mainHandle: Handle = async ({ event, resolve }) => {
  // Doing other our stuff here

  const response = await resolve(event);

  return response;
};

export const handle: Handle = sequence(authHandle, mainHandle);

export const onServerStartup = async () => {
  console.log('onServerStartup');
  readTestAsset(TestAssetUrl);
};
