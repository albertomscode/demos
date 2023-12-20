import Database from "better-sqlite3";

const db = new Database("database.db");

const updateStatement = db.prepare(
    `UPDATE INTO messages (name, message) VALUES (?, ?)`
  );
  
  updateStatement.run("Javi", "Hello Cadiz");
  updateStatement.run("Selena", "Best mummy");

  //Esta parte no he sabido hacerla, no mirar nada.