export const calculateLinkToMainPage = (rank: number) => {
  const pageNumber = Math.ceil(rank / 10);
  return pageNumber === 1 ? '/' : `/exchanges/${pageNumber}`;
};
