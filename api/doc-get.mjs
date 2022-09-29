import { MongoClient, ObjectId } from "mongodb";
import { nanoid } from "nanoid";
export default async function handler(request, response) {
    let { id } = request.query;
    let client = await new MongoClient(process.env.MONGODB_URI);
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let doc = await collection.findOne({ id });
    client.close();
    response.json(doc);
}
