import React from 'react';

type TableProps = {
  className?: string;
  children: React.ReactNode;
};

const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
      <table className={className}>{children}</table>
  );
};

type TableHeadProps = {
  children: React.ReactNode;
};

const TableHead: React.FC<TableHeadProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

type TableRowProps = {
  className?: string;
  children: React.ReactNode;
};

const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={className}>{children}</tr>;
};

type TableHeaderCellProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const TableHeaderCell = ({ onClick, children }: TableHeaderCellProps) => {
  return (
    <th onClick={onClick}>
      {children}
    </th>
  );
};

type TableBodyProps = {
  children: React.ReactNode;
};

const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

type TableRowCellProps = {
  children: React.ReactNode;
};

const TableRowCell: React.FC<TableRowCellProps> = ({ children }) => {
  return <td>{children}</td>;
};

export { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableRowCell };
