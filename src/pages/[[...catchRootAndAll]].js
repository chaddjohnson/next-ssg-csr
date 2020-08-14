import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  return (
    <>
      <h1>Page</h1>
      <p>pathname: {router.pathname}</p>
      <p>query: {JSON.stringify(router.query)}</p>
      <p>asPath: {router.asPath}</p>
    </>
  );
};

export default Page;
