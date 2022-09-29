import { MongoClient, ObjectId } from "mongodb";
export default async function handler(request, response) {
    let { id, content } = request.body;
    let client = await new MongoClient(process.env.MONGODB_URI);
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let doc = await collection.findOneAndUpdate(
        { id: id },
        { $set: { content: content } }
    );

    // Todo back version
    client.close();
    response.json(doc);
}
