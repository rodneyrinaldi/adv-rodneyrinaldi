import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function components() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        //file='./download/civil-usucapiao-2108.pdf'
        file='https://adv.rodneyrinaldi.com/download/civil-usucapiao-2108.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default components;