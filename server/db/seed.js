const pool = require("./connection");

const seed = async () => {
  await pool.query("DELETE FROM services");

  await pool.query(`
    INSERT INTO services (name, description, duration_minutes, price) VALUES
    ('Herrklippning', 'Klassisk herrklippning', 30, 350),
    ('Damklippning', 'Klippning och styling', 60, 550),
    ('Skaggtrimning', 'Trimning och formning av skagg', 20, 250),
    ('Barnklippning', 'Klippning for barn under 12 ar', 20, 250)
  `);

  console.log("Data inlagd!");
  process.exit();
};

seed();
