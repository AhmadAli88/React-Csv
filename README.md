
# React CSV Export - react-csv

`react-csv` is a useful library for easily handling CSV export functionality in React applications. It allows you to generate and download CSV files from your React components.

## Table of Contents

- [Overview](#overview)
- [Use Cases](#use-cases)
  - [Exporting Table Data as CSV](#exporting-table-data-as-csv)
  - [Exporting Dynamic Data (User Input)](#exporting-dynamic-data-user-input)
  - [Exporting Data with Custom Headers](#exporting-data-with-custom-headers)
  - [Exporting Large Data Sets](#exporting-large-data-sets)
  - [Exporting Filtered Data](#exporting-filtered-data)
  - [Exporting Data from Multiple Sources](#exporting-data-from-multiple-sources)
  - [Exporting Data with Dynamic File Name](#exporting-data-with-dynamic-file-name)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Overview

`react-csv` is a flexible and powerful library that can be used in many React projects for exporting data into CSV files. Whether it's exporting table data, dynamically generated content, filtered lists, or combining data from multiple sources, `react-csv` simplifies the process of generating and downloading CSV files from your React components. By integrating this library into your project, you can offer users an easy way to download data in a standardized format for further processing or analysis.

## Use Cases

### Exporting Table Data as CSV

If you have tabular data in your application, you can use `react-csv` to export the table content to a CSV file.

```javascript
import React from 'react';
import { CSVLink } from 'react-csv';

const TableData = [
  { name: 'John', age: 28, country: 'USA' },
  { name: 'Jane', age: 22, country: 'Canada' },
  { name: 'Doe', age: 34, country: 'UK' }
];

function ExportTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CSVLink data={TableData} filename="table-data.csv">
        Export Table to CSV
      </CSVLink>
    </div>
  );
}

export default ExportTable;
```

### Exporting Dynamic Data (User Input)

You can allow users to input data (e.g., through a form or dynamically generated content) and export it as a CSV file.

```javascript
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

function DynamicForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [data, setData] = useState([]);

  const handleSubmit = () => {
    const newEntry = { name, email };
    setData([...data, newEntry]);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name"
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Add to List</button>

      <CSVLink data={data} filename="dynamic-data.csv">
        Export Data to CSV
      </CSVLink>
    </div>
  );
}

export default DynamicForm;
```

### Exporting Data with Custom Headers

You can customize the headers of the CSV file to match the structure you want, regardless of how your data is represented.

```javascript
import React from 'react';
import { CSVLink } from 'react-csv';

const TableData = [
  { firstName: 'John', lastName: 'Doe', age: 28 },
  { firstName: 'Jane', lastName: 'Smith', age: 22 }
];

const headers = [
  { label: 'First Name', key: 'firstName' },
  { label: 'Last Name', key: 'lastName' },
  { label: 'Age', key: 'age' }
];

function CustomExport() {
  return (
    <div>
      <CSVLink data={TableData} headers={headers} filename="custom-data.csv">
        Export Custom Data to CSV
      </CSVLink>
    </div>
  );
}

export default CustomExport;
```

### Exporting Large Data Sets

For large data sets (e.g., large lists or tables), `react-csv` can be used to generate CSV files efficiently, allowing for easy downloads without blocking the UI.

```javascript
import React from 'react';
import { CSVLink } from 'react-csv';

const LargeDataSet = Array.from({ length: 1000 }, (_, index) => ({
  name: `Item ${index + 1}`,
  price: (Math.random() * 100).toFixed(2),
}));

function LargeDataExport() {
  return (
    <div>
      <CSVLink data={LargeDataSet} filename="large-data-set.csv">
        Export Large Data Set to CSV
      </CSVLink>
    </div>
  );
}

export default LargeDataExport;
```

### Exporting Filtered Data

You can allow users to filter the data (e.g., by date range or search term) and export the filtered data as a CSV file.

```javascript
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

const data = [
  { name: 'John', age: 28, country: 'USA' },
  { name: 'Jane', age: 22, country: 'Canada' },
  { name: 'Doe', age: 34, country: 'UK' },
];

function FilteredExport() {
  const [minAge, setMinAge] = useState(0);

  const filteredData = data.filter(item => item.age >= minAge);

  return (
    <div>
      <label>
        Minimum Age:
        <input 
          type="number" 
          value={minAge} 
          onChange={(e) => setMinAge(e.target.value)} 
        />
      </label>

      <CSVLink data={filteredData} filename="filtered-data.csv">
        Export Filtered Data to CSV
      </CSVLink>
    </div>
  );
}

export default FilteredExport;
```

## Features

- Easy CSV export integration.
- Exporting dynamic, static, filtered, or custom data.
- Customizable headers for the CSV export.
- Supports exporting large data sets without performance issues.

## Installation

To install `react-csv` in your React project, run the following command:

```bash
npm install react-csv
```

## Usage

You can use `CSVLink` to trigger the download of a CSV file in any React component by passing the data and optional configurations (e.g., `filename`, `headers`, etc.).

Example:

```javascript
import { CSVLink } from 'react-csv';

const data = [
  { name: 'John', age: 28, country: 'USA' },
  { name: 'Jane', age: 22, country: 'Canada' }
];

<CSVLink data={data} filename="user-data.csv">
  Export Data
</CSVLink>
```

## Conclusion

By integrating `react-csv` into your project, you can easily export dynamic or static data to CSV format with minimal configuration. It is highly flexible and supports a variety of use cases, from simple table data exports to handling large data sets and custom headers.
