import React from 'react';
import { MDBBtn } from 'mdbreact';

const Home = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h1>I am App Component!!!</h1>
      <MDBBtn
        onClick={() => {
          electron.notificationApi.sendNotification('My custom notification!');
        }}
      >
        Notify
      </MDBBtn>
    </div>
  );
};

export default Home;
