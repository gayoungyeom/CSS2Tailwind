import Head from 'next/head';

import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Tailwind CSS</title>
      </Head>
      <div className='p-4'>{children}</div>
    </>
  );
}
