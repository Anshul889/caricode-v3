import React from 'react'
import * as styles from './Branding.module.css'

const Branding = () => {
  return (
    <div class={styles.inner}>
      <span className={styles.brands}>i</span>
      <h3 className={styles.brandh}>Hey</h3>
      <p className={styles.brandp}>
        This is an informative card that will tell you something that's... well,
        important!
      </p>
    </div>
  )
}

export default Branding