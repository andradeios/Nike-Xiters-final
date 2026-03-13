"use client"

import { useRef, useState } from "react"
import { Play } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como Comprar Algum Produto",
    type: "video",
  },
  {
    question: "Como funciona o Painel Nike Cheats?",
    answer:
      "O Painel Nike Cheats Funciona da Seguinte forma, ele contém AIMBOT, FOV, ESP, SPEED, NORECOIL, AIMKILL, AIMSILENT, STREAM MOD e BYPASS Que Analista Passa Mal. ",
  },
  {
    question: "É seguro? Vou ser banido?",
    answer:
      "Totalmente seguro! Milhares de jogadores usam nossos Produtos sem nenhum risco de Ban ou Black-List.",
  },
  {
    question: "Funciona para Todos os Dispositivos?",
    answer:
      "Sim! Funciona em qualquer Dispositivo Android, iOS ou PC, desde os mais simples até os tops de linha.",
  },
  {
    question: "Como Funciona o Bypass?",
    answer:
      "O Bypass para iOS, Android e PC são totalmente diferente, o Bypass para PC e uma DMA VIRTUAL Pelo seu Celular. O Bypass iOS e Android Funciona da Seguinte Forma ele e um App External, Não Precisa de Apps externos para tá instalando.",
  },
  {
    question: "Tem Reembolso?",
    answer:
      "Oferecemos Garantia de 7 dias. Se você não gosta do produto, devolvemos 100% do seu dinheiro.",
  },
  {
    question: "Como recebo o acesso?",
    answer:
      "Imediatamente após o pagamento, você recebe o acesso por Email. Em poucos minutos você já com o Produto na mão com tutoriais e suporte 24h.",
  },
]

export function FaqSection() {

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section id="faq" className="bg-card py-24">

      <div className="container mx-auto px-4">

        {/* TITULO */}

        <div className="mb-16 text-center">

          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight md:text-5xl">

            <span className="text-white animate-pulse">
              Perguntas
            </span>{" "}

            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Frequentes
            </span>

          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tire suas dúvidas antes de começar
          </p>

        </div>

        {/* FAQ */}

        <div className="mx-auto max-w-3xl">

          <Accordion
            type="single"
            collapsible
            className="border border-white/10 rounded-xl overflow-hidden"
          >

            {faqs.map((faq, index) => (

              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 last:border-none"
              >

                <AccordionTrigger
                  className={`px-6 py-5 text-left text-lg font-bold transition-colors
                  ${
                    faq.question === "Como Comprar Algum Produto"
                      ? "text-purple-400"
                      : "text-white hover:text-purple-400"
                  }`}
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">

                  {faq.type === "video" ? (

                    <div className="w-full max-w-[720px] mx-auto">

                      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10">

                        <video
                          ref={videoRef}
                          className="w-full h-full object-contain"
                          playsInline
                          onClick={togglePlay}
                        >
                          <source src="/videos/vsl.mp4" type="video/mp4" />
                        </video>

                        {!isPlaying && (

                          <div
                            onClick={togglePlay}
                            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer hover:bg-black/20 transition"
                          >

                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">

                              <Play className="w-6 h-6 text-white fill-white ml-0.5" />

                            </div>

                          </div>

                        )}

                      </div>

                    </div>

                  ) : (

                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>

                  )}

                </AccordionContent>

              </AccordionItem>

            ))}

          </Accordion>

        </div>

      </div>

    </section>
  )
}