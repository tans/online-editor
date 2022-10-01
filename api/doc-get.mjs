import clientPromise from "./db.mjs";

import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890", 6);
export default async function handler(request, response) {
    let { id } = request.query;
    const client = await clientPromise;
    const db = client.db("online-editor");
    const collection = db.collection("documents");
    let doc = await collection.findOne({ id });

    if (!doc) {
        throw new Error("no doc");
    }

    let today = new Date().toDateString();
    doc.code = await db.collection("document_codes").findOne({
        id: doc.id,
        today: today,
    });

    if (!doc.code) {
        doc.code = {
            id: doc.id,
            today: today,
            no: nanoid(),
        };
        await db.collection("document_codes").insert(doc.code);
    }
    response.json(doc);
}
