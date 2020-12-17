To start run 
`npm start`

Go to http://localhost:3000

The port is configured in the server.js file. 
It is currently set to `const port = 3000`

I included the dist folder, but it can be built by running `npm run build`

## Future updates, changes, or outstanding code you would like to add or would recommend be added.

Key on server instead of in file.

There is a delay after pressing the button when the request is sent. An animation would be make it feel less delayed.

Getting the count on load would also count, but it be good to show how many people are joining if its a big number. Would change that so it doesn't change the data.

Needs routing so it could have a page about how to get more information or join via form.

Would compile sass to css file. Main js needs more optimzation. 

I'm using express and webpack, but I could of and perhaps would of used Webpack Dev Server.

I would also compress and resize the image.

## Assumptions, changes, or details of the implementation that materially impact the addition of future features.

Assumes you don't need the browser to open to localhost automatically.

Assumes port is not in use.

It has no way of knowing if you hit the button already. 

To access the count you get counted again.

Has no routing currently new pages can't be added.

Assumes you want to use sass and express