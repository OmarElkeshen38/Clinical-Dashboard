import React, { useState } from 'react';
import Styles from './InventoryComp.module.css';
import { useNavigate } from 'react-router';

function InventoryComp() {

    const [medicines, setMedicines] = useState([
      { id: 0, name: "Augmentin 625 Duo Tablet", groupN: "Generic Medicine", stock: 350, action: 'View Full Detail' },
      { id: 1, name: "Azithral 500 Tablet", groupN: "Diabetes", stock: 20, action: 'View Full Detail' },
      { id: 2, name: "Ascoril LS Syrup", groupN: "Generic Medicine", stock: 85, action: 'View Full Detail' },
      { id: 3, name: "Alex Syrup", groupN: "Generic Medicine", stock: 75, action: 'View Full Detail' },
      { id: 4, name: "Avil 25 Tablet", groupN: "Generic Medicine", stock: 44, action: 'View Full Detail' },
      { id: 5, name: "Amoxyclav 625 Tablet", groupN: "Generic Medicine", stock: 56, action: 'View Full Detail' },
      { id: 6, name: "Allegra 120mg Tablet", groupN: "Generic Medicine", stock: 150, action: 'View Full Detail' },
    ]);

    const navgate = useNavigate();
    function goToAddMedicine() {
        navgate("/add-new-medicine");
    }

  return (
    <>
      <div className="container">
        <div className="inventory">
          <div className={Styles.subTitle}>
            <div className={Styles.titleText}>
              <h2>Inventory</h2>
              <p>List of medicines available for sales.</p>
            </div>
            <div className={Styles.titleBtn}>
              <button onClick={goToAddMedicine}>
                <i className="fa-solid fa-plus"></i>
                Add New Item
              </button>
            </div>
          </div>
          <div className={Styles.carrts}>
            <div className={Styles.box}>
              <div className={Styles.cartBox}>
                <i className="fa-solid fa-plus"></i>
                <h2>298</h2>
                <p>Medicines Available</p>
              </div>
              <div className={Styles.link}>
                <a href="">
                  View Full List <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
            <div className={Styles.box}>
              <div className={Styles.cartBox}>
                <i className="fa-solid fa-plus"></i>
                <h2>02</h2>
                <p>Medicine Groups</p>
              </div>
              <div className={Styles.link}>
                <a href="">
                  View Groups <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
            <div className={Styles.box}>
              <div className={Styles.cartBox}>
                <i className="fa-solid fa-triangle-exclamation"></i>
                <h2>01</h2>
                <p>Medicine Shortage</p>
              </div>
              <div className={Styles.link}>
                <a href="">
                  Resolve Now <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={Styles.tableSubTitle}>
            <h2>all medicine</h2>
            <button>- Select Group -</button>
          </div>
          <div className={Styles.medTable}>
            <table>
                <thead>
                    <tr>
                        <th>medicine name</th>
                        <th>group name</th>
                        <th>stock in qty</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {medicines.map((medicine) => (
                        <tr key={medicine.id}>
                            <td>{medicine.name}</td>
                            <td>{medicine.groupN}</td>
                            <td>{medicine.stock}</td>
                            <td>{medicine.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryComp
