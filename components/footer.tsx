'use client'
import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";


export function FooterPage() {
    return (
        <footer className="flex items-center justify-center mb-10 bg-gray-400">
            <div className="flex flex-col gap-2 h-60 w-150 items-center justify-center border-amber-300 bg-gray-300 border-2 rounded-lg p-4">
                <h2 className="text-lg text-black font-extrabold">Informações para contato e redes sociais</h2>

                <p className="text-sm text-black">Telefone: (16) 99363-3824</p>
                <p className="text-sm text-black">Email: [EMAIL_ADDRESS]</p>
                <a href="#" className="text-black">Endereço</a>

                <ul className="flex flex-col gap-2 mg-2 text-black">
                    <li className="flex flex-row">
                        <InstagramLogoIcon className="text-[20px]" />
                        <a className="text-sm" href="https://www.instagram.com/wagnerlimas_personall/">Instagram</a>
                    </li>

                    <li className="flex ">
                        <FacebookLogoIcon className="text-[20px]" />
                        <a className="text-sm" href="">Facebook</a>
                    </li>

                </ul>
            </div>

        </footer>
    );
}