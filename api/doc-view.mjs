import clientPromise from "./db.mjs";

export default async function handler(request, response) {
    let { vid } = request.query;
    const client = await clientPromise;
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let doc = await collection.findOne({ vid });

    if (!doc) {
        throw new Error("no doc");
    }
    response.json({ content: doc.content });
}
