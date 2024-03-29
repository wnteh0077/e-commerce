'use server'

import { signOut } from "@/auth";

export const signOutAcc = async () => {
    await signOut();
};