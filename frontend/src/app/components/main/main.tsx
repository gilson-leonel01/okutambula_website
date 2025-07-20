'use client'
import { FAQ } from "./faq/faq";
import { Hero } from "./hero/hero";
import { WhoAreUs } from "./whoAreUs/whoAreUs";
import { Separator } from "./separator/separator";
import { Testimonials } from "./testimonials/testimonials";
import { ResearchBased } from "./researchBased/researchBased";
import { GetInTouch } from "@/app/components/main/getInTouch/getInTouch";
import { FeaturedProperties } from "./featuredProperties/featuredProperties";
import { MissionVisionValues } from "./missionVisionValues/missionVisionValues";

export function Main() {
    return(
        <main>
            <Hero />
            <Separator />
            <WhoAreUs />
            <MissionVisionValues />
            <ResearchBased />
            <FeaturedProperties />
            <Testimonials />
            <FAQ />
            <GetInTouch />
        </main>
    );
}