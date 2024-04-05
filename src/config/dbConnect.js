import mongoose from "mongoose";

async function conectaBancoDados() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectaBancoDados;
