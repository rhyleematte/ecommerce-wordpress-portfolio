// Redirect old Norwegian URL to English equivalent
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  res.writeHead(301, { Location: `/category/${params?.slug}` });
  res.end();
  return { props: {} };
};

export default function Redirect() {
  return null;
}
