import { SetStateAction, useEffect, useRef, useState } from "react";
import axios from "axios";
import "./FormResidues.scss";
import TableCellContent from "./TableCellContent";
import exportCsv from "./exportCsv";
import { log } from "console";
import downloadData from "./downloadData";
import editCellContent from "./editCellContent";
import filterData from "./filterData";

function FormResidues() {
  const [sortedEl, setSortedEl] = useState("");
  const [dataFilterBackup, setDataFilterBackup] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [cellsSumOnWay, setCellsSumOnWay] = useState(0);
  const [cellsSumTotal, setCellsSumTotal] = useState(0);

  const filterBarcodeRef = useRef<HTMLInputElement>(null);
  const filterArticleRef = useRef<HTMLInputElement>(null);
  const filterSizeRef = useRef<HTMLInputElement>(null);

  const handleDownloadData = () => {
    downloadData().then((res) => {
      setCellsSumTotal(res.sumTotal);
      setCellsSumOnWay(res.sumOnWay);
      setData(res.newData);
      setDataFilterBackup(res.newData);
    });
  };

  const handleEditCellContent = (
    text: string | number,
    id: number,
    title: string
  ) => {
    editCellContent(text, id, title, data, dataFilterBackup).then((res) => {
      setCellsSumOnWay(res.sumOnWay);
      setCellsSumTotal(res.sumTotal);
      setData(res.dataResult);
      setDataFilterBackup(res.backupResult);
    });
  };

  const handlefilterData = () => {
    let filterBarcode = "";
    let filterArticle = "";
    let filterSize = "";

    if (filterBarcodeRef.current) {
      filterBarcode = filterBarcodeRef.current.value;
    }
    if (filterArticleRef.current) {
      filterArticle = filterArticleRef.current.value;
    }
    if (filterSizeRef.current) {
      filterSize = filterSizeRef.current.value;
    }

    filterData(filterBarcode, filterArticle, filterSize, dataFilterBackup).then(
      (res) => {
        setCellsSumOnWay(res.sumOnWay);
        setCellsSumTotal(res.sumTotal);
        setData(res.filteredData);
      }
    );
  };

  const sortData = (sortType: string) => {
    let dataSorted: any[] = [];
    dataSorted = [...data];

    if (sortedEl == sortType) {
      dataSorted = dataSorted.sort((a, b) => b[sortType] - a[sortType]);
      setSortedEl("");
    } else {
      setSortedEl(sortType);
      dataSorted = dataSorted.sort((a, b) => a[sortType] - b[sortType]);
    }

    setData(dataSorted);
  };

  const sortArrowStatus = (value: string) => {
    if (sortedEl == value) {
      return (
        <img
          onClick={() => sortData(value)}
          className="user__icon"
          src='./icons/caret-up-fill.svg'
          height="16px"
          width="16px" />
      )
    }
    else {
      return (
        <img
          onClick={() => sortData(value)}
          className="user__icon"
          src='./icons/caret-down-fill.svg'
          height="16px"
          width="16px" />
      )
    }


  }


  return (
    <section className="formResidues">
      <div className="subContainer">
        <div className="formResidues__titleWrapper">
          <h2 className="formResidues__title">
            Остатки сформированы на 01.04.2023 г.
          </h2>
          <button className="button buttoninstructions">
            <div className="buttoninstructions__icon" />
            <p className="buttoninstructions__label">Инструкции</p>
          </button>
        </div>
        <div className="filterWrapper">
          <div className="filter">
            <p className="filter__title">Баркод</p>
            <input
              className="filter__input"
              ref={filterBarcodeRef}
              placeholder="4165356485411956"
              type="text"
            />
          </div>
          <div className="filter">
            <p className="filter__title">Артикул</p>
            <input
              className="filter__input"
              ref={filterArticleRef}
              placeholder="ДжЖСинМом0823"
              type="text"
            />
          </div>
          <div className="filter">
            <p className="filter__title">Размер</p>
            <input
              className="filter__input filter__input_size"
              ref={filterSizeRef}
              placeholder="44"
              type="text"
            />
          </div>
          <div className="filter filter_select">
            <p className="filter__title">Категория</p>
            <select
              className="filter__select"
              defaultValue={"s1"}
              name="категория"
            >
              <option value="s1">Джинсы</option>
              <option value="s2">Брюки</option>
              <option value="s3">Рубашки</option>
            </select>
          </div>
        </div>
        <div className="toFormWrapper">
          <button
            className="button buttonToForm"
            onClick={(e) => handlefilterData()}
          >
            Сформировать
          </button>
          <button
            className="button buttonExport"
            onClick={(e) => exportCsv(e, data, cellsSumOnWay, cellsSumTotal)}
          >
            <div className="buttonExport__icon" />
            <p className="buttonExport__label">Экспорт</p>
          </button>
        </div>
        <div className="storageWrapper">
          <div className="importWrapper">
            <button className="storage" onClick={(e) => handleDownloadData()}>
              <div className="storage__icon" />
              <p className="storage__label">Загрузить данные из csv</p>
            </button>

            <button className="storage">
              <div className="storage__icon storage__icon_change" />
              <p className="storage__label">Изменить данные</p>
            </button>
          </div>
          <button className="storage clear" onClick={() => { setData([]); setDataFilterBackup([]); }}>
            <p className="storage__label">Очистить</p>
            <div className="storage__icon storage__icon_clear" />
          </button>
        </div>
      </div>
      <div className="dataTableWrapper">
        <div className="dataTableInnerWrapper">
          <table className="dataTable">
            <thead>
              <tr>
                <td>
                  <div className="tableHeaderItem">
                    <p>Баркод</p>
                    {sortArrowStatus("barcode")}
                  </div>
                </td>
                <td>
                  <div className="tableHeaderItem">
                    <p>Предмет</p>
                    {sortArrowStatus("item")}
                  </div>
                </td>
                <td>
                  <div className="tableHeaderItem">
                    <p>Артикул поставщика</p>
                    {sortArrowStatus("article")}
                  </div>
                </td>
                <td>
                  <div className="tableHeaderItem">
                    <p>Размер</p>
                    {sortArrowStatus("size")}
                  </div>
                </td>
                <td>
                  <div className="tableHeaderItem">
                    <p>Доступно к заказу</p>
                    {sortArrowStatus("available")}
                  </div>
                </td>
                <td>
                  <div className="tableHeaderItem tableHeaderItem_goods">
                    <div className="tableHeaderItem__goodsLabelWrapper">
                      <p>Товары в пути</p>
                      {sortArrowStatus("onWay")}
                    </div>
                    <p className="tableHeaderItem__subtitle">(заказы и возвраты)</p>
                  </div>
                </td>
                <td>
                  <div className="tableHeaderItem">
                    <p>Итого кол-во товара</p>
                    {sortArrowStatus("total")}
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <TableCellContent
                    cellData={item.barcode}
                    handleEditCellContent={handleEditCellContent}
                    id={item.id}
                    title={"barcode"}
                    noNum={true}
                  />
                  <TableCellContent
                    cellData={item.item}
                    handleEditCellContent={handleEditCellContent}
                    id={item.id}
                    title={"item"}
                    noNum={true}
                  />
                  <TableCellContent
                    cellData={item.article}
                    handleEditCellContent={handleEditCellContent}
                    id={item.id}
                    title={"article"}
                    noNum={true}
                  />
                  <TableCellContent
                    cellData={item.size}
                    handleEditCellContent={handleEditCellContent}
                    id={item.id}
                    title={"size"}
                    noNum={false}
                  />
                  <TableCellContent
                    cellData={item.available}
                    handleEditCellContent={handleEditCellContent}
                    id={item.id}
                    title={"available"}
                    noNum={false}
                  />
                  <TableCellContent
                    cellData={item.onWay}
                    handleEditCellContent={handleEditCellContent}
                    id={item.id}
                    title={"onWay"}
                    noNum={false}
                  />
                  <TableCellContent
                    cellData={item.total}
                    handleEditCellContent={handleEditCellContent}
                    id={item.id}
                    title={"total"}
                    noNum={false}
                  />
                </tr>
              ))}
              <tr>
                <td>Итого: </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{cellsSumOnWay}</td>
                <td>{cellsSumTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default FormResidues;
