"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomFormField, { FormFieldType } from "../ui/customFormField"
import { UserFormValidation } from "@/lib/validation"
import SubmitButton from "../ui/submitButton"
import { createGuest } from "@/lib/actions/guests.actions"

const RegistrationForm = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false)

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      fullname: "",
      email: "",
    },
  })

  const onSubmit = async ({fullname, email}: z.infer<typeof UserFormValidation>) => {
    setisLoading(true);

    try {
      const userData = {fullname, email}

      const guest = await createGuest(userData)

      if (guest) router.push(`/guest/${guest.$id}/register`)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 p-12 h-full">
        <section className="flex flex-col gap-2.5 self-start mb-8">
          <h1 className="text-center">Hey there, welcome to the <span className="text-green-10">cooliving</span></h1>
          <p className="text-center">book your stay</p>
        </section>
      <CustomFormField control={form.control} fieldType={FormFieldType.INPUT} name="fullname" label="Full Name"  placeholder="eg. Marian Rose"/>
      <CustomFormField control={form.control} fieldType={FormFieldType.INPUT} name="email" label="Email" placeholder="eg. inverso@gmail.com"/>

<SubmitButton className="bg-green-600 hover:bg-green-700" isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>)
}

export default RegistrationForm