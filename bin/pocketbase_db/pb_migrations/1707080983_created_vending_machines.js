/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1y24bk4kdbre9c3",
    "created": "2024-02-04 21:09:43.879Z",
    "updated": "2024-02-04 21:09:43.879Z",
    "name": "vending_machines",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dxbuobld",
        "name": "location",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rgngkopq",
        "name": "capacity",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 999999,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "aunbedin",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Operational",
            "Out of Order",
            "Low Stock",
            "Maintenance Mode"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1y24bk4kdbre9c3");

  return dao.deleteCollection(collection);
})
