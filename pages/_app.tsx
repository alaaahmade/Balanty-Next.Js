/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css' ;
// import { GetServerSideProps } from 'next';
import type { AppProps } from 'next/app';

import Layout from '../layouts/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component style={{ scrollBehavior: 'smooth' }} {...pageProps} />
    </Layout>
  );
};

export default App;
