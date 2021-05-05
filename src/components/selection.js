import React, { useCallback, useEffect, useState } from 'react'
import Select, { Props as SelectProps, } from "react-select"
import makeAnimated from 'react-select/animated';
import {
  Accordion, AccordionItem, AccordionItemButton,
  AccordionItemHeading, AccordionItemPanel
} from 'react-accessible-accordion'
import { v4 as uuidv4 } from 'uuid'

import tagData from '../data/tag.json'
import textData from '../data/text.json'

import styles from './selection.module.css'

const pages = () => {
  const [loading, setLoading] = useState(true)
  const [tag, setTag] = useState(null)
  const [tagOptions, setTagOptions] = useState([])
  const [textOptions, setTextOptions] = useState([])

  const animatedComponents = makeAnimated()

  function loadTags() {
    if (tag == null) {
      const dataTag = tagData
        .map(p => ({
          "value": p.TAG,
          "label": p.TAG
        }))
      setTagOptions(dataTag)
    }
  }

  function filterTexts() {
    if (tag !== null) {
      const dataText = textData
        .filter(p => (
          p.TAG === tag
        ))
        .map(p => ({
          "seq": uuidv4(),
          "grp": p.GRP,
          "txt": p.TXT,
          "lnk": p.LNK
        }
        ))
      setTextOptions(dataText)
    }
  }

  const handleTagChange = useCallback((e) => {
    setTag(e.label)
  }, [])

  useEffect(
    () => {
      loadTags()
      filterTexts()
    },
    [tag]
  )

  return (
    <>
      <div className={styles.tlttext}>

        <div className={styles.tags}>
          <Select
            id='tag'
            instanceId='tag'
            closeMenuOnSelect={true}
            components={animatedComponents}
            defaultValue={[]}
            options={tagOptions}
            widtth='100%'
            onChange={handleTagChange}
          />
        </div>
      </div>

      <div className={styles.texts}>
        <div className={styles.textsitems}>
          <Accordion>
            {textOptions.map((item) => (
              <div style={{ paddingBottom: '2px' }}>
                <AccordionItem key={item.seq}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div style={{ padding: '10px' }}>
                        {item.grp}
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div style={{ padding: '10px', background: '#eaf0f0' }}>
                      <div>
                        {item.txt}
                      </div>
                      <div style={{ paddingTop: '10px' }}>
                        <a href={item.lnk} style={{}}>
                          {item.lnk}
                        </a>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  )

}

export default pages;