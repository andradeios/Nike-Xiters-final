"use client"

import { useState, useMemo } from "react"
import { Zap, ShieldCheck, Headphones, Gem, Rocket } from "lucide-react";


// --- CATEGORIAS ---
const CATEGORIAS = [
  { id: "painel", nome: "NIKE CHEATS PAINEL", img: "/PAINEL123.png" },
  { id: "xitproxy", nome: "XIT VIA WI-FI", img: "/WIFI.png" },
  { id: "bypass", nome: "BYPASS ANTI SS", img: "/BYPASS.png" },
  { id: "Gbox", nome: "GBOX", img: "/GBOX.png" },
  { id: "Edição", nome: "FAÇA SUA EDIÇÃO", img: "/SUAEDIT.png" },
  { id: "project", nome: "CRIE SEU PAINEL", img: "/crieseumod.png" },
]

// --- PRODUTOS COM PLANOS EM BUTIDAS ---
const PRODUTOS = [
  { 
    id: 1,
    nome: "NIKE CHEATS PAINEL IOS",
    nomeAnim: "product-name-anim",
    categoria: "painel",
    img: "/gifs/PAINEL IOS animado.gif",
    tipo: "planos",

    precoCard: 29.99,
    precoAnim: "product-price-anim",

    planos: [
      {
        id: "p1_sem",
        nome: "Semanal",
        duracao: "7 dias de acesso",
        preco: 29.99,
        checkout: "https://go.plataformafortpay.com.br/hohu7r5tyf",
        icon: <Zap className="w-5 h-5" />
      },
      {
        id: "p1_men",
        nome: "Mensal",
        duracao: "30 dias de acesso",
        preco: 59.99,
        checkout: "https://go.plataformafortpay.com.br/0h84vwej1l",
        popular: true,
        icon: <Gem className="w-5 h-5" />
      },
      {
        id: "p1_vit",
        nome: "Vitalício",
        duracao: "Acesso permanente",
        preco: 119.99,
        checkout: "https://go.plataformafortpay.com.br/goqe5j2zqf",
        icon: <Rocket className="w-5 h-5" />
      }
    ]
  },

  { 
    id: 2,
    nome: "NIKE CHEATS PAINEL ANDROID",
    nomeAnim: "product-name-anim",
    categoria: "painel",
    img: "/gifs/PAINEL ANDROID animado.gif",
    tipo: "planos",

    precoCard: 29.99,
    precoAnim: "product-price-anim",

   planos: [
      {
        id: "p2_sem",
        nome: "Semanal",
        duracao: "7 dias de acesso",
        preco: 29.99,
        checkout: "https://go.plataformafortpay.com.br/tu6nx0jq5f",
        icon: <Zap className="w-5 h-5" />
      },
      {
        id: "p2_men",
        nome: "Mensal",
        duracao: "30 dias de acesso",
        preco: 59.99,
        checkout: "https://go.plataformafortpay.com.br/1oitaamix0",
        popular: true,
        icon: <Gem className="w-5 h-5" />
      },
      {
        id: "p2_vit",
        nome: "Vitalício",
        duracao: "Acesso permanente",
        preco: 119.99,
        checkout: "https://go.plataformafortpay.com.br/7sbvt9xwjp",
        icon: <Rocket className="w-5 h-5" />
      }
    ]
  },

  { 
    id: 3,
    nome: "NIKE CHEATS PAINEL PC",
    nomeAnim: "product-name-anim",
    categoria: "painel",
    img: "/gifs/PAINEL PC animado.gif",
    tipo: "planos",

    precoCard: 49.99,
    precoAnim: "product-price-anim",

   planos: [
      {
        id: "p3_sem",
        nome: "Semanal",
        duracao: "7 dias de acesso",
        preco: 49.99,
        checkout: "https://go.plataformafortpay.com.br/r0vfuhyubz",
        icon: <Zap className="w-5 h-5" />
      },
      {
        id: "p3_men",
        nome: "Mensal",
        duracao: "30 dias de acesso",
        preco: 89.99,
        checkout: "https://go.plataformafortpay.com.br/omiobphqxb",
        popular: true,
        icon: <Gem className="w-5 h-5" />
      },
      {
        id: "p3_vit",
        nome: "Vitalício",
        duracao: "Acesso permanente",
        preco: 149.99,
        checkout: "https://go.plataformafortpay.com.br/wtnalfboyh",
        icon: <Rocket className="w-5 h-5" />
      }
    ]
  },

    { 
    id: 4,
    nome: "XIT VIA WI-FI iOS",
    nomeAnim: "product-name-anim",
    categoria: "xitproxy",
    img: "/gifs/PAINEL IOS WI-FI animado.gif",
    tipo: "planos",

    precoCard: 39.99,
    precoAnim: "product-price-anim",

   planos: [
      {
        id: "p4_sem",
        nome: "Semanal",
        duracao: "7 dias de acesso",
        preco: 39.99,
        checkout: "https://go.plataformafortpay.com.br/h42zbfevmn",
        icon: <Zap className="w-5 h-5" />
      },
      {
        id: "p4_men",
        nome: "Mensal",
        duracao: "30 dias de acesso",
        preco: 79.99,
        checkout: "https://go.plataformafortpay.com.br/fjsuidxst4",
        popular: true,
        icon: <Gem className="w-5 h-5" />
      },
      {
        id: "p4_vit",
        nome: "Vitalício",
        duracao: "Acesso permanente",
        preco: 109.99,
        checkout: "https://go.plataformafortpay.com.br/lzwmnfo6ve",
        icon: <Rocket className="w-5 h-5" />
      }
    ]
  },

      { 
    id: 5,
    nome: "XIT VIA WI-FI ANDROID",
    nomeAnim: "product-name-anim",
    categoria: "xitproxy",
    img: "/gifs/PAINEL ANDROID WI-FI animado.gif",
    tipo: "planos",

    precoCard: 39.99,
    precoAnim: "product-price-anim",

   planos: [
      {
        id: "p5_sem",
        nome: "Semanal",
        duracao: "7 dias de acesso",
        preco: 39.99,
        checkout: "https://go.plataformafortpay.com.br/aqzukq5yc1",
        icon: <Zap className="w-5 h-5" />
      },
      {
        id: "p5_men",
        nome: "Mensal",
        duracao: "30 dias de acesso",
        preco: 79.99,
        checkout: "https://go.plataformafortpay.com.br/zjd9x0kihq",
        popular: true,
        icon: <Gem className="w-5 h-5" />
      },
      {
        id: "p5_vit",
        nome: "Vitalício",
        duracao: "Acesso permanente",
        preco: 109.99,
        checkout: "https://go.plataformafortpay.com.br/wlsxsj2aic",
        icon: <Rocket className="w-5 h-5" />
      }
    ]
  },

 { 
    id: 6,
    nome: "FAÇA SUA EDIÇÃO",
    nomeAnim: "product-name-anim",
    categoria: "Edição",
    img: "/gifs/EDITE.gif",
    tipo: "planos",

    precoCard: 14.99,
    precoAnim: "product-price-anim",

   planos: [
      {
        id: "p6_sem",
        nome: "EDIT DE 15 SEGUNDOS",
        duracao: "Edição da Sua Escolha",
        preco: 14.99,
        checkout: "https://go.plataformafortpay.com.br/p6pufu1grz",
        icon: <Zap className="w-5 h-5" />
      },
      {
        id: "p6_men",
        nome: "EDIT DE 30 SEGUNDOS",
        duracao: "Edição da Sua Escolha",
        preco: 19.99,
        checkout: "https://go.plataformafortpay.com.br/chdjwq7yxg",
        popular: true,
        icon: <Gem className="w-5 h-5" />
      },
      {
        id: "p6_vit",
        nome: "EDIT DE 1 MINUTO",
        duracao: "Edição da Sua Escolha",
        preco: 29.99,
        checkout: "https://go.plataformafortpay.com.br/wwdfunchp0",
        icon: <Rocket className="w-5 h-5" />
      }
    ]
  },

    { 
    id: 7,
    nome: "CRIE SEU PAINEL",
    nomeAnim: "product-name-anim",
    preco: 199.99,
    precoAnim: "product-price-anim",
    categoria: "project",
    img: "/gifs/CRIE SEU PAINEL animado.gif",
    tipo: "unico",
    checkout: "https://go.plataformafortpay.com.br/zvnfwv06mj"
  },

  { 
    id: 8,
    nome: "BYPASS iOS",
    nomeAnim: "product-name-anim",
    preco: 49.99,
    precoAnim: "product-price-anim",
    categoria: "bypass",
    img: "/gifs/BYPASS IPHONE ANIMADO.gif",
    tipo: "unico",
    checkout: "https://go.plataformafortpay.com.br/tkcpfwhr8e"
  },

    { 
    id: 9,
    nome: "BYPASS ANDROID",
    nomeAnim: "product-name-anim",
    preco: 49.99,
    precoAnim: "product-price-anim",
    categoria: "bypass",
    img: "/gifs/BYPASS ANDROID ANIMADO.gif",
    tipo: "unico",
    checkout: "https://go.plataformafortpay.com.br/coh4lndvcs"
  },

    { 
    id: 10,
    nome: "DMA VIRTUAL",
    nomeAnim: "product-name-anim",
    preco: 199.99,
    precoAnim: "product-price-anim",
    categoria: "bypass",
    img: "/gifs/DMA VIRTUAL animado.gif",
    tipo: "unico",
    checkout: "https://go.plataformafortpay.com.br/iivbrrapzx"
  },

  { 
    id: 11,
    nome: "GBOX DURAÇÃO 1 ANO",
    nomeAnim: "product-name-anim",
    preco: 49.99,
    precoAnim: "product-price-anim",
    categoria: "Gbox",
    img: "/gifs/GBOX animado.gif",
    tipo: "unico",
    checkout: "https://go.plataformafortpay.com.br/df6xlqc59y"
  }
];

export default function StoreSection() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("painel");
  const [produtoSelecionado, setProdutoSelecionado] = useState<any>(null);
  const [planoAtivo, setPlanoAtivo] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // ADICIONE ESTA LINHA:
  const [imgAtiva, setImgAtiva] = useState(1);
  

  const produtosFiltrados = useMemo(() => {
    return PRODUTOS.filter((p) => p.categoria === categoriaAtiva)
  }, [categoriaAtiva])

  const abrirCheckout = (produto) => {
  setProdutoSelecionado(produto);
  setPlanoAtivo(null); // MUITO IMPORTANTE: Isso faz o botão começar cinza
  setImgAtiva(1);
  setIsModalOpen(true);
};

  const handleFinalizarPagamento = () => {
    if (!produtoSelecionado) return
    const link = produtoSelecionado.tipo === "planos" ? planoAtivo?.checkout : produtoSelecionado?.checkout
    if (link) window.open(link, "_blank")
  }

  
  const precoExibido = produtoSelecionado?.tipo === "planos" ? planoAtivo?.preco : produtoSelecionado?.preco

  return (
    // Adicione o ID aqui na div principal ou na section interna
    <div id="produtos" className="min-h-screen bg-[#000000] text-white p-6 md:p-12 font-sans selection:bg-purple-500/30 scroll-mt-10">
      <section className="min-h-[50vh] max-w-7xl mx-auto">
        {/* Restante do seu código... */}
        
        {/* CATEGORIAS */}
        <div className="flex justify-between items-center mb-10">
          <div className="border border-purple-500/40 bg-purple-500/5 px-5 py-2 rounded-full text-purple-400 text-[19px] font-bold tracking-tighter-[0.2em] shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            Categorias em destaque
          </div>
        </div>

{/* CATEGORIAS SCROLL */}
<div className="flex gap-6 overflow-x-auto pb-6 mb-20 scrollbar-hide">

  {CATEGORIAS.map((cat) => (
    <button
      key={cat.id}
      onClick={() => setCategoriaAtiva(cat.id)}
      className="group relative min-w-[240px] md:min-w-[320px] outline-none"
    >

      <div
        className={`relative w-full h-[210px] md:h-[260px] rounded-2xl overflow-hidden border transition-all duration-300
        
        ${
          categoriaAtiva === cat.id
            ? "border-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.35)]"
            : "border-zinc-800 hover:border-purple-700"
        }`}
      >

        {/* IMAGEM */}
        <img
          src={cat.img}
          alt={cat.nome}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* GRADIENTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* NOME */}
        <div className="absolute bottom-5 left-5 right-5">
          <p
            className={`text-base md:text-lg font-semibold tracking-tight
        
            ${
              categoriaAtiva === cat.id
                ? "text-purple-400"
                : "text-white"
            }`}
          >
            {cat.nome}
          </p>
        </div>

        {/* ATIVO */}
        {categoriaAtiva === cat.id && (
          <div className="absolute inset-0 bg-purple-500/10 pointer-events-none" />
        )}
      </div>

    </button>
  ))}

</div>
        
        {/* GRID DE PRODUTOS */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {produtosFiltrados.map((produto) => (
    <div key={produto.id} className="group bg-[#0c0c10] border border-zinc-800/50 rounded-[32px] p-5 transition-all duration-500 ease-out hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.3)]">
      
      {/* Imagem do Produto - Grid */}
<div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-950/50 mb-6 border border-white/5">
  <img 
    src={produto.img} 
    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
    alt={produto.nome}
  />
</div>

      <div className="px-2">
        <h3 className={`text-xl font-bold mb-1 transition-colors group-hover:text-purple-400 ${produto.nomeAnim}`}>
  {produto.nome}
</h3>

        
       <div className="px-1">
  {/* Badge - Bem pequeno (text-[8px]) */}
  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-purple-500/20 mb-2">
    <Zap className="w-2.5 h-2.5 text-purple-400 fill-blue-400" />
    <span className="text-[12px] font-bold text-purple-400 uppercase tracking-tighter">
      Entrega Automática
    </span>
  </div>

  
  {/* Preço - Compacto (text-xl) */}
  <div className="flex items-baseline mb-4">
    <span className={`text-green-500 text-[25px] font-bold tracking-tighter ${produto.precoAnim}`}>
      R$ {(produto.tipo === "planos" ? produto.precoCard : produto.preco)?.toFixed(2).replace('.', ',')}
    </span>
    <span className="text-lg text-green-500 ml-0.5 font-light"></span>
  </div>
</div>

        {/* Selo PIX - Corrigido */}
<div className="flex items-center gap-2 mb-8">
  <span className="text-zinc-500 text-[13px] font-medium">A vista no</span>
  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-teal-500/20 bg-teal-500/5">
    <svg className="w-3 h-3 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.75 0L24 11.75v0.5L12.25 24h-0.5L0 12.25v-0.5L11.75 0z" />
    </svg>
    <span className="text-teal-400 text-[10px] font-bold uppercase tracking-wider">PIX</span>
  </div>
</div>

        {/* Botão */}
<button
  onClick={() => abrirCheckout(produto)}
  className="relative overflow-hidden w-full py-4 rounded-[20px] bg-purple-600 text-white font-black text-xs uppercase tracking-widest transition-all duration-300 hover:bg-purple-500 hover:scale-[1.03] active:scale-95 shadow-lg shadow-purple-900/30 button-anim"
>
  {produto.tipo === "planos" ? "Ver Planos" : "Comprar agora"}
</button>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* --- MODAL DE CHECKOUT --- */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
    <div className="relative bg-[#09090b] border border-white/5 w-full max-w-[550px] rounded-[40px] overflow-hidden shadow-2xl">
      
      {/* BOTÃO DE FECHAR - Ajustado para não colar no loop */}
      <button 
        onClick={() => setIsModalOpen(false)} 
        className="absolute top-6 right-6 z-50 p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
      >
        <span className="text-xl leading-none">✕</span>
      </button>

      {/* Detalhes */}
      <div className="w-full p-8 md:p-12 flex flex-col justify-center relative">
        
        {/* Marquee Loop Infinito - Adicionado mt-8 para afastar do topo/X */}
        <div className="w-full overflow-hidden bg-zinc-900/30 border-y border-purple-500/20 py-4 mb-8 mt-8">
          <div className="flex animate-marquee gap-10 whitespace-nowrap">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-10">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-purple-500 stroke-[2.5]" />
                  <span className="text-[10px] font-black text-purple-200 uppercase tracking-[0.2em]">Entrega Imediata</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-purple-500 stroke-[2.5]" />
                  <span className="text-[10px] font-black text-purple-200 uppercase tracking-[0.2em]">100% Seguro</span>
                </div>
                {/* ... outros ícones ... */}
              </div>
            ))}
          </div>
        </div>

        
<h2 className="text-2xl font-black mb-1">{produtoSelecionado?.nome}</h2>
{/* O preço só aparece se o usuário clicar em um plano */}
<p className="text-2xl font-black text-green-400 mb-8 tracking-tighter uppercase">
  {produtoSelecionado?.tipo === "planos" 
    ? (planoAtivo ? `R$ ${planoAtivo.preco.toFixed(2).replace('.', ',')}` : "Selecione Seu plano:")
    : `R$ ${produtoSelecionado?.preco?.toFixed(2).replace('.', ',')}`
  }
</p>

              {produtoSelecionado?.tipo === "planos" ? (
  <div className="space-y-3 mb-10">
    <p className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.25em] ml-1">Escolha seu plano</p>
    
    {produtoSelecionado.planos.map((plano) => {
      const isVitalicio = plano.nome.toLowerCase().includes("vitalício");
      const isSelected = planoAtivo?.id === plano.id;

      return (
        <div 
          key={plano.id} 
          onClick={() => setPlanoAtivo(plano)} 
          className={`relative flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden
            ${isSelected 
              ? "border-purple-600 bg-purple-600/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]" 
              : isVitalicio 
                ? "border-purple-500/40 bg-purple-900/10 hover:border-purple-500" 
                : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700"
            }`}
        >
          {isVitalicio && (
            <div className="absolute top-0 right-0 bg-purple-600 text-[10px] font-bold text-white px-3 py-1 rounded-bl-lg uppercase tracking-tighter">
              Mais Comprado
            </div>
          )}

          <div className="flex items-center gap-4">
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
              ${isSelected ? "border-purple-500 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "border-zinc-700"}`}>
              {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>

            <div className={`p-2.5 rounded-xl transition-all ${isSelected || isVitalicio ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-500"}`}>
              {plano.icon}
            </div>

            <div>
              <p className={`font-bold text-sm ${isVitalicio ? "text-purple-100" : "text-white"}`}>{plano.nome}</p>
              <p className="text-[10px] text-zinc-500 font-bold uppercase">{plano.duracao}</p>
            </div>
          </div>

          <p className={`font-black text-sm ${isSelected || isVitalicio ? "text-purple-400" : "text-zinc-400"}`}>
            R$ {plano.preco.toFixed(2).replace('.', ',')}
          </p>
        </div>
      ); // <--- O erro estava aqui, faltava fechar o return do map
    })} 
  </div> // <--- E aqui fechar a div da lista
) : (
  <div className="mb-10 p-5 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5">
    <p className="font-bold tracking-tighter text-zinc-100">Acesso Completo</p>
    <p className="text-[15px] text-zinc-500 font-bold tracking-tighter">R$ {produtoSelecionado?.preco?.toFixed(2)}</p>
  </div>
)}

              <button 
  onClick={handleFinalizarPagamento} 
  // O botão só fica desativado se FOR do tipo planos E não tiver plano selecionado
  disabled={produtoSelecionado?.tipo === "planos" && !planoAtivo}
  className={`group relative w-full font-bold tracking-tighter py-5 rounded-[40px] transition-all duration-300 uppercase tracking-widest text-[15px] overflow-hidden mt-4
    ${(produtoSelecionado?.tipo === "planos" && !planoAtivo) 
      ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
      : "bg-purple-600 hover:bg-purple-500 text-white hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-[0.97]"
    }`}
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    {/* Lógica do Texto do Botão */}
    {produtoSelecionado?.tipo === "planos" 
      ? (!planoAtivo ? "Selecione um plano" : `Pagar R$ ${planoAtivo.preco.toFixed(2).replace('.', ',')} via PIX`)
      : `Pagar R$ ${produtoSelecionado?.preco?.toFixed(2).replace('.', ',')} via PIX`
    }
  </span>
  
  {/* Efeito de brilho só aparece se o botão estiver liberado */}
  {(produtoSelecionado?.tipo !== "planos" || planoAtivo) && (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000" />
  )}
</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}