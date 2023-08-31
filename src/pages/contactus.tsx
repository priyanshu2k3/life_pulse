import { useSession, signIn, signOut } from "next-auth/react";
import { stringify } from "querystring";
import { useEffect, useState } from "react";

export default function ContactUs(){
    const session=useSession()
    const [Email,setEmail]=useState<string>(session?.data?.user?.email ||'')
    const [Name,setName]=useState<string>(session?.data?.user?.name ||'')
    const [Subject,setSubject]=useState("")
    const [Message,setmessage]=useState("")
    console.log(session.data?.user,"contactus")

    useEffect(() => {
        setEmail(session?.data?.user?.email ||'')
        setName(session?.data?.user?.name ||'')

      }, []);
    // useEffect((setEmail(session?.data?.user?.email)),[])
    
    return(
    <div className="text-black container mx-auto p-4">
        <h1 className="text-3xl text-blue-600 font-semibold mb-8">Contact Us</h1>
        <form className="bg-white p-6 shadow-md rounded-lg">
            <div className="mb-4">
                <label  className="block text-gray-700 font-semibold mb-2">Name</label>
                <input value={Name} type="text" id="name" name="name" className="w-full border rounded-md p-2 " disabled/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input  value={Email} type="email" id="email" name="email" className="w-full border rounded-md p-2 " disabled/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input onChange={(e)=>{setSubject(e.target.value)}} value={Subject} id="subject" name="message" className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"/>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full">Submit</button>
        </form>
    </div>
    )
}}