import React, { useEffect } from 'react';
import { CheckCircle, ClipboardList, Smartphone, MessageCircle, ArrowRight, Download } from 'lucide-react';
import { Button } from './Button';

export const Success: React.FC = () => {
    // Simple "confetti" effect logic or just a nice reveal animation
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLScdz-IGv5EN8ZYO3Uw8N_gHDidLu4puHI3BFazvrDexO73yuw/viewform";
    const WHATSAPP_NUMBER = "5511948519280";
    const MFIT_ANDROID = "https://play.google.com/store/apps/details?id=app.mfit.personal&pcampaignid=web_share";
    const MFIT_IOS = "https://apps.apple.com/br/app/mfit-personal/id1283273690";

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-3xl w-full bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 relative z-10 shadow-2xl">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/20 text-brand-green mb-6 animate-bounce-slow">
                        <CheckCircle size={48} strokeWidth={3} />
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-white mb-2">
                        Pagamento <span className="text-brand-green">Confirmado!</span>
                    </h1>
                    <p className="text-xl text-gray-300">
                        Seja bem-vindo ao <span className="font-bold text-brand-purple">#TeamGustavo</span>.
                    </p>
                    <p className="text-gray-400 mt-2 text-sm">
                        Sua jornada de evolução começa agora. Siga os passos abaixo:
                    </p>
                </div>

                {/* Steps Container */}
                <div className="space-y-6">

                    {/* Step 1: Anamnesis (Highlighted) */}
                    <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-xl p-6 md:p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ClipboardList size={120} />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                            <div className="bg-brand-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 shadow-[0_0_15px_rgba(176,38,255,0.4)]">
                                1
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-2xl font-bold text-white mb-1">Preencher Anamnese</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Esta é a etapa mais importante! Preciso conhecer sua rotina, histórico e objetivos para montar seu treino.
                                </p>
                                <div className="flex justify-center md:justify-start">
                                    <a
                                        href={GOOGLE_FORMS_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-brand-purple text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-purple/90 transition-all shadow-lg hover:shadow-brand-purple/25 transform hover:-translate-y-1"
                                    >
                                        <span>Preencher Agora</span>
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: WhatsApp Support */}
                    <div className="bg-black/40 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                        <div className="bg-zinc-800 text-gray-400 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                            2
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">Chamar no WhatsApp</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Assim que você enviar a anamnese, eu receberei uma notificação. Se tiver qualquer dúvida urgente, pode me chamar.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20Gustavo!%20Acabei%20de%20entrar%20para%20a%20consultoria.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-zinc-800 text-brand-green font-bold py-3 px-6 rounded-lg hover:bg-zinc-700 transition-all border border-brand-green/20"
                                >
                                    <MessageCircle size={20} />
                                    <span>Falar no WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: App Download */}
                    <div className="bg-black/40 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                        <div className="bg-zinc-800 text-gray-400 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                            3
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">Baixar Aplicativo MFIT</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                É por aqui que você receberá seu treino e acompanhará sua evolução.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
                                <a
                                    href={MFIT_ANDROID}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Get it on Google Play"
                                        className="h-12"
                                    />
                                </a>
                                <a
                                    href={MFIT_IOS}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                        alt="Download on the App Store"
                                        className="h-12"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12 text-center border-t border-white/10 pt-8">
                    <p className="text-gray-500 text-sm">
                        O prazo para entrega do seu treino é de até <span className="text-white font-bold">5 dias úteis</span> após o envio da anamnese.
                    </p>
                </div>

            </div>
        </div>
    );
};
