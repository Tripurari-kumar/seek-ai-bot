import { connect, disconnect } from 'mongoose';

async function connectToDataBase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (err) {
    console.log(err);
    throw new Error('connot connect to mongo db');
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (err) {
    console.log(err);
    throw new Error('connot Disconnect to mongo db');
  }
}

export { connectToDataBase, disconnectFromDatabase };
