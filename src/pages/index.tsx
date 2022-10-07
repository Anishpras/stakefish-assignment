import { GetServerSideProps } from 'next';
import { getTenExchangeList } from '@/lib/exchange';
import HomePage from '@/views/HomePage';

export default HomePage;
// Getting the data from the API and passing it as a prop to the component using ServerSideProps.
export const getServerSideProps: GetServerSideProps = async () => {
  const exchangeListData = await getTenExchangeList(1);
  return {
    props: {
      exchangeListData,
    },
  };
};
