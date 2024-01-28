import React from 'react'
import send from '../../assets/send-2.svg';
import microphone from '../../assets/microphone-2.svg';
import camera from '../../assets/camera.svg'
import styles from './Clients.module.css';
import clientImg from '../../assets/client.jpeg'
export default function ChatBody() {
  return (
    <div className='p-3'>
         <div className={`d-flex justify-content-between align-items-center mb-3 ${styles.chatHeader}`}>
          <div className='d-flex align-items-center'>
          <img
               src={clientImg}
               alt="avatar 1"
               className='rounded-circle me-2'
               style={{ width: "24px", height: "100%" }}
            />
            <span className={`${styles.userName}`}>asmaa khalaf</span>
          </div>
         </div>
         <div className='p-4' style={{ height: "400px", overflowY: "auto" }}>
                    <div className="d-flex flex-row justify-content-start">
                      <div>
                        <p className={` ms-3 mb-1 ${styles.reverseMessage}`}
                         style={{ backgroundColor: "#F2F2F2" }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className={`me-3 mb-1 ${styles.reverseMessage}`}>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-start">
                      <div>
                      <p className={` ms-3 mb-1 ${styles.reverseMessage}`}
                         style={{ backgroundColor: "#F2F2F2" }}
                        >
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                      <p className={`me-3 mb-1 ${styles.reverseMessage}`}>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    
                    </div>

                    <div className="d-flex flex-row justify-content-start">
                      <div>
                      <p className={` ms-3 mb-1 ${styles.reverseMessage}`}
                         style={{ backgroundColor: "#F2F2F2" }}
                        >
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                      <p className={`me-3 mb-1 ${styles.reverseMessage}`}>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                     
                    </div>

                    <div className="d-flex flex-row justify-content-start">
                      <div>
                      <p className={` ms-3 mb-1 ${styles.reverseMessage}`}
                         style={{ backgroundColor: "#F2F2F2" }}
                        >
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat voluptatem.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                      <p className={` me-3 mb-1 ${styles.reverseMessage}`}>
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur?
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      
                    </div>
         </div>
         <div className={`text-muted d-flex justify-content-start align-items-center mt-3 ${styles.boxMaasage}`}>
                    <button className={`me-3 ${styles.iconBtn}`} href="#!">
                       <img src={camera} alt='send' width={24}/>
                    </button>
                    <button className={`me-3 ${styles.iconBtn}`} href="#!">
                       <img src={microphone} alt='send' width={24}/>
                    </button>
                    <input
                      type="text"
                      className={`form-control ${styles.massageSend}`}
                      id="massageSend"
                      placeholder="write here"
                    />             
                    <button className={`ms-3 ${styles.iconBtn}`} href="#!">
                       <img src={send} alt='send' width={24}/>
                    </button>
                    
        </div>
    </div>
  )
}
