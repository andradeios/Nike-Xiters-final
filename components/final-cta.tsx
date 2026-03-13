"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Crown } from "lucide-react"

export function FinalCta() {

  const scrollToPricing = () => {
    const section = document.getElementById("produtos")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-card py-20 md:py-32">

      <div className="container relative z-10 mx-auto px-4">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="mb-6 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Pare de <span className="text-primary animate-textGlow">Perder Tempo</span> e Comece a Dominar Hoje!
          </h2>

          <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Enquanto você está lendo isso, <strong className="text-foreground">centenas de jogadores</strong> estão
            melhorando com nossos Produtos. Não fique para Trás!
          </p>

          {/* BOTÃO */}
          <div className="mb-12 flex flex-col items-center gap-6">

            <Button
              size="lg"
              onClick={scrollToPricing}
              className="
              group relative overflow-hidden
              px-10 py-6 text-xl font-black uppercase text-white rounded-2xl
              bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700
              bg-[length:200%_200%]
              shadow-[0_0_30px_rgba(168,85,247,0.6)]
              transition-all duration-300
              hover:scale-110 hover:shadow-[0_0_70px_rgba(168,85,247,0.95)]
              active:scale-95
              animate-gradientMove
              "
            >

              {/* brilho passando */}
              <span className="pointer-events-none absolute inset-0">
                <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shineMove"></span>
              </span>

              <span className="relative flex items-center">
                Garanta seu Produto
                <ArrowRight className="ml-3 h-6 w-6 transition-all duration-300 group-hover:translate-x-3 group-hover:scale-125" />
              </span>

            </Button>


            {/* BENEFÍCIOS */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">

              <div className="flex items-center gap-2 animate-floatIcon hover:scale-110 transition">
                <Shield className="h-5 w-5 text-primary animate-glowIcon" />
                <span className="animate-fadeText">Pagamento Seguro</span>
              </div>

              <div className="flex items-center gap-2 animate-floatIcon hover:scale-110 transition">
                <Zap className="h-5 w-5 text-primary animate-glowIcon" />
                <span className="animate-fadeText">Acesso Imediato</span>
              </div>

              <div className="flex items-center gap-2 animate-floatIcon hover:scale-110 transition">
                <Crown className="h-5 w-5 text-primary animate-glowIcon" />
                <span className="animate-fadeText">Garantia de 7 Dias</span>
              </div>

            </div>

          </div>


          {/* AVISO */}
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 animate-alertPulse hover:scale-[1.02] transition">

            <p className="text-balance text-lg font-bold text-foreground animate-warningText">
              ⚠️ ATENÇÃO: O preço promocional pode acabar a qualquer momento. Garanta seu acesso agora antes que o valor aumente!
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}