import Head from 'next/head';

import Layout from '@/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello World</div>
    </Layout>
  );
}
