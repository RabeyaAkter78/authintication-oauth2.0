import Link from 'next/link';
import React from 'react';

const signupButton = () => {
    return (
        <div>
            <button>
                <Link href="/api/auth/signup">SignUp</Link>
            </button>
        </div>
    );
};

export default signupButton;