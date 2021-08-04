import Heading from '../heading/heading';
import MyImage from '../my-image/my-image';

class MyImagePage {
  render() {
    const heading = new Heading();
    heading.render('my image');

    // const image = new MyImage();
    // image.render();
  }
}

export default MyImagePage;
