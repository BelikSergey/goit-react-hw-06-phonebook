import React, { Component } from "react";
import {connect}  from 'react-redux';
import ContactsActions from '../../redux/contacts/contacts-actions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
// import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log('есть сабмит формы');
    const{name,number}= this.state;
    const isValidForm = this.validateForm(name, number);
    if (isValidForm) {
      // console.log('форма прошла валидацию и отправила item');
      this.props.onSubmit({ id: nanoid(), name, number });
    } else return;
    this.reset();
  };
  handleUniceContact = (name) => {
      // const { contacts } = this.state;
      const isContactThere = this.props.contacts.find((contact) => contact.name === name);
      if (isContactThere) {
        toast.error('Contact is exist', {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
          // draggable: false,
          position: "top-right",
      })
        return;
      }
      return !isContactThere;
    };
  validateForm = (name, number) => {
    if (!name || !number) {
      toast.warn('Empty fields!!! Please fill',{
        autoClose:2000,
        hideProgressBar: true,
        pauseOnHover: false,
        position: "top-center",
      });
      return false;
    }
    return this.handleUniceContact(name);
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmitForm}>
        <p>Name</p>
        <input className={s.FormInput}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleInputChange}
        />

        <p>Number</p>
        <input className={s.FormInput}
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="345-67-89"
          value={number}
          onChange={this.handleInputChange}
        />
        <button className={s.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = ({contacts:{items}}) => ({
  contacts: items,
})


const mapDispatchToProps = dispatch =>({
  onSubmit: (item)=> dispatch(ContactsActions.addItems(item))
})

 export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)