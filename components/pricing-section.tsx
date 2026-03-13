"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, Crown, ArrowRight, Trophy } from "lucide-react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function PricingSection() {

  const [timeLeft, setTimeLeft] = useState(15 * 60)
  const [showPopup499, setShowPopup499] = useState(false)
  const [showPopup999, setShowPopup999] = useState(false)

  const [categoria, setCategoria] = useState("todos")

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const handlePurchase = (url: string) => {
    window.open(url, "_blank")
  }

  const basicFeatures = [
    "Anti-Ban e Anti-BlackList",
    "Acesso ao melhor Painel",
    "Acesso ao Discord de suporte",
    "Funciona em iOS e Android",
  ]

  const mediumFeatures = [
    "Anti-Ban e Anti-BlackList",
    "Acesso ao melhor Painel",
    "Acesso ao Discord de suporte",
    "Atendimento prioritário",
    "Funciona em iOS e Android",
  ]

  const premiumFeatures = [
    "Anti-Ban e Anti-BlackList",
    "Acesso ao melhor Painel",
    "Acesso ao Discord de suporte",
    "Atendimento prioritário",
    "Ganhe apostados de Free Fire",
    "Bypass incluído, perfeito pra apostados",
    "Gelo invertido",
    "Skin Freestyle",
    "Funciona em iOS e Android",
  ]

  return (
    <section id="pricing" className="py-20 md:py-32">

      <div className="container mx-auto px-4">

        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-bold uppercase text-primary">
            <Zap className="h-5 w-5" />
            Oferta Especial Termina em {minutes}:{seconds.toString().padStart(2, "0")}
          </div>

          <h2 className="mb-4 text-3xl font-black uppercase md:text-5xl">
            Escolha Seu <span className="text-primary">Plano</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Acesso imediato ao melhor Painel do Free Fire. Full Capa, Full Vermelho, 100% Anti-Ban!
          </p>
        </div>

        {/* BOTÕES DE CATEGORIA */}

        <div className="mb-10 flex justify-center gap-4 flex-wrap">

          <Button
          onClick={()=>setCategoria("todos")}
          variant={categoria === "todos" ? "default" : "outline"}>
          Todos
          </Button>

          <Button
          onClick={()=>setCategoria("7dias")}
          variant={categoria === "7dias" ? "default" : "outline"}>
          7 Dias
          </Button>

          <Button
          onClick={()=>setCategoria("1mes")}
          variant={categoria === "1mes" ? "default" : "outline"}>
          1 Mês
          </Button>

          <Button
          onClick={()=>setCategoria("vitalicio")}
          variant={categoria === "vitalicio" ? "default" : "outline"}>
          Vitalício
          </Button>

        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

          {/* CARD 7 DIAS */}

          {(categoria === "todos" || categoria === "7dias") && (

          <Card className="border-2 border-border">

            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <CardTitle>Nike Cheats</CardTitle>
              </div>

              <CardDescription>Uso por 7 Dias</CardDescription>

              <div className="text-4xl font-bold">R$29,99</div>

            </CardHeader>

            <CardContent>

              <ul className="space-y-2 mb-6">
                {basicFeatures.map((feature, index) => (

                  <li key={index} className="flex items-center gap-2">

                    <Check className="h-4 w-4 text-primary"/>
                    {feature}

                  </li>

                ))}
              </ul>

              <Button
              onClick={()=>setShowPopup499(true)}
              className="w-full">

              Comprar com Desconto
              <ArrowRight className="ml-2 h-4 w-4"/>

              </Button>

            </CardContent>

          </Card>

          )}

          {/* CARD 1 MES */}

          {(categoria === "todos" || categoria === "1mes") && (

          <Card className="border-2 border-border">

            <CardHeader>

              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary"/>
                <CardTitle>Nike Cheats</CardTitle>
              </div>

              <CardDescription>Uso por 1 Mês</CardDescription>

              <div className="text-4xl font-bold">R$69,99</div>

            </CardHeader>

            <CardContent>

              <ul className="space-y-2 mb-6">
                {mediumFeatures.map((feature, index) => (

                  <li key={index} className="flex items-center gap-2">

                    <Check className="h-4 w-4 text-primary"/>
                    {feature}

                  </li>

                ))}
              </ul>

              <Button
              onClick={()=>setShowPopup999(true)}
              className="w-full">

              Comprar com Desconto
              <ArrowRight className="ml-2 h-4 w-4"/>

              </Button>

            </CardContent>

          </Card>

          )}

          {/* CARD VITALICIO */}

          {(categoria === "todos" || categoria === "vitalicio") && (

          <Card className="border-2 border-primary">

            <CardHeader>

              <div className="flex items-center gap-2">
                <Crown className="h-6 w-6 text-primary"/>
                <CardTitle>Nike Cheats</CardTitle>
              </div>

              <CardDescription>Vitalício</CardDescription>

              <div className="text-4xl font-bold">R$99,99</div>

            </CardHeader>

            <CardContent>

              <ul className="space-y-2 mb-6">
                {premiumFeatures.map((feature, index) => (

                  <li key={index} className="flex items-center gap-2">

                    <Check className="h-4 w-4 text-primary"/>
                    {feature}

                  </li>

                ))}
              </ul>

              <Button
              onClick={()=>handlePurchase("https://go.plataformafortpay.com.br/y1gw1ggpqu")}
              className="w-full">

              Comprar com Desconto
              <ArrowRight className="ml-2 h-4 w-4"/>

              </Button>

            </CardContent>

          </Card>

          )}

        </div>

      </div>

    </section>
  )
}