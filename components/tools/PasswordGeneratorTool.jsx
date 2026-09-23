'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import ToolShell, { ErrorText, SuccessText } from './ToolShell';

const CHAR_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

const TOGGLES = [
  { key: 'uppercase', label: 'Uppercase (A-Z)' },
  { key: 'lowercase', label: 'Lowercase (a-z)' },
  { key: 'numbers', label: 'Numbers (0-9)' },
  { key: 'symbols', label: 'Symbols (!@#$…)' },
];

function generateSecurePassword(length, options) {
  const pools = Object.entries(options)
    .filter(([, on]) => on)
    .map(([key]) => CHAR_SETS[key]);
  if (!pools.length) return '';

  const allChars = pools.join('');
  const values = new Uint32Array(length);
  crypto.getRandomValues(values);

  let password = '';
  for (let i = 0; i < length; i += 1) {
    password += allChars[values[i] % allChars.length];
  }
  return password;
}

function getStrength(password, options) {
  const typesUsed = Object.values(options).filter(Boolean).length;
  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;
  if (typesUsed >= 3) score += 1;
  if (typesUsed === 4) score += 1;

  if (!password) return { label: '', width: '0%', color: 'bg-line' };
  if (score <= 1) return { label: 'Weak', width: '25%', color: 'bg-rose-500' };
  if (score <= 3) return { label: 'Fair', width: '55%', color: 'bg-orange-500' };
  if (score === 4) return { label: 'Strong', width: '80%', color: 'bg-teal-500' };
  return { label: 'Very strong', width: '100%', color: 'bg-teal-600' };
}

export default function PasswordGeneratorTool() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const strength = getStrength(password, options);

  const toggleOption = (key) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleGenerate = () => {
    setSuccess('');
    const anySelected = Object.values(options).some(Boolean);
    if (!anySelected) {
      setError('Select at least one character type.');
      setPassword('');
      return;
    }
    setError('');
    setPassword(generateSecurePassword(length, options));
  };

  const handleCopy = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setSuccess('Password copied to clipboard.');
      setTimeout(() => setSuccess(''), 2000);
    } catch {
      setError('Could not copy automatically — please copy manually.');
    }
  };

  return (
    <ToolShell>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="pw-length" className="text-[13px] font-extrabold text-navy/75">
              Password length
            </label>
            <span className="text-[13px] font-extrabold text-teal-600">{length} characters</span>
          </div>
          <input
            id="pw-length"
            type="range"
            min="6"
            max="64"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="mt-2 w-full accent-teal-600"
          />

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {TOGGLES.map((t) => (
              <label
                key={t.key}
                className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-navy/75 transition-colors hover:border-teal-400/50"
              >
                <input
                  type="checkbox"
                  checked={options[t.key]}
                  onChange={() => toggleOption(t.key)}
                  className="h-4 w-4 accent-teal-600"
                />
                {t.label}
              </label>
            ))}
          </div>

          <ErrorText>{error}</ErrorText>

          <button type="button" onClick={handleGenerate} className="btn-teal mt-6 w-full">
            {password ? 'Regenerate password' : 'Generate password'}
            <Icon name="key" className="h-4 w-4" />
          </button>
        </div>

        <div className="rounded-2xl border border-line bg-mist p-6">
          <h3 className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-navy/50">
            Your password
          </h3>

          {password ? (
            <>
              <p className="mt-4 break-all rounded-xl border border-line bg-white p-4 font-mono text-[15px] font-bold text-navy">
                {password}
              </p>

              <div className="mt-4">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${strength.color}`}
                    style={{ width: strength.width }}
                  />
                </div>
                <p className="mt-1.5 text-[12px] font-bold text-navy/50">{strength.label}</p>
              </div>

              <SuccessText>{success}</SuccessText>

              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" onClick={handleCopy} className="btn-ghost">
                  Copy password
                </button>
                <button type="button" onClick={handleGenerate} className="btn-ghost">
                  Regenerate
                </button>
              </div>
            </>
          ) : (
            <div className="mt-6 flex flex-col items-center gap-3 py-6 text-center">
              <Icon name="key" className="h-10 w-10 text-navy/25" strokeWidth={1.2} />
              <p className="text-[13px] text-navy/45">Generate a password to see it here.</p>
            </div>
          )}
        </div>
      </div>
    </ToolShell>
  );
}
