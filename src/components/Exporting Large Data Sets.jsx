
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
