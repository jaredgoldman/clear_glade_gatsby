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
    <div className={styles.rules}>
      <div className={styles.buttons}>
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
        <div>
          <h3>Lodging Rules</h3>
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
        <div>
          <h3>Property Rules</h3>
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
        <div>
          <h3>Facilities Rules</h3>
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
  )
}

