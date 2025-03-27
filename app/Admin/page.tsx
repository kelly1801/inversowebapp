import GuestForm from "@/components/forms/GuestForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex md:h-screen md:max-h-screen justify-between">
      <section className="w-full h-full">
        <div className="h-screen flex flex-col justify-between p-10">
          <Image src={"/logos/logo-inverted.png"} width={100} height={100} alt="inverso logo" className="self-center md:self-start" />
          <GuestForm />
          <div className="flex justify-between w-full">
            <p className="justify-items-end text-xs">© 2025 inverso</p>
            <Link href="/?admin=true" className="text-green-10 text-xs hover:text-green-600">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="images/hero.svg"
        height={1000}
        width={1000}
        alt="people talking"
        className="max-w-[50%] h-screen hidden md:inline"
      />
    </div>
  );
}
