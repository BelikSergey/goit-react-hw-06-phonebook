import PropTypes from "prop-types";
import { CgClose } from "react-icons/cg";
import s from "./ContactsList.module.css";

function ContactListItem({ id, name, number, onRemove }) {
    return (
        <li className={s.Item}>
        <span>{name}</span><span>{number}</span> 
        <button className={s.buttonDelete} onClick={() => onRemove(id)}>
          <CgClose/>
        </button>
      </li>
      
    );
  }
  ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ),
  };


  export default ContactListItem