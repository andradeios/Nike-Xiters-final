"use client"

export function AnimatedBanner() {
  return (
    <div className="banner-container">
      {/* Bloco de estilos CSS para garantir a animação e o loop */}
      <style jsx>{`
        .banner-container {
          overflow: hidden;
          background: linear-gradient(90deg, #660099, #660099);
          padding: 10px 0;
          width: 100%;
        }
        .banner-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }
        .banner-track:hover {
          animation-play-state: paused;
        }
        .banner-content {
          display: flex;
          gap: 40px;
          padding: 0 20px;
          color: white;
          font-weight: 800;
          text-transform: uppercase;
          font-bold: 14px;
          letter-spacing: 2px;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Estrutura do Banner */}
      <div className="banner-track">
        {/* Conteúdo duplicado para garantir o loop infinito */}
        <div className="banner-content">
          <span>PROMOÇÃO LIMITADA - OFERTA VAI ACABAR</span>
          <span>•</span>
          <span>O MELHOR PAINEL DO FREE FIRE</span>
          <span>•</span>
          <span>ANTI BAN E ANTI BLACK-LIST</span>
          <span>•</span>
          <span>ÚLTIMAS VAGAS DISPONÍVEIS</span>
          <span>•</span>
        </div>
        <div className="banner-content">
          <span>PROMOÇÃO LIMITADA - OFERTA VAI ACABAR</span>
          <span>•</span>
          <span>O MELHOR PAINEL DO FREE FIRE</span>
          <span>•</span>
          <span>ANTI BAN E ANTI BLACK-LIST</span>
          <span>•</span>
          <span>ÚLTIMAS VAGAS DISPONÍVEIS</span>
          <span>•</span>
        </div>
      </div>
    </div>
  )
}