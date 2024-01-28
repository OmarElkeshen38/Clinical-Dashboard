import React, { useState } from 'react';
import Styles from './CustomersComp.module.css';
import customerImg1 from "../../assets/custmerImg1.png";
import customerImg2 from '../../assets/custmerImg2.png';
import customerImg3 from '../../assets/custmerImg3.png';
import customerImg4 from '../../assets/custmerImg4.png';
import customerImg5 from '../../assets/custmerImg5.png';
import customerImg6 from '../../assets/custmerImg6.png';
import customerImg7 from '../../assets/custmerImg7.png';
import customerImg8 from '../../assets/custmerImg8.png';
function CustomersComp() {

  const [customers, setCustomers] = useState([
    { id: 0, img: customerImg1, name: 'Ahmed Mahmoud', email: 'Ahmed@gmail.com', orders: 4, total: '12,00' },
    { id: 1, img: customerImg2, name: 'Ahmed Mahmoud', email: 'Ahmed@gmail.com', orders: 4, total: '12,00' },
    { id: 2, img: customerImg3, name: 'Ahmed Mahmoud', email: 'Ahmed@gmail.com', orders: 4, total: '12,00' },
    { id: 3, img: customerImg4, name: 'Ahmed Mahmoud', email: 'Ahmed@gmail.com', orders: 4, total: '12,00' },
    { id: 4, img: customerImg5, name: 'Ahmed Mahmoud', email: 'Ahmed@gmail.com', orders: 4, total: '12,00' },
    { id: 5, img: customerImg6, name: 'Ahmed Mahmoud', email: 'Ahmed@gmail.com', orders: 4, total: '12,00' },
    { id: 6, img: customerImg7, name: 'Ahmed Mahmoud', email: 'Ahmed@gmail.com', orders: 4, total: '12,00' },
    { id: 7, img: customerImg8, name: 'Ahmed Mahmoud', email: 'Ahmed@gmail.com', orders: 4, total: '12,00' },
  ]);

  return (
    <>
      <div className={Styles.customers}>
        <h2>Customers List</h2>
        <table className={`${Styles.tabble}`}>
          <thead>
            <tr>
              <th className="w-25 text-start">
                <h2>Customer</h2>
              </th>
              <th>
                <h2>Order</h2>
              </th>
              <th>
                <h2>Total</h2>
              </th>
              <th>
                <h3>chat</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cusomer) => (
              <tr key={cusomer.id}>
                <td className={Styles.cellWedth}>
                  <div className="d-flex align-items-center gap-3">
                    <img src={cusomer.img} className="w-100" alt="customer profile" />
                    <div className={`${Styles.custData} text-start`}>
                      <h2>{cusomer.name}</h2>
                      <p>{cusomer.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <h2>{cusomer.orders} items</h2>
                </td>
                <td>
                  <h2>{cusomer.total}$</h2>
                </td>
                <td>
                  <div className={Styles.icon}>
                    <i className="fa-regular fa-comment-dots"></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomersComp
