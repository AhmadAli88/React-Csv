import { useState } from 'react';
import { CSVLink } from 'react-csv';

const data = [
  { name: 'John', age: 28, country: 'USA' },
  { name: 'Jane', age: 22, country: 'Canada' },
  { name: 'Doe', age: 34, country: 'UK' },
];

function FilteredExport() {
  const [minAge, setMinAge] = useState(0);

  const filteredData = data.filter(item => item.age >= minAge);
console.log("first: ", filteredData)
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
