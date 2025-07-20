import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export function FAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const faqData = [
        {
            id: 1,
            question: "Como posso vender o meu imóvel?",
            answer: "Para vender seu imóvel, primeiro avalie o valor de mercado com um agente imobiliário ou avaliação profissional. Prepare o imóvel com reparos e limpeza, reúna documentos como escritura e certidão negativa de débitos, e anuncie em plataformas confiáveis. Negocie com potenciais compradores e finalize a venda com um contrato assinado e registro no cartório."
        },
        {
            id: 2,
            question: "Quais documentos são necessários para alugar um imóvel?",
            answer: "Para alugar um imóvel, geralmente são necessários: cópia de B.I e Título de residência, comprovante de renda (como contracto ou extrato bancário), e assinatura de contrato de locação. Verifique com o proprietário ou imobiliária os requisitos específicos."
        },
        {
            id: 3,
            question: "Como comprar um imóvel usado?",
            answer: "Para comprar um imóvel usado, pesquise o mercado, visite o imóvel e verifique seu estado. Contrate um advogado ou corretor para analisar documentos como escritura, certidão. Negocie o preço, assine o contrato de compra e venda, e registre a transação no cartório de registro de imóveis."
        },
        {
            id: 4,
            question: "Quais detalhes devo verificar antes de alugar um imóvel?",
            answer: "Antes de alugar, verifique a estrutura (hidráulica, elétrica, telhado), estado das paredes e pintura, segurança (portas, janelas, cercas), vizinhança, acesso a serviços (água, luz, internet), e confirme se há dívidas associadas ao imóvel, ou condomínio."
        },
        {
          id: 5,
          question: "Como avaliar os detalhes de um imóvel para compra",
          answer: "Para avaliar um imóvel antes da compra, cheque a localização, tamanho (m²), número de quartos/banheiros, estado de conservação, presença de garagem ou área externa, valor de mercado comparável, e documentos que comprovem a legalidade da propriedade e ausência de dívidas."
        },
        {
            id: 6,
            question: "Quais são os principais fatores a considerar ao vender, alugar ou comprar uma casa?",
            answer: "Para vender, valorize o imóvel, defina um preço justo, divulgue bem e regularize a documentação. No processo de aluguer, avalie localização, estado do imóvel, valor de mercado e perfil do inquilino. E na compra, confira localização, condições legais, estado da propriedade e valor comparativo.\n" +
                "Em todos os casos, um profissional especializado ajuda a garantir segurança na transação."
        },
    ];

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
                    ¿PERGUNTAS FREQUENTES?
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="bg-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-300 transition-colors"
                            >
                                <span className="font-medium text-gray-900">
                                    {faq.question}
                                </span>
                                <div className="ml-4 flex-shrink-0">
                                    {openFAQ === faq.id ? (
                                        <Minus className="w-5 h-5 text-gray-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-600" />
                                    )}
                                </div>
                            </button>

                            {openFAQ === faq.id && (
                                <div className="px-6 pb-5">
                                    <p className="text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      
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