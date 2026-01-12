import React, { useState, useEffect } from 'react';
import { Menu, X, Check, Star, ChevronDown, ChevronUp, ArrowRight, Instagram, MessageCircle, ShieldCheck, Smartphone, Target, User } from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { NavItem, Benefit, Testimonial, FAQItem, Plan } from './types';

// --- DATA CONSTANTS ---

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#faq' },
];

const BENEFITS: Benefit[] = [
  {
    title: 'Treino 100% Individualizado',
    description: 'Esqueça as fichas genéricas de academia. Seu treino é montado especificamente para sua biotipo, rotina e objetivos.',
    icon: User
  },
  {
    title: 'App Exclusivo',
    description: 'Acesse seus treinos na palma da mão com vídeos explicativos de cada exercício, contagem de descanso e carga.',
    icon: Smartphone
  },
  {
    title: 'Acompanhamento Real',
    description: 'Suporte direto pelo WhatsApp para tirar dúvidas, corrigir movimentos e ajustar o planejamento quando necessário.',
    icon: MessageCircle
  },
  {
    title: 'Resultados Acelerados',
    description: 'Metodologia validada com mais de 500 alunos transformados. Otimize seu tempo e pare de desperdiçar esforço.',
    icon: Target
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo Souza',
    result: '-12kg em 3 meses',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    text: '"Eu treinava há 2 anos e não via mudança. Em 3 meses com a consultoria do Gustavo, meu corpo mudou mais do que em todo esse tempo sozinho. A estratégia faz total diferença."'
  },
  {
    id: 2,
    name: 'Mariana Lima',
    result: 'Definição Muscular',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
    text: '"O melhor investimento que fiz. Ter o treino no app e saber exatamente o que fazer quando chego na academia me deu uma motivação que eu não tinha. Recomendo demais!"'
  },
  {
    id: 3,
    name: 'Carlos Mendes',
    result: 'Ganho de Massa',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces',
    text: '"Sou ectomorfo e sempre tive dificuldade de ganhar peso. O ajuste na intensidade do treino e as dicas de alimentação foram o ponto de virada."'
  }
];

const PLANS: Plan[] = [
  {
    name: 'Trimestral',
    price: '129,90',
    period: '/mês',
    features: ['Plano de Treino Personalizado', 'Acesso ao App', 'Suporte via Chat', 'Ajustes Mensais'],
    recommended: false
  },
  {
    name: 'Semestral',
    price: '99,90',
    period: '/mês',
    features: ['Tudo do Plano Trimestral', 'Análise de Movimento por Vídeo', 'Prioridade no Suporte', 'Guia de Suplementação'],
    recommended: true
  },
  {
    name: 'Anual',
    price: '79,90',
    period: '/mês',
    features: ['Tudo do Plano Semestral', 'Maior Economia', 'Consultoria de Nutrição (Bônus)', 'Acesso Vitalício ao Grupo VIP'],
    recommended: false
  }
];

const FAQS: FAQItem[] = [
  {
    question: 'Como recebo meu treino?',
    answer: 'Após a confirmação do pagamento, você receberá um formulário de anamnese para eu entender seu perfil. Em até 3 dias úteis, seu treino estará disponível no nosso aplicativo exclusivo.'
  },
  {
    question: 'Serve para quem treina em casa?',
    answer: 'Com certeza! O treino é adaptado aos equipamentos que você tem disponíveis, seja na academia, no condomínio ou apenas com o peso do corpo em casa.'
  },
  {
    question: 'Tenho uma lesão, posso fazer?',
    answer: 'Sim. A consultoria é individualizada justamente para isso. Adaptamos os exercícios para não comprometer sua recuperação e fortalecer a região, se liberado pelo seu médico.'
  }
];

// --- COMPONENTS ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-heading font-bold italic tracking-tighter">
            GUSTAVO<span className="text-brand-green">CONSIGNANI</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-gray-300 hover:text-brand-green transition-colors text-sm uppercase font-bold tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Header */}
          <div className="hidden md:block">
             <a href="#planos" className="text-brand-green font-bold text-sm border border-brand-green px-4 py-2 rounded hover:bg-brand-green hover:text-black transition-all">
                ÁREA DO ALUNO
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 absolute w-full border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-gray-300 hover:text-brand-green hover:bg-white/5 rounded-md"
              >
                {item.label}
              </a>
            ))}
            <a href="#planos" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-brand-green text-black font-bold py-3 rounded-md">
              QUERO COMEÇAR
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            Vagas abertas para consultoria
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight text-white mb-6">
            Pare de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-lime-200">adivinhar</span> seu treino
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Tenha a estratégia de um especialista por um valor 10x menor que um personal presencial. 
            Chega de ir para a academia sem saber o que fazer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}>
              Quero Minha Estratégia
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}>
              Conhecer o Método
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-brand-green" size={20} />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-brand-green" size={20} />
              <span>+500 Alunos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProblemSolution: React.FC = () => {
  return (
    <Section id="sobre" className="bg-brand-dark">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 bg-brand-green/20 rounded-xl blur-xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
            alt="Gustavo Consignani Personal Trainer" 
            className="relative rounded-xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6 text-white">
            Você sente que treina, treina e <span className="text-brand-green">não sai do lugar?</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              A maioria das pessoas desiste da academia nos primeiros 3 meses. O motivo? 
              <strong className="text-white"> Falta de resultados.</strong>
            </p>
            <p>
              O erro não é sua genética ou falta de esforço. O erro é seguir treinos genéricos, 
              copiados da internet ou aquela ficha de papel que o instrutor da academia fez em 5 minutos 
              e nunca mais atualizou.
            </p>
            <p>
              Meu nome é <strong className="text-white">Gustavo Consignani</strong>. Minha missão é tirar você da estagnação. 
              Eu crio um planejamento periodizado, onde cada semana tem um objetivo claro. 
              Você só precisa executar. O planejamento estratégico é comigo.
            </p>
          </div>

          <div className="mt-8 border-l-4 border-brand-green pl-6 py-2">
            <p className="text-xl italic font-heading text-white">
              "Treino sem estratégia é apenas gasto calórico. Treino com estratégia é construção de corpo."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Benefits: React.FC = () => {
  return (
    <Section id="beneficios" className="bg-zinc-900/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
          Como funciona a <span className="text-brand-green">Consultoria</span>
        </h2>
        <p className="text-gray-400">
          Entenda a jornada desde o momento da compra até o seu primeiro treino.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map((benefit, index) => (
          <div key={index} className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-green/50 transition-all duration-300 group">
            <div className="bg-zinc-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-black transition-colors">
              <benefit.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}>
          Começar Minha Jornada
        </Button>
      </div>
    </Section>
  );
};

const SocialProof: React.FC = () => {
  return (
    <Section id="depoimentos" className="bg-brand-dark">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
          Quem faz, <span className="text-brand-green">Recomenda</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-zinc-900 p-8 rounded-2xl relative">
            <div className="flex items-center gap-1 text-brand-green mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-gray-300 mb-6 italic text-sm leading-relaxed">{t.text}</p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-green" />
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-xs text-brand-green uppercase font-bold tracking-wide">{t.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Pricing: React.FC = () => {
  return (
    <Section id="planos" className="bg-zinc-900 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
          Escolha sua <span className="text-brand-green">Evolução</span>
        </h2>
        <p className="text-gray-400">
          Planos adaptados ao seu tempo e objetivo. Comece hoje a construir a sua melhor versão.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {PLANS.map((plan, index) => (
          <div 
            key={index} 
            className={`rounded-2xl p-8 border flex flex-col relative transition-transform hover:-translate-y-2 ${
              plan.recommended 
                ? 'bg-zinc-900 border-brand-green shadow-[0_0_30px_rgba(163,230,53,0.15)] md:-mt-8 md:mb-8' 
                : 'bg-brand-dark border-white/10'
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-green text-black text-xs font-bold uppercase py-1 px-4 rounded-full">
                Mais Escolhido
              </div>
            )}
            
            <h3 className="text-2xl font-heading font-bold uppercase text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-sm text-gray-400">R$</span>
              <span className="text-5xl font-bold text-white tracking-tighter">{plan.price}</span>
              <span className="text-gray-500">{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check size={18} className="text-brand-green shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button 
              fullWidth 
              variant={plan.recommended ? 'primary' : 'outline'}
            >
              Escolher Plano
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-brand-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg overflow-hidden bg-zinc-900/50"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-green" />
                ) : (
                  <ChevronDown className="text-brand-green" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <div className="text-xl font-heading font-bold italic tracking-tighter text-white mb-2">
            GUSTAVO<span className="text-brand-green">CONSIGNANI</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-green selection:text-black">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Pricing />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} fill="white" className="text-white" />
      </a>
    </div>
  );
};

export default App;