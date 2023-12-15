import AceEditor from 'react-ace';
import { useState } from 'react';

import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-twilight';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { errorHandler, successHandler } from '../utils/toastify';

export function TextEditor({ getQueryTable }) {
  const [editorValue, setEditorValue] = useState('');
  function onChange(newValue) {
    console.log('Editor Value: ', newValue);
    setEditorValue(newValue);
  }
  function showOutput() {
    console.log('Editor Value: ', editorValue);
    let searchElement = '';

    const DATABASE_TABLES = [
      'customers',
      'categories',
      'employees',
      'shippers',
      'suppliers',
    ];
    const contains = DATABASE_TABLES.some((element) => {
      if (editorValue.includes(element)) {
        searchElement = element;
        successHandler('🥳 Query Executed Successfully!');
        return element;
      } else {
        return '';
      }
    });
    if (searchElement === '') {
      errorHandler('🤔 No table found!');
    }
    getQueryTable(searchElement);
  }
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-8 w-4/12 rounded-lg bg-gray-100 p-6">
      <AceEditor
        id="editor"
        aria-label="editor"
        mode="sql"
        theme="twilight"
        className="rounded-lg border border-gray-300 w-full"
        fontSize={16}
        minLines={10}
        maxLines={20}
        placeholder="Type SQL queries here..."
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        onChange={onchange}
        showLineNumbers
      />
      <div className="w-full flex justify-end mt-4">
        <button
          onClick={() => showOutput()}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-3 px-6 rounded-lg focus:outline-none"
        >
          Run Query
        </button>
      </div>
    </div>
  );
}
