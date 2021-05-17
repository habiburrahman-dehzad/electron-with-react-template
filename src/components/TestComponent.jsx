import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
} from 'mdbreact';
import { connect } from 'react-redux';
import {
  incrementTestNum,
  decrementTestNum,
} from '../store/actions/testActions';

const TestComponent = ({ incrementTestNum, decrementTestNum, testNum }) => {
  return (
    <MDBRow style={{ marginTop: '20px' }}>
      <MDBCol style={{ maxWidth: '22rem' }}>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>{testNum}</MDBCardText>
            <MDBBtn href='#' onClick={() => incrementTestNum(2)}>
              Increment
            </MDBBtn>
            <MDBBtn href='#' onClick={() => decrementTestNum(1)}>
              Decrement
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

const mapStateToProps = (state) => ({
  testNum: state.test.testNum,
});

const mapDispatchToProps = {
  incrementTestNum,
  decrementTestNum,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
