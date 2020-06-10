import { useRouter } from 'next/router';

const ProductsPage = () => {
  const router = useRouter();

  return (
    <>
      <h1>Products</h1>
      <p>pathname: {router.pathname}</p>
      <p>query: {JSON.stringify(router.query)}</p>
      <p>asPath: {router.asPath}</p>
    </>
  );
};

export default ProductsPage;
