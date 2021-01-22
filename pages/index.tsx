import {useState, useEffect} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Amplify, { API, graphqlOperation } from "@aws-amplify/api";
import awsconfig from "../src/aws-exports";

import { createBlog } from "../src/graphql/mutations";
import { listBlogs } from "../src/graphql/queries";
import Layout from '@/layout/Layout';

Amplify.configure(awsconfig);

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Hello World
      </div>
    </Layout>
  )
}
