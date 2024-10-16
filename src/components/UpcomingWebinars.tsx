'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const featuredWebinars = [
        {
            title: 'Strength Training Fundamentals',
            description:
                'Learn the core principles of strength training to build muscle and improve your overall fitness.',
            slug: 'strength-training-fundamentals',
            isFeatured: true,
        },
        {
            title: 'Nutrition for Optimal Performance',
            description:
                'Discover how proper nutrition can enhance your performance and support your fitness goals.',
            slug: 'nutrition-for-optimal-performance',
            isFeatured: true,
        },
        {
            title: 'HIIT: High-Intensity Interval Training',
            description:
                'Explore the benefits of HIIT and learn how to incorporate it into your workout routine for maximum efficiency.',
            slug: 'hiit-workout-strategies',
            isFeatured: true,
        },
        {
            title: 'Yoga for Flexibility & Recovery',
            description:
                'Improve your flexibility and recovery time with yoga practices tailored to athletes and fitness enthusiasts.',
            slug: 'yoga-for-flexibility-recovery',
            isFeatured: true,
        },
        {
            title: 'Mastering Cardio Workouts',
            description:
                'Get the most out of your cardio sessions with tips and strategies for all fitness levels.',
            slug: 'mastering-cardio-workouts',
            isFeatured: true,
        },
        {
            title: 'Mental Toughness for Fitness Success',
            description:
                'Learn the mental strategies necessary to push past plateaus and stay motivated in your fitness journey.',
            slug: 'mental-toughness-for-fitness',
            isFeatured: true,
        },
    ];

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>

                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: '/'
                            }
                        ))}
                    />
                </div>

                <div className="mt-10 text-center">
                    <Link href={"/"}
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars