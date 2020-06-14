import { useRouter } from 'next/router';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <>
      <h1>Product</h1>
      <p>pathname: {router.pathname}</p>
      <p>query: {JSON.stringify(router.query)}</p>
      <p>asPath: {router.asPath}</p>
      <p>id: {id}</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export default ProductPage;
