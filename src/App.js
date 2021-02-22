import { Component } from "react";
import {connect}  from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import LogoPhoneBook from './components/LogoPhoneBook';
import Container from './UI/Container/Container';







class App extends Component {
  // state = {
  //   // contacts :{
  //   //   items:[],
  //   //   filter:'',
  //   // },
  //   // contacts: [
  //   //   // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   //   // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   //   // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   //   // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   // ],
  //   // filter: "",
  // };

  

  // handleSubmitForm = (newContact) => {
  //   this.setState(({ contacts }) => ({
  //     contacts: [...contacts, newContact],
  //   }));
  // };

  // handleUniceContact = (name) => {
  //   const { contacts } = this.state;
  //   const isContactThere = contacts.find((contact) => contact.name === name);
  //   if (isContactThere) {
  //     toast.error('Contact is exist', {
  //       autoClose: 2200,
  //       hideProgressBar: true,
  //       pauseOnHover: false,
  //       // draggable: false,
  //       position: "top-right",
  //   })
  //     // alert("Contact is exist");
  //     return;
  //   }
  //   //  else {
  //   //     alert('Add contact')
  //   // }
  //   return !isContactThere;
  // };
  // handleRemoveContact = (id) =>
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter((contact) => contact.id !== id),
  //   }));

  // handleFilterSearch = (filter) => this.setState({ filter });

  // filterContacts = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  render() {
    // console.log(contacts);
    // const { filter, contacts } = this.state;
    // const filteredContacts = this.filterContacts();
    return (
      <>
        <Container>
          <LogoPhoneBook/>
        <ContactForm
          // onSubmit={this.handleSubmitForm}
          // onChekunike={this.handleUniceContact}
        />
          </Container>
          <Container>
          <CSSTransition in={this.props.contacts.length > 1} 
          timeout={250} 
          classNames={styles}
          unmountOnExit>
             <div className={styles.SearchForm}>
             <p>Find contacts by name</p>
             <Filter/>
             </div>
         </CSSTransition>
        <ContactsList />
        </Container>
         <ToastContainer position="top-left" autoClose={2000} />
      </>
    );
  }
}

const mapStateToProps = ({contacts:{items}}) => ({
  contacts: items,
})


export default connect(mapStateToProps, null)(App);
