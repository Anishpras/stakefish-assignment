const BASE_URL = 'https://api.coingecko.com/api/v3/exchanges';

export const getTenExchangeList = async (pageNumber: number) => {
  const exchangeListResponse = await fetch(
    `${BASE_URL}?per_page=10&page=${pageNumber.toString()}`
  );
  const exchangeList = await exchangeListResponse.json();
  return exchangeList;
};

export const getSingleExchangeDetails = async (exchangeId: string) => {
  const exchangeDetailsResponse = await fetch(`${BASE_URL}/${exchangeId}`);
  const exchangeDetails = await exchangeDetailsResponse.json();
  return exchangeDetails;
};
