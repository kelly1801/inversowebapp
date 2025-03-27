import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from '@/components/forms/RegisterForm'
import { SearchParamProps } from '@/types'
import { getUser } from '@/lib/actions/guests.actions'


const Register = async ({params: {userId}}: SearchParamProps) => {

  const user = await getUser(userId)
  return (
    <div className="flex md:h-screen md:max-h-screen justify-between overflow-y-scroll">
      <section className="w-full h-full px-72">
        <div className="h-screen flex flex-col justify-between p-10">
          <Image src={"/logos/logo-inverted.png"} width={100} height={100} alt="inverso logo" className="self-center md:self-start" />
         
          <RegisterForm user={user} /> 
        
        </div>
      </section>
     

    </div>
  )
}

export default Register