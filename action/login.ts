'use server'

import { signIn } from "@/auth";

export const loginWithGoogle = async () => {
    await signIn('google', { redirectTo: '/profile '});
};

export const loginWithGithub = async () => {
    await signIn('github', { redirectTo: '/profile '});
};