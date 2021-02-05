import { useState, useEffect } from 'react';
import Layout from '@/layout/Layout';
import Head from 'next/head';
import AdminToolbar from '@/components/admin/Toolbar';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '@/graphql/aws-exports';
Amplify.configure(awsconfig);

import { createTalk } from '@/graphql/graphql/mutations';
import { listTalks } from '@/graphql/graphql/queries';

export default function Talks() {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    loadTalks();
    return () => {};
  }, []);

  async function loadTalks() {
    const t: any = await API.graphql(graphqlOperation(listTalks));
    setTalks(t.data.listTalks.items);
  }

  async function onCreateTalk() {
    const talk = {
      name: 'Black Cat LMS',
      speakerName: 'Alex',
      speakerBio: 'CodingCatDev Founder',
      summary: 'A Next.js Amplify LMS',
    };
    await API.graphql(graphqlOperation(createTalk, { input: talk }));
    loadTalks();
  }
  return (
    <Layout>
      <Head>
        <title>Talks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminToolbar />
      <div className="container w-full p-20 m-4 mx-auto my-16 text-center bg-white border-2 border-dashed border-blueGray-300 h-96 rounded-xl">
        <p className="mt-20 italic tracking-tighter text-md text-blueGray-500 title-font">
          <button
            className="p-3 bg-yellow-400 rounded-md hover:bg-yellow-200"
            onClick={() => onCreateTalk()}
          >
            Add Talk
          </button>
        </p>
        <div className="grid grid-cols-3 gap-3">
          {talks.map((t: any) => (
            <div key={t.id} className="bg-purple-200 border-black rounded">
              <h2>{t.name}</h2>
              <div className="flex">
                <p className="w-full">{t.summary}</p>
                <div className="flex">
                  <p className="w-full">{t.speakerName}</p>
                  <p className="w-full">{t.speakerBio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
