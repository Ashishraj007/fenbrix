'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import ToolShell, { ErrorText, SuccessText } from './ToolShell';

function describeError(err, input) {
  const message = err?.message || 'Invalid JSON.';
  const match = message.match(/position (\d+)/);
  if (match) {
    const pos = parseInt(match[1], 10);
    const before = input.slice(0, pos);
    const line = before.split('\n').length;
    const column = pos - before.lastIndexOf('\n');
    return `${message} — around line ${line}, column ${column}.`;
  }
  return message;
}

export default function JsonFormatterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const parseOrFail = () => {
    if (!input.trim()) {
      setError('Paste some JSON first.');
      setSuccess('');
      return null;
    }
    try {
      return JSON.parse(input);
    } catch (err) {
      setError(describeError(err, input));
      setSuccess('');
      setOutput('');
      return undefined;
    }
  };

  const handleFormat = () => {
    const data = parseOrFail();
    if (data === null || data === undefined) return;
    setError('');
    setSuccess('');
    setOutput(JSON.stringify(data, null, 2));
  };

  const handleMinify = () => {
    const data = parseOrFail();
    if (data === null || data === undefined) return;
    setError('');
    setSuccess('');
    setOutput(JSON.stringify(data));
  };

  const handleValidate = () => {
    const data = parseOrFail();
    if (data === null || data === undefined) return;
    setError('');
    setOutput('');
    setSuccess('Valid JSON.');
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setSuccess('Copied to clipboard.');
      setTimeout(() => setSuccess(''), 2000);
    } catch {
      setError('Could not copy automatically — please copy manually.');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
    setSuccess('');
  };

  return (
    <ToolShell>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={handleFormat} className="btn-teal">
          Format
          <Icon name="braces" className="h-4 w-4" />
        </button>
        <button type="button" onClick={handleMinify} className="btn-ghost">
          Minify
        </button>
        <button type="button" onClick={handleValidate} className="btn-ghost">
          Validate
        </button>
        <button type="button" onClick={handleCopy} disabled={!output} className="btn-ghost disabled:opacity-50">
          Copy result
        </button>
        <button type="button" onClick={handleClear} className="btn-ghost">
          Clear
        </button>
      </div>

      <ErrorText>{error}</ErrorText>
      <SuccessText>{success}</SuccessText>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div>
          <label htmlFor="json-input" className="mb-2 block text-[13px] font-extrabold text-navy/75">
            Your JSON
          </label>
          <textarea
            id="json-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"example": "paste your JSON here"}'
            spellCheck={false}
            rows={16}
            className="w-full rounded-xl border border-line bg-white px-4 py-3 font-mono text-[13px] leading-relaxed text-navy placeholder:text-navy/35 transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15"
          />
        </div>
        <div>
          <label htmlFor="json-output" className="mb-2 block text-[13px] font-extrabold text-navy/75">
            Result
          </label>
          <textarea
            id="json-output"
            value={output}
            readOnly
            placeholder="Formatted or minified JSON will appear here."
            spellCheck={false}
            rows={16}
            className="w-full rounded-xl border border-line bg-mist px-4 py-3 font-mono text-[13px] leading-relaxed text-navy placeholder:text-navy/35 focus:outline-none"
          />
        </div>
      </div>
    </ToolShell>
  );
}
