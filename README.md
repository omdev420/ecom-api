# Assignment 3

## _To create an ecommerce api using NodeJS & Express.js_

Create an simple API for scale which can :-

- create new products
- edit existing products
- delete products
- get all products

## API Usage

Returns JSON data

| Endpoints                  | METHOD | Description                         |
| -------------------------- | ------ | ----------------------------------- |
| /api/v1/product/create     | POST   | creates new product                 |
| /api/v1/product/all        | GET    | fetches all the products            |
| /api/v1/product/delete/:id | DELETE | deletes the product using **id**    |
| /api/v1/product/get/:id    | GET    | fetches single product with **id**  |
| /api/v1/product/edit/:id   | PATCH  | edits the product info using **id** |

## Schema

_name_: String (required)
_description_: String
_price_: Float (greater than zero)
_quantity_: Number (defualt = 1)

Example

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
