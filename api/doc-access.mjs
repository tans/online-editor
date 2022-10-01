import clientPromise from "./db.mjs";
import crypto from "crypto";

let Sign = async (text) => {
    const encoder = new TextEncoder();
    const data = encoder.encode("1234");
    let hash = await crypto.subtle.digest("SHA-512", data);
    return Buffer.from(hash).toString("base64");
};

export default async function handler(request, response) {
    let { title, password } = request.body;

    if (!title) {
        throw new Error("title required");
    }

    if (!password) {
        throw new Error("password required");
    }

    const client = await clientPromise;
    const db = client.db("online-editor");
    const collection = db.collection("documents");

    let sign = await Sign(title + password);
    let doc = await collection.findOneAndUpdate({ sign: sign });

    response.json(doc);
}
