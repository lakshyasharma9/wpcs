"use client";

import { useLayoutEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface ImageScrollStackProps {
  images: string[];
  projectTitle: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
}

export default function ImageScrollStack({
  images,
  projectTitle,
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '10%',
  scaleEndPosition = '5%',
  baseScale = 0.85,
}: ImageScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  const lastScrollRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = document.querySelector('.scroll-stack-end');
    const endElementTop = endElement ? endElement.getBoundingClientRect().top + window.scrollY : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + window.scrollY;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY),
        scale: Math.round(scale * 10000) / 10000,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.5 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.0001;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
        card.style.transition = 'transform 0.1s ease-out';
        card.style.transform = transform;
        lastTransformsRef.current.set(i, newTransform);
      }
    });

    isUpdatingRef.current = false;
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, calculateProgress, parsePercentage]);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    
    // Only update if scroll has actually changed by at least 2px
    if (Math.abs(currentScroll - lastScrollRef.current) < 2) {
      return;
    }
    
    lastScrollRef.current = currentScroll;
    
    // Use requestAnimationFrame for smooth updates
    if (!isUpdatingRef.current) {
      requestAnimationFrame(() => {
        updateCardTransforms();
      });
    }
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const cards = Array.from(document.querySelectorAll('.image-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      (card.style as any).WebkitFontSmoothing = 'antialiased';
      (card.style as any).imageRendering = 'crisp-edges';
    });

    // Use native scroll instead of Lenis for navbar compatibility
    window.addEventListener('scroll', handleScroll, { passive: true });

    updateCardTransforms();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [itemDistance, handleScroll, updateCardTransforms]);

  return (
    <div style={{ padding: '10vh 0 50vh' }}>
      {images.map((img, idx) => (
        <div
          key={idx}
          className="image-stack-card"
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(500px, 70vh, 800px)',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            transformStyle: 'preserve-3d',
          }}
        >
          <Image
            src={img}
            alt={`${projectTitle} — view ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
            loading={idx === 0 ? "eager" : "lazy"}
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}
      <div className="scroll-stack-end" style={{ width: '100%', height: '1px' }} />
    </div>
  );
}
