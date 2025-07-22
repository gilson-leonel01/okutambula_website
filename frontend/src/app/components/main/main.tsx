'use client'
import { FAQ } from "./faq/faq";
import { Hero } from "./hero/hero";
import { WhoAreUs } from "./whoAreUs/whoAreUs";
import { Separator } from "./separator/separator";
import { GetInTouch } from "./getInTouch/getInTouch";
import { Testimonials } from "./testimonials/testimonials";
import { ResearchBased } from "./researchBased/researchBased";
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