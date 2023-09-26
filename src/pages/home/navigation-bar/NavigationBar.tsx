import React, {useState} from "react";
import CreateContactModal from "./create-contact-modal/CreateContactModal";
import {Contact} from "../../../classes/types";
import './style.css';
import {getCurrentContacts, setNewCurrentContacts} from "../../../classes/storage-handler";

const NavigationBar = () => {

  const [isCreateContactModalVisible, setIsCreateContactModalVisible] = useState<boolean>(false);

  const onCreateContact = (contact: Contact) => {
    let currentContacts = getCurrentContacts();
    currentContacts.push(contact);
    setNewCurrentContacts(currentContacts);
    setIsCreateContactModalVisible(false);
  }

  return (
    <div>
      <CreateContactModal isVisible={isCreateContactModalVisible} onCreate={onCreateContact}></CreateContactModal>
      <div className={'navigation-bar'}>
        <img src="/images/logo.svg" width={100} />
        <a onClick={() => setIsCreateContactModalVisible(true)} className={'button create-contact-button'}>Create Contact</a>
      </div>
    </div>
  )
}

export default NavigationBar;
