import React from 'react';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

function ServiceMD(query) {
  console.log(query.param)
  return (
    <>
      <div>
        <ReactMarkdown remarkPlugins={[gfm]} children={query.param} />
      </div>
    </>
  )
}

export default ServiceMD;