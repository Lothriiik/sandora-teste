import type { Metadata } from "next"
import CadastroForm from "@/components/CadastroForm"
import DesktopLogo from "@/components/DesktopLogo"
import MobileLogo from "@/components/MobileLogo"

export const metadata: Metadata = {
  title: "Cadastro | Sandora",
  description: "Crie sua conta e comece a aprender",
}

export default function CadastroPage() {
  return (
    <>
      {/* desktop */}
      <div className="hidden min-h-screen w-full md:flex">
        <div className="flex w-full flex-col p-10 md:w-[45%]">
          <div className="mb-16 ml-6">
            <DesktopLogo />
          </div>
          <div className="flex flex-1 flex-col justify-center mb-34 ml-6">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-grayText tracking-tight">
                Crie sua conta e comece a 
                <span className="text-primaryPurple"> aprender</span>
              </h1>
              <p className="mt-3 text-lg text-grayText font-medium max-w-95 leading-none">
                <span className="text-primaryPurple">Crie sua conta em poucos segundos </span>
                 e comece sua jornada de aprendizado.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden w-[55%] md:block bg-primaryPurple">
          <div className="flex h-full items-center justify-center">
            <CadastroForm />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex min-h-screen flex-col bg-primaryPurple md:hidden">
        <div className="flex flex-col h-screen">
          <div className="p-8 flex flex-col bg-primaryPurple min-h-[43%] ">
            <div className="mt-2">
              <MobileLogo />
            </div>
            <div className="text-white mt-4">
              <h1 className="text-3xl font-bold mt-10">
                Crie sua conta e comece a{" "}
                <span className="text-primaryPurple bg-white pl-1 pr-1 pb-[2px] rounded">aprender</span>
              </h1>
              <p className="text-white mt-4 text-base">
                <span className="text-primaryPurple bg-white pl-1 pr-1 pb-[2px] pt-[2px] rounded ">Crie sua conta em poucos segundos</span> 
                {" "}e comece sua jornada de aprendizado.
              </p>
            </div>
          </div>
          <div className="rounded-t-3xl bg-white p-6">
            <h2 className="mb-6 text-center text-2xl font-semibold">Cadastro</h2>
            <CadastroForm isMobile={true} />
          </div>
        </div>
      </div>
    </>
  )
}
