const http = require("http");
const port = 3000;

const homePage = `  
<h1>Home Page</h1>
<p>Welcome to our site!</p>`;

const aboutPage = `  
<h1>About Page</h1>
<p>Contact us: +359 88 123 123</p>`;

const notFoundPage = `
<h1>Ops!</h1>
<p>We can't find the page you are looking for :(</p>
`;
//Use dictionary for the routing. When creating new page we are adding it just here.
const routes = {
  "/": homePage,
  "/about": aboutPage,
};

const server = http.createServer((request, responce) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  const page = routes[url.pathname];
  if (page != undefined) {
    responce.write(html(page));
    responce.end();
  } else {
    responce.write(html(notFoundPage));
    responce.end();
  }
});
server.listen(port);

function html(view) {
  return ` 
  <!DOCTYPE html>
    <html lang="en">
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      ${view}
    </body>
  </html>
  `;
}
