import { clerkClient } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";
const api_key = process.env.NEXT_PUBLIC_API_KEY;
const api_secret = process.env.NEXT_PUBLIC_SECRET_KEY;
// const user_id = "user_2zGuQOgvUNtJ26X7J4rK3Rl4KYe";



export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()
    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED", token)
    const client = await clerkClient()
    await serverClient.upsertUser({ id: user.data.id })
    const response = await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token,
        }
    })
    //give access
    const slugs = [
        "py",
        "js",
        "react",
        "ml",
        "ds",
        "devops"
    ]
    slugs.forEach(async (item) => {
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: item + " Discussion",
            created_by_id: user.data.id,
        });
        await channel.create()
        channel.addMembers([user.data.id])
    })
    return Response.json({ message: 'Hello World' })
}