import React from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './LogoPhoneBook.module.css'

export default function LogoPhoneBook() {
    return (
        <CSSTransition classNames={s}
        in={true} 
        appear={true}
        timeout={500}>
        <h1
        className={s.Logo}>Phonebook</h1>
        </CSSTransition>
    )
}
