import mongoose from "mongoose";

const DIRECT_FALLBACK_URI =
  "mongodb://ankit9471737_db_user:76F0TzhyspGY1Uur@ac-8wktveu-shard-00-00.u3bnnyn.mongodb.net:27017,ac-8wktveu-shard-00-01.u3bnnyn.mongodb.net:27017,ac-8wktveu-shard-00-02.u3bnnyn.mongodb.net:27017/portfolio?ssl=true&replicaSet=atlas-123a4a-shard-0&authSource=admin&retryWrites=true&w=majority";

const MONGODB_URI = process.env.MONGODB_URI || DIRECT_FALLBACK_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn && cached.conn.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 12000,
      socketTimeoutMS: 45000,
    };

    // Attempt connection with configured URI; if SRV lookup fails, fallback to direct replica set URI
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .catch(async (err) => {
        if (
          err.message?.includes("querySrv") ||
          err.message?.includes("ECONNREFUSED") ||
          MONGODB_URI.startsWith("mongodb+srv://")
        ) {
          console.warn("⚠️ SRV resolution failed. Falling back to direct replica set connection...");
          return mongoose.connect(DIRECT_FALLBACK_URI, opts);
        }
        throw err;
      })
      .then((mongooseInstance) => {
        console.log("✅ MongoDB Atlas Connected:", mongooseInstance.connection.name);
        return mongooseInstance;
      })
      .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        cached.promise = null;
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
