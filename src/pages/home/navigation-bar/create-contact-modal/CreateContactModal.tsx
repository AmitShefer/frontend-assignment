import Modal from "../../../../components/modal/Modal";
import React, {useState} from "react";
import './style.css';
import {Contact} from "../../../../classes/types";

interface CreateContactModalProps {
  isVisible: boolean;
  onCreate: (contact: Contact) => void;
}

const CreateContactModal: React.FC<CreateContactModalProps> = ({isVisible, onCreate}) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [notes, setNotes] = useState('');

  const onSave = () => {
    onCreate({
      phoneNumber,
      fullName,
      email,
      age,
      notes
    });
  }

  return (
    <Modal isVisible={isVisible} isDeletable={false} onSave={onSave} title={'Create contact'}>
      <div className={'flexed-inputs-container'}>
        <div className={'form-input-container'}>
          <p>Full Name</p>
          <input onChange={(event) => setFullName(event.target.value)} placeholder={'Amit Shefer'} />
        </div>
        <div className={'form-input-container'}>
          <p>Phone Number</p>
          <input onChange={(event) => setPhoneNumber(event.target.value)} placeholder={'0542686773'} />
        </div>
      </div>
      <div className={'form-input-container'}>
        <p>Email</p>
        <input onChange={(event) => setEmail(event.target.value)} placeholder={'amshefer@gmail.com'} />
      </div>
      <div className={'form-input-container'}>
        <p>Age</p>
        <input onChange={(event) => setAge(event.target.value)} placeholder={'24'} />
      </div>
      <div className={'form-input-container'}>
        <p>Notes</p>
        <textarea onChange={(event) => setNotes(event.target.value)} className={'form-notes'}></textarea>
      </div>
    </Modal>
  )
}

export default CreateContactModal;
