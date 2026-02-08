'use client'
import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";


export function FooterPage() {
    return (
        <footer className="flex items-center justify-center">
            <div className="flex flex-col gap-2 h-60 w-150 items-center justify-center border-amber-300 border-2 rounded-lg p-4">
                <h2 className="text-lg">Informações para contato e redes sociais</h2>

                <p>Telefone: (16) 99363-3824</p>
                <p>Email: [EMAIL_ADDRESS]</p>
                <a href="#">Endereço</a>

                <ul className="flex flex-col ">
                    <li className="flex flex-row">
                        <InstagramLogoIcon className="text-[20px]" />
                        <a className="text-sm" href="https://www.instagram.com/wagnerlimas_personall/">Instagram</a>
                    </li>

                    <li className="flex flex-row">
                        <FacebookLogoIcon className="text-[20px]" />
                        <a className="text-sm" href="">Facebook</a>
                    </li>

                </ul>
            </div>

        </footer>
    );
}