import React, { useState } from 'react'
import * as styles from '../../styles/ecommerce.module.css'
import axios from 'axios'
import { emaillist, socialfeatures, seofeatures } from './ecommercefeatures'
import EcommerceItem from './EcommerceItem'
import EcommercePopup from './EcommercePopup'
import EcommerceMPopup from './EcommerceMPopup'

const EcommerceTwoSelect = () => {
  const [selectedFeatures, setFeature] = useState([])
  const [numberFeatures, setNumber] = useState(0)
  const [isFeatureSelected, setPopup] = useState(false)
  const [inputField, setInputfield] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  let messageArray = []

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setInputfield(false)
      selectedFeatures.forEach((x) => messageArray.push(x.name))
      const response = await axios.post(
        `https://us-central1-ecom-shopify.cloudfunctions.net/app/api/caricode`,
        {
          name,
          email,
          message: messageArray.join(' and '),
        }
      )
      if (response.data === 'Submitted') {
        setLoading(false)
        setSubmitted(true)
        setPopup(false)
      }
    } catch (e) {
      console.log(e)
      setInputfield(true)
    }
  }

  const removeSelected = (item) => {
    let updatedState = [...selectedFeatures.filter((x) => x !== item)]
    setFeature(updatedState)
    setNumber((prev) => prev - 1)
  }

  return (
    <div>
      <div className={styles.formupper}>
        <div className={styles.form}>
          <h4>Email Marketing</h4>
          {emaillist.map((item) => {
            return (
              <EcommerceItem
                item={item}
                selectedFeatures={selectedFeatures}
                setPopup={setPopup}
                setNumber={setNumber}
                setFeature={setFeature}
                isFeatureSelected={isFeatureSelected}
              />
            )
          })}
          <h4>Search Engine Optimisation</h4>
          {seofeatures.map((item) => {
            return (
              <EcommerceItem
                item={item}
                selectedFeatures={selectedFeatures}
                setPopup={setPopup}
                setNumber={setNumber}
                setFeature={setFeature}
                isFeatureSelected={isFeatureSelected}
              />
            )
          })}
          <h4>Social Features</h4>
          {socialfeatures.map((item) => {
            return (
              <EcommerceItem
                item={item}
                selectedFeatures={selectedFeatures}
                setPopup={setPopup}
                setNumber={setNumber}
                setFeature={setFeature}
                isFeatureSelected={isFeatureSelected}
              />
            )
          })}
        </div>
      </div>
      {selectedFeatures.length > 0 && (
        <div className={styles.orderedupper}>
          <h4>Selected Features</h4>
          <div className={styles.ordereditems}>
            {selectedFeatures.map((item, index) => {
              return (
                <div className={styles.ordereditem} key={item.id}>
                  <span>
                    {index + 1}. {item.name}{' '}
                  </span>
                  <span
                    style={{
                      color: 'red',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                    onClick={() => removeSelected(item)}
                  >
                    Remove
                  </span>
                </div>
              )
            })}
          </div>
          <p className={styles.warning}>
            (You will only be charged once the site goes live)
          </p>
        </div>
      )}
      {isFeatureSelected && <EcommerceMPopup numberFeatures={numberFeatures} />}
      <div
        className="former"
        style={{ width: '90%', margin: '0 auto', maxWidth: '1080px' }}
      >
        <label onSelect={() => setInputfield(true)}>
          <div className="formitem">Name</div>
          <input
            type="text"
            name="name"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label onSelect={() => setInputfield(true)}>
          <div className="formitem">Email</div>
          <input
            type="email"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      {loading && (
        <p
          style={{
            width: '90%',
            margin: '0 auto',
            maxWidth: '1080px',
          }}
        >
          Loading...
        </p>
      )}
      {submitted && (
        <p
          style={{
            width: '90%',
            margin: '0 auto',
            maxWidth: '1080px',
          }}
        >
          Thank you! We will get back to you shortly
        </p>
      )}
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '90%' }}>
        {inputField && isFeatureSelected ? (
          <button onClick={() => handleSubmit()} className={styles.submitecom}>
            Submit
          </button>
        ) : (
          <button className={styles.submitecom} style={{ opacity: '0.5' }}>
            Submit
          </button>
        )}
      </div>
      {isFeatureSelected && <EcommercePopup numberFeatures={numberFeatures} />}
    </div>
  )
}

export default EcommerceTwoSelect
