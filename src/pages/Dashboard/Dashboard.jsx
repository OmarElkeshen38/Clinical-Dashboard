import styles from './Dashboard.module.css'
import ButtonDownloadPage from "../../components/Buttons/ButtonDownloadPage";
import moneyRecive from "../../assets/money-recive.svg";
import moneySend from "../../assets/money-send.svg";
import bitcoin from "../../assets/bitcoin-convert.svg";
import people from "../../assets/people.svg";
import CardAnalysis from "../../components/Cards/CardAnalysis";
import PieChartComponent from "../../components/Charts/PieChartComponent";
import BarsDataset from '../../components/Charts/BarChart';
import TableBestSaller from '../../components/Tables/TableBestSaller';
import ApexChart from '../../components/Charts/Bar';
const Dashboard = () =>{
    return(    
      <div className="container mb-3">
        <div className="row">
          <div className="contant d-flex justify-content-between align-items-center">
            <div className="title">
               <h2 className={`${styles.title}`}>Dash board </h2>
               <h3 className={`${styles.summary}`}>Here is the summary</h3>
            </div>
          <div className="btn-download">
           <ButtonDownloadPage downloadId='textDownload'/>
          </div>
        </div>
        </div>
        <div className='print-section' id="textDownload">
          <div className="row mt-3">
            <CardAnalysis logo={moneyRecive} header="Total Profit" count="4599" id='first'/>
            <CardAnalysis logo={moneySend} header="Total expenses" count="24753" id='second'/>
            <CardAnalysis logo={bitcoin} header="Total Balance" count="253" id='third'/>
            <CardAnalysis logo={people} header="Total Customers" count="5599" id='fourth'/>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 p-3 chart">
              <div className={`p-3 ${styles.chartBackground}`}>
              <div className="chart-header mb-4">
                <h3 className={`${styles.chartTitle}`}>Popular Categories</h3>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                  <PieChartComponent/>
              </div>
            </div>
            </div>
            <div className="col-lg-6 p-3 chart ">
              <div className={`p-3 ${styles.chartBackground}`}>
              <div className="chart-header mb-4">
                <h3 className={`${styles.barChartTitle}`}>Visits by type</h3>
              </div>
              <ApexChart/>
            </div>
            </div>
          </div>
          <div className='row mt-3'>
             <div className="col p-3">
              <div className={`${styles.table}`}>
              <div className="mb-5 d-flex justify-content-between align-items-center">
                <h3 className={`${styles.tableHeader} mb-0`}>Best Selling Products</h3>
                <button type="button" className={`${styles.btn}`}>See More</button>
              </div>
              <TableBestSaller/>
              <TableBestSaller/>
              <TableBestSaller/>
              <TableBestSaller/>
              <TableBestSaller/>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
     
}
export default Dashboard;
