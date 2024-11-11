
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
