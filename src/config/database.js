require('dotenv').config();

const {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
} = process.env;

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
