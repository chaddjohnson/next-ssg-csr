import { useRouter } from 'next/router';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const router = useRouter();
  const { slug } = useParams();

  return (
    <>
      <h1>Product</h1>
      <p>pathname: {router.pathname}</p>
      <p>query: {JSON.stringify(router.query)}</p>
      <p>asPath: {router.asPath}</p>
      <p>slug: {slug}</p>
    </>
  );
};

export default ProductPage;
