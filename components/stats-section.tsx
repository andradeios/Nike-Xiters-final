"use client"

export function StatsSection() {
  const stats = [
    { value: "6.247", label: "Jogadores Ativos", suffix: "+" },
    { value: "100", label: "Taxa de Capa", suffix: "%" },
    { value: "5.0", label: "Avaliação", suffix: "★" },
    { value: "100", label: "Bypass", suffix: "%" },
  ];

  return (
    <section className="relative border-y border-primary/20 bg-black py-16 overflow-hidden">
      {/* Efeito de brilho no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black opacity-50" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center justify-center transition-all duration-500 hover:scale-110"
              style={{ 
                animation: `float ${3 + i}s ease-in-out infinite` 
              }}
            >
              <div className="mb-2 text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-primary/60">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 animate-pulse">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animação de flutuação */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  )
}