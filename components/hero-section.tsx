"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Zap } from "lucide-react"

export function HeroSection() {
  // Função para rolar suavemente até a seção de produtos
  const scrollToProduct = () => {
    const section = document.getElementById("produtos")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card py-20 md:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          
          {/* LOGO */}
          <div className="mb-8 flex items-center justify-center">
            <Image 
              src="/nike1.png" 
              alt="Nike Cheats Logo" 
              width={180} 
              height={180} 
              className="drop-shadow-2xl" 
            />
          </div>

          {/* BADGE SUPERIOR */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Zap className="h-4 w-4" />
            <span>NIKE CHEATS - +5.000 JOGADORES DOMINANDO</span>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <h1 className="mb-6 max-w-4xl text-balance text-4xl font-black uppercase leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            O Melhor Painel do <span className="text-primary">Free Fire</span> - Full Vermelho, Full Capa!
          </h1>

          {/* SUBTÍTULO */}
          <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Painel só capa para <strong className="text-foreground">Android, iOS e Emulador</strong> - Acerte{" "}
            <strong className="text-primary">100% das capas</strong> e domine o Free Fire
          </p>

          {/* BOTÕES DE AÇÃO */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={scrollToProduct}
              className="group bg-primary text-lg font-bold uppercase hover:bg-primary/90 transition-all active:scale-95"
            >
              Quero Dar Mais Capa Agora
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProduct}
              className="border-primary text-lg font-bold uppercase text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all active:scale-95"
            >
              Ver Planos
            </Button>
          </div>

          {/* CARDS DE STATUS / BENEFÍCIOS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            <div className="flex items-center justify-center gap-3 rounded-lg bg-card p-4 border border-white/5">
              <Target className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Acerto</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 rounded-lg bg-card p-4 border border-white/5">
              <Zap className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">5.000+</div>
                <div className="text-sm text-muted-foreground">Jogadores Ativos</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 rounded-lg bg-card p-4 border border-white/5">
              <Target className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Ativo</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}