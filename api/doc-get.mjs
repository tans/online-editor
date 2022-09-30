import clientPromise from "./db.mjs";
export default async function handler(request, response) {
    let { id } = request.query;
    const client = await clientPromise;
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let doc = await collection.findOne({ id });
    response.json(doc);
}
