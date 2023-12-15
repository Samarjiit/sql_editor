import React from 'react';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { TextEditor } from './components/TextEditor';
import { OutputWindow } from './components/OutputWindow';

function App() {
  const [queryTableName, setQueryTableName] = useState('customers');
  return (
    <div>
      <Navbar />
      <TextEditor getQueryTable={setQueryTableName} />
      <OutputWindow queriedTable={queryTableName} />
      <Footer />
    </div>
  );
}
function toggle_button() {}

function database_Table() {}

function output() {}

export default App;
