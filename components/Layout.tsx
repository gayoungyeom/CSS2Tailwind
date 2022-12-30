import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tailwind CSS</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
