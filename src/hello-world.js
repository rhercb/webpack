import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';
import React from 'react';

const heading = new Heading();
heading.render('hello world');

const helloWorld = new HelloWorldButton();
helloWorld.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Prod');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Dev');
}
