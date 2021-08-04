import './my-image.scss';
import Image from './ricards.jpg';

class MyImage {
  render() {
    const img = document.createElement('img');
    img.src = Image;
    img.alt = 'Image';
    img.classList.add('my-image');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default MyImage;
