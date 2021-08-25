import React from 'react'
import * as styles from './TabMotion.module.css'

const TabMotion = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.tabselect}>
        <div className={styles.textselectone}>Caricode</div>
        <div className={styles.textselecttwo}>Alt Colors</div>
      </div>
      <div className={styles.border}>

      </div>
      <div className={styles.content}>
        <div className={styles.purple}>
          <div className={styles.pitem}></div>
          <div className={styles.pitem}></div>
          <div className={styles.pitem}></div>
          <div className={styles.pitem}></div>
          <div className={styles.pitem}></div>
          <div className={styles.pitem}></div>
        </div>
        <div className={styles.colors}>
          <div className={styles.citem} style={{backgroundColor: '#a4373a'}}></div>
          <div className={styles.citem} style={{backgroundColor: '#008272'}}></div>
          <div className={styles.citem} style={{backgroundColor: '#0078d4'}}></div>
          <div className={styles.citem} style={{backgroundColor: 'black'}}></div>
          <div className={styles.citem} style={{backgroundColor: '#c239b3'}}></div>
          <div className={styles.citem} style={{backgroundColor: '#ca5010'}}></div>
        </div>
      </div>
    </div>
  )
}

export default TabMotion
