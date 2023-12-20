import Database from "better-sqlite3"; //Nos da la habilidad de crear la base de datros

const db = new Database("database.db"); //El new significa que estamos creando un nuevo objeto
//con muuuuchas cosas dentro y Database es una key predefinida por js que siempre es el mismo nombre.
//y db is an object that represents our database file, with methods to run queries against the data inside it.

db.exec(`
  CREATE TABLE messages (
    name TEXT,
    content TEXT
  )
`);
//The exec method on the database object allows us to run any SQL query against the database.