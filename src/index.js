import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MessageBoardApp from 'MessageBoardApp'
import JavascriptIPFSStorage from 'storage/JavascriptIPFSStorage';
import RemoteIPFSStorage from 'storage/RemoteIPFSStorage';
import MemoryContract from 'contracts/MemoryContract';
import MessageBoardView from 'components/MessageBoardView';
import registerServiceWorker from './registerServiceWorker';

let menloStorage = new RemoteIPFSStorage();
let localStorage = new JavascriptIPFSStorage();
localStorage.connectPeer(menloStorage);
let contract = new MemoryContract();
let view = ReactDOM.render(<MessageBoardView />, document.getElementById('root'));
let app = new MessageBoardApp({view: view, localStorage: localStorage, menloStorage: menloStorage, contract: contract});

app.viewMessages();
window.app = app;

registerServiceWorker();
