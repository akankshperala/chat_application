import Image from 'next/image';
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const topics = [
  {
    text: "Python",
    img: "/python.png",
    desc: "Let's discuss everything related to Python",
    slug:"py"
  },
  {
    text: "JavaScript",
    img: "/js.png",
    desc: "Explore the world of JavaScript, from frontend to backend",
    slug:"js"
  },
  {
    text: "React",
    img: "/react.png",
    desc: "Talk about building UIs with React and its ecosystem",
    slug:"react"
  },
  {
    text: "Machine Learning",
    img: "/ml.png",
    desc: "Share insights and questions about Machine Learning",
    slug:"ml"
  },
  {
    text: "Data Structures",
    img: "/ds.png",
    desc: "Discuss algorithms, DSA problems, and coding patterns",
    slug:"ds"
  },
  {
    text: "DevOps",
    img: "/devops.png",
    desc: "Conversations about CI/CD, Docker, Kubernetes, and more",
    slug:"devops"
  }
];

const Forums = () => {
  return (
    <div className='container mx-auto my-28'>
      <h1 className='text-4xl text-center font-bold'>Discussion Forums</h1>
      <div className='flex flex-wrap justify-center'>
        {topics.map((topic,index)=>{
            return <div key={index} className='rounded-lg shadow-lg bg-blue-200 w-1/4 m-4 flex py-10 px-4 flex-col items-center '>
                <Image className='rounded-full m-5' width={34} height={34} src={topic.img} alt='img'></Image>
                <h2 className='text-xl'>{topic.text}</h2>
                <p>{topic.desc}</p>
                <Link href={`/forum/${topic.slug}`} >
                <Button className=''>Discuss now</Button></Link>
                </div>
        })}
      </div>
    </div>
  )
}

export default Forums
