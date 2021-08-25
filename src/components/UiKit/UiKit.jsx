import React, { useState } from 'react'
import * as styles from './UiKit.module.css'
import facered from '../../images/facebook-red.svg'
import facepurple from '../../images/facebook-purple.svg'
import facewhite from '../../images/facebook-white.svg'
import faceblue from '../../images/facebook-blue.svg'
import facegreen from '../../images/facebook-green.svg'
import faceblack from '../../images/facebook-black.svg'
import twitterred from '../../images/twitter-red.svg'
import twitterpurple from '../../images/twitter-purple.svg'
import twitterwhite from '../../images/twitter-white.svg'
import twitterblue from '../../images/twitter-blue.svg'
import twittergreen from '../../images/twitter-green.svg'
import twitterblack from '../../images/twitter-black.svg'
import linkedred from '../../images/linkedin-red.svg'
import linkedpurple from '../../images/linkedin-purple.svg'
import linkedwhite from '../../images/linkedin-white.svg'
import linkedblue from '../../images/linkedin-blue.svg'
import linkedgreen from '../../images/linkedin-green.svg'
import linkedblack from '../../images/linkedin-black.svg'
import instared from '../../images/instagram-red.svg'
import instapurple from '../../images/instagram-purple.svg'
import instawhite from '../../images/instagram-white.svg'
import instablue from '../../images/instagram-blue.svg'
import instagreen from '../../images/instagram-green.svg'
import instablack from '../../images/instagram-black.svg'
import Redanimations from './Redanimations'
import Greenanimations from './Greenanimations'
import Blueanimations from './Blueanimations'
import Blackanimations from './Blackanimations'
import Purpleanimations from './Purpleanimations'
import Whiteanimations from './Whiteanimations'

const UiKit = () => {
  const [theme, setTheme] = useState({ bg: '#7c759a', color: 'white' })

  return (
    <div
      className={styles.uikit}
      style={{ backgroundColor: theme.bg, color: theme.color }}
    >
      <div className={styles.headline}>
        <h2>Ui Kits</h2>
        <p className={styles.titlep}>
          A consistent look and feel can be applied to all the components on a
          page. For now, this means sharing a color scheme across the entire
          page.
        </p>
        <h4>Pick a theme</h4>
      </div>
      {theme.color == 'white' && (
        <div className={styles.colorpicker}>
          <div
            className={styles.color}
            style={{ backgroundColor: '#a4373a' }}
            onClick={() => setTheme({ bg: '#a4373a', color: 'white' })}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: 'white' }}
            onClick={() => setTheme({ bg: 'white', color: 'black' })}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: '#7c759a' }}
            onClick={() => setTheme({ bg: '#7c759a', color: 'white' })}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: '#0078d4' }}
            onClick={() => setTheme({ bg: '#0078d4', color: 'white' })}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: '#008272' }}
            onClick={() => setTheme({ bg: '#008272', color: 'white' })}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: 'black' }}
            onClick={() => setTheme({ bg: 'black', color: 'white' })}
          ></div>
        </div>
      )}
      {theme.color == 'black' && (
        <div className={styles.colorpicker}>
          <div
            className={styles.lightcolor}
            style={{ backgroundColor: '#a4373a' }}
            onClick={() => setTheme({ bg: '#a4373a', color: 'white' })}
          ></div>
          <div
            className={styles.lightcolor}
            style={{ backgroundColor: 'white' }}
            onClick={() => setTheme({ bg: 'white', color: 'black' })}
          ></div>
          <div
            className={styles.lightcolor}
            style={{ backgroundColor: '#7c759a' }}
            onClick={() => setTheme({ bg: '#7c759a', color: 'white' })}
          ></div>
          <div
            className={styles.lightcolor}
            style={{ backgroundColor: '#0078d4' }}
            onClick={() => setTheme({ bg: '#0078d4', color: 'white' })}
          ></div>
          <div
            className={styles.lightcolor}
            style={{ backgroundColor: '#008272' }}
            onClick={() => setTheme({ bg: '#008272', color: 'white' })}
          ></div>
          <div
            className={styles.lightcolor}
            style={{ backgroundColor: 'black' }}
            onClick={() => setTheme({ bg: 'black', color: 'white' })}
          ></div>
        </div>
      )}
      <div className={styles.components}>
        <div className={styles.mobilecomponents}>
          <div className={styles.inputcomponent}>
            {theme.bg == '#a4373a' && (
              <input
                className={styles.redinput}
                type="text"
                placeholder="Highlights"
              />
            )}
            {theme.bg == 'white' && (
              <input
                className={styles.whiteinput}
                type="text"
                placeholder="Highlights"
              />
            )}
            {theme.bg == 'black' && (
              <input
                className={styles.blackinput}
                type="text"
                placeholder="Highlights"
              />
            )}
            {theme.bg == '#008272' && (
              <input
                className={styles.greeninput}
                type="text"
                placeholder="Highlights"
              />
            )}
            {theme.bg == '#0078d4' && (
              <input
                className={styles.blueinput}
                type="text"
                placeholder="Highlights"
              />
            )}
            {theme.bg == '#7c759a' && (
              <input
                className={styles.purpleinput}
                type="text"
                placeholder="Highlights"
              />
            )}
          </div>
          <div className={styles.buttoncomponent}>
            <button style={{ backgroundColor: theme.color, color: theme.bg }}>
              Primary
            </button>
            {theme.bg == 'white' && (
              <button style={{ backgroundColor: '#edebe9', color: 'black' }}>
                Secondary
              </button>
            )}
            {theme.bg == '#a4373a' && (
              <button style={{ backgroundColor: '#c34b4f', color: 'white' }}>
                Secondary
              </button>
            )}
            {theme.bg == '#7c759a' && (
              <button style={{ backgroundColor: '#b4b0c4', color: 'white' }}>
                Secondary
              </button>
            )}
            {theme.bg == '#0078d4' && (
              <button style={{ backgroundColor: '#3dabff', color: 'white' }}>
                Secondary
              </button>
            )}
            {theme.bg == '#008272' && (
              <button style={{ backgroundColor: '#00e6cb', color: 'white' }}>
                Secondary
              </button>
            )}
            {theme.bg == 'black' && (
              <button style={{ backgroundColor: '#333333', color: 'white' }}>
                Secondary
              </button>
            )}
          </div>
          {theme.color == 'white' && (
            <div className={styles.dark}>
              <form>
                <div className={styles.radioitem}>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">Option 1</label>
                </div>
                <div className={styles.radioitem}>
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <label for="css">Option 2</label>
                </div>
                <div className={styles.radioitem}>
                  <input
                    type="radio"
                    id="javascript"
                    name="fav_language"
                    value="JavaScript"
                  />
                  <label for="javascript">Option 3</label>
                </div>
              </form>
            </div>
          )}
          {theme.color == 'black' && (
            <div className={styles.light}>
              <form>
                <div className={styles.radioitem}>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">Option 1</label>
                </div>
                <div className={styles.radioitem}>
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <label for="css">Option 2</label>
                </div>
                <div className={styles.radioitem}>
                  <input
                    type="radio"
                    id="javascript"
                    name="fav_language"
                    value="JavaScript"
                  />
                  <label for="javascript">Option 3</label>
                </div>
              </form>
            </div>
          )}
          {theme.bg == '#a4373a' && (
            <div className={styles.toggle}>
              <form>
                <label className={styles.redswitch}>
                  <input type="checkbox" />
                  <span className={styles.redslider}></span>
                </label>
              </form>
            </div>
          )}
          {theme.bg == '#7c759a' && (
            <div className={styles.toggle}>
              <form>
                <label className={styles.purpleswitch}>
                  <input type="checkbox" />
                  <span className={styles.purpleslider}></span>
                </label>
              </form>
            </div>
          )}
          {theme.bg == '#0078d4' && (
            <div className={styles.toggle}>
              <form>
                <label className={styles.blueswitch}>
                  <input type="checkbox" />
                  <span className={styles.blueslider}></span>
                </label>
              </form>
            </div>
          )}
          {theme.bg == '#008272' && (
            <div className={styles.toggle}>
              <form>
                <label className={styles.greenswitch}>
                  <input type="checkbox" />
                  <span className={styles.greenslider}></span>
                </label>
              </form>
            </div>
          )}
          {theme.bg == 'white' && (
            <div className={styles.toggle}>
              <form>
                <label className={styles.whiteswitch}>
                  <input type="checkbox" />
                  <span className={styles.whiteslider}></span>
                </label>
              </form>
            </div>
          )}
          {theme.bg == 'black' && (
            <div className={styles.toggle}>
              <form>
                <label className={styles.blackswitch}>
                  <input type="checkbox" />
                  <span className={styles.blackslider}></span>
                </label>
              </form>
            </div>
          )}
          {theme.bg == '#a4373a' && (
            <div className={styles.icons}>
              <div className={styles.icon}>
                <img src={facered} />
              </div>
              <div className={styles.icon}>
                <img src={twitterred} />
              </div>
              <div className={styles.icon}>
                <img src={linkedred} />
              </div>
              <div className={styles.icon}>
                <img src={instared} />
              </div>
            </div>
          )}
          {theme.bg == 'white' && (
            <div className={styles.icons}>
              <div className={styles.lighticon}>
                <img src={facewhite} />
              </div>
              <div className={styles.lighticon}>
                <img src={twitterwhite} />
              </div>
              <div className={styles.lighticon}>
                <img src={linkedwhite} />
              </div>
              <div className={styles.lighticon}>
                <img src={instawhite} />
              </div>
            </div>
          )}
          {theme.bg == '#7c759a' && (
            <div className={styles.icons}>
              <div className={styles.icon}>
                <img src={facepurple} />
              </div>
              <div className={styles.icon}>
                <img src={twitterpurple} />
              </div>
              <div className={styles.icon}>
                <img src={linkedpurple} />
              </div>
              <div className={styles.icon}>
                <img src={instapurple} />
              </div>
            </div>
          )}
          {theme.bg == '#0078d4' && (
            <div className={styles.icons}>
              <div className={styles.icon}>
                <img src={faceblue} />
              </div>
              <div className={styles.icon}>
                <img src={twitterblue} />
              </div>
              <div className={styles.icon}>
                <img src={linkedblue} />
              </div>
              <div className={styles.icon}>
                <img src={instablue} />
              </div>
            </div>
          )}
          {theme.bg == '#008272' && (
            <div className={styles.icons}>
              <div className={styles.icon}>
                <img src={facegreen} />
              </div>
              <div className={styles.icon}>
                <img src={twittergreen} />
              </div>
              <div className={styles.icon}>
                <img src={linkedgreen} />
              </div>
              <div className={styles.icon}>
                <img src={instagreen} />
              </div>
            </div>
          )}
          {theme.bg == 'black' && (
            <div className={styles.icons}>
              <div className={styles.icon}>
                <img src={faceblack} />
              </div>
              <div className={styles.icon}>
                <img src={twitterblack} />
              </div>
              <div className={styles.icon}>
                <img src={linkedblack} />
              </div>
              <div className={styles.icon}>
                <img src={instablack} />
              </div>
            </div>
          )}
        </div>
        <div className={styles.desktopcomponents}>
          {theme.bg == '#a4373a' && <Redanimations />}
          {theme.bg == '#008272' && <Greenanimations />}
          {theme.bg == '#0078d4' && <Blueanimations />}
          {theme.bg == 'black' && <Blackanimations />}
          {theme.bg == '#7c759a' && <Purpleanimations />}
          {theme.bg == 'white' && <Whiteanimations />}
        </div>
      </div>
    </div>
  )
}

export default UiKit
