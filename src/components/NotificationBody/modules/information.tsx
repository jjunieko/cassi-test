import Image from 'next/image';

export function Information() {
    return (
        <div className="flex flex-col items-start gap-4">
            <h2 className="text-xl font-bold text-[#002D4B] leading-tight">
                Por que é importante que você responda esse questionário?
            </h2>
            <Image
                src="/img/atendimento.jpg"
                alt="Atendimento"
                width={400}
                height={240}
                className="rounded-lg"
            />
            <p className="text-sm text-[#2D2D2D]">
                Na CASSI, buscamos aprimorar continuamente nossos serviços e métodos de atendimento. Nosso objetivo é acelerar o processo de análise das suas solicitações e torná-lo mais eficiente. Ao responder ao questionário, você nos ajuda a alcançar maior assertividade e rapidez no atendimento às suas necessidades.
            </p>
        </div>
    );
}