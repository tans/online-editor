import clientPromise from "./db.mjs";
export default async function handler(request, response) {
    let { id, content } = request.body;
    const client = await clientPromise;
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let doc = await collection.findOneAndUpdate(
        { id: id },
        { $set: { content: content } }
    );

    response.json(doc);
}
