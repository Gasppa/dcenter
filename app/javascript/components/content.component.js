import React, { Component } from 'react';
import Navbar from './navbar.component'
import SendPayloadArea from './sendpayloadarea.component'
import PayloadCard from './payloadCard.component'


export default class Content extends Component {

  constructor(props){
    super(props)
    
    this.sendPayload = this.sendPayload.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:3000/payloads.json')
      .then(res => res.json())
      .then(data => {

        this.setState({qtdPayload : data.length}, ()=>{
          console.log(this.state.qtdPayload)
        })
      })
      .catch(err => alert ('Ocorreu um erro, por favor tente novamente. Error: ' + err)) 
  }

  state = {
    qtdPayload : 0
  }

  sendPayload(payloadMongo){

    fetch('http://localhost:3000/payloads', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(payloadMongo)
    })
    .then(res => {
      if(res.status == 201 || res.status == 200){
        console.log('Registro inserido com sucesso')
      }
    })
    .catch(err => alert ('Ocorreu um erro, por favor tente novamente. Error: ' + err))

    fetch('http://localhost:3000/payloads.json')
      .then(res => res.json())
      .then(data => {

        console.log(data.length)

        this.setState({qtdPayload : data.length}, ()=>{
          console.log(this.state.qtdPayload)
        })
      })
      .catch(err => alert ('Ocorreu um erro, por favor tente novamente. Error: ' + err))    
  }

  render() {
    return (
      <main>
        <SendPayloadArea OnSendPayload = {this.sendPayload}/>

        <PayloadCard qtdPayload={this.state.qtdPayload}/>

      </main>
    );
  }
}