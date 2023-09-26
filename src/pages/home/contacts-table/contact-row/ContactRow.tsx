import React, {useState} from "react";
import {Contact} from "../../../../classes/types";
import Modal from "../../../../components/modal/Modal";
import './style.css';
import {getCurrentContacts, setNewCurrentContacts} from "../../../../classes/storage-handler";

interface ContactRowProps {
  contact: Contact;
}

const ContactRow: React.FC<ContactRowProps> = ({contact}) => {

  const [isContactModalVisible, setIsContactModalVisible] = useState<boolean>(false);

  const onDelete = () => {
    const newCurrentContacts = getCurrentContacts().filter((currentContact: Contact) => currentContact.phoneNumber != contact.phoneNumber);
    setNewCurrentContacts(newCurrentContacts);
    setIsContactModalVisible(false);
  }

  return (
    <>
      <Modal title={`${contact.fullName}, ${contact.age}`} isSavable={false} onDelete={onDelete} isVisible={isContactModalVisible}>
        <div>
          <p className={'field-title'}>Email</p>
          <p>{contact.email}</p>
        </div>
        <div className={'field-notes'}>
          <p className={'field-title'}>Notes</p>
          <p>{contact.notes}</p>
        </div>
      </Modal>
      <tr onClick={() => setIsContactModalVisible(true)} key={contact.phoneNumber}>
        <td>{contact.fullName}</td>
        <td>{contact.email}</td>
        <td>{contact.age}</td>
      </tr>
    </>
  )
}

export default ContactRow;
