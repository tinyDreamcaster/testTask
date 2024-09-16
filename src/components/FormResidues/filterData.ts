const filterData = async (
  filterBarcode: string,
  filterArticle: string,
  filterSize: string,
  dataFilterBackup: any
) => {
  let sumTotal = 0;
  let sumOnWay = 0;

  let filteredData = dataFilterBackup
    .filter((filterItem: any) => filterItem.barcode.includes(filterBarcode))
    .filter((filterItem: any) => filterItem.article.includes(filterArticle))
    .filter((filterItem: any) => filterItem.size.includes(filterSize));

  filteredData.forEach((item: any) => {
    sumTotal = sumTotal + Number(item.total);
    sumOnWay = sumOnWay + Number(item.onWay);
  });

  return {
    sumOnWay,
    sumTotal,
    filteredData,
  };
};

export default filterData;
