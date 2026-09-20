'use client';

import { useState } from 'react';
import Icon from './Icon';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';

export default function ProductCard({ product }) {
  const hasOptions = product.durations.length > 1;
  const [selected, setSelected] = useState(product.durations[0]);

  return (
    <div className="card flex h-full flex-col">
      <div className="flex items-center gap-3.5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-teal-400">
          <Icon name={product.icon} className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-extrabold leading-tight text-navy" title={product.name}>
            {product.name}
          </h3>
          <p className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.1em] text-teal-600">
            {product.category}
          </p>
        </div>
      </div>

      <div className="mt-6 flex-1 border-t border-line pt-5">
        {hasOptions ? (
          <>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-navy/45">
              Available options
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {product.durations.map((duration) => (
                <button
                  key={duration}
                  type="button"
                  onClick={() => setSelected(duration)}
                  aria-pressed={selected === duration}
                  className={`rounded-full border px-3 py-1.5 text-[12px] font-bold transition-colors duration-200 ${
                    selected === duration
                      ? 'border-teal-600 bg-teal-600/10 text-teal-600'
                      : 'border-line text-navy/60 hover:border-navy/25'
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-navy/45">Validity</p>
            <p className="mt-1.5 text-sm font-bold text-navy/75">{product.durations[0]}</p>
          </>
        )}
      </div>

      <a
        href={getProductWhatsAppUrl(product.name, selected)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-teal mt-6 w-full text-[13px]"
      >
        Get Product
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    </div>
  );
}
