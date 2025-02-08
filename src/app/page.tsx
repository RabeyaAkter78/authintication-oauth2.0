import Image from "next/image";
// import { useAuth0 } from "@auth0/auth0-react";
export default function Home() {
  // const { loginWithRedirect } = useAuth0();
  return (
    <main>
      <div className='flex justify-center my-52'>
        <button  className='px-4 py-2 rounded-xl bg-green-500 text-white text-center'>Login with Auth2.0</button>
      </div>
    </main>
  );
}
