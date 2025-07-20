'use client'
import { gsap } from 'gsap';
import Image from 'next/image';
import male from "./male_avatar.svg";
import female from "./female_avatar.svg";
import React, { useEffect } from 'react';
import StarButton from "@/components/ui/starButton";
import {
    Card,
    CardContent,
    CardHeader
} from '@/components/ui/card';

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
                <h4 className="text-2xl font-bold text-center text-gray-900 uppercase">Testemunhos</h4>
                <h4 className="text-2xl font-bold text-center uppercase">Testemunhos</h4>
                <p className="text-lg text-center">
                    Veja o que alguns dos nossos clientes, intermediarios, e vendedores dizem sobre o nosso serviço
                </p>
            </div>

            <div className="flex gap-4 testimonial mt-6">
                <Card className="min-w-[300px]">
                    <CardHeader className="flex gap-2 justify-between">
                        <Image alt="Avatar" src={male} className="w-12 h-12" />
                        <div className="flex-col gap-2 items-end">
                            <h3 className="font-semibold">Yuran Simão</h3>
                            <p>Engenheiro Informático</p>
                        </div>
                    </CardHeader>

                    <div className="border-t border-slate-400 w-64 mx-auto"></div>

                    <CardContent>
                        <p>Ótimo serviço!</p>
                        <div className="flex gap-2">
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <StarButton />
                            <StarButton />
                            <StarButton />
                            <StarButton />
                            <StarButton />
                        </div>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardHeader className="flex gap-2 justify-between">
                        <Image alt="Avatar" src={female} className="w-12 h-12" />
                        <div className="flex-col gap-2 items-end">
                            <h3 className="font-semibold">Luana Cahanda</h3>
                            <p>Engenheira Informática</p>
                        </div>
                    </CardHeader>

                    <div className="border-t border-slate-400 w-64 mx-auto"></div>

                    <CardContent>
                        <p>Recomendo muito!</p>
                        <div className="flex gap-2">
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <StarButton />
                            <StarButton />
                            <StarButton />
                            <StarButton />
                            <StarButton />
                        </div>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardHeader className="flex gap-2 justify-between">
                        <Image alt="Avatar" src={male} className="w-12 h-12" />
                        <div className="flex-col gap-2 items-end">
                            <h3 className="font-semibold">Mandele Tomás</h3>
                            <p>Engenheiro Informático</p>
                        </div>
                    </CardHeader>

                    <div className="border-t border-slate-400 w-64 mx-auto"></div>

                    <CardContent>
                        <p>Excelente serviço!</p>
                        <div className="flex gap-2">
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <StarButton />
                            <StarButton />
                            <StarButton />
                            <StarButton />
                            <StarButton />
                        </div>
                    </CardContent>
                </Card>

                <Card className="min-w-[300px]">
                    <CardHeader className="flex gap-2 justify-between">
                        <Image alt="Avatar" src={female} className="w-12 h-12" />
                        <div className="flex-col gap-2 items-end">
                            <h3 className="font-semibold">Isabel Tomás</h3>
                            <p>Engenheira Informática</p>
                        </div>
                    </CardHeader>

                    <div className="border-t border-slate-400 w-64 mx-auto"></div>

                    <CardContent>
                        <p>Liguem muito!</p>
                        <div className="flex gap-2">
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <span className="mt-2 flex items-center gap-1 text-amber-500">★</span>
                            <StarButton />
                            <StarButton />
                            <StarButton />
                            <StarButton />
                            <StarButton />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}