import { CSVLink } from 'react-csv';

function DynamicFileNameExport() {
  const currentDate = new Date().toLocaleDateString();
  const fileName = `data-${currentDate}.csv`;

  return (
    <div>
      <CSVLink data={[{ name: 'John', age: 28 }]} filename={fileName}>
        Export Data with Dynamic Filename
      </CSVLink>
    </div>
  );
}

export default DynamicFileNameExport;
