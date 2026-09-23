'use client';

import { useMemo, useState } from 'react';
import Icon from '@/components/Icon';
import ToolShell, { FieldLabel, ErrorText } from './ToolShell';

const RATES = [0, 5, 12, 18, 28];

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
});

export default function GstCalculatorTool() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState(18);
  const [customRate, setCustomRate] = useState('');
  const [useCustom, setUseCustom] = useState(false);
  const [mode, setMode] = useState('add'); // 'add' | 'remove'
  const [error, setError] = useState('');

  const activeRate = useCustom ? parseFloat(customRate) : rate;

  const result = useMemo(() => {
    const value = parseFloat(amount);
    if (!amount || Number.isNaN(value) || value < 0) return null;
    if (useCustom && (customRate === '' || Number.isNaN(activeRate) || activeRate < 0)) return null;

    const r = activeRate / 100;
    if (mode === 'add') {
      const gstAmount = value * r;
      return { base: value, gst: gstAmount, total: value + gstAmount };
    }
    const base = value / (1 + r);
    const gstAmount = value - base;
    return { base, gst: gstAmount, total: value };
  }, [amount, activeRate, useCustom, customRate, mode]);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (value && (Number.isNaN(parseFloat(value)) || parseFloat(value) < 0)) {
      setError('Enter a valid, positive amount.');
    } else {
      setError('');
    }
  };

  const handleReset = () => {
    setAmount('');
    setRate(18);
    setCustomRate('');
    setUseCustom(false);
    setMode('add');
    setError('');
  };

  return (
    <ToolShell>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <div className="flex gap-2 rounded-xl border border-line bg-mist p-1">
            <button
              type="button"
              onClick={() => setMode('add')}
              aria-pressed={mode === 'add'}
              className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-colors duration-200 ${
                mode === 'add' ? 'bg-white text-teal-600 shadow-soft' : 'text-navy/50'
              }`}
            >
              Add GST
            </button>
            <button
              type="button"
              onClick={() => setMode('remove')}
              aria-pressed={mode === 'remove'}
              className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-colors duration-200 ${
                mode === 'remove' ? 'bg-white text-teal-600 shadow-soft' : 'text-navy/50'
              }`}
            >
              Remove GST
            </button>
          </div>

          <div className="mt-6">
            <FieldLabel htmlFor="gst-amount">
              {mode === 'add' ? 'Base amount (₹)' : 'GST-inclusive total (₹)'}
            </FieldLabel>
            <input
              id="gst-amount"
              type="number"
              inputMode="decimal"
              min="0"
              value={amount}
              onChange={handleAmountChange}
              placeholder="e.g. 10000"
              className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/35 transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15"
            />
            <ErrorText>{error}</ErrorText>
          </div>

          <div className="mt-6">
            <FieldLabel>GST rate</FieldLabel>
            <div className="flex flex-wrap gap-2">
              {RATES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRate(r);
                    setUseCustom(false);
                  }}
                  aria-pressed={!useCustom && rate === r}
                  className={`chip transition-colors duration-200 ${
                    !useCustom && rate === r ? '!border-teal-600 !bg-teal-600/10 !text-teal-600' : ''
                  }`}
                >
                  {r}%
                </button>
              ))}
              <button
                type="button"
                onClick={() => setUseCustom(true)}
                aria-pressed={useCustom}
                className={`chip transition-colors duration-200 ${
                  useCustom ? '!border-teal-600 !bg-teal-600/10 !text-teal-600' : ''
                }`}
              >
                Custom
              </button>
            </div>
            {useCustom && (
              <input
                type="number"
                inputMode="decimal"
                min="0"
                value={customRate}
                onChange={(e) => setCustomRate(e.target.value)}
                placeholder="Enter custom GST %"
                className="mt-3 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/35 transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15"
              />
            )}
          </div>

          <button type="button" onClick={handleReset} className="btn-ghost mt-6 w-full">
            Reset
          </button>
        </div>

        <div className="rounded-2xl border border-line bg-mist p-6 sm:p-7">
          <h3 className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-navy/50">Result</h3>
          {result ? (
            <div className="mt-5 space-y-4">
              <Row label="Base amount" value={inr.format(result.base)} />
              <Row label={`GST (${useCustom ? customRate || 0 : rate}%)`} value={inr.format(result.gst)} />
              <div className="border-t border-line pt-4">
                <Row label="Total amount" value={inr.format(result.total)} strong />
              </div>
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center gap-3 py-6 text-center">
              <Icon name="percent" className="h-10 w-10 text-navy/25" strokeWidth={1.2} />
              <p className="text-[13px] text-navy/45">Enter an amount to see the GST breakdown.</p>
            </div>
          )}
        </div>
      </div>
    </ToolShell>
  );
}

function Row({ label, value, strong = false }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className={`text-sm ${strong ? 'font-extrabold text-navy' : 'text-navy/60'}`}>{label}</span>
      <span className={`font-extrabold tabular-nums ${strong ? 'text-lg text-teal-600' : 'text-navy'}`}>
        {value}
      </span>
    </div>
  );
}
