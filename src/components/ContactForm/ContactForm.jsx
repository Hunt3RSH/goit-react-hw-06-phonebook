import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Button, Form } from 'react-bootstrap';
import {
  StyledContainer,
  StyledForm,
  StyledGroup,
  StyledLabel,
} from './ContactForm.styled';
import { addContacts } from 'redux/contacts/slice';
import { getContacts } from 'redux/contacts/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from 'components/ContactList/ContactList.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleFormSubmit = e => {
    e.preventDefault();

    const contactName = contacts.map(el => el.name.toLowerCase());
    if (contactName.includes(name.toLowerCase())) {
      toast.warn(`@${name} is already in contacts`);
      return;
    }
    toast.success(`Сontact @${name} has been successfully added 💖`);
    dispatch(
      addContacts({
        id: nanoid(),
        name: name,
        number: number,
      })
    );

    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <section>
      <StyledContainer>
        <ToastContainer />
        <StyledForm onSubmit={handleFormSubmit}>
          <Title>Add new Contacts</Title>
          <StyledGroup>
            <StyledLabel>
              Name
              <Form.Control
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleInputChange}
                required
                placeholder="Enter name"
              />
            </StyledLabel>
          </StyledGroup>
          <StyledGroup>
            <StyledLabel>
              Number
              <Form.Control
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={handleInputChange}
                required
                placeholder="Enter number"
              />
            </StyledLabel>
          </StyledGroup>

          <Button type="submit">Add contact</Button>
        </StyledForm>
      </StyledContainer>
    </section>
  );
};

export default ContactForm;
