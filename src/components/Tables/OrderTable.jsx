import React, { useState } from 'react';
import { orderTableFields, ordersTableData } from '../../constants';
import './OrderTable.css';
import Pagination from 'react-js-pagination';
const ITEMS_PER_PAGE = 5;

const OrderTable = () => {
    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const indexOfLastItem = activePage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = ordersTableData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
           <div className="table-responsive mb-4">
            <table className="order-table">
                <thead>
                    <tr className='table-header'>
                        {orderTableFields.map((field, index) => (
                            <th className='th' key={index}>{field}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((data, index) => {
                        const status =
                            data.status === 'cancelled'
                                ? 'cancelled'
                                : data.status === 'delivered'
                                ? 'delivered'
                                : 'new';

                        return (
                            <tr key={index}>
                                <td>{data.Orderid}</td>
                                <td>{data.Date}</td>
                                <td>{data.customername}</td>
                                <td>{data.location}</td>
                                <td>{data.Items}</td>
                                <td>{data.total}</td>
                                <td>
                                    <span className={`status ${status}`}>
                                        <span className={`dot ${status}`}></span>
                                        {data.status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        <div className='d-flex justify-content-end align-items-center'>
             <Pagination
                activePage={activePage}
                itemsCountPerPage={ITEMS_PER_PAGE}
                totalItemsCount={ordersTableData.length}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
                disabledClass="disabled"
            />   
        </div>
       
        </>
      
    );
};

export default OrderTable;
