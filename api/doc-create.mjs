import clientPromise from "./db.mjs";

import { nanoid } from "nanoid";

export default async function handler(request, response) {
    const client = await clientPromise;
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let model = {};
    model.id = nanoid();
    model.vid = nanoid();
    model.createTime = new Date();
    let inserted = await collection.insertOne(model);
    let newModel = await collection.findOne(inserted.insertedId);
    response.json(newModel);
}
