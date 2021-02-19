import Layout from '@/layout/Layout';
import Head from 'next/head';
import AdminToolbar from '@/components/admin/Toolbar';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';

function Admin() {
  useEffect(() => {
    Auth.currentUserInfo().then((user) => console.log(user));
    return () => {};
  }, []);
  return (
    <Layout>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminToolbar />
      <div className="container w-full p-20 m-4 mx-auto my-16 text-center bg-white border-2 border-dashed border-blueGray-300 h-96 rounded-xl">
        <p className="mt-20 italic tracking-tighter text-md text-blueGray-500 title-font">
          -- Content goes here --
        </p>
      </div>
    </Layout>
  );
}
export default withAuthenticator(Admin);
