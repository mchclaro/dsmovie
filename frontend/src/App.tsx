import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import NavBar from "components/NavBar";
import TermsOfUser from "components/TermsOfUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form"> 
        <Route path=":movieId" element={<Form />} />
        </Route>
        <Route path="/termsofuse" element={<TermsOfUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
