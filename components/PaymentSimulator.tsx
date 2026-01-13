import React from 'react';
import { Button } from './Button';
import { CheckCircle, CreditCard, Banknote } from 'lucide-react';

interface PaymentSimulatorProps {
    method: 'CARD' | 'PIX';
    onConfirm: () => void;
    onBack: () => void;
}

export const PaymentSimulator: React.FC<PaymentSimulatorProps> = ({ method, onConfirm, onBack }) => {
    return (
        <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4">
            <div className="bg-zinc-950 p-8 rounded-2xl border border-white/10 max-w-md w-full text-center">
                <div className="mb-6 flex justify-center">
                    {method === 'CARD' ? (
                        <CreditCard size={64} className="text-brand-purple" />
                    ) : (
                        <Banknote size={64} className="text-green-500" />
                    )}
                </div>

                <h1 className="text-3xl font-heading font-bold uppercase text-white mb-2">
                    {method === 'CARD' ? 'Pagamento Cartão' : 'Pagamento Pix'}
                </h1>

                <p className="text-gray-400 mb-8">
                    {method === 'CARD'
                        ? 'Simulação de gateway de cartão. Clique abaixo para aprovar.'
                        : 'Simulação de pagamento PIX. Clique abaixo para confirmar.'}
                </p>

                <Button fullWidth onClick={onConfirm} className="mb-4">
                    Pagamento Feito
                </Button>

                <button onClick={onBack} className="text-gray-500 text-sm hover:text-white transition-colors">
                    Cancelar
                </button>
            </div>
        </div>
    );
};
