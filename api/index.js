const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.port || 3001;

// Syncing all the models at once.
<<<<<<< HEAD
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log(`Server is listening at port ${process.env.PORT || 3001}`); // eslint-disable-line no-console
=======
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server is listening at port ${port}`); // eslint-disable-line no-console
>>>>>>> dev
  });
});
