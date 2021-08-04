import NavigationBar from './components/navigation-bar/navigation-bar.js';

const navigationItems = [
  {
    url: '/hello-world-page',
    title: 'Hello World Page',
  },
  {
    url: '/my-image-page',
    title: 'My Image Page',
  },
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if (url == '/hello-world-page') {
  import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === '/my-image-page') {
  import('MyImageApp/MyImagePage').then((MyImagePageModule) => {
    const MyImagePage = MyImagePageModule.default;
    const myImagePage = new MyImagePage();
    myImagePage.render();
  });
}

console.log('dashboard');
