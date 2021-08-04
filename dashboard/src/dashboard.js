const url = window.location.pathname;

if (url == '/hello-world-page') {
  import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === '/my-image') {
  import('MyImageApp/MyImagePage').then((MyImagePageModule) => {
    const MyImagePage = MyImagePageModule.default;
    const myImagePage = new MyImagePage();
    myImagePage.render();
  });
}

console.log('dashboard');
