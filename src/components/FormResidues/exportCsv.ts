const exportCsv = (
  e: any,
  data: any,
  cellsSumOnWay: number,
  cellsSumTotal: number
) => {
  e.preventDefault();

  let convertData = data.map((item: object, index: number) => {
    let objToArray = Object.values(item);
    objToArray.splice(7, 1);
    let arrayToString = objToArray.join(";");

    if (index == 0) {
      let dataHeader: string;
      dataHeader =
        "Баркод;Предмет;Артикул поставщика;Размер;Доступно к заказу;Товары в пути;Итого кол-во товара\r\n";
      arrayToString = dataHeader + arrayToString;
    }

    if (index == data.length - 1) {
      let dataFooter: string;
      dataFooter = `\r\nИтого:;;;;;${cellsSumOnWay};${cellsSumTotal}\r\n`;
      arrayToString = arrayToString + dataFooter;
    }

    return arrayToString;
  });

  let downloadData: string;
  downloadData = convertData.join("\r\n");

  const url = window.URL.createObjectURL(
    new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), downloadData], {
      type: "text/plain;charset=ISO-8859-1",
    })
  );
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "test.csv");
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export default exportCsv;
