import PropTypes from "prop-types";
import {connect}  from 'react-redux';
import ContactsActions from '../../redux/contacts/contacts-actions'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from "./ContactsList.module.css";
import ContactListItem from './ContactListItem'


function  ContactsList({ contacts, onRemove}) {
  if (contacts.length === 0) return null;
  // console.log(contacts);
  return (
      <div >
      <TransitionGroup component="ul" className={s.UlList}>
      {/* <h3>Contacts</h3> */}
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={s}>
          <ContactListItem  {...contact} onRemove={onRemove}/>
          </CSSTransition>
      ))}
    </TransitionGroup>
      </div> 
    
  );
}

ContactsList.propTypes = {
  onRemove: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
const filterContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
const mapStateToProps = ({contacts:{items, filter}}) => ({
  contacts: filterContacts(items, filter),
})

// {
//   const { items, filter } = state;
//   const visibleList = filterContacts(items, filter )

//   return {contacts: visibleList}
 
// }

const mapDispatchToProps = dispatch => ({
  onRemove: (id)=> dispatch(ContactsActions.removeItem(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
