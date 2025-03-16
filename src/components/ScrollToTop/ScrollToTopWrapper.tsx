'use client';

import dynamic from 'next/dynamic';

const ScrollToTop = dynamic(() => import("./index"), {
  ssr: false,
});

export default function ScrollToTopWrapper() {
  return <ScrollToTop />;
}
