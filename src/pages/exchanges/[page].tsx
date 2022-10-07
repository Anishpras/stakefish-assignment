import { GetServerSideProps } from 'next';
import { getTenExchangeList } from '../../lib/exchange';
import HomePage from '@/views/HomePage';

export default HomePage;
// Getting the data from the API and passing it as a prop to the component using ServerSideProps.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageNumber: number = parseInt(context.query.page as string);
  const exchangeListData = await getTenExchangeList(pageNumber);
  return {
    props: {
      exchangeListData,
    },
  };
};
