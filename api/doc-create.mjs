import { MongoClient } from "mongodb";
import { nanoid } from "nanoid";
export default async function handler(request, response) {
    let client = await new MongoClient(process.env.MONGODB_URI);
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let model = {};
    model.id = nanoid();
    model.vid = nanoid();
    model.createTime = new Date();
    let inserted = await collection.insertOne(model);
    let newModel = await collection.findOne(inserted.insertedId);
    client.close();
    response.json(newModel);
}
