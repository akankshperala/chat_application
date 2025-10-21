
import ChatForum from '@/components/ChatForum';
import { Chat, useCreateChatClient } from 'stream-chat-react';
import { currentUser } from '@clerk/nextjs/server'

export default async function Page({ params }) {
  const user = await currentUser()
  const { slug } = await params

  return <ChatForum slug={slug} clerkUser={{id:user.id,name:user.firstName,token:user.publicMetadata.token}}/>;
}