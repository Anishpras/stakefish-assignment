import { GetServerSideProps } from 'next';
import { getTenExchangeList } from '@/lib/exchange';
import HomePage from '@/views/HomePage';

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const exchangeListData = await getTenExchangeList(1);
  return {
    props: {
      exchangeListData,
    },
  };
};
