import { GetServerSideProps } from 'next';
import { getSingleExchangeDetails } from '../../lib/exchange';
import SingleExchangeDetails from '../../views/SingleExchangeDetails';

export default SingleExchangeDetails;

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
