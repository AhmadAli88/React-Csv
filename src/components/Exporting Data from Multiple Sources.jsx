import { CSVLink } from 'react-csv';

const firstSource = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

const secondSource = [
  { product: 'Laptop', price: 1000 },
  { product: 'Phone', price: 500 },
];

function MultiSourceExport() {
  const combinedData = [...firstSource, ...secondSource];
  return (
    <div>
      <CSVLink data={combinedData} filename='combined-data.csv'>
        Export Combined Data to CSV
      </CSVLink>
    </div>
  );
}

export default MultiSourceExport;
