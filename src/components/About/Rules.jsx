import React, { useState } from "react"
import * as styles from "./Rules.module.scss"
import image from "../../images/house.png"

export default function Rules() {
  const [showRules, setShowRules] = useState({
    lodging: true,
    property: false,
    facilities: false
  })

  const clearRules = () => {
    setShowRules({});
  }

  const handleShowRules = (showRuleType) => {
    clearRules();
    setShowRules({[showRuleType]: true});
  }

  return (
    <div className={styles.root}>
      <div className={styles.rulesContainer}>
      <div className={styles.heading}>
        <h2>Guidelines</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={styles.tabs}>
          <button
            onClick={() => handleShowRules('lodging')}
          >See Lodging Guidelines</button>
          <button
            onClick={() => handleShowRules('property')}
          >See Property Guidelines</button>
          <button
            onClick={() => handleShowRules('facilities')}
          >See Facilities Guidelines</button>
        </div>
          {showRules.lodging &&
            <div className={styles.rules}>
              <h3>Lodging Guidelines</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ul>
                <li>Rule 1</li>
                <li>Rule 4</li>
                <li>Rule 3</li>
                <li>Rule 4</li>
                <li>Rule 5</li>
                <li>Rule 6</li>
                <li>Rule 7</li>
              </ul>
            </div>
          }
          {showRules.property &&
          <div className={styles.rules}>
              <h3>Property Guidelines</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ul>
                <li>Rule 1</li>
                <li>Rule 4</li>
                <li>Rule 3</li>
                <li>Rule 4</li>
                <li>Rule 5</li>
                <li>Rule 6</li>
                <li>Rule 7</li>
              </ul>
            </div>
          }
          {showRules.facilities &&
            <div className={styles.rules}>
              <h3>Facilities Guidelines</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ul>
                <li>Rule 1</li>
                <li>Rule 4</li>
                <li>Rule 3</li>
                <li>Rule 4</li>
                <li>Rule 5</li>
                <li>Rule 6</li>
                <li>Rule 7</li>
              </ul>
            </div>
          }
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} />
      </div>
    </div>
  )
}

