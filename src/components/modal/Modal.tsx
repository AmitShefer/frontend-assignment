import './style.css';
import React, {ReactNode} from "react";

interface ModalProps {
  isVisible: boolean;
  isSavable?: boolean;
  isDeletable?: boolean;
  title: string;
  children?: ReactNode;
  onSave?: () => void;
  onDelete?: () => void;
}

const Modal: React.FC<ModalProps> = ({
                                       children,
                                       title,
                                       isVisible,
                                       isSavable = true,
                                       isDeletable = true,
                                       onSave,
                                       onDelete}) => {
  return (
    <div className={`modal-container ${isVisible && 'is-visible'}`}>
      <div className={'modal-background-opacity'}></div>
      <div className={'modal'}>
        <div className={'modal-header'}>
          <p>{title}</p>
        </div>
        <div className={'modal-content'}>
          { children }
        </div>
        <div className={'modal-footer'}>
          {
            isDeletable && <a onClick={onDelete} className={'button modal-delete-button'}>Delete</a>
          }
          {
            isSavable && <a onClick={onSave} className={'button'}>Save</a>
          }
        </div>
      </div>
    </div>
  )
}

export default Modal;
