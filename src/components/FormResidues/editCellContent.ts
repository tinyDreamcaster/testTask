const editCellContent = async (
  text: string | number,
  id: number,
  title: string,
  data: any,
  dataFilterBackup: any
) => {
  let sumTotal = 0;
  let sumOnWay = 0;

  function editContent(item: any) {
    if (item.id == id) {
      return { ...item, [title]: text };
    } else {
      return item;
    }
  }

  let dataResult = data.map((item: any) => {
    return editContent(item);
  });

  let backupResult = dataFilterBackup.map((item: any) => {
    return editContent(item);
  });

  dataResult.forEach((item: any) => {
    sumTotal = sumTotal + Number(item.total);
    sumOnWay = sumOnWay + Number(item.onWay);
  });

  return {
    sumOnWay,
    sumTotal,
    dataResult,
    backupResult,
  };
};

export default editCellContent;
