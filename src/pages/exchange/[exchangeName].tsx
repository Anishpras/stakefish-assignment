import { GetServerSideProps } from 'next';
import { getSingleExchangeDetails } from '@/lib/exchange';
import SingleExchangeDetails from '@/views/SingleExchangeDetails';

export default SingleExchangeDetails;
// Getting the data from the API and passing it as a prop to the component using ServerSideProps.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const singleExchangeDetailsResultData = await getSingleExchangeDetails(
    context.query.exchangeName as string
  );
  return {
    props: {
      singleExchangeDetailsResultData,
    },
  };
};
