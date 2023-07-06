import React from 'react'
import * as styles from './UiComponents.module.css'
import { Popover } from '@headlessui/react'

const UiComponents = () => {
  return (
    <div>
      <h2 className={styles.heading}>Custom UI Elements</h2>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Popover className={styles.popover}>
            <Popover.Button className={styles.popoverButton}>
              Open Popover
            </Popover.Button>
            <Popover.Panel className={styles.popoverPanel}>
              <div>Popover content</div>
              <div>Popover content</div>
              <div>Popover content</div>
              <div className={styles.documentation}>
                <div className={styles.documentationheading}>Documentation</div>
                <div className={styles.documentationtext}>
                  Start integrating products and tools
                </div>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default UiComponents
