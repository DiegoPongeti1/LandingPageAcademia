
import Image from "next/image";

export function HeaderPage() {

    return (
        <header className="flex items-center justify-center top-0 z-50 w-full h-50 bg-gray-400 border-b border-zinc-800 ">
            <div className="relative w-[180px] h-[70px]">
                <Image
                    src="/Logo.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    priority
                    className="object-contain h-20"
                />
                <p className='text-center font-extrabold text-3xl text-gray-600 tracking-tight'>

                </p>
            </div>
        </header>
    );
}