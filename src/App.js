import logo from './logo.svg';
import './App.css';
import Master from './Layout/Master';
import Auth from './Auth';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import RecordBook from './Pages/AddressBook/AddressBook';
import Transports from './Pages/Transports/Transports';
import AddNewTransport from './Pages/Transports/NewForm/index';
import ViewDetails from './Pages/Transports/ViewDetails';
import EditForm from './Pages/Transports/EditForm/EditForm';
function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Auth />} />
        <Route path="/dashboard" element={<Master />}>
          <Route path='' element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='record-book' element={<RecordBook />} />
          <Route path='transports' element={<Transports />} />
          <Route path='transports/add-new-transport' element={<AddNewTransport />} />
          <Route path='transports/view-details/:documentID' element={<ViewDetails />} />
          <Route path='transports/edit-document/:documentID' element={<EditForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
