"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl } from "@/components/ui/form"
import CustomFormField, { FormFieldType } from "../ui/customFormField"
import { UserFormValidation } from "@/lib/validation"
import SubmitButton from "../ui/submitButton"
import { createGuest } from "@/lib/actions/guests.actions"
import { Guest } from "@/types/appwrite.types";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";
import { GenderOptions, IdentificationTypes } from "@/lib/constants/constants";
import { FileUploader } from "../FileUploader";



const RegisterForm = ({ user }: { user: Guest }) => {
    const router = useRouter();
    const [isLoading, setisLoading] = useState(false)

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            fullname: "",
            email: "",

        },
    })

    const onSubmit = async ({ fullname, email }: z.infer<typeof UserFormValidation>) => {
        setisLoading(true);

        try {
            const userData = { fullname, email }

            const guest = await createGuest(userData)

            if (guest) router.push(`/guests/${guest.$id}/register`)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 px-12 h-full">
                <section className="flex flex-col gap-2.5 self-center mb-8">
                    <h1 className="text-center">welcome  </h1>
                    <p className="text-center">let us know more about yourself</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-center text-green-10">Personal Information  </h2>
                </section>

                <section className="flex flex-col gap-2 my-3.5">
                    <CustomFormField control={form.control} fieldType={FormFieldType.INPUT} name="fullname" placeholder="eg. Marian Rose" />
                    <CustomFormField control={form.control} fieldType={FormFieldType.INPUT} name="email" placeholder="eg. inverso@gmail.com" />

                    <section className="flex space-between gap-2 p-1.5 items-center justify-center my-3.5">
                       
                    
                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="identificationType"
                        label="Identification Type"
                        placeholder="Select identification type"
                    >
                        {IdentificationTypes.map((type, i) => (
                            <SelectItem key={type + i} value={type}>
                                {type}
                            </SelectItem>
                        ))}
                    </CustomFormField>

                    <CustomFormField
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        name="gender"
                        label="Gender"
                        renderSkeleton={(field) => (
                            <FormControl>
                                <RadioGroup
                                    className="flex h-11 gap-6 xl:justify-between"
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    {GenderOptions.map((option, i) => (
                                        <div key={option + i} className="radio-group">
                                            <RadioGroupItem value={option} id={option} />
                                            <Label htmlFor={option} className="cursor-pointer">
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                    </section>
                    <section className="flex space-between gap-2 p-1.5 items-center justify-center">
                        <CustomFormField control={form.control} fieldType={FormFieldType.DATE_PICKER} name="birthday" />
                        <CustomFormField control={form.control} fieldType={FormFieldType.PHONE_INPUT} name="phone" placeholder="eg. 555 222 333" />
                    </section>
                    <CustomFormField
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        name="identificationDocument"
                        label="Scanned Copy of Identification Document"
                        renderSkeleton={(field) => (
                            <FormControl>
                                <FileUploader files={field.value} onChange={field.onChange} />
                            </FormControl>
                        )}
                    />        
                   

                    <CustomFormField control={form.control} fieldType={FormFieldType.CHECKBOX} name="privacyConsent" />
                </section>


                <SubmitButton className="bg-green-600 hover:bg-green-700" isLoading={isLoading}>Submit</SubmitButton>
            </form>
        </Form>)
}

export default RegisterForm