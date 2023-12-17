import { CsvToHtmlTable } from 'react-csv-to-table';
import { categories_csv } from '../data/categories';
import { employees_csv } from '../data/employees';
import { shippers_csv } from '../data/shippers';
import { suppliers_csv } from '../data/suppliers';
import { CSVLink } from 'react-csv';
import { SiMicrosoftexcel } from 'react-icons/si';
import { territory_csv } from '../data/territory';
import { products_csv } from '../data/products';

export function OutputWindow(props) {
  let data;
  let tableHeaders = [];

  switch (props.queriedTable) {
    case 'products':
      data = products_csv;
      tableHeaders = Object.keys(products_csv[0]);
      break;
    case 'categories':
      data = categories_csv;
      tableHeaders = Object.keys(categories_csv[0]);
      break;
    case 'employees':
      data = employees_csv;
      tableHeaders = Object.keys(employees_csv[0]);
      break;
    case 'shippers':
      data = shippers_csv;
      tableHeaders = Object.keys(shippers_csv[0]);
      break;
    case 'suppliers':
      data = suppliers_csv;
      tableHeaders = Object.keys(suppliers_csv[0]);
      break;
    case 'territory':
      data = territory_csv;
      tableHeaders = Object.keys(territory_csv[0]);
      break;
    default:
      data = [{ message: '😕 No data found!' }];
  }

  return (
    <>
      <div className="w-11/12 mx-auto overflow-scroll text-cyan-200">
        <div className="w-full flex flex-row justify-between">
          <h1 className="font-bold text-3xl my-5">
            Table {`${props.queriedTable}`}
          </h1>
          {props.queriedTable !== '😕 No data found!' && (
            <CSVLink
              data={data}
              headers={tableHeaders}
              filename={`${props.queriedTable}.csv`}
              className="flex flex-row items-center bg-blue-500 hover:bg-opacity-90 my-4 text-white font-bold py-2 px-4 rounded-lg"
            >
              <SiMicrosoftexcel className="mx-2" />
              Export as CSV
            </CSVLink>
          )}
        </div>
        <div className="border border-gray-300 rounded-md p-4">
          {props.queriedTable !== '😕 No data found!' ? (
            <CsvToHtmlTable
              tableClassName="w-full rounded-md"
              data={data}
              csvDelimiter=","
            />
          ) : (
            <p>No data found!</p>
          )}
        </div>
      </div>
    </>
  );
}
