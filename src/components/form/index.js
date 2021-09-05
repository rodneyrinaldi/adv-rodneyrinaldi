import React from 'react'

import data from '../../data/urls.json'

function Form(props) {
  let url = ""
  data.map(function (item) {
    if (item.title == props.title) {
      url = 'https://docs.google.com/forms/' + item.url + '/viewform?embedded=true'
      return
    }
  })

  return (
    <>
      <iframe
        src={url}
        width='100%' height='100%'
        frameBorder='0' marginHeight='0' marginWidth='0'>
        Carregando…
      </iframe>
    </>
  )
}

export default Form