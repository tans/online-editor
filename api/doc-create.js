const { MongoClient } = require("mongodb");

export default async function handler(request, response) {
    let client = await new MongoClient(process.env.MONGODB_URI);
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let doc = await collection.insertOne({ content: "123" });
    client.close();
    console.log(doc);
    response.json(doc);
}
