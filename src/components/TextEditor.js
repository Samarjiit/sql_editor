import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-github';
import Instructions from './Display';

export function TextEditor({ getQueryTable }) {
  const [editorValue, setEditorValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function onChange(newValue) {
    console.log('Editor Value: ', newValue);
    setEditorValue(newValue);
    // Clear the error message when the editor value changes
    setErrorMessage('');
  }

  function showOutput() {
    console.log('Editor Value: ', editorValue);
    let searchElement = '';

    const DATABASE_TABLES = [
      'products',
      'categories',
      'employees',
      'shippers',
      'suppliers',
      'territory',
    ];

    const contains = DATABASE_TABLES.some((element) => {
      const stringValue = String(editorValue); // or editorValue.toString()
      if (stringValue.includes(element)) {
        searchElement = element;
        return true;
      } else {
        return false;
      }
    });

    if (!contains) {
      // Set the error message when no table is found
      setErrorMessage('No table found in the SQL query!');
    } else {
      // Clear the error message when a table is found
      setErrorMessage('');
      getQueryTable(searchElement);
    }
  }

  return (
    <div className="flex flex-row justify-between mx-1 my-8">
      <div className="w-1/2 rounded-lg pl-6">
        <h1 className="font-bold text-3xl text-cyan-300 my-2">Editor</h1>
        <AceEditor
          id="editor"
          aria-label="editor"
          mode="mysql"
          className="rounded-lg"
          theme="github"
          name="editor"
          fontSize={16}
          minLines={15}
          maxLines={10}
          width="100%"
          showPrintMargin={false}
          showGutter
          placeholder="Write your SQL Query Here!"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          onChange={onChange}
          showLineNumbers
        />
        {errorMessage && (
          <div className="text-red-500 my-2">{errorMessage}</div>
        )}
        <div className="flex justify-end my-4">
          <button
            onClick={() => showOutput()}
            className="bg-blue-600 hover:bg-opacity-90 text-xl font-bold p-4 rounded-lg text-white"
          >
            Run Query
          </button>
        </div>
      </div>
      <div className="w-1/2 rounded-lg ml-5 mr-40 mt-12">
        <Instructions />
      </div>
    </div>
  );
}
