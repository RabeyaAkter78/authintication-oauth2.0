import Link from 'next/link';
import React from 'react';

const logoutButton = () => {
    return (
        <div>
            <button>
                <Link href="/api/auth/logout"> LogOut</Link>
            </button>
        </div>
    );
};

export default logoutButton;