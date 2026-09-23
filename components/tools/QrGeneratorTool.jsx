'use client';

import { useRef, useState } from 'react';
import Icon from '@/components/Icon';
import ToolShell, { FieldLabel, ErrorText, SuccessText } from './ToolShell';

const MAX_LENGTH = 1500;

export default function QrGeneratorTool() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
    setGenerated(false);
    setError('');
  };

  const handleGenerate = async () => {
    setSuccess('');
    const value = text.trim();
    if (!value) {
      setError('Enter some text or a URL to generate a QR code.');
      return;
    }
    if (value.length > MAX_LENGTH) {
      setError('That text is too long for a reliable QR code. Try something shorter.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const QRCode = (await import('qrcode')).default;
      await QRCode.toCanvas(canvasRef.current, value, {
        width: 280,
        margin: 2,
        color: { dark: '#0B2436', light: '#FFFFFF' },
      });
      setGenerated(true);
    } catch {
      setError('Could not generate a QR code for this input. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'fenbrix-qr-code.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleCopyInput = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setSuccess('Input copied to clipboard.');
      setTimeout(() => setSuccess(''), 2000);
    } catch {
      setError('Could not copy automatically — please copy the text manually.');
    }
  };

  const handleClear = () => {
    setText('');
    setError('');
    setSuccess('');
    setGenerated(false);
  };

  return (
    <ToolShell>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <div>
          <FieldLabel htmlFor="qr-input">Text or URL</FieldLabel>
          <textarea
            id="qr-input"
            value={text}
            onChange={handleChange}
            placeholder="https://www.fenbrix.in or any text…"
            rows={4}
            maxLength={MAX_LENGTH}
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/35 transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15"
          />
          <p className="mt-1.5 text-right text-[11px] text-navy/35">{text.length}/{MAX_LENGTH}</p>
          <ErrorText>{error}</ErrorText>
          <SuccessText>{success}</SuccessText>

          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={handleGenerate} disabled={loading} className="btn-teal disabled:opacity-60">
              {loading ? 'Generating…' : 'Generate QR Code'}
              <Icon name="qr" className="h-4 w-4" />
            </button>
            <button type="button" onClick={handleCopyInput} className="btn-ghost">
              Copy input
            </button>
            <button type="button" onClick={handleClear} className="btn-ghost">
              Clear
            </button>
          </div>
        </div>

        <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-line bg-mist p-6">
          {!generated && (
            <div className="flex flex-col items-center gap-3 text-center">
              <Icon name="qr" className="h-14 w-14 text-navy/25" strokeWidth={1.2} />
              <p className="text-[13px] text-navy/45">Your QR code preview will appear here.</p>
            </div>
          )}
          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            className={`rounded-xl bg-white shadow-soft ${generated ? 'block' : 'hidden'}`}
            aria-label="Generated QR code preview"
          />
          {generated && (
            <button type="button" onClick={handleDownload} className="btn-primary w-full">
              Download PNG
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </ToolShell>
  );
}
