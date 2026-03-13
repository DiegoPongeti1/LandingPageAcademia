'use client'
import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";


export function FooterPage() {
    return (
        <footer className="mt-auto border-t border-white/10 bg-zinc-950">
            <div className="mx-auto w-full max-w-5xl px-6 py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-white">Contato</p>
                        <p className="text-sm text-white/70">Telefone: (16) 99363-3824</p>
                        <p className="text-sm text-white/70">Email: contato@exemplo.com</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-white">Endereço</p>
                        <a
                            href="https://maps.app.goo.gl/SmLdD8HPrkFFAb2Y6"
                            className="text-sm text-white/70 underline-offset-4 hover:underline"
                        >
                            R. Luís Antônio Giora, 2, Restinga - SP, 14430-000
                        </a>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-white">Redes sociais</p>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a
                                    className="inline-flex items-center gap-2 text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                                    href="https://www.instagram.com/wagnerlimas_personall/"
                                >
                                    <InstagramLogoIcon className="text-[20px]" />
                                    Instagram
                                </a>
                            </li>

                            <li>
                                <a
                                    className="inline-flex items-center gap-2 text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                                    href="#"
                                >
                                    <FacebookLogoIcon className="text-[20px]" />
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Wagner Lima</p>
                    <p>Personal Trainer • Restinga/SP</p>
                </div>
            </div>
        </footer>
    );
}