import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* 글로벌 속성을 추가하고싶을땐 아래와 같이*/}
    </Layout>
  );
}
