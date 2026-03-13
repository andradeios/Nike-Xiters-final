"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, ArrowRight, Target, Zap, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const scrollToProduct = () => {
    const section = document.getElementById("produtos")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFaq = () => {
  const element = document.getElementById("faq")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause()
      else videoRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="bg-[#000000] py-20 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-12">
        ASSISTA A <span className="text-primary"> DEMONSTRAÇÃO</span>
      </h2>

      {/* PLAYER VSL */}
      <div className="mx-auto relative group w-full max-w-[300px] mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-auto object-contain"
            playsInline
            onClick={togglePlay}
          >
            <source src="/videos/nike.mp4" type="video/mp4" />
          </video>
          {!isPlaying && (
            <div onClick={togglePlay} className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-all hover:bg-black/20">
              <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-transform">
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CONTAINER PRINCIPAL */}
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row justify-center items-center">
          <Button size="lg" onClick={scrollToProduct} className="bg-primary text-lg font-bold uppercase hover:bg-primary/90 transition-all active:scale-95 px-10">
            ADQUIRA AGORA <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
size="lg"
variant="outline"
onClick={scrollToFaq}
className="border-primary text-lg font-bold uppercase text-primary hover:bg-primary hover:text-white bg-transparent transition-all active:scale-95 px-8"
>
  COMO COMPRAR
</Button>
        </div>

        <div className="mb-12 flex justify-center items-center">
          <Image src="/nike1.png" alt="Nike Logo" width={200} height={200} className="object-contain" priority />
        </div>

        <h1 className="mb-12 text-balance text-3xl font-black uppercase leading-none tracking-tighter md:text-5xl lg:text-6xl">
          Produtos <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">Nike Cheats!</span>
        </h1>

        {/* CARDS COM ANIMAÇÃO DE FLUTUAÇÃO (FLOAT) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {/* Card 1 */}
          <div className="flex items-center justify-center gap-3 rounded-lg bg-card p-4 border border-white/5 transition-all duration-300 hover:scale-105 hover:border-primary animate-pulse">
            <Target className="h-8 w-8 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Taxa de Acerto</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex items-center justify-center gap-3 rounded-lg bg-card p-4 border border-white/5 transition-all duration-300 hover:scale-105 hover:border-primary animate-pulse [animation-delay:-0.5s]">
            <Zap className="h-8 w-8 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">6.000+</div>
              <div className="text-sm text-muted-foreground">Jogadores Ativos</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex items-center justify-center gap-3 rounded-lg bg-card p-4 border border-white/5 transition-all duration-300 hover:scale-105 hover:border-primary animate-pulse [animation-delay:-1s]">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte Ativo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}