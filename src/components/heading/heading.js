import './heading.scss';

class Heading {
  render(pageName) {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'Webpack is awesome. This ' + pageName + ' page';
    body.appendChild(h1);
    pageName;
  }
}

export default Heading;
