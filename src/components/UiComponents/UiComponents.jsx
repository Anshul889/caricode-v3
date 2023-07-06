import React, { useState } from 'react'
import * as styles from './UiComponents.module.css'
import { Popover, RadioGroup } from '@headlessui/react'

const UiComponents = () => {
  const [plan, setPlan] = useState('startup')
  return (
    <div>
      <h2 className={styles.heading}>Custom UI Elements</h2>
      <div className={styles.uicontainer}>
        <div className={styles.uicontainerinner}>
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
                    <div className={styles.documentationheading}>
                      Documentation
                    </div>
                    <div className={styles.documentationtext}>
                      Start integrating products and tools
                    </div>
                  </div>
                </Popover.Panel>
              </Popover>
            </div>
          </div>
          <div className={styles.radiocontainer}>
            <div className={styles.inner}>
              <RadioGroup value={plan} onChange={setPlan}>
                <div className={styles.radioheading}>Select your Plan</div>
                <RadioGroup.Option value="startup">
                  {({ checked }) => (
                    <div className={checked ? styles.active : styles.inactive}>
                      <div className={styles.radiooption}>Startup</div>
                      <div className={styles.radiodescription}>
                        12GB/8 CPUs 160 GB SSD disk
                      </div>
                      {checked && <div className={styles.tick}>&#10003;</div>}
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="business">
                  {({ checked }) => (
                    <div className={checked ? styles.active : styles.inactive}>
                      <div className={styles.radiooption}>Business</div>
                      <div className={styles.radiodescription}>
                        16GB/8 CPUs 512 GB SSD disk
                      </div>
                      {checked && <div className={styles.tick}>&#10003;</div>}
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="enterprise">
                  {({ checked }) => (
                    <div className={checked ? styles.active : styles.inactive}>
                      <div className={styles.radiooption}>Enterprise</div>
                      <div className={styles.radiodescription}>
                        32GB/8 CPUs 1 TB SSD disk
                      </div>
                      {checked && <div className={styles.tick}>&#10003;</div>}
                    </div>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UiComponents
