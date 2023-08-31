import { useSession, signIn, signOut } from "next-auth/react";



export default function Login() {
  const session=useSession();
  

  if(session.data===null || session.data===undefined){
    return(
      <button onClick={()=>{signIn()}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>SignUp/SignIn</button>
      )}
  console.log(session.data.user)
  return (
    <button onClick={()=>{signOut()}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>SignOut</button>
  )
}
