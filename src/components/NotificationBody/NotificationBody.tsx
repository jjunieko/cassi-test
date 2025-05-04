'use client';

import { Information } from './modules/information';
import { NipData } from '@/app/model/NipData';

import NipInteraction from '@/components/NipInteraction/NipInteraction';

export default function NotificationBody({ data }: { data: NipData }) {

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
                <h1 className="text-2xl font-bold text-[#002D4B] mb-2">Olá, {data.nome}</h1>
                <p className="mb-6">
                    Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome.
                </p>

                <h2 className="text-[#002D4B] font-bold mb-2">Dados do notificação</h2>
                <hr className="mb-4" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <h3 className="font-bold">Beneficiário</h3>
                        <p>{data.nome}</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Interlocutor</h3>
                        <p>{data.nome}</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Data de abertura</h3>
                        <p>{data.dataAbertura}</p>
                    </div>
                </div>
                <NipInteraction data={data} />
            </div>
            <Information />
        </section>
    );
}



