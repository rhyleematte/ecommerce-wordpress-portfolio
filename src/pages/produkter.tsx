// Redirect old Norwegian URL to English equivalent
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.writeHead(301, { Location: '/products' });
  res.end();
  return { props: {} };
};

export default function Redirect() {
  return null;
}
