import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { GlobalStyles } from 'utils/GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactForm />} />
          <Route path="contacts" element={<ContactList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
