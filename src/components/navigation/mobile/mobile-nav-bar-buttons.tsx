"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import SignupButton from "@/components/buttons/signup-button";
import LoginButton from "@/components/buttons/login-button";
import LogoutButton from "@/components/buttons/logout-button";

export const MobileNavBarButtons = () => {
    const { user } = useUser();

    return (
        <div className="mobile-nav-bar__buttons">
            {!user && (
                <>
                    <SignupButton />
                    <LoginButton />
                </>
            )}
            {user && (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    );
};