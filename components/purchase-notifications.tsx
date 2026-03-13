"use client"

import { useEffect, useState } from "react"
import { ShoppingCart } from "lucide-react"

const notifications = [
  { name: "Hatake.", location: "São Paulo - SP", plan: "Permanente" },
  { name: "GtBlack.", location: "Rio de Janeiro - RJ", plan: "30 Dias" },
  { name: "White444.", location: "Curitiba - PR", plan: "Permanente" },
  { name: "Luanz7.", location: "Belo Horizonte - MG", plan: "3 Meses" },
  { name: "Ricardo T.", location: "Porto Alegre - RS", plan: "Permanente" },
  { name: "Bruno A.", location: "Fortaleza - CE", plan: "30 Dias" },
  { name: "Daniel K.", location: "Brasília - DF", plan: "Permanente" },
  { name: "Guilherme F.", location: "Salvador - BA", plan: "3 Meses" },
  { name: "Rafael D.", location: "Recife - PE", plan: "Permanente" },
  { name: "Marcelo V.", location: "Goiânia - GO", plan: "Permanente" },
]

const times = [
  "há 1 minuto",
  "há 2 minutos",
  "há 4 minutos",
  "há 6 minutos",
  "há 8 minutos",
]

export function PurchaseNotifications() {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [time, setTime] = useState("")

  useEffect(() => {

    const showNotification = () => {

      const randomTime = times[Math.floor(Math.random() * times.length)]
      setTime(randomTime)

      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 5000)

      setIndex((prev) => (prev + 1) % notifications.length)
    }

    const interval = setInterval(showNotification, 9000)
    const first = setTimeout(showNotification, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(first)
    }

  }, [])

  if (!visible) return null

  const notification = notifications[index]

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slideIn">

      <div className="flex items-center gap-3 rounded-xl border border-purple-500/30 bg-zinc-900/95 p-4 shadow-[0_0_25px_rgba(168,85,247,0.25)] backdrop-blur-md animate-pulseSoft">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/20">
          <ShoppingCart className="h-6 w-6 text-purple-400 animate-bounceSlow" />
        </div>

        <div className="flex-1 leading-tight">
          <p className="text-sm font-bold text-white">
            {notification.name}
          </p>

          <p className="text-xs text-zinc-400">
            {notification.location}
          </p>

          <p className="mt-1 text-xs font-semibold text-purple-400">
            Comprou o plano <strong>{notification.plan}</strong>
          </p>

          <p className="text-[10px] text-zinc-500 mt-1">
            {time}
          </p>
        </div>

      </div>

    </div>
  )
}