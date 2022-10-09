import clientPromise from "./db.mjs";

export default async function handler(request, response) {
    let { vid } = request.query;
    const client = await clientPromise;
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let cnt = await collection.count();
    response.json({ cnt: cnt });
}
