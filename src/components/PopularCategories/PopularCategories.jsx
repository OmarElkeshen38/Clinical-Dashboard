import styles from '../../pages/Dashboard/Dashboard.module.css'
import PieChartComponent from '../Charts/PieChartComponent.jsx'
const PopularCategories = () => {
    return (
        <>
            <div className="chart-header mb-4">
                <h3 className={`${styles.chartTitle}`}>Popular Categories</h3>
            </div>
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                  <PieChartComponent/>
            </div>
        </>
       
    )
}

export default PopularCategories
