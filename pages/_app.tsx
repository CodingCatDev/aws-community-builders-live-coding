import '../styles/globals.css';

import Amplify from 'aws-amplify';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
