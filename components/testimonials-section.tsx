import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    name: "Isabella R.",
    location: "São Paulo, SP",
    rating: 5,
    image: "/muie.jpg",
    text: "gente esse PAINEL DA NIKE CHEATS e perfeito msm to usando faz 1 mês e só capa só vermelho meu namorado fica ate com ciumes da minha mira agora kkkk 💗",
  },
  {
    name: "Gustavo F.",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    image: "/homem.jpg",
    text: "comprei ontem o XIT VIA WI-FI ja ganhei 5 apostado seguido no 4x4 o XIT WI-FI e só capa memo td bala vai na cabeça, Indico Comprarem o BYPASS TAMBÉM Analista Passa MALL KKKKKKKKKKKKKKKKKK",
  },
  {
    name: "Luan A.",
    location: "Florianópolis, SC",
    rating: 5,
    image: "/maisgostosodetodos.jpg",
    text: "mano esse BYPASS ta muito foda, fico 30 minutos de analise e analista acha nada KKKKKKKKKKKKKKKKK ",
  },
  {
    name: "Vitor G.",
    location: "Curitiba, PR",
    rating: 5,
    image: "/hatake.jpg",
    text: "uso esse PAINEL NA GUERRA DE GUILDA faço kill pra caralho e não tomo ban e nem black-list atualmente estou na nothuman",
  },
  {
    name: "Matheus L.",
    location: "Brasília, DF",
    rating: 5,
    image: "/testimonials/profile-5.png",
    text: "esse PAINEL EMULADOR e muito zika PULO COM O BONECO GIRANDO NOS CARA ELES NÃO ENTENDEM NADA kkkkkkkkkkkkk",
  },
  {
    name: "Luiza O.",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    image: "/muie2.jpg",
    text: "aff vey juro a melhor coisa que eu fiz foi comprar o PAINEL VITALICIO o jogo nem atualiza eles ja MANDAM O PAINEL ATUALIZADO podem comprar sem medo o único que é confiavel",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Veja o Que Nossos <span className="text-primary">Jogadores Dizem</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Mais de 5.000 jogadores já transformaram seu desempenho no Free Fire
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border bg-background transition-all hover:border-primary hover:glow-red"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
