import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableRowCell,
} from "./Table";
import "./datagrid.css";

interface DataGridState {
  rows: any[];
  headers: any[];
  selectedRows: number[];
  sortDirection?: "asc" | "desc" | undefined;
  sortedColumn?: string | undefined;
}

export const DataGrid = (props: DataGridState) => {
  const initialState: DataGridState = {
    rows: [],
    headers: [],
    selectedRows: [],
    sortDirection: undefined,
    sortedColumn: undefined,
  };

  const [state, setState] = useState<DataGridState>(initialState);

  const toggleSelectAll = () => {
    const selected =
      state?.selectedRows?.length === 0 ? state?.rows.map((row) => row.id) : [];
    setState((prevState) => ({
      ...prevState,
      selectedRows: selected,
    }));
  };

  const checkBoxSelection = (id: number) => {
    const selectedIndex = state?.selectedRows?.indexOf(id);
    let newSelected: number[] = [...state?.selectedRows];

    if (selectedIndex === -1) {
      // If the item is not already selected, add it to the selection
      newSelected.push(id);
    } else {
      // If the item is already selected, remove it from the selection
      newSelected.splice(selectedIndex, 1);
    }

    setState((prevState) => ({
      ...prevState,
      selectedRows: newSelected,
    }));
    console.log("selection:", newSelected);
  };

  const sortByColumn = (column: any) => {
    if (state.sortedColumn === column) {
      setState((prevState) => ({
        ...prevState,
        sortDirection: prevState.sortDirection === "asc" ? "desc" : "asc",
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        sortedColumn: column,
        sortDirection: "asc",
      }));
    }

    const sortedRows = [...state.rows];
    sortedRows.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (aValue === bValue) {
        return 0;
      }

      if (state.sortDirection === "asc") {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });

    setState((prevState) => ({
      ...prevState,
      rows: sortedRows,
    }));
  };

useEffect(()=> {
  setState({...props})
},[props.rows, props.headers])
  


  return (
    <div className="tableStyleMain">
      {/* Render your table using state.rows and call handleClick and sortByColumn with updated syntax */}
      <Table className={"tableStyle"}>
        <TableHead>
          {state?.headers?.map((header) => (
            <TableRow key={header.id}>
              <TableHeaderCell onClick={() => toggleSelectAll()}>
                <input
                  type="checkbox"
                  checked={state?.selectedRows?.length > 0}
                  onClick={() => toggleSelectAll()}
                />
              </TableHeaderCell>
              {Object.keys(header).map((key) => (
                <TableHeaderCell key={key} onClick={() => sortByColumn(key)}>
                  {header[key]}{" "}
                  {state.sortedColumn === key && (
                    <SortIndicator direction={state.sortDirection} />
                  )}
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {state.rows.map((row) => (
            <TableRow
              key={row.id}
              className={state?.selectedRows?.includes(row.id) ? "selected" : ""}
            >
              <TableRowCell>
                <input
                  type="checkbox"
                  checked={state?.selectedRows?.includes(row.id)}
                  onChange={() => checkBoxSelection(row.id)}
                  className="check"
                />
              </TableRowCell>
              {Object.keys(row).map((key) => (
                <TableRowCell key={key}>{row[key]}</TableRowCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

type SortIndicatorProps = {
  direction: "asc" | "desc" | undefined;
};

const SortIndicator = ({ direction }: SortIndicatorProps) => {
  if (direction === "asc") {
    return <span>&#9650;</span>; // Up arrow
  } else if (direction === "desc") {
    return <span>&#9660;</span>; // Down arrow
  } else {
    return null; // No arrow
  }
};
