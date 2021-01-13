import './styles.scss';
import React from 'react';
import { render } from 'react-dom';
import data from './App.jsx';
import moment from 'moment';

const rootElement = document.createElement('div');
const itemsList = data.items.map((item,index) => 
<li key={index.toString()}>
  <p>id:{item.id}</p>
  <p>name:{item.name}</p>
  <p>description:{item.description}</p>
  <p>created:{moment(item.createdAt).fromNow()}</p>
  <p>updated:{moment(item.updatedAt).fromNow()}</p>
</li> 
)
const myEl = (
<ul>
  {itemsList}  
</ul>
)

document.body.appendChild(rootElement);

render(myEl,rootElement);
