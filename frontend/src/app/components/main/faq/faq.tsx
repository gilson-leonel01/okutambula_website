'use client'
import { gsap } from 'gsap';
import { useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '@/components/ui/accordion';

export function FAQ() {
    useEffect(() => {
        gsap.from('.faq-item', { y: 20, opacity: 0, duration: 0.5, stagger: 0.2 });
    }, []);

    return (
        <section className="p-6">
            <p className="text-2xl text-center font-bold">¿PERGUNTAS FREQUENTES?</p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="faq-item">
                    <AccordionTrigger>Como posso vender o meu imóvel?</AccordionTrigger>
                    <AccordionContent>
                        Para vender seu imóvel, primeiro avalie o valor de mercado com um agente imobiliário ou avaliação profissional. Prepare o imóvel com reparos e limpeza, reúna documentos como escritura e certidão negativa de débitos, e anuncie em plataformas confiáveis. Negocie com potenciais compradores e finalize a venda com um contrato assinado e registro no cartório.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="faq-item">
                    <AccordionTrigger>Quais documentos são necessários para alugar um imóvel?</AccordionTrigger>
                    <AccordionContent>
                        Para alugar um imóvel, geralmente são necessários: cópia de B.I e Título de residência, comprovante de renda (como contracto ou extrato bancário), e assinatura de contrato de locação. Verifique com o proprietário ou imobiliária os requisitos específicos.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="faq-item">
                    <AccordionTrigger>Como comprar um imóvel usado?</AccordionTrigger>
                    <AccordionContent>
                        Para comprar um imóvel usado, pesquise o mercado, visite o imóvel e verifique seu estado. Contrate um advogado ou corretor para analisar documentos como escritura, certidão. Negocie o preço, assine o contrato de compra e venda, e registre a transação no cartório de registro de imóveis.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="faq-item">
                    <AccordionTrigger>Quais detalhes devo verificar antes de alugar um imóvel?</AccordionTrigger>
                    <AccordionContent>
                        Antes de alugar, verifique a estrutura (hidráulica, elétrica, telhado), estado das paredes e pintura, segurança (portas, janelas, cercas), vizinhança, acesso a serviços (água, luz, internet), e confirme se há dívidas associadas ao imóvel, ou condomínio.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="faq-item">
                    <AccordionTrigger>Como avaliar os detalhes de um imóvel para compra?</AccordionTrigger>
                    <AccordionContent>
                        Para avaliar um imóvel antes da compra, cheque a localização, tamanho (m²), número de quartos/banheiros, estado de conservação, presença de garagem ou área externa, valor de mercado comparável, e documentos que comprovem a legalidade da propriedade e ausência de dívidas.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}