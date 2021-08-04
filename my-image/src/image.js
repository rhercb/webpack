import Heading from './components/heading/heading';
import MyImage from './components/my-image/my-image';

const heading = new Heading();
heading.render('my image');

// const image = new MyImage();
// image.render();

// dynamic import for async load appname/component
import('HelloWorldApp/HelloWorldButton').then((HelloWorldButtonModule) => {
  const HelloWorldButton = HelloWorldButtonModule.default;
  const helloWorldButton = new HelloWorldButton();
  helloWorldButton.render();
});
