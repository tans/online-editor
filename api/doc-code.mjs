import clientPromise from "./db.mjs";
export default async function handler(request, response) {
    let { no } = request.query;
    const client = await clientPromise;
    const db = client.db("online-editor");
    const collection = db.collection("document_codes");

    let code = await collection.findOne({ no: no });
    response.json(code);
}
