require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DATABASE
} = process.env;
// postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames

const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Buyer, Category, Product, Order, Variant } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Category.hasMany(Product);
Product.belongsTo(Category);

Buyer.hasMany(Order);
Order.belongsTo(Buyer);

Product.belongsToMany(Variant, { through: 'Product_Variant'});
Variant.belongsToMany(Product, { through: 'Product_Variant'});

Product.belongsToMany(Order, { through: 'Product_Order' });
Order.belongsToMany(Product, { through: 'Product_Order' });


// EN CASO DE VOLVER AL MULTITIENDA DESCOMENTAR LAS RELACIONES DE ABAJO

// const { Buyer, Seller, Product, Order, Store, Admin } = sequelize.models;

// Seller.hasOne(Store);
// Store.belongsTo(Seller);

// Store.hasMany(Product);
// Product.belongsTo(Store);

// Seller.hasMany(Product);
// Product.belongsTo(Seller);

// Admin.hasOne(Seller);
// Seller.belongsTo(Admin);

// Admin.hasOne(Buyer);
// Buyer.belongsTo(Admin);

// Seller.hasMany(Order);
// Order.belongsTo(Seller);

// Buyer.hasMany(Order);
// Order.belongsTo(Buyer);

// Order.belongsToMany(Product, { through: 'Order_Product'});
// Product.belongsToMany(Order, { through: 'Order_Product'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};