import {Contact} from "./types";

export const LOCAL_STORAGE_CONTACTS_KEY = 'contacts';

export const getCurrentContacts = (): Contact[] => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTACTS_KEY) || '[]');
}

export const setNewCurrentContacts = (newCurrentContacts: Contact[]) => {
  localStorage.setItem(LOCAL_STORAGE_CONTACTS_KEY, JSON.stringify(newCurrentContacts));
}
