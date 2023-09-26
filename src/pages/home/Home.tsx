import './style.css';
import React, {useState} from "react";
import ContactsTable from "./contacts-table/ContactsTable";
import NavigationBar from "./navigation-bar/NavigationBar";
import {getCurrentContacts} from "../../classes/storage-handler";

const Home = () => {

  const contacts = getCurrentContacts();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <NavigationBar></NavigationBar>
      <div style={{ padding: '15px 40px'}}>
        <h1>Contacts</h1>
        <div className={'contacts-table-container'}>
          <ContactsTable contacts={contacts}></ContactsTable>
          {
            contacts.length == 0 && (
              <div className={'no-contacts-container'}>
                <p>No contacts at the moment.</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
