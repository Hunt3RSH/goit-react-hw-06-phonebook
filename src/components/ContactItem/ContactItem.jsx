import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/slice';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { TableName } from 'components/ContactList/ContactList.styled';

export default function ContactItem({ id, name, number, index }) {
  const dispatch = useDispatch();

  return (
    <>
      <td>
        <TableName> {index + 1}</TableName>
      </td>
      <td>
        <TableName>
          <Avatar name={name} round={true} size={40} />
        </TableName>
      </td>
      <td>
        <TableName> {name}</TableName>
      </td>
      <td>
        <TableName>{number}</TableName>
      </td>
      <td>
        <TableName>
          <Button type="submit" onClick={() => dispatch(removeContacts(id))}>
            Delete
          </Button>
        </TableName>
      </td>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
