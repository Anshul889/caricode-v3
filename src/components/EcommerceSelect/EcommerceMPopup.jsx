import React from 'react'
import { Spring } from 'react-spring/renderprops'
import * as styles from '../../styles/ecommerce.module.css'

const EcommerceMPopup = ({numberFeatures}) => {
  return (
    <Spring from={{ bottom: 0 }} to={{ bottom: 50 }}>
      {props => (
        <div className={styles.featureupper} style={props}>
          <div className={styles.featureselected}>
            <div className={styles.mfeatures}>Features : {numberFeatures}</div>
            <div className={styles.mtotal}>
              Total: Rs{numberFeatures * 900}/mo
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

export default EcommerceMPopup
