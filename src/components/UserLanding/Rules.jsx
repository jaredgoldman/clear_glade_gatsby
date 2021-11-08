import React, { useState } from "react"
import * as styles from "./Rules.module.scss"

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
      <div className={styles.heading}>
        <h2>Rules Overview</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={styles.tabs}>
          <button
            onClick={() => handleShowRules('lodging')}
          >Lodging Rules</button>
          <button
            onClick={() => handleShowRules('property')}
          >Property Rules</button>
          <button
            onClick={() => handleShowRules('facilities')}
          >Facilities Rules</button>
        </div>
        {showRules.lodging &&
          <div className={styles.rules}>
            <h3>Lodging Rules</h3>
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
            <h3>Property Rules</h3>
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
            <h3>Facilities Rules</h3>
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
  )
}

