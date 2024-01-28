import React from 'react'
import styles from './AnalyticsDropDownBtn.module.css'
const AnalyticsDropDownBtn = ({ btnTitle }) => {
    return (
        <button className={`btn border dropdown-toggle ${styles.analyticsBtn}`}type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
        {btnTitle}
      </button>
    )
}

export default AnalyticsDropDownBtn
