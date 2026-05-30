import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

interface InstaPost {
  id: string;
  imgUrl: string;
  likes: string;
  comments: string;
}

const INSTA_POSTS: InstaPost[] = [
  {
    id: 'i1',
    imgUrl: 'https://images.unsplash.com/photo-1627998794066-5a484cae63e2?auto=format&fit=crop&q=80&w=400',
    likes: '1.2k',
    comments: '48'
  },
  {
    id: 'i2',
    imgUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400',
    likes: '890',
    comments: '32'
  },
  {
    id: 'i3',
    imgUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=400',
    likes: '1.5k',
    comments: '72'
  },
  {
    id: 'i4',
    imgUrl: 'https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&q=80&w=400',
    likes: '2.1k',
    comments: '110'
  },
  {
    id: 'i5',
    imgUrl: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=400',
    likes: '965',
    comments: '29'
  },
  {
    id: 'i6',
    imgUrl: 'https://images.unsplash.com/photo-1615486511487-12f0c7f56815?auto=format&fit=crop&q=80&w=400',
    likes: '1.4k',
    comments: '55'
  }
];

export default function InstagramGallery() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-coral uppercase tracking-widest mb-1.5 select-none">
            <Instagram className="h-3.5 w-3.5" />
            <span>Join the Loop @happyhookersco</span>
          </span>
          <h2 className="font-fredoka font-bold text-2xl sm:text-3.5xl text-neutral-800 dark:text-white tracking-tight">
            Our Instagram Gallery
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            Share your cozy amigurumi setups with us using the hashtag #HappyHookers!
          </p>
        </div>

        {/* Insta Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {INSTA_POSTS.map((post) => (
            <motion.a
              key={post.id}
              href="#instagram-external-link"
              whileHover={{ scale: 1.02 }}
              className="aspect-square relative rounded-2xl overflow-hidden group border border-brand-coral/5 shadow-xs bg-neutral-100"
            >
              <img
                src={post.imgUrl}
                alt="Instagram post by @happyhookersco"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Stats overlay */}
              <div className="absolute inset-0 bg-neutral-900/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white z-10 pointer-events-none">
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4 fill-white text-white" />
                  <span className="text-xs font-bold font-fredoka">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4 fill-white text-white" />
                  <span className="text-xs font-bold font-fredoka">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
