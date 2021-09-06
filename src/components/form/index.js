import React from 'react'
import { useState, useEffect } from 'react'

import data from '../../data/urls.json'

function Form(props) {
  const [url, setUrl] = useState('/d/e/1FAIpQLSf08kUi0ebwEVh1iLoX2gkJnXqhRml83nzlUlKqqWVeniTVNA/');

  useEffect(() => {
    data.map(function (item) {
      if (item.title == props.title) {
        if (item.url !== '-') {
          setUrl(item.url)
        }
        return
      }
    })
  }, []);


  return (
    <>
      <iframe
        src={'https://docs.google.com/forms' + url + 'viewform?embedded=true'}
        width='100%' height='100%'
        frameBorder='0' marginHeight='0' marginWidth='0'>
        Carregando…
      </iframe>
    </>
  )
}

export default Form