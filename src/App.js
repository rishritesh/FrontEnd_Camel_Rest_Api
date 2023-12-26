
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import Addform from './component/Addform';
import Allcourses from './component/Allcourses';

import Header from './component/Header'
import Home from './component/Home';
import Menu from './component/Menu';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Updateform from './component/Updateform';
import { About } from './component/About';

function App() {
  return (
    <div >
      <Router>
      <Header />
      <Container>
        <Row>
          <Col md={4}>
            <Menu/>
          </Col>
          <Col md={8}>
            <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/add-form' element={<Addform/>} exact></Route>
            <Route path='/all-courses' element={<Allcourses/>} exact></Route>
            <Route path='/about' element={<About/>} exact></Route>
            <Route path='/update/:id' element={<Updateform/>} exact></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
