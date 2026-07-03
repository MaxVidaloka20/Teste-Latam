'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TopCountdown } from '@/components/TopCountdown';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { 
  CheckCircle2, 
  Trophy, 
  Clock, 
  ShieldCheck, 
  Target, 
  Zap, 
  BookOpen, 
  Smartphone, 
  Star, 
  Award,
  XCircle,
  Lock,
  Download,
  MessageCircle
} from 'lucide-react';

export default function Page() {
  const exampleImages = [
    { src: "https://i.postimg.cc/sxZb4vVD/imagem-2026-07-03-170615158.png", alt: "Detalle de ejercicios de entrenamiento" },
    { src: "https://i.postimg.cc/SRtHWc03/imagem-2026-07-03-165308179.png", alt: "Material visual" },
    { src: "https://i.postimg.cc/8CQQKdFc/imagem-2026-07-03-165238103.png", alt: "Diagramas detallados" },
    { src: "https://i.postimg.cc/RCcRK7m1/Volleyball-training-planner-info-202607031700.jpg", alt: "Planificador de entrenamiento" },
    { src: "https://i.postimg.cc/R0RV5bx0/imagem-2026-07-03-162822712.png", alt: "Capa do Manual" }
  ];

  return (
    <div className="min-h-screen font-body selection:bg-secondary selection:text-white bg-background">
      <TopCountdown />

      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
            <Trophy className="w-4 h-4" /> Material #1 para Entrenadores
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-slate-900">
            DOMINA LA CANCHA: EL MANUAL DEFINITIVO CON <span className="text-secondary">1000 EJERCICIOS</span> Y JUEGOS DE VOLEIBOL
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforma tus entrenamientos, motiva a tus jogadores e alcança resultados profissionais desde a primeira semana.
          </p>
          
          <div className="relative w-64 md:w-80 aspect-[3/4] mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-2xl overflow-hidden border-8 border-white ring-1 ring-slate-200 bg-slate-50">
            <Image 
              src="https://i.postimg.cc/Px9yty1z/Gemini-Generated-Image-j8odo7j8odo7j8od.png" 
              alt="Capa do material" 
              fill 
              priority
              className="object-cover"
              data-ai-hint="volleyball manual cover"
            />
          </div>

          <Button asChild size="lg" className="relative group bg-gradient-to-br from-secondary to-orange-600 hover:from-orange-600 hover:to-secondary text-white font-black h-16 md:h-20 px-8 md:px-16 text-xl md:text-3xl rounded-full shadow-[0_20px_50px_rgba(249,115,22,0.4)] animate-bounce-gentle transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ring-4 ring-orange-500/10">
            <a href="#oferta" className="flex items-center gap-3">
              <Zap className="w-6 h-6 md:w-8 md:h-8 fill-white" />
              ¡SÍ! QUIERO MI ACCESO INMEDIATO
            </a>
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-slate-500 text-sm font-semibold">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-secondary" /> Compra 100% Segura</span>
            <span className="flex items-center gap-1"><Target className="w-4 h-4 text-secondary" /> Acceso Inmediato</span>
          </div>
        </div>
      </section>

      {/* 2. QUÉ VAS A RECIBIR */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 text-slate-900">¿Qué vas a recibir exactamente?</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: BookOpen, 
                title: "1000 Ejercicios", 
                desc: "Fundamentos técnicos e táticos com diagramas claros.",
                color: "primary"
              },
              { 
                icon: Zap, 
                title: "Metodologia Pro", 
                desc: "Organizados por níveis: Iniciação, Juvenil e Pro.",
                color: "secondary"
              },
              { 
                icon: Smartphone, 
                title: "Acesso Digital", 
                desc: "Consulte tudo no seu celular diretamente na quadra.",
                color: "primary"
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover-zoom border-none shadow-xl bg-white overflow-hidden group py-4">
                <div className={`h-1.5 w-full bg-${item.color === 'primary' ? 'primary' : 'secondary'}`} />
                <CardHeader className="pt-4 pb-4 flex flex-col items-center text-center px-4">
                  <div className={`w-10 h-10 bg-${item.color === 'primary' ? 'primary' : 'secondary'} text-white rounded-xl flex items-center justify-center mb-2 shadow-lg group-hover:rotate-6 transition-transform`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base font-black uppercase tracking-tighter mb-1">{item.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-xs leading-tight">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BONOS EXCLUSIVOS */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Bonos <span className="text-secondary">Gratis</span> Hoy</h2>
            <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-medium">Si te unes al Plan Premium hoy, desbloqueas estos regalos adicionales valorados en $47 USD.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Award,
                t: "Certificado", 
                v: "$15 USD", 
                d: "Certificado oficial de conclusão do manual.", 
                c: "primary" 
              },
              { 
                icon: Clock,
                t: "Plano da Semana", 
                v: "$15 USD", 
                d: "Planilhas para organizar seus treinos semanais.", 
                c: "secondary" 
              },
              { 
                icon: Target,
                t: "Guia Especial", 
                v: "$17 USD", 
                d: "Estratégias táticas para competições.", 
                c: "primary" 
              }
            ].map((b, i) => (
              <Card key={i} className="hover-zoom relative overflow-hidden shadow-xl border-none bg-slate-50 p-6 flex flex-col">
                <div className="absolute top-0 right-0 bg-secondary text-white px-3 py-1 text-[8px] font-black uppercase rounded-bl-lg shadow-md z-10">GRATIS EN PREMIUM</div>
                <CardHeader className="text-center pt-4 pb-2">
                  <div className={`w-10 h-10 mx-auto mb-2 rounded-xl flex items-center justify-center bg-white shadow-md text-${b.c === 'primary' ? 'primary' : 'secondary'}`}>
                    <b.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-sm uppercase font-black tracking-tight leading-tight">{b.t}</CardTitle>
                  <CardDescription className="text-destructive font-bold line-through mt-0.5 text-[10px]">
                    Valor: {b.v}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-2 pt-0 flex-grow">
                  <p className="text-slate-700 leading-snug text-xs">{b.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OFERTA LIMITADA - ELIGE TU OFERTA */}
      <section id="oferta" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-3 text-slate-900">ELIGE TU <span className="text-primary">OFERTA</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs md:text-sm max-w-2xl mx-auto">
              Asegure seu material hoje mesmo com descontos exclusivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
            {/* PLAN BÁSICO */}
            <div className="bg-white text-slate-900 rounded-[2rem] p-6 md:p-8 flex flex-col shadow-lg border border-slate-100 group hover:border-primary/20 transition-all duration-300">
              <div className="space-y-2 mb-6">
                <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">OPÇÃO ESSENCIAL</span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none">KIT INICIAL <br/><span className="text-primary">500</span> EJERCICIOS</h3>
              </div>

              <div className="flex flex-col mb-8">
                <span className="text-[10px] font-black uppercase text-slate-400 mb-0.5">Inversión única</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">$5,00</span>
                  <span className="text-slate-400 font-bold text-sm">USD</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-destructive line-through font-bold text-base">$27,00</span>
                  <span className="bg-destructive/10 text-destructive text-[9px] font-black px-1.5 py-0.5 rounded uppercase">80% OFF</span>
                </div>
              </div>

              <div className="space-y-2.5 mb-8 flex-grow">
                <div className="flex items-center gap-2 font-bold text-xs md:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 500 Ejercícios HD
                </div>
                <div className="flex items-center gap-2 font-bold text-xs md:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Acesso Digital Imediato
                </div>
                <div className="flex items-center gap-2 font-bold text-xs md:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Diagramas Técnicos
                </div>
                <div className="flex items-center gap-2 font-bold text-xs md:text-sm text-slate-300">
                  <XCircle className="w-4 h-4 shrink-0" /> Sin Bonos Extras
                </div>
              </div>

              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-black h-12 rounded-xl w-full cursor-pointer text-base shadow-md transition-transform active:scale-95">
                <a href="https://pay.hotmart.com/M106595621Q?off=j7ay00vo">ELEGIR PLAN BÁSICO</a>
              </Button>
            </div>

            {/* PLAN PREMIUM - EL RECOMENDADO */}
            <div className="bg-white text-slate-900 border-[3px] border-secondary rounded-[2rem] p-6 md:p-8 flex flex-col relative shadow-[0_20px_60px_rgba(249,115,22,0.1)] md:scale-105 z-10 transition-all duration-300 hover:shadow-[0_25px_70px_rgba(249,115,22,0.15)]">
              <div className="absolute top-0 right-0">
                <div className="bg-secondary text-white px-4 py-1 font-black uppercase text-[8px] tracking-widest rounded-bl-lg shadow-sm">EL MÁS COMPLETO</div>
              </div>
              
              <div className="space-y-2 mb-6 pt-2">
                <span className="bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">OFERTA RECOMENDADA</span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none">KIT COMPLETO <br/><span className="text-secondary">1000</span> EJERCICIOS</h3>
              </div>

              <div className="flex flex-col mb-8">
                <span className="text-[10px] font-black uppercase text-secondary mb-0.5">Inversión hoje</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter text-primary">$9,90</span>
                  <span className="text-primary font-bold text-sm">USD</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-destructive line-through font-bold text-base">$97,00</span>
                  <span className="bg-destructive text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase shadow-sm">AHORRA 90%</span>
                </div>
              </div>

              <div className="space-y-2.5 mb-8 flex-grow">
                <div className="flex items-center gap-2 font-black text-xs md:text-sm text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> 1000 Ejercícios HD
                </div>
                <div className="flex items-center gap-2 font-black text-xs md:text-sm text-secondary">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> +3 Bônus de Presente ($47)
                </div>
                <div className="flex items-center gap-2 font-black text-xs md:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> Planejamento da Semana
                </div>
                <div className="flex items-center gap-2 font-black text-xs md:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> Guia de Treino Especial
                </div>
                <div className="flex items-center gap-2 font-black text-xs md:text-sm text-secondary">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> Certificado de Participação
                </div>
              </div>

              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-black h-14 rounded-xl w-full cursor-pointer text-lg shadow-lg shadow-secondary/20 transition-all hover:-translate-y-0.5 active:scale-95">
                <a href="https://pay.hotmart.com/P106595928M?off=t1sm7w7c">COMPRAR PLAN PREMIUM</a>
              </Button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-slate-400 font-bold uppercase text-[8px]">
                <Clock className="w-3 h-3 text-secondary" /> Oferta expira em 15:00 min
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE EJEMPLOS CON CARROUSEL */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 text-slate-900">
            Echa un vistazo <span className="text-secondary">al interior</span>
          </h2>
          
          <div className="relative px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {exampleImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-100">
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        fill 
                        className="object-cover"
                        data-ai-hint="volleyball drill detail"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-6 bg-secondary text-white border-none hover:bg-secondary/90 w-12 h-12 shadow-xl" />
              <CarouselNext className="hidden md:flex -right-6 bg-secondary text-white border-none hover:bg-secondary/90 w-12 h-12 shadow-xl" />
            </Carousel>
          </div>
          
          <p className="mt-8 text-slate-500 font-medium italic">
            Diagramas detallados e explicações passo a passo para cada una de las actividades.
          </p>
        </div>
      </section>

      {/* 6. TESTIMONIOS */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 relative">
            <span className="text-secondary font-black uppercase tracking-widest text-xs mb-2 block">Casos de Éxito</span>
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight mb-4 text-slate-900">Voces de la <span className="text-primary">Cancha</span></h2>
            <div className="flex justify-center gap-1.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-7 h-7 text-secondary fill-secondary drop-shadow-sm" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { n: "Carlos Mendoza", r: "Entrenador Senior - Club Volley Pro", t: "Este material mudou completamente minha forma de planejar. Meus jogadores estão mais motivados do que nunca.", i: "C", img: "https://i.postimg.cc/brsmjJrK/imagem-2026-07-03-172835638.png", stars: 5 },
              { n: "Laura García", r: "Profesora de Educación Física", t: "Uso diariamente nas minhas aulas. Os diagramas são tão claros que até os assistentes podem dirigir os exercícios.", i: "L", img: "https://i.postimg.cc/FK4CJNCc/imagem-2026-07-03-172748459.png", stars: 5 },
              { n: "Andrés Peralta", r: "Director Técnico Juvenil", t: "A progressão dos exercícios é perfeita. Vi uma melhora técnica real em minhas equipes em menos de um mês.", i: "A", img: "https://i.postimg.cc/SKkVxVJ0/imagem-2026-07-03-173004634.png", stars: 5 }
            ].map((test, i) => (
              <Card key={i} className="hover-zoom border-none shadow-2xl bg-white rounded-[2rem] p-4 flex flex-col justify-between">
                <CardContent className="pt-8">
                  <div className="mb-4 flex gap-1">
                    {[...Array(test.stars)].map((_, idx) => <Star key={idx} className="w-4 h-4 text-secondary fill-secondary" />)}
                  </div>
                  <p className="text-slate-700 font-medium text-lg leading-relaxed mb-8">"{test.t}"</p>
                  <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                    <Avatar className="w-14 h-14 border-2 border-primary shadow-md">
                      {test.img && <AvatarImage src={test.img} alt={test.n} />}
                      <AvatarFallback className="bg-primary text-white font-black text-xl">{test.i}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="font-black uppercase tracking-tighter text-slate-900 text-sm flex items-center gap-1.5">
                        {test.n} <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
                      </p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">{test.r}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GARANTÍA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute -right-24 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-900 rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.2)]">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest text-primary-foreground">
                <ShieldCheck className="w-5 h-5 text-secondary" /> Garantía Blindada
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Cero Riesgo: <br/><span className="text-secondary">7 Días</span> Para Decidir
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                Teste o material hoje mesmo. Use nos seus treinos, imprima, estude. Se não for para você, devolvemos 100% do seu investimento. <strong>Sem preguntas.</strong>
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col items-center">
                  <Lock className="w-6 h-6 text-secondary mb-2" />
                  <span className="text-[10px] font-bold uppercase opacity-60">Pago Seguro</span>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="w-6 h-6 text-secondary mb-2" />
                  <span className="text-[10px] font-bold uppercase opacity-60">Qualidade Pro</span>
                </div>
                <div className="flex flex-col items-center">
                  <Download className="w-6 h-6 text-secondary mb-2" />
                  <span className="text-[10px] font-bold uppercase opacity-60">Envio Imediato</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-pulse-slow">
                <div className="absolute inset-0 bg-secondary rounded-full blur-[60px] opacity-20" />
                <div className="relative z-10 w-full h-full border-[10px] border-secondary rounded-full flex flex-col items-center justify-center text-center bg-white shadow-2xl">
                  <span className="text-slate-900 font-black text-6xl md:text-8xl leading-none">7</span>
                  <span className="text-slate-900 font-black text-xl md:text-2xl uppercase tracking-tighter mt-[-10px]">Días de</span>
                  <span className="text-slate-900 font-black text-sm uppercase tracking-widest bg-secondary text-white px-3 py-1 mt-2 rounded">Garantía</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PREGUNTAS FRECUENTES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-slate-900">Resolvemos tus <span className="text-secondary">Dudas</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Tudo o que você precisa saber</p>
          </div>
          
          <div className="bg-white rounded-[2.5rem] shadow-xl p-6 md:p-12 border border-slate-100">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {[
                { 
                  q: "¿Para qué nivel competitivo es este material?", 
                  a: "O manual é modular. Contém exercícios de Iniciação, Desenvolvimento Juvenil e Rendimento para jogadores profissionais." 
                },
                { 
                  q: "¿Cómo recibo el acesso a los ejercicios?", 
                  a: "O acesso é automático e imediato. Assim que o pagamento é confirmado, você recebe um e-mail com os links para download." 
                },
                { 
                  q: "¿Es un libro físico o digital?", 
                  a: "É um material 100% digital em formato PDF, otimizado para celulares e tablets." 
                },
                { 
                  q: "¿Cuál es la diferencia entre el Plan Básico y el Premium?", 
                  a: "O Plano Básico inclui 500 exercícios. O Plano Premium é a coleção completa de 1000 exercícios com todos os bônus." 
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-none bg-slate-50 rounded-2xl px-6 mb-4 overflow-hidden transition-all data-[state=open]:bg-white data-[state=open]:ring-2 data-[state=open]:ring-primary/20">
                  <AccordionTrigger className="text-left font-black text-lg py-6 hover:no-underline text-slate-900 [&>svg]:text-primary [&>svg]:w-6 [&>svg]:h-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-8 font-medium">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-12 bg-slate-950 text-white text-center border-t border-white/10">
        <div className="container mx-auto px-4">
          <p className="font-bold opacity-60 uppercase tracking-widest text-[10px]">©2026 1000 Ejercicios y Juegos de Voleibol. Todos los derechos reservados.</p>
          <div className="mt-6 flex justify-center gap-8 text-[10px] font-black uppercase tracking-widest opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Términos</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Privacidad</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
