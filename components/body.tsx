import Image from "next/image";

export function BodyPage() {
    return (

        <main className="flex-1">
            <section className="mx-auto w-full max-w-5xl px-6 py-12">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="space-y-5">
                        <p className="text-sm font-semibold tracking-wide text-white/60">Treinamento personalizado</p>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                            Evolua com um plano feito para você.
                        </h1>
                        <p className="text-base leading-relaxed text-white/70">
                            Olá, sou <span className="font-semibold text-lime-300">Wagner Lima</span>, Personal Trainer. Eu
                            te ajudo a alcançar resultados com treinos objetivos, acompanhamento e consistência.
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <a
                                href="https://www.instagram.com/wagnerlimas_personall/"
                                className="inline-flex items-center justify-center rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200"
                            >
                                Agendar avaliação
                            </a>
                            <a
                                href="https://maps.app.goo.gl/SmLdD8HPrkFFAb2Y6"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30"
                            >
                                Ver localização
                            </a>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                            <Image
                                src="/wagnerfoto.jpg"
                                alt="Wagner Lima"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-5xl px-6 pb-14">
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-base font-semibold text-white">Treinos sob medida</h2>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                            Plano individual conforme seu objetivo, rotina e nível atual.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-base font-semibold text-white">Acompanhamento</h2>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                            Ajustes frequentes, orientação e suporte pra manter o ritmo.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-base font-semibold text-white">Resultado com segurança</h2>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                            Evolução sustentável com foco em técnica, progresso e consistência.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}