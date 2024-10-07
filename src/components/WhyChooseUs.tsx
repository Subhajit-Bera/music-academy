"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const fitnessAcademyContent = [
  {
    title: 'Unleash Your Full Potential: A Personal Fitness Journey',
    description:
      'Embark on a fitness journey that’s uniquely yours. Our personalized training plans adapt to your individual goals, guiding you toward unparalleled strength and health. At our fitness academy, your aspirations meet our dedicated support, creating a powerful path to success.',
  },
  {
    title: 'Unleash Your Full Potential: A Personal Fitness Journey',
    description:
      'Embark on a fitness journey that’s uniquely yours. Our personalized training plans adapt to your individual goals, guiding you toward unparalleled strength and health. At our fitness academy, your aspirations meet our dedicated support, creating a powerful path to success.',
  },
  {
    title: 'Unleash Your Full Potential: A Personal Fitness Journey',
    description:
      'Embark on a fitness journey that’s uniquely yours. Our personalized training plans adapt to your individual goals, guiding you toward unparalleled strength and health. At our fitness academy, your aspirations meet our dedicated support, creating a powerful path to success.',
  },
  {
    title: 'Real-Time Coaching & Engagement',
    description:
      'Experience a dynamic learning environment where immediate feedback and live coaching drive your progress. Our interactive approach ensures that you understand techniques and form, empowering you to reach new heights in your fitness journey.',
  },
  {
    title: 'Innovative Training Programs',
    description:
      'Our programs are continuously updated to include the latest fitness trends, techniques, and technologies. Stay ahead with cutting-edge methods designed to maximize your performance and help you meet your health and fitness goals.',
  },
  {
    title: 'Endless Growth Opportunities',
    description:
      'With a vast library of resources and a wide range of courses, there’s always something new to explore. Whether you’re working on strength, endurance, or flexibility, our fitness academy provides endless opportunities for growth and progress.',
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={fitnessAcademyContent}/>
    </div>
  )
}

export default WhyChooseUs
