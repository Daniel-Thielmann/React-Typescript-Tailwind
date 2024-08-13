/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a29nx2g22g743h3",
    "created": "2024-01-14 23:42:15.328Z",
    "updated": "2024-01-14 23:42:15.328Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gbyxanzy",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a29nx2g22g743h3");

  return dao.deleteCollection(collection);
})
