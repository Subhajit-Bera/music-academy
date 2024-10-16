'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const fitnessAcademyTestimonials = [
    {
        quote:
            "Joining this fitness academy transformed not just my body, but my mindset. The personalized training plans helped me achieve goals I never thought possible!",
        name: 'Jordan Davis',
        title: 'Strength Training Student',
    },
    {
        quote:
            "The coaches here are incredibly supportive and knowledgeable. I've seen huge improvements in my endurance and overall fitness. The community is amazing too!",
        name: 'Taylor Green',
        title: 'HIIT Class Participant',
    },
    {
        quote:
            "Thanks to the expert guidance from my trainer, I feel more confident and capable in my workouts. This academy truly empowers you to reach your best self.",
        name: 'Ryan Lee',
        title: 'Personal Training Client',
    },
    {
        quote:
            "The yoga classes here have not only improved my flexibility, but also my mental focus. The instructors create such a welcoming and peaceful environment.",
        name: 'Jessica Thompson',
        title: 'Yoga Student',
    },
    {
        quote:
            "The boxing program here pushed me to new limits. I love how the trainers focus on technique and performance—it’s made a huge difference in my fitness level!",
        name: 'Chris Walker',
        title: 'Boxing Student',
    },
];




function FitnessTestimonials() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Feel the Strength: Stories of Transformation</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={fitnessAcademyTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default FitnessTestimonials