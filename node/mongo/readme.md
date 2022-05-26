to use the mongo shell, the mongo deamon should be running in the background

mongo shell can be used for administration purpose

Docs references: 
- https://www.mongodb.com/docs/v4.0/crud/
- 


To show databases,
$show databases or 
$show dbs

databases can be created dynamically, for instance a database can be created on spot when we want to use ot even if it was not created proirily:
$ use DBSName
This command is also used for switching between DBS 


NOTE: but if no record is inserted in the dbs created that way, the dbs is going to be simply dropped

To see which DBS is in current use:
$db

Mongo BSON (Binary JSON) similar in format to JSON:
- Mongo is limited in its accepted datatypes
- A major advantage of BSON is that it takes less space in memory, accepts a wider range of datatypes and is more compact than JSON
-  A drawback is that data are not directly readable by humans(machine only, because for instance, BSON accepts Raw Binary datatype)


Operations in dbs:
Mongo id based on Document model (a model example of NoSql) as compaered to Rrecord in tables (in SQL based DBS),
flexible with constraints

Instead of tables, mongo uses collections:
- Collections are also created on spot, even without prior existence
- to list all existing collections in the dbs: $ show collections
  
NOTE: a query can be empty, i.e. {}
in query, accessing nested field can be achieved just by object or Json syntax: parentField.childField.

INSERTION:
- to insert a single record in a collection, the function or method "insertOne" can be used:
        Syntax: db.CollectionName.insertOne(record) record= { /* body of the records*/}
        Ex: db.dogs.insertOne({name: "Charlie", age: 3, breed: "corgi"})
- To insert many records at a single time, many way are there,
        - By .insertMany( Array of record)
        - By .insert( array, document or array of documents ) // Simpler method for insertion in general and document here is simply a record 


Read or Retrieve:
- To show all the records in collections, $db.collectionName.find() //with no query passed, returns a cursor
- To retrieve records based on some criteria (same as a Selection in SQL),
        $db.collectionName.find(query ( using document syntax, key-value pair))
        Ex: db.dogs.find( { name: "wyatt" })
- To retieve 1 record matching the query, .findOne(query) can be used


UPDATE:
in Updating operation ( commands), different operators for different purposes can be used, such as "$set", $currentDate,
the set operator is used to set or update different listed fields of record matching the query,

- To update the first record matching a specific query, updateOne can be used, 
        Syntax: .insertOne(query, operator)
        Ex: operator as '$set'
        the syntax of the set operator is: $set: {fieldName: fieldValue, ....}

        $db.dogs.updatedOne({name: "charlie}, { $set: {age: 5}})

- To update records matching the query, .updateMany() can be used
- .replaceOne() can be used to completely replace a record



Operators:
There are many categories of operators such update operators, query & projection operators, aggregation etc...
A single operator to be used is preceeded by the "$" symbol



DELETION:
deletion functions can be used to delete records matching query
- To delete a single match, .deleteOne() can be used
- To delete multiple matches, .deleteMany() can be used, an Empty query will delete the entire records in the collection
