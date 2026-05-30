import React from 'react';
import { motion } from 'motion/react';
import { Heart, Star, Sparkles, ShieldCheck, TreePine, Award, Calendar, Milestone } from 'lucide-react';
import Mascot from '../mascot/Mascot';

interface ValuesCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutView() {
  const brandValues: ValuesCard[] = [
    {
      icon: <Award className="h-6 w-6 text-brand-coral" />,
      title: '100% Hand-Stitched',
      description: 'Zero automated assembly lines. Every hook loop, safety backer lock, and initial embroider is carefully performed by a living human artist.',
    },
    {
      icon: <TreePine className="h-6 w-6 text-brand-coral" />,
      title: 'Cozy Bio Cotton',
      description: 'We source high-grade combed Egyptian milk-cotton threads and hypoallergenic fiber-fills. Soft, sensory-friendly, biodegradable, and baby-safe.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-coral" />,
      title: 'Artisan Supporting',
      description: 'Our veteran grandmas and expert needlework students set their own hours and receive above-market wages. We invest heavily in real craft talent.',
    },
  ];

  const milestones = [
    {
      date: 'Feb 2026',
      title: 'Kitchen Corner Genesis',
      description: 'Penelope "Stitches" Vance hooks the first five plush bees in her sunlit studio, giving away charms to classmates at local design fairs.',
    },
    {
      date: 'Apr 2026',
      title: 'Oliver Octopus Goes Viral',
      description: 'Oliver the curly-tentacle octopus catches attention on handicraft folders, bringing in 50+ backlogs and inspiring our official Mascot design.',
    },
    {
      date: 'Sep 2026',
      title: 'The Stitched Collective Grows',
      description: 'Happy Hookers launches its official workspace, co-opting 12 veteran crochet grandmas and sewing school scholars, shipping 150+ custom items.',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 transition-colors duration-300">
      
      {/* Intro Hero banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        
        {/* Left hand details */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-coral uppercase tracking-widest mb-1.5">
            <Heart className="h-3.5 w-3.5 fill-brand-coral" />
            <span>Stitched with passion</span>
          </span>
          <h1 className="font-fredoka font-bold text-3xl sm:text-4.5xl text-neutral-800 dark:text-white leading-tight mb-5">
            Our Crochet Journey
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 font-semibold">
            We live in an age of plastic injector molds and conveyor-belt automation. Toys are pressed, boxed, and packed by robotic arms, missing out on any real human contact.
          </p>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-semibold">
            At <span className="font-fredoka font-bold text-[#FF8BA1]">Happy Hookers</span>, we decided to pick up the hook and stitch some cozy soul back into daily play. Every knot has a story. Every amigurumi octopus is a small bundle of dedicated time, focus, and warmth.
          </p>
        </div>

        {/* Right hand mascot display */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative p-8 bg-gradient-to-tr from-white to-primary-50 dark:from-brand-peach/10 dark:to-neutral-100 border border-brand-coral/10 rounded-3xl shadow-xs max-w-sm flex flex-col items-center">
            {/* Mascot speaking details */}
            <Mascot context="about" />
            <span className="text-[10px] text-neutral-400 mt-4 text-center font-bold font-fredoka tracking-wide">
              👋 MELLO-HELLO! OCTO THE MASCOT SPEAKS!
            </span>
          </div>
        </div>

      </div>

      <hr className="border-neutral-100 dark:border-neutral-800 mb-16" />

      {/* Brand Values sections Row */}
      <div className="mb-20">
        <h2 className="font-fredoka font-bold text-2xl text-neutral-800 dark:text-white mb-8 text-center">
          The Happy Hooker Philosophy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900 border border-brand-coral/10 dark:border-white/5 rounded-3xl p-6.5 text-center flex flex-col items-center shadow-xs"
            >
              <div className="h-12 w-12 rounded-full bg-brand-coral/10 flex items-center justify-center mb-4">
                {val.icon}
              </div>
              <h3 className="font-fredoka font-bold text-base text-neutral-800 dark:text-white mb-2 leading-none">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-550 dark:text-neutral-405 leading-relaxed font-semibold">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Milestones Timeline */}
      <div className="max-w-4xl mx-auto mb-10 select-none">
        <h2 className="font-fredoka font-bold text-2xl text-neutral-800 dark:text-white mb-10 text-center flex items-center justify-center gap-2">
          <Milestone className="h-6 w-6 text-brand-coral" />
          <span>Timeline Highlights</span>
        </h2>

        <div className="relative border-l-2 border-brand-coral/20 dark:border-white/10 ml-4 md:ml-32 flex flex-col gap-8 pb-4">
          {milestones.map((mil, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              
              {/* Date bullet side label */}
              <div className="hidden md:block absolute right-full mr-10 top-0 text-right w-24">
                <span className="font-fredoka font-bold text-sm text-brand-coral">
                  {mil.date}
                </span>
              </div>

              {/* Dot bullet marker on timeline */}
              <div className="absolute top-1 left-0 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-brand-coral border-2 border-white dark:border-neutral-950 flex items-center justify-center" />

              {/* Milestones Card content block */}
              <div className="bg-white dark:bg-neutral-900 border border-neutral-150/40 dark:border-white/5 p-5 rounded-2xl shadow-xs">
                {/* Mobile date badge */}
                <span className="inline-block md:hidden text-[10px] font-extrabold uppercase tracking-widest text-[#FF8BA1] mb-1.5 bg-[#FF8BA1]/10 px-2.5 py-0.5 rounded-full">
                  {mil.date}
                </span>

                <h3 className="font-fredoka font-bold text-sm sm:text-base text-neutral-800 dark:text-white leading-normal mb-1">
                  {mil.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-semibold leading-relaxed">
                  {mil.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
