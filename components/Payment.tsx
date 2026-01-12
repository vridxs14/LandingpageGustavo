import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Lock, CheckCircle } from 'lucide-react';
import { Plan } from '../types';
import { Button } from './Button';

interface PaymentProps {
    plan: Plan;
    onBack: () => void;
    onSuccess: () => void;
}

export const Payment: React.FC<PaymentProps> = ({ plan, onBack, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1500);
    };

    if (success) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4">
                <div className="bg-zinc-900 p-8 rounded-2xl max-w-md w-full text-center border border-brand-purple/20 shadow-2xl">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Pagamento Confirmado!</h2>
                    <p className="text-gray-400 mb-6">
                        Para liberar seu acesso imediatamente, envie o comprovante para o Gustavo no WhatsApp.
                    </p>

                    <Button
                        fullWidth
                        className="mb-4 bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-green-900/20"
                        onClick={() => {
                            const message = `Olá Gustavo, acabei de finalizar o pagamento do plano ${plan.name}! Gostaria de liberar meu acesso.`;
                            window.open(`https://wa.me/5511948699293?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                    >
                        Falar com Gustavo no WhatsApp
                    </Button>

                    <button
                        onClick={onSuccess}
                        className="text-gray-500 hover:text-white text-sm font-bold underline decoration-transparent hover:decoration-white transition-all"
                    >
                        Voltar ao Início
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-dark text-white pt-6 pb-12 md:pt-20">
            <div className="max-w-4xl mx-auto px-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">Voltar aos Detalhes</span>
                </button>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Order Summary */}
                    <div className="md:col-span-1 order-2 md:order-1">
                        <div className="bg-zinc-950 p-6 rounded-2xl border border-white/5 sticky top-24">
                            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Resumo do Pedido</h3>
                            <div className="flex items-center gap-4 mb-6">
                                {/* Small Plan Image Thumbnail */}
                                <div className="w-16 h-16 rounded-lg bg-zinc-900 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200&auto=format&fit=crop"
                                        alt="Plan"
                                        className="w-full h-full object-cover grayscale"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white leading-tight">{plan.name}</h4>
                                    <span className="text-xs text-brand-purple font-bold">Evolution</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-4 border-t border-white/5">
                                <span className="text-gray-400">Total</span>
                                <div className="text-right">
                                    <span className="block text-2xl font-bold text-white">R$ {plan.price}</span>
                                    <span className="text-xs text-gray-500">{plan.period}</span>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                                <Lock size={12} />
                                <span>Ambiente Seguro</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="md:col-span-2 order-1 md:order-2">
                        <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-white/5">
                            <h2 className="text-2xl font-heading font-bold uppercase mb-6 flex items-center gap-3">
                                <CreditCard className="text-brand-purple" />
                                Pagamento
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400">Nome Completo</label>
                                        <input required type="text" className="w-full bg-zinc-950 border border-white/10 rounded-lg p-3 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" placeholder="Seu nome" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400">E-mail</label>
                                        <input required type="email" className="w-full bg-zinc-950 border border-white/10 rounded-lg p-3 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" placeholder="seu@email.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400">Número do Cartão (Simulação)</label>
                                    <input required type="text" className="w-full bg-zinc-950 border border-white/10 rounded-lg p-3 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" placeholder="0000 0000 0000 0000" />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400">Validade</label>
                                        <input required type="text" className="w-full bg-zinc-950 border border-white/10 rounded-lg p-3 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" placeholder="MM/AA" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400">CVV</label>
                                        <input required type="text" className="w-full bg-zinc-950 border border-white/10 rounded-lg p-3 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" placeholder="123" />
                                    </div>
                                </div>

                                <Button fullWidth disabled={loading} className="h-14 mt-4">
                                    {loading ? 'Processando...' : 'FINALIZAR COMPRA SEGURA'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
