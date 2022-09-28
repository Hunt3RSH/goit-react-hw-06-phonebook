import { StyledContainer } from 'components/ContactForm/ContactForm.styled';
import ContactItem from 'components/ContactItem/ContactItem';
import Filter from 'components/Filter/Filter';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import {
  ContactsItem,
  ContactsListBody,
  ListContainer,
  TableName,
  Title,
} from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section>
      <Filter />
      <StyledContainer>
        <ListContainer>
          {!contactsFiltered.length ? (
            <Title>not found</Title>
          ) : (
            <>
              <Title>My Contacts</Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>
                      <TableName>№</TableName>
                    </th>
                    <th>
                      <TableName>Avatar</TableName>
                    </th>
                    <th>
                      <TableName>Name</TableName>
                    </th>
                    <th>
                      <TableName>Number</TableName>
                    </th>
                    <th>
                      <TableName>Option</TableName>
                    </th>
                  </tr>
                </thead>
                <ContactsListBody>
                  {contactsFiltered.map(({ id, name, number }, index) => (
                    <ContactsItem key={id}>
                      <ContactItem
                        id={id}
                        name={name}
                        number={number}
                        index={index}
                      />
                    </ContactsItem>
                  ))}
                </ContactsListBody>
              </Table>
            </>
          )}
        </ListContainer>
      </StyledContainer>
    </section>
  );
}
