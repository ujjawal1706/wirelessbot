//jshint esversion6

const express = require('express');
const app = express();

const axios = require('axios');
const { response } = require('express');

const getData=document.getElementsByClassName('btn');
const upBtn= document.getElementsByClassName('up');
const downBtn= document.getElementsByClassName('down');
const leftBtn= document.getElementsByClassName('left');
const rightBtn= document.getElementsByClassName('right');


const getData = () =>{
    axios.get('https://arduinoiotbot.herokuapp.com/').then(response=>{
        console.log(response);
    });
};

const sendupData=()=>{
    axios.post('https://arduinoiotbot.herokuapp.com/modify?move=w').then(response=>{
        console.log(response);
    });
};
const sendDownData=()=>{
    axios.post('https://arduinoiotbot.herokuapp.com/modify?move=s').then(response=>{
        console.log(response);
    });
};
const sendLeftData=()=>{
    axios.post('https://arduinoiotbot.herokuapp.com/modify?move=a').then(response=>{
        console.log(response);
    });
};
const sendRightData=()=>{
    axios.post('https://arduinoiotbot.herokuapp.com/modify?move=d').then(response=>{
        console.log(response);
    });
};
getData.addEventListener('click',getData);
upBtn.addEventListener('click',sendupData);
downBtn.addEventListener('click',sendDownData);
leftBtn.addEventListener('click',sendLeftData);
rightBtn.addEventListener('click',sendRightData);