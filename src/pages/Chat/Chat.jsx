import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import styles from './Chat.module.css';
import ButtonDownloadPage from "../../components/Buttons/ButtonDownloadPage";
import ClientsChats from "../../components/ClientsChats/ClientsChats";
import clientImg from '../../assets/client.jpeg'
import ChatBody from "../../components/ClientsChats/ChatBody";

export default function Chat() {
    const users = [
        { id: 1, name: 'Luy Robin', image: clientImg, lastMessage: `Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). `,unread:3 },
        { id: 2, name: 'Jared Sunn', image: clientImg, lastMessage: 'Cicero famously orated against his political opponent Lucius Sergius Catilina.' ,unread:2},
        { id: 3, name: 'Nika Jerrardo', image: clientImg, lastMessage: 'hello!' ,unread:0},
        { id: 4, name: 'david Amrosa', image:clientImg, lastMessage: 'Hello!',unread:0 },
        
      ];
  return (
    <>
    <div className="container mt-3">
      <div className="row mb-5">
          <div className="contant d-flex justify-content-between align-items-center">
            <div className="title">
               <h2 className={`${styles.title}`}>Chats </h2>
               <h3 className={`${styles.summary}`}>Recent Chats</h3>
            </div>
          <div className="create-chat">
           {/* create new chat */}
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-6 col-lg-6">
           <div className={`p-3 mb-3`}>
              <div className={`${styles.search}`}>
                  <div className={`input-group p-2 ${styles.searchShadow}`}>
                     <input
                      className="form-control rounded border-0"
                      placeholder="Search"
                      type="search"
                     />
                    <button className="btn btn-outline-secondary border-0" type="button" id="search-addon">
                      Massage
                    </button>
                 </div>
              </div>
           </div>
           <div className="p-3" style={{ height: "400px", overflowY: "auto" }}>
            {users.map((user) => (
                <ClientsChats key={user.id} clientImg={user.image} name={user.name} lastMessage={user.lastMessage} unread={user.unread}/>
              ))}

           </div>
        </div>
        <div className="col-lg-6">
          <ChatBody/>
        </div>
      </div>
    </div>
    </>
 
  );
}