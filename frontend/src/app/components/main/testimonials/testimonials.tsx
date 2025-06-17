'use client'
import { gsap } from 'gsap';
import { useEffect } from 'react';
import {Card, CardContent, CardHeader} from '@/components/ui/card';

export function Testimonials() {
    useEffect(() => {
        gsap.to('.testimonial', {
            x: '-100%',
            duration: 10,
            repeat: -1,
            ease: 'linear',
        });
    }, []);

    return (
        <section className="overflow-hidden p-6">
            <div>
                <h4 className="text-2xl font-bold text-center uppercase">Testemunhos</h4>
                <p className="text-lg  text-center">
                    Veja o que alguns dos nossos clientes, intermediarios, e vendedores dizem sobre o nosso serviço
                </p>
            </div>

            <div className="flex gap-4 testimonial">
                <Card className="min-w-[300px]">
                    <CardContent>
                        <p>"Ótimo serviço!"</p>
                        <p>- Cliente 1</p>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardContent>
                        <p>"Recomendo muito!"</p>
                        <p>- Cliente 2</p>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardContent>
                        <p>"Recomendo muito!"</p>
                        <p>- Cliente 3</p>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardContent>
                        <p>"Recomendo muito!"</p>
                        <p>- Cliente 4</p>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardContent>
                        <p>"Recomendo muito!"</p>
                        <p>- Cliente 5</p>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardHeader>
                        <div>
                            <img alt="Avatar" src="https//:localhost2" />

                        </div>
                    </CardHeader>
                    <CardContent>
                        <p>"Recomendo muito!"</p>
                        <p>- Cliente 6</p>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardContent>
                        <p>"Recomendo muito!"</p>
                        <p>- Cliente 7</p>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardContent>
                        <p>"Recomendo muito!"</p>
                        <p>- Cliente 6</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}