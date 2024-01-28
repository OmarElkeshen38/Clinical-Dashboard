import DropdownButton from "../../components/Buttons/DropDownButton";
import OrderTable from "../../components/Tables/OrderTable";
import styles from './Order.module.css';


const Orders = () => {

   const status = ['all status', 'delivered', 'cancelled', 'new order'];
   const date = ['today', 'last week'];

   return(
        <div className="container mt-3">
           <div className="header">
              <div className="contant d-flex justify-content-between align-items-center">
                <div className="title">
                   <h2 className={`${styles.title}`}>your order </h2>
                   <h3 className={`${styles.summary}`}>this is your order list data</h3>
                </div>
              <div className="d-flex">
                  <DropdownButton items={status}/>
                  <DropdownButton items={date}/>
               </div>
            </div>
         </div>
         <div className="my-3">
            <OrderTable />
         </div>
      </div>
   )
}
export default Orders;