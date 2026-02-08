'use cliente'

import Image from "next/image";

export function BodyPage() {
    return (

        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-10 bg-neutral-950 gap-10">
            <div className="border border-white rounded-lg p-4">
                <div className="max-w-2xl flex flex-col items-center gap-6 text-center">

                    <h1 className="text-[#D1FF00] text-4xl font-bold uppercase tracking-tighter">Sobre mim</h1>

                    <div className="space-y-4">
                        <p className="text-white text-xl leading-relaxed">
                            Olá, sou <span className="text-[#D1FF00] font-bold">Wagner Lima</span>, Personal Trainer com experiência em ajudar pessoas a alcançarem seus objetivos de saúde e bem-estar. Com uma abordagem personalizada e baseada em evidências, ofereço treinos adaptados às necessidades individuais,
                            visando sempre a segurança e o progresso dos meus alunos.
                        </p>

                        <p className="text-gray-400 text-base border border-amber-300 rounded-lg p-4">
                            Meu compromisso é fornecer um serviço de excelência, com acompanhamento dedicado e orientação profissional para que você atinja seus objetivos de forma saudável e sustentável.
                        </p>
                    </div>
                </div>
            </div>


            <div>
                <Image
                    src="/wagnerfoto.jpg"
                    alt="Logo"
                    width={150}
                    height={150}
                    priority
                    className="object-contain "
                />
            </div>

        </section>
    );
}