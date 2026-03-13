"use client"

import { Check, Target, Zap, Shield, TrendingUp, Users, Award } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Joga Sem Ser Detectado",
    description: "Nike Cheats trás os melhores Bypass para todos os dispositivos, que nenhum analista encontrara, 100% Bypass",
  },
  {
    icon: Zap,
    title: "Tempo de Resposta Real",
    description: "Latência zero. Domine qualquer trocação com uma fluidez que seu adversário nem verá chegar.",
  },
  {
    icon: Shield,
    title: "Proteção Anti-Ban e Anti-Blacklist",
    description: "Sistema inteligente com bypass seguro, mantendo sua conta protegida em todas as atualizações.",
  },
  {
    icon: TrendingUp,
    title: "Suba de Patente Rápido",
    description: "Otimizado para o meta atual: sinta sua performance elevar ao nível mestre em tempo recorde.",
  },
  {
    icon: Users,
    title: "Grupo VIP",
    description: "Acesso total à nossa comunidade privada no Whatsapp com os segredos dos players da Nike Cheats.",
  },
  {
    icon: Award,
    title: "Tecnologia Sempre Atual",
    description: "Se o Free Fire atualiza, nosso painel evolui primeiro. Você nunca ficará desatualizado.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Por Que Você Está <span className="text-primary">Perdendo Partidas?</span>
          </h2>
          {/* Parágrafo corrigido: evite elementos de bloco dentro de p */}
          <div className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A diferença entre um jogador Esperto e um BURRO que passa raiva. Comece a usar os{' '}
            <strong className="text-foreground">Produtos da Nike Cheats</strong>. 
            <span className="block mt-4 text-2xl md:text-3xl font-black italic text-primary animate-pulse tracking-wide">Quem não xita não brilha!</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon; // Extrair para uma variável antes de usar no JSX
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
                <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}