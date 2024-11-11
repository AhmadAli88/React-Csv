
import './App.css'
import CustomExport from './components/Exporting Data with Custom Headers'
import ExportTable from './components/Exporting Table Data as CSV'
import DynamicForm from './components/ExportingDynamicData'
import LargeDataSet from './components/Exporting Large Data Sets'
import FilteredExport from './components/Exporting Filtered Data'
import MultiSourceExport from './components/Exporting Data from Multiple Sources'
import DynamicFileNameExport from './components/Exporting Data with Dynamic File Name'
function App() {
 

  return (
  <div>
    <ExportTable/>
    <DynamicForm/>
    <CustomExport/>
    <LargeDataSet/>
    <FilteredExport/>
    <MultiSourceExport/>
    <DynamicFileNameExport/>
  </div>
  )
}

export default App
