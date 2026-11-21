import React from 'react';

export const wavyYellowBgStyle = {
  backgroundColor: '#F8D22E',
  backgroundImage: 'url("/wave-pattern.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export function BrandLogo({ size = 'md' }) {
  const sizeCls =
    size === 'sm'
      ? 'h-10 sm:h-11'
      : size === 'nav'
      ? 'h-11 sm:h-14'
      : size === 'lg'
      ? 'h-16 sm:h-20'
      : 'h-12 md:h-14';

  return (
    <img
      src="/brand-logo.png"
      alt="LaundryRage"
      className={`${sizeCls} w-auto object-contain select-none`}
    />
  );
}
