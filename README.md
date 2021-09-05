# Assignment 3

## _To create an ecommerce api using NodeJS & Express.js_

Create an simple API for scale which can :-

- create new products
- edit existing products
- delete products
- get all products
- get product by id

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17278290-6f4c2514-88d7-44fb-90c3-bdf932c2eb70?action=collection%2Ffork&collection-url=entityId%3D17278290-6f4c2514-88d7-44fb-90c3-bdf932c2eb70%26entityType%3Dcollection%26workspaceId%3D667f9152-ded6-439f-8fb4-4cbf7c3aeb15)

## API Usage

Returns JSON data

_id_ is ObjectId assigned by MongoDB

| Endpoints                  | METHOD | Description                         |
| -------------------------- | ------ | ----------------------------------- |
| /api/v1/product/create     | POST   | creates new product                 |
| /api/v1/product/all        | GET    | fetchs all the products            |
| /api/v1/product/delete/:id | DELETE | deletes the product using **id**    |
| /api/v1/product/get/:id    | GET    | fetchs single product with **id**  |
| /api/v1/product/edit/:id   | PATCH  | edits the product info using **id** |

## Schema

_name_: String (required while creating new product)

_description_: String

_price_: Float (>0)

_quantity_: Number (default = 1) (>=0)

**Example**

```json
{
  "name": "Name of the product",
  "description": "Short paragraph describing your product",
  "price": 30.5,
  "quantity": 300
}
```

## License

MIT

**Subhankar Dev**
