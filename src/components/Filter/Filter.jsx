import styles from '../../App.module.css'
import {connect}  from 'react-redux';
import ContactsActions from '../../redux/contacts/contacts-actions'


const Filter = ({ filter, onChange }) => {
  // console.log('click');
  return (
       <input className={styles.FormInput}
      type="text"
      name="filter"
      value={filter}
      placeholder="Search by contacts"
      onChange={onChange}
    />
  );
};
const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
  onChange:(event)=> dispatch(ContactsActions.filterItems(event.target.value))
})



export default connect(mapStateToProps, mapDispatchToProps)(Filter);

