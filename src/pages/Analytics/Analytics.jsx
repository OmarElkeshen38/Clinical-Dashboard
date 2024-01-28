import { Box, Grid } from "@mui/material"
import CustomerGrowth from "../../components/CustomerGrowth/CustomerGrowth.jsx"
import Rating from "../../components/Rating/Rating.jsx"
import PopularCategories from "../../components/PopularCategories/PopularCategories.jsx"
import CustomerSatisfaction from "../../components/CustomerSatisfaction/CustomerSatisfaction.jsx";
import styles from './Analytics.module.css'
const Analytics = () => {
    return (
        <>
    <div className="container mb-3">
        <div className="row mb-5">
            <div className="col-lg-7 p-3">
              <div className={`p-4 ${styles.chart}`}>
                <CustomerGrowth />
              </div>
            </div>
            <div className="col-lg-5 p-3">
              <div className={`p-4 ${styles.chart}`}>
                <Rating />
              </div>
            </div>
            
        </div>
        <div className="row mb-5">
            <div className="col-lg-7 p-3">
              <div className={`p-4 ${styles.chart}`}>
                 <PopularCategories />
              </div>
            </div>
            <div className="col-lg-5 p-3">
              <div className={`p-4 ${styles.chartCustomerSatisfaction}`}>
                 <CustomerSatisfaction />
              </div>
            </div>  
        </div>
     
    </div>
    </>
    
    )
}

export default Analytics
