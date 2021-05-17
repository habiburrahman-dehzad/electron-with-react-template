import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { MDBContainer } from 'mdbreact';
import TestComponent from './TestComponent';
import Home from './Home';
import ReadFile from './ReadFile';
import MusicPlayer from './MusicPlayer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MDBContainer>
        <Route path='/' exact component={Home} />
        <Route path='/test' component={TestComponent} />
        <Route path='/file' component={ReadFile} />
        <Route path='/play' component={MusicPlayer} />
      </MDBContainer>
    </BrowserRouter>
  );
}
