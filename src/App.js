import React from 'react';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { TextEditor } from './components/TextEditor';
import { OutputWindow } from './components/Output';

function App() {
  const [queryTableName, setQueryTableName] = useState('territory');
  return (
    <div>
      <Navbar />
      <TextEditor getQueryTable={setQueryTableName} />

      <OutputWindow queriedTable={queryTableName} />
      <Footer />
    </div>
  );
}

export default App;
