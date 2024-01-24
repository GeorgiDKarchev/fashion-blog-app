import {Container,  Title} from "./styled";
import React from "react"
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
     <Container>
       <Header/>
       <Nav/>
       <Article/>
       <Footer/>
      </Container>
  );
}

export default App;

