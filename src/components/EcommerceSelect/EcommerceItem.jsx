import React from 'react'
import * as styles from '../../styles/ecommerce.module.css'

const EcommerceItem = ({
  item,
  selectedFeatures,
  setPopup,
  setFeature,
  setNumber,
  isFeatureSelected,
}) => {
  const toggleFeature = item => {
    let updatedFeatures = [...selectedFeatures]
    if (selectedFeatures.includes(item)) {
      updatedFeatures = updatedFeatures.filter(x => x.id !== item.id)
      setNumber(prev => prev - 1)
    } else {
      updatedFeatures.push(item)
      setNumber(prev => prev + 1)
    }
    console.log(selectedFeatures)
    setFeature(updatedFeatures)
    setPopup(true)
    console.log(isFeatureSelected)
  }
  return (
    <div key={item.id} className={styles.formitem}>
      <input
        type="checkbox"
        id={item.id}
        name={item.id}
        checked={selectedFeatures.includes(item)}
        style={{ padding: '0px' }}
      ></input>
      <label onClick={() => toggleFeature(item)} htmlFor={item.id}>
        {item.name}
      </label>
      <p>{item.description}</p>
    </div>
  )
}

export default EcommerceItem
