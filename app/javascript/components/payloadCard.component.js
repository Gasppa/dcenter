import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`

  margin: auto;
  width: 100%;
  height: 60px;
  max-width: 600px;
  background-color: #e35244;
  color: #fff;
  margin-top: 30px;
  border-radius: 15px;
  -webkit-box-shadow: -8px 11px 23px -7px rgba(0,0,0,0.57);
  -moz-box-shadow: -8px 11px 23px -7px rgba(0,0,0,0.57);
  box-shadow: -8px 11px 23px -7px rgba(0,0,0,0.57);
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  transition: background-color 500ms;

  &:hover{
    background-color: #ed6e61;
  }

`

export default class PayloadCard extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Card>
          Total de Payloads enviados: {this.props.qtdPayload}
        </Card>
      </div>      
    );
  }
}