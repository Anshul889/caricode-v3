import React from 'react'
import { Spring } from 'react-spring/renderprops'
import * as styles from '../../styles/ecommerce.module.css'

const EcommercePopup = ({ numberFeatures }) => {
  return (
    <Spring from={{ bottom: -50 }} to={{ bottom: 0 }}>
      {props => (
        <div className={styles.dfeatureupper} style={props}>
          <div className={styles.featureselected}>
            <div className={styles.mfeatures}>Features : {numberFeatures}</div>
            <div className={styles.mtotal}>
              Total: ${`${numberFeatures * 10}/mo`}
            </div>
            <div
              onClick={() => window.scrollTo({ top: 9000, behavior: 'smooth' })}
              className={styles.checkout}
            >
              Checkout
            </div>
          </div>
        </div>
      )}
    </Spring>
  )
}

export default EcommercePopup
