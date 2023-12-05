import { NextApiRequest, NextApiResponse } from 'next';
import {db} from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Your database query logic here
    const data = await db.delivery.findMany();

    // Set headers to disable caching
    res.setHeader('Cache-Control', 'no-store');

    // Return the data as JSON
    res.json(data);
}