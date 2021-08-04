import HelloWorldButton from '../hello-world-button/hello-world-button';
import Heading from '../heading/heading';

class HelloWorldPage {
  render() {
    const heading = new Heading();
    heading.render('hello world');

    const helloWorld = new HelloWorldButton();
    helloWorld.render();
  }
}

export default HelloWorldPage;
