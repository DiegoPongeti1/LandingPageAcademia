
import Image from "next/image";

export function HeaderPage() {

    return (
        <header className="sticky top-0 z-50 w-full h-24 bg-neutral-950 border-b border-zinc-800 flex items-center justify-center">
            <div className="relative w-[180px] h-[70px]">
                <Image
                    src="/Logo.png"
                    alt="Logo"
                    width={150}
                    height={150}
                    priority
                    className="object-contain"
                />
            </div>
        </header>
    );
}