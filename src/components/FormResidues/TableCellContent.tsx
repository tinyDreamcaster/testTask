import { useState } from "react";

interface ComponentProps {
  cellData: string;
  handleEditCellContent: any;
  id: number;
  title: string;
  noNum: boolean;
}

const TableCellContent: React.FC<ComponentProps> = ({ cellData, handleEditCellContent, id, title, noNum }) => {

  const [state, setState] = useState(cellData);
  const [disableCell, setDisableCell] = useState(true);

  const handleTdOnChange = (e: any) => {

    let value = e.target.value;
    if (typeof Number(value) === 'number' && !isNaN(Number(value)) && !noNum) {
      setState(value);
      handleEditCellContent(value, id, title)
    }

  }

  return (
    <td>
      <input
        value={state}
        onChange={(e) => { handleTdOnChange(e) }}
        onKeyDown={(e) => {
          if (e.key === "Enter")
            setDisableCell(true);
        }}
        onBlur={() => setDisableCell(true)}
        onDoubleClick={(e) => setDisableCell(false)}
        readOnly={disableCell}
        type="text"
      />
    </td>
  );
};

export default TableCellContent;
