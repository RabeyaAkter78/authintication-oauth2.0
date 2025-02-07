import Link from 'next/link';
import React from 'react';

const loginButton = () => {
    return (
        <div>
           <button>
                <Link href="/api/auth/login"> Login</Link>
            </button>
        </div>
    );
};

export default loginButton;