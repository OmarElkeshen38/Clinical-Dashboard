import React from 'react'
import styles from './Clients.module.css';
export default function ClientsChats({clientImg,name,lastMessage,unread}) {
  return (
  <div className={`${styles.ClientsChats} mb-3`}>
     <div className={`d-flex justify-content-between align-items-center p-3 ${styles.chat}`}>
        <div className='d-flex flex-column'>
          <div className="d-flex align-items-center">
           <img
              src={clientImg}
              alt="avatar"
              className="d-flex align-self-center rounded-circle"
              width={50}
              style={{ width: "50px", height: "50px"}}
            />
            <p className={`ms-2 mb-0 ${styles.clientName}`}>{name}</p>
          </div>
          <div className="p-3">
            <p className="small text-muted">{lastMessage}</p>
          </div>
        </div>
        <div className="">
        { unread ? <span className="badge bg-danger rounded-pill">{unread}</span> : <span className="badge bg-danger rounded-pill"></span>}
          
        </div>
    </div>
  </div>
   
    
  )
}
