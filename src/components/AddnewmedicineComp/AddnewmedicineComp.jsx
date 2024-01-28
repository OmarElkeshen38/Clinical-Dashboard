import React from 'react';
import Styles from './AddnewmedicineComp.module.css';
import { useNavigate } from 'react-router';

function AddnewmedicineComp() {

    const navgate = useNavigate();
    function goToInventory() {
      navgate("/inventory");
    }

  return (
    <div>
      <div className="container">
        <div className="medicine">
            <div className={Styles.subTitle}>
                <div className={Styles.titleText}>
                    <div className="d-flex align-items-center">
                        <h2 onClick={goToInventory}>Inventory</h2>
                        <i className="mx-3 fa-solid fa-arrow-right"></i>
                        <h2 className='text-black'>Add New Medicine</h2>
                    </div>
                    <p>*All fields are mandatory, except mentioned as (optional).</p>
                </div>
            </div>
            <div className={`my-3 ${Styles.form}`}>
                <div className={Styles.input}>
                    <div className={Styles.box}>
                        <p>Medicine Name</p>
                        <input type="text" />
                    </div>
                    <div className={Styles.box}>
                        <p>Medicine ID</p>
                        <input type="text" />
                    </div>
                </div>
                <div className={`my-3 ${Styles.input}`}>
                    <div className={Styles.box}>
                        <p>Medicine Group</p>
                        <input type="text" />
                    </div>
                    <div className={Styles.box}>
                        <p>Quantity in Number</p>
                        <input type="number" />
                    </div>
                </div>
                <div className={`my-3 ${Styles.input}`}>
                    <div className={Styles.textarea}>
                        <p>How to Use</p>
                        <textarea cols="30" rows="4"></textarea>
                    </div>
                </div>
                <div className={`my-3 ${Styles.input}`}>
                    <div className={Styles.textarea}>
                        <p>Side Effects</p>
                        <textarea cols="30" rows="4"></textarea>
                    </div>
                </div>
                <button>Save Details</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddnewmedicineComp
