import React, { useCallback, useEffect, useState } from 'react'
import Select, { Props as SelectProps, } from "react-select"
import {
  Accordion, AccordionItem, AccordionItemButton,
  AccordionItemHeading, AccordionItemPanel,
} from 'react-accessible-accordion'
import { v4 as uuidv4 } from 'uuid'

import areaData from '../data/area.json'
import actionData from '../data/action.json'
import procedureData from '../data/article.json'

import styles from './selection.module.css'

const pages = () => {
  const [loading, setLoading] = useState(true)
  const [area, setArea] = useState(null)
  const [action, setAction] = useState(null)
  const [areaOptions, setAreaOptions] = useState([])
  const [actionOptions, setActionOptions] = useState([])
  const [procedureOptions, setProcedureOptions] = useState([])

  function loadAreas() {
    if (area == null) {
      const dataArea = areaData
        .map(p => ({
          "value": p.AREA,
          "label": p.AREA
        }))
      setAreaOptions(dataArea)
    }
  }

  function loadActions() {
    if (action == null) {
      const dataAction = actionData
        .filter(p => (p.AREA === area))
        .map(p => ({
          "value": p.ACTION,
          "label": p.ACTION
        }))
      setActionOptions(dataAction)
    }
  }

  function filterAreas() {
    if (area == null && action == null) {
      const dataProcedure = procedureData
        .map(p => ({
          "seq": uuidv4(),
          "procedure": <p className="ARTIGO"></p>,
          "valueporc": 'Valor: ' + String(p.VALOR) + ' \n Porcentagem: ' + String(p.PORC) + ''
        }
        ))
      setProcedureOptions(dataProcedure)
    }
  }

  function filterActions() {
    if (area !== null && action == null) {
      const dataProcedure = procedureData
        .filter(p => (
          p.ARTIGO.substring(
            0, String(area).length
          ) == String(area)
        ))
        .map(p => ({
          "seq": uuidv4(),
          "procedure": <p className="ARTIGO"></p>,
          "valueporc": 'Valor: ' + String(p.VALOR) + ' \n Porcentagem: ' + String(p.PORC) + ''
        }
        ))
      setProcedureOptions(dataProcedure)
    }
  }

  function filterProcedures() {
    if (area !== null && action !== null) {
      const dataProcedure = procedureData
        .filter(p => (
          p.ARTIGO.substring(
            0, String(area).length + String(action).length + 1
          ) == String(area) + ' ' + String(action)
        ))
        .map(p => ({
          "seq": uuidv4(),
          "procedure": p.ARTIGO,
          "valueporc": 'Valor: ' + String(p.VALOR) + ' \n Porcentagem: ' + String(p.PORC) + ''
        }
        ))
      setProcedureOptions(dataProcedure)
    }
  }

  const handleAreaChange = useCallback((e) => {
    setArea(e.label)
    setAction(null)
  }, [])

  const handleActionChange = useCallback((e) => {
    setAction(e.label)
  }, [])

  function getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  }

  useEffect(
    () => {
      // setLoading(true)
      loadAreas()
      loadActions()
      filterAreas()
      filterActions()
      filterProcedures()
      // setLoading(false)
    },
    [area, action]
  )

  return (
    <>
      {/* <div className={loading ? styles.spinnerShow : styles.spinnerHide} />
      {console.log(loading)} */}

      <div className={styles.oabtext}>

        <div className={styles.areas}>
          <Select
            id='area'
            instanceId='area'
            placeholder='Selecione uma area...'
            options={areaOptions}
            onChange={handleAreaChange}
            value={area == null
              ? ' '
              : areaOptions[getIndex(area, areaOptions, 'id')]
            }
          />
        </div>
      </div>

      <div className={styles.oabtext}>
        <div className={styles.actions}>
          <Select
            id='action'
            instanceId='action'
            placeholder='Selecione uma ação...'
            options={actionOptions}
            onChange={handleActionChange}
            value={action == null
              ? ' '
              : actionOptions[getIndex(action, actionOptions, 'id')]
            }
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>DÚVIDAS</div>
      </div>

      <div className={styles.procedures}>
        <div className={styles.proceduresitems}>
          <Accordion>
            {procedureOptions.map((item) => (
              <div style={{ paddingBottom: '2px' }}>
                <AccordionItem key={item.seq}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div style={{ padding: '10px' }}>
                        {item.procedure}
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div style={{ padding: '10px', background: '#c1c1c1' }}>
                      {item.valueporc}
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