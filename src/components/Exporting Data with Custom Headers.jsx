import { CSVLink } from 'react-csv';

const TableData = [
  { firstName: 'John', lastName: 'Doe', age: 28 },
  { firstName: 'Jane', lastName: 'Smith', age: 22 },
];

const headers = [
  { label: 'First Name', key: 'firstName' },
  { label: 'Last Name', key: 'lastName' },
  { label: 'Age', key: 'age' },
];

function CustomExport() {
  return (
    <div>
      <CSVLink data={TableData} headers={headers} filename='custom-data.csv'>
        Export Custom Data to CSV
      </CSVLink>
    </div>
  );
}

export default CustomExport;
