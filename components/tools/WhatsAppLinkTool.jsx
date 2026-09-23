'use client';

import { useMemo, useState } from 'react';
import Icon from '@/components/Icon';
import ToolShell, { FieldLabel, ErrorText, SuccessText } from './ToolShell';

const COUNTRY_CODES = [
  { code: '91', label: 'India (+91)' },
  { code: '1', label: 'USA / Canada (+1)' },
  { code: '44', label: 'United Kingdom (+44)' },
  { code: '971', label: 'UAE (+971)' },
  { code: '61', label: 'Australia (+61)' },
  { code: '65', label: 'Singapore (+65)' },
  { code: '966', label: 'Saudi Arabia (+966)' },
  { code: '974', label: 'Qatar (+974)' },
  { code: '968', label: 'Oman (+968)' },
  { code: '92', label: 'Pakistan (+92)' },
  { code: '880', label: 'Bangladesh (+880)' },
  { code: '94', label: 'Sri Lanka (+94)' },
  { code: '49', label: 'Germany (+49)' },
  { code: '33', label: 'France (+33)' },
  { code: '81', label: 'Japan (+81)' },
  { code: '86', label: 'China (+86)' },
  { code: '27', label: 'South Africa (+27)' },
];

export default function WhatsAppLinkTool() {
  const [countryCode, setCountryCode] = useState('91');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [generatedNumber, setGeneratedNumber] = useState('');

  const digitsOnly = phone.replace(/\D/g, '');

  const link = useMemo(() => {
    if (!generatedNumber) return '';
    const base = `https://wa.me/${generatedNumber}`;
    return message.trim() ? `${base}?text=${encodeURIComponent(message.trim())}` : base;
  }, [generatedNumber, message]);

  const handleGenerate = () => {
    setSuccess('');
    if (!digitsOnly) {
      setError('Enter a phone number.');
      setGeneratedNumber('');
      return;
    }
    if (digitsOnly.length < 6 || digitsOnly.length > 14) {
      setError('Enter a valid phone number (without the country code).');
      setGeneratedNumber('');
      return;
    }
    setError('');
    setGeneratedNumber(`${countryCode}${digitsOnly}`);
  };

  const handleCopy = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setSuccess('Link copied to clipboard.');
      setTimeout(() => setSuccess(''), 2000);
    } catch {
      setError('Could not copy automatically — please copy manually.');
    }
  };

  const handleReset = () => {
    setCountryCode('91');
    setPhone('');
    setMessage('');
    setError('');
    setSuccess('');
    setGeneratedNumber('');
  };

  return (
    <ToolShell>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <div>
          <FieldLabel htmlFor="wa-country">Country code</FieldLabel>
          <select
            id="wa-country"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15"
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>

          <div className="mt-5">
            <FieldLabel htmlFor="wa-phone">Phone number</FieldLabel>
            <input
              id="wa-phone"
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="9999999999"
              className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/35 transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15"
            />
            <p className="mt-1.5 text-[12px] text-navy/40">Enter the number without the country code.</p>
          </div>

          <div className="mt-5">
            <FieldLabel htmlFor="wa-message">Pre-filled message (optional)</FieldLabel>
            <textarea
              id="wa-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hello there!"
              rows={3}
              className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/35 transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15"
            />
          </div>

          <ErrorText>{error}</ErrorText>
          <SuccessText>{success}</SuccessText>

          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" onClick={handleGenerate} className="btn-teal">
              Generate Link
              <Icon name="wa" className="h-4 w-4" />
            </button>
            <button type="button" onClick={handleReset} className="btn-ghost">
              Reset
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-mist p-6">
          <h3 className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-navy/50">
            Your WhatsApp link
          </h3>
          {link ? (
            <>
              <p className="mt-4 break-all rounded-xl border border-line bg-white p-4 text-[13px] font-semibold text-navy/80">
                {link}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" onClick={handleCopy} className="btn-ghost">
                  Copy link
                </button>
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Open in WhatsApp
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </>
          ) : (
            <div className="mt-6 flex flex-col items-center gap-3 py-6 text-center">
              <Icon name="wa" className="h-10 w-10 text-navy/25" strokeWidth={1.2} />
              <p className="text-[13px] text-navy/45">Fill in the details and generate your link.</p>
            </div>
          )}
        </div>
      </div>
    </ToolShell>
  );
}
