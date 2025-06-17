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
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="faq-item">
                    <AccordionTrigger>Pergunta 1</AccordionTrigger>
                    <AccordionContent>Resposta 1</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="faq-item">
                    <AccordionTrigger>Pergunta 2</AccordionTrigger>
                    <AccordionContent>Resposta 2</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="faq-item">
                    <AccordionTrigger>Pergunta 3</AccordionTrigger>
                    <AccordionContent>Resposta 3</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="faq-item">
                    <AccordionTrigger>Pergunta 4</AccordionTrigger>
                    <AccordionContent>Resposta 4</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="faq-item">
                    <AccordionTrigger>Pergunta 5</AccordionTrigger>
                    <AccordionContent>Resposta 5</AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}