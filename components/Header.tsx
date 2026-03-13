
import Image from "next/image";

export function HeaderPage() {

    return (
        <header className="w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
                <div className="flex items-center gap-3">
                <Image
                    src="/Logo.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    priority
                    className="h-10 w-10 object-contain"
                />
                    <div className="leading-tight">
                        <p className="text-sm font-semibold tracking-wide text-white">Wagner Lima</p>
                        <p className="text-xs text-white/60">Personal Trainer</p>
                    </div>
                </div>

                <a
                    href="https://www.instagram.com/wagnerlimas_personall/"
                    className="rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200"
                >
                    Falar no Instagram
                </a>
            </div>
        </header>
    );
}