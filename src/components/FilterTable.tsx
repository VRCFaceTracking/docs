import React, { FC, useState } from 'react';
import '../css/filtertable.css';

interface FilterData {
    title: string;
    omitHeaders: string[];
    disabledHeaders: string[];
    headers: string[];
    rows: any[][];
}

const FilterTable = ({ title, omitHeaders, disabledHeaders, headers, rows } : FilterData) => {
  const [hiddenColumns, setHiddenColumns] = useState(
    disabledHeaders?.map(header => headers.indexOf(header)) || []
  );
  const [filterText, setFilterText] = useState('');
  const [filterRegex, setFilterRegex] = useState(null);
  const [hasError, setHasError] = useState(false);

  const toggleColumn = (index) => {
    if (hiddenColumns.includes(index)) {
      setHiddenColumns(hiddenColumns.filter((i) => i !== index));
    } else {
      setHiddenColumns([...hiddenColumns, index]);
    }
  };

  const filteredRows = rows.filter(row =>
    row.some((cell) => {
      if (filterRegex) {
        try {
          return cell?.toString && filterRegex.test(cell.toString());
        } catch (error) {
          return false;
        }
      } else {
        return cell?.toString && cell?.toString().includes(filterText);
      }
    })
  );

  const handleFilterChange = (value) => {
    setFilterText(value);
    setHasError(false);

    try {
      if (value.trim() !== '') {
        setFilterRegex(new RegExp(value, 'i'));
      } else {
        setFilterRegex(null);
      }
    } catch (error) {
      setHasError(true);
      setFilterRegex(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter rows"
        value={filterText}
        onChange={(e) => handleFilterChange(e.target.value)}
        className={`filter-input ${hasError ? 'invalid' : ''}`}
      />
      {headers.map((header, index) => (
        omitHeaders?.includes(header) ? null : (
          <button
            key={index}
            onClick={() => toggleColumn(index)}
            className={hiddenColumns.includes(index) ? 'disable' : ''}
          >
            {header}
          </button>
        )
      ))}
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              omitHeaders?.includes(header) ? (
                // If header is in omitHeaders, render a disabled header without onClick
                <th key={index}>{header}</th>
              ) : (
                // If header is not in omitHeaders, apply normal header with onClick and toggleColumn
                <th
                  key={index}
                  onClick={() => toggleColumn(index)}
                  className={hiddenColumns.includes(index) ? 'hidden' : ''}
                >
                  {header}
                </th>
              )
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={hiddenColumns.includes(cellIndex) ? 'hidden' : ''}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterTable;