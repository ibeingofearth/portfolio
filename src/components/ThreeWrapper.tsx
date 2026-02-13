'use client';

import dynamic from 'next/dynamic';

const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
    ssr: true,
});

export default function ThreeWrapper() {
    return <ThreeBackground />;
}
