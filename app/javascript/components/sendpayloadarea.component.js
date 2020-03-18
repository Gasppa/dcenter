import React, { Component } from 'react'

import styled from 'styled-components'

const Section = styled.div`

  background-color: #d74234;
  color: #fff;
  padding: 0 0 0 10%;

`

const SendPayloadBtn = styled.button`

  color: #fff;
  border-radius: 25px;
  border-color: black;
  font-weight: bold;

  &:hover{
    background: #fff;
    color: black
  }

`

const payloadMongo = {
  "externalCode": "9987071",
  "storeId": 282,
  "subTotal": 49.90,
  "deliveryFee": 5.14,
  "total": 55.04,
  "country": "BR",
  "state": "SP",
  "city": "Cidade de Testes",
  "district": "Bairro Fake",
  "street": "Rua de Testes Fake",
  "customerName": "JOHN DOE",
  "customerCode": "136226073",
  "paymentType": "CREDIT_CARD",
}



export default class SendPayloadArea extends Component {

  constructor(props){
    super(props)
  }

  

  OnSP(){
    this.props.OnSendPayload(payloadMongo)
  }

  render() {
    return (
      <Section className="home-section--1">
        <div className="row mr-0">

          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 pb-4 mt-4 text-center">
              <h1>My Rails application</h1>
              <p>Não repara a bagunça</p>
            </div>
          </div>

          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-5 text-center">
              <SendPayloadBtn className="btn" onClick={()=> this.OnSP()} >Enviar Payload</SendPayloadBtn>
            </div>
          </div>

        </div>
      </Section>
    );
  }
}