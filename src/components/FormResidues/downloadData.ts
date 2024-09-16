import axios from "axios";

const downloadData = async () => {
  let sumTotal = 0;
  let sumOnWay = 0;

  let downloadData = await axios.get("data.json");
  let newData = downloadData.data.data;
  newData.map((item: any, index: number) => {
    let NumTotal: number = Number(item.total);
    sumTotal = sumTotal + NumTotal;

    let NumOnWay: number = Number(item.onWay);
    sumOnWay = sumOnWay + NumOnWay;

    item.id = index;
  });

  return {
    sumTotal,
    sumOnWay,
    newData,
  };
};

export default downloadData;
