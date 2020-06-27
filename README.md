

# Simple Plotly.js Tutorial

This tutorial covers the very basics of using plotly.js for producing plots. In order to run the HTML locally, you will need a local HTTP server. I recommend using the one that comes with python 3.7 and above, http.server.

You will need to navigate to the folder containing the tutorial. The command-line command for running this HTTP server on your local machine is:

python-m http.server

Once started with the above command, you will need to open a browser to http://www.0.0.0.0:8000/test.html. The second part of the tutorial makes some changes. amd test.html becomes test2.html, and test.js becomes test2.js. Also, the link in test2.html is changed to link to test2.js. So, the link to the second part of the tutorial is http://www.0.0.0.0:8000/test2.html when you run the local HTTP server.

In addition to linking to the test.js javascript file, the HTML file links to the minified CDN of plotly.js on the plotly.org website. This will be enough to display a basic graph.
