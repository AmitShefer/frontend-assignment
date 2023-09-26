import React, {useState} from "react";
import Modal from "../../../components/modal/Modal";
import {Contact} from "../../../classes/types";
import ContactRow from "./contact-row/ContactRow";

interface ContactsTableProps {
  contacts: Contact[];
}

const ContactsTable: React.FC<ContactsTableProps> = ({contacts}) => {

  return (
    <div>

      <table className={'contacts-table'}>
        <tbody>
          <tr>
            <th><td>Full Name</td></th>
            <th><td>Email</td></th>
            <th><td>Age</td></th>
          </tr>
          {
            contacts.map(contact => <ContactRow contact={contact} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ContactsTable;
