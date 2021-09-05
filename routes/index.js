const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<div><h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Assignment_3_0"></a>Assignment 3</h1>
  <h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="_To_create_an_ecommerce_api_using_NodeJS__Expressjs__1"></a><em>To create an ecommerce api using NodeJS &amp; Express.js</em></h2>
  <p class="has-line-data" data-line-start="3" data-line-end="4">Create an simple API for scale which can :-</p>
  <ul>
  <li class="has-line-data" data-line-start="5" data-line-end="6">create new products</li>
  <li class="has-line-data" data-line-start="6" data-line-end="7">edit existing products</li>
  <li class="has-line-data" data-line-start="7" data-line-end="8">delete products</li>
  <li class="has-line-data" data-line-start="8" data-line-end="10">get all products</li>
  </ul>
  <p class="has-line-data" data-line-start="10" data-line-end="11"><a href="https://app.getpostman.com/run-collection/17278290-6f4c2514-88d7-44fb-90c3-bdf932c2eb70?action=collection%2Ffork&amp;collection-url=entityId%3D17278290-6f4c2514-88d7-44fb-90c3-bdf932c2eb70%26entityType%3Dcollection%26workspaceId%3D667f9152-ded6-439f-8fb4-4cbf7c3aeb15"><img src="https://run.pstmn.io/button.svg" alt="Run in Postman"></a></p>
  <h2 class="code-line" data-line-start=12 data-line-end=13 ><a id="API_Usage_12"></a>API Usage</h2>
  <p class="has-line-data" data-line-start="13" data-line-end="14">Returns JSON data</p>
  <table class="table table-striped table-bordered">
  <thead>
  <tr>
  <th>Endpoints</th>
  <th>METHOD</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>/api/v1/product/create</td>
  <td>POST</td>
  <td>creates new product</td>
  </tr>
  <tr>
  <td>/api/v1/product/all</td>
  <td>GET</td>
  <td>fetches all the products</td>
  </tr>
  <tr>
  <td>/api/v1/product/delete/:id</td>
  <td>DELETE</td>
  <td>deletes the product using  <strong>id</strong></td>
  </tr>
  <tr>
  <td>/api/v1/product/get/:id</td>
  <td>GET</td>
  <td>fetches single product with <strong>id</strong></td>
  </tr>
  <tr>
  <td>/api/v1/product/edit/:id</td>
  <td>PATCH</td>
  <td>edits the product info using <strong>id</strong></td>
  </tr>
  </tbody>
  </table>
  <h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="Schema_24"></a>Schema</h2>
  <p class="has-line-data" data-line-start="26" data-line-end="30"><em>name</em>: String (required)<br>
  <em>description</em>: String<br>
  <em>price</em>: Float (greater than zero)<br>
  <em>quantity</em>: Number (defualt = 1)</p>
  <p class="has-line-data" data-line-start="31" data-line-end="32">Example</p>
  <pre><code class="has-line-data" data-line-start="33" data-line-end="40" class="language-json">{
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Name of the product"</span></span>,
      "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"Short paragraph describing your product"</span></span>,
      "<span class="hljs-attribute">price</span>": <span class="hljs-value"><span class="hljs-number">30.5</span></span>,
      "<span class="hljs-attribute">quantity</span>": <span class="hljs-value"><span class="hljs-number">300</span>
  </span>}
  </code></pre>
  <h2 class="code-line" data-line-start=41 data-line-end=42 ><a id="License_41"></a>License</h2>
  <p class="has-line-data" data-line-start="43" data-line-end="44">MIT</p>
  <p class="has-line-data" data-line-start="45" data-line-end="46"><strong>Subhankar Dev</strong></p></div>`);
});
router.use("/api", require("./api"));

module.exports = router;
