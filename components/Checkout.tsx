import React, { useState } from 'react';
import { Check, ArrowLeft, Lock, Plus } from 'lucide-react';
import { Plan } from '../types';
import { Button } from './Button';

interface CheckoutProps {
    plan: Plan;
    onBack: () => void;
    onSubscribe: (method: 'CARD' | 'PIX') => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ plan, onBack, onSubscribe }) => {
    const [showPolicy, setShowPolicy] = useState(false);

    const [paymentMethod, setPaymentMethod] = useState<'CARD' | 'PIX'>('PIX');

    const getValidityPeriod = (planName: string) => {
        const name = planName.toLowerCase();
        if (name.includes('60 dias')) return '60 dias';
        if (name.includes('120 dias')) return '120 dias';
        if (name.includes('180 dias')) return '180 dias';
        if (name.includes('trimestral')) return '90 dias';
        if (name.includes('semestral')) return '180 dias';
        if (name.includes('anual')) return '365 dias';
        return '30 dias';
    };

    const getInstallments = (planName: string, price: string) => {
        const numericPrice = parseFloat(price.replace(',', '.'));
        const name = planName.toLowerCase();
        let installments = 1;

        if (name.includes('60 dias')) installments = 2;
        if (name.includes('120 dias')) installments = 4;
        if (name.includes('180 dias')) installments = 6;

        const installmentValue = (numericPrice / installments).toFixed(2).replace('.', ',');
        return { count: installments, value: installmentValue };
    };

    const validityDays = getValidityPeriod(plan.name);
    const installments = getInstallments(plan.name, plan.price);

    return (
        <div className="min-h-screen bg-brand-dark text-white pt-6 pb-12 md:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 md:mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">Voltar aos Planos</span>
                </button>

                <div className="bg-zinc-950 rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                    <div className="grid lg:grid-cols-2">
                        {/* Left Column - Image */}
                        <div className="relative h-72 lg:h-auto lg:min-h-[500px]">
                            <div className="absolute inset-0 bg-brand-purple/20 z-10 mix-blend-overlay"></div>
                            <img
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                                alt="Workout Focus"
                                className="w-full h-full object-cover filter grayscale contrast-125"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent z-20 hidden lg:block"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-brand-dark/50 to-transparent z-20 lg:hidden"></div>
                        </div>

                        {/* Right Column - Details */}
                        <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="mb-2">
                                <span className="text-brand-purple font-bold tracking-widest text-xs uppercase">Consultoria Online</span>
                            </div>

                            <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4 leading-tight">
                                {plan.name} <br />
                                <span className="text-gray-500">(Evolution)</span>
                            </h1>

                            {/* Payment Method Selector */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Como deseja pagar?</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setPaymentMethod('CARD')}
                                        className={`p-3 rounded-lg border text-sm font-bold transition-all ${paymentMethod === 'CARD'
                                            ? 'bg-brand-purple text-white border-brand-purple shadow-lg shadow-brand-purple/20'
                                            : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                                            }`}
                                    >
                                        CARTÃO DE CRÉDITO
                                    </button>
                                    <button
                                        onClick={() => setPaymentMethod('PIX')}
                                        className={`p-3 rounded-lg border text-sm font-bold transition-all ${paymentMethod === 'PIX'
                                            ? 'bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/20'
                                            : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                                            }`}
                                    >
                                        PIX (DESCONTO)
                                    </button>
                                </div>
                            </div>

                            <div className="mb-8 border-b border-white/10 pb-8">
                                {paymentMethod === 'CARD' ? (
                                    <>
                                        {/* Installments as primary display */}
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-gray-400 text-lg">{installments.count}x</span>
                                            <span className="text-5xl font-bold text-white tracking-tighter">R$ {installments.value}</span>
                                            <span className="text-gray-500 text-sm font-medium">sem juros</span>
                                        </div>
                                        <div className="mt-2 text-base font-medium text-gray-400">
                                            ou R$ {plan.price} à vista
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Pix Price as primary display */}
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-gray-400 text-lg">R$</span>
                                            <span className="text-5xl font-bold text-green-400 tracking-tighter">
                                                {plan.pixPrice}
                                            </span>
                                            <span className="text-gray-500 text-sm font-medium">{plan.period === '/mês' ? '/ mês' : '/ total'}</span>
                                        </div>
                                        {plan.pixPrice && (
                                            <div className="mt-2 text-base font-medium text-green-400 bg-green-400/10 py-1.5 px-4 rounded-md w-fit animate-pulse">
                                                Desconto aplicado!
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                {plan.description || "O ciclo completo de transformação. Em 12 semanas passamos por fases de adaptação, força e hipertrofia."}
                            </p>

                            <div className="space-y-4 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <Check size={20} className="text-brand-purple shrink-0" />
                                        <span className="text-gray-200 font-medium">{feature}</span>
                                    </div>
                                ))}

                                {!plan.features.includes('Acesso ao App MFIT Personal') && (
                                    <div className="flex items-center gap-3">
                                        <Check size={20} className="text-brand-purple shrink-0" />
                                        <span className="text-gray-200 font-medium">Acesso ao App MFIT Personal</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-3">
                                    <Check size={20} className="text-brand-purple shrink-0" />
                                    <span className="text-gray-200 font-medium">Economia de R$ 90,00</span>
                                </div>
                            </div>

                            <Button
                                fullWidth
                                className="h-16 text-lg mb-6"
                                onClick={() => onSubscribe(paymentMethod)}
                            >
                                IR PARA O PAGAMENTO
                            </Button>

                            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-8">
                                <Lock size={12} />
                                <span>Compra Segura • Acesso Imediato ao Cadastro</span>
                            </div>

                            <div className="border-t border-white/5 pt-6">
                                <button
                                    onClick={() => setShowPolicy(!showPolicy)}
                                    className="flex items-center justify-between w-full text-gray-400 hover:text-white transition-colors group"
                                >
                                    <span className="text-xs font-bold tracking-wider uppercase">POLÍTICA DE DEVOLUÇÃO E REEMBOLSO</span>
                                    <Plus size={16} className={`group-hover:text-brand-purple transition-transform duration-300 ${showPolicy ? 'rotate-45' : ''}`} />
                                </button>

                                {/* Policy Accordion Content (Inline for mobile optimization) */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showPolicy ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 text-sm space-y-4 text-gray-400">
                                        <p className="font-bold text-white mb-2">Ao contratar nossos serviços, você declara estar ciente dos termos abaixo:</p>

                                        <div>
                                            <strong className="text-brand-purple block mb-1">1. Reserva de Vaga e Início do Serviço</strong>
                                            A conclusão da compra garante sua vaga no atendimento individualizado e configura o início imediato da prestação de serviço (reserva de estrutura), independentemente do envio da anamnese.
                                        </div>

                                        <div>
                                            <strong className="text-brand-purple block mb-1">2. Direito de Arrependimento (7 Dias)</strong>
                                            Conforme o Artigo 49 do CDC, você tem direito ao arrependimento no prazo de 7 (sete) dias corridos após a confirmação do pagamento. Após este prazo, o direito de arrependimento é encerrado.
                                        </div>

                                        <div>
                                            <strong className="text-brand-purple block mb-1">3. Critério Técnico</strong>
                                            Não realizamos reembolso caso o cliente "não goste" do treino prescrito. A consultoria é um serviço técnico baseado na sua necessidade fisiológica, não estando sujeita à concordância subjetiva.
                                        </div>

                                        <div>
                                            <strong className="text-brand-purple block mb-1">4. Cancelamento durante a vigência</strong>
                                            Não realizamos reembolso proporcional (pro-rata) caso o cliente desista ao longo da consultoria. Uma vez enviadas as informações, toda a periodização é estruturada.
                                        </div>

                                        <div>
                                            <strong className="text-brand-purple block mb-1">5. Prazo de Validade</strong>
                                            O protocolo deste plano tem validade de uso (para envio da anamnese e execução) por até <span className="text-white font-bold underline">{validityDays}</span> após a compra.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
