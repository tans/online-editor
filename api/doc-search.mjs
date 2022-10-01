import clientPromise from "./db.mjs";
export default async function handler(request, response) {
    let { keyword } = request.query;
    const client = await clientPromise;
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let docs = await collection.find({ title: new RegExp(keyword) }).limit(10);
    response.json(docs);
}
