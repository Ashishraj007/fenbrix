'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import ToolShell, { ErrorText } from './ToolShell';

const MAX_SIZE = 15 * 1024 * 1024; // 15MB — reasonable ceiling for in-browser canvas work
const ACCEPTED = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

function formatBytes(bytes) {
  if (!bytes) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function outputMimeFor(type) {
  if (type === 'image/png') return 'image/png';
  if (type === 'image/webp') return 'image/webp';
  return 'image/jpeg';
}

export default function ImageCompressorTool() {
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');
  const [originalSize, setOriginalSize] = useState(0);
  const [previewUrl, setPreviewUrl] = useState('');
  const [compressedUrl, setCompressedUrl] = useState('');
  const [compressedSize, setCompressedSize] = useState(0);
  const [quality, setQuality] = useState(0.8);
  const [dragActive, setDragActive] = useState(false);
  const [processing, setProcessing] = useState(false);

  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  const compress = useCallback((img, type, q) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    setProcessing(true);
    canvas.toBlob(
      (blob) => {
        setProcessing(false);
        if (!blob) {
          setError('Could not compress this image. Please try another file.');
          return;
        }
        setCompressedUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return URL.createObjectURL(blob);
        });
        setCompressedSize(blob.size);
      },
      outputMimeFor(type),
      q
    );
  }, []);

  const loadFile = (file) => {
    if (!file) return;
    if (!ACCEPTED.includes(file.type)) {
      setError('Please upload a JPG, PNG or WebP image.');
      return;
    }
    if (file.size > MAX_SIZE) {
      setError('That file is too large. Please upload an image under 15MB.');
      return;
    }
    setError('');
    setFileName(file.name);
    setFileType(file.type);
    setOriginalSize(file.size);
    setCompressedUrl('');
    setCompressedSize(0);

    const url = URL.createObjectURL(file);
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });

    const img = new Image();
    img.onload = () => {
      imageRef.current = img;
      compress(img, file.type, quality);
    };
    img.onerror = () => setError('Could not read this image. Please try another file.');
    img.src = url;
  };

  useEffect(() => {
    if (!imageRef.current) return undefined;
    const handle = setTimeout(() => {
      compress(imageRef.current, fileType, quality);
    }, 150);
    return () => clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quality]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      if (compressedUrl) URL.revokeObjectURL(compressedUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => loadFile(e.target.files?.[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    loadFile(e.dataTransfer.files?.[0]);
  };

  const handleDownload = () => {
    if (!compressedUrl) return;
    const ext = fileType === 'image/png' ? 'png' : fileType === 'image/webp' ? 'webp' : 'jpg';
    const base = fileName ? fileName.replace(/\.[^./]+$/, '') : 'image';
    const link = document.createElement('a');
    link.href = compressedUrl;
    link.download = `${base}-compressed.${ext}`;
    link.click();
  };

  const handleReset = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    if (compressedUrl) URL.revokeObjectURL(compressedUrl);
    imageRef.current = null;
    setError('');
    setFileName('');
    setFileType('');
    setOriginalSize(0);
    setPreviewUrl('');
    setCompressedUrl('');
    setCompressedSize(0);
    setQuality(0.8);
  };

  const savedPercent =
    originalSize && compressedSize ? Math.round((1 - compressedSize / originalSize) * 100) : null;

  return (
    <ToolShell>
      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />

      {!previewUrl ? (
        <label
          htmlFor="image-upload"
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          className={`flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-8 text-center transition-colors duration-200 ${
            dragActive ? 'border-teal-500 bg-teal-600/5' : 'border-line bg-mist'
          }`}
        >
          <Icon name="image" className="h-10 w-10 text-navy/30" strokeWidth={1.2} />
          <p className="text-sm font-bold text-navy/70">Drag & drop an image here, or click to browse</p>
          <p className="text-[12px] text-navy/40">JPG, PNG or WebP — up to 15MB</p>
          <input
            id="image-upload"
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={handleInputChange}
            className="sr-only"
          />
        </label>
      ) : (
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-[13px] font-extrabold text-navy/75">Original</p>
            <div className="overflow-hidden rounded-2xl border border-line bg-mist">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewUrl} alt="Original upload preview" className="max-h-72 w-full object-contain" />
            </div>
            <p className="mt-2 text-[13px] text-navy/55">{formatBytes(originalSize)}</p>
          </div>

          <div>
            <p className="mb-2 text-[13px] font-extrabold text-navy/75">Compressed</p>
            <div className="flex min-h-[144px] items-center justify-center overflow-hidden rounded-2xl border border-line bg-mist">
              {compressedUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={compressedUrl} alt="Compressed result preview" className="max-h-72 w-full object-contain" />
              ) : (
                <p className="p-6 text-[13px] text-navy/40">{processing ? 'Compressing…' : 'Adjust quality to compress.'}</p>
              )}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px] text-navy/55">
              <span>{formatBytes(compressedSize)}</span>
              {savedPercent !== null && (
                <span
                  className={`chip !py-1 !text-[11px] ${
                    savedPercent > 0 ? '!border-teal-600 !bg-teal-600/10 !text-teal-600' : ''
                  }`}
                >
                  {savedPercent > 0 ? `${savedPercent}% smaller` : 'No size reduction'}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      <ErrorText>{error}</ErrorText>

      {previewUrl && fileType !== 'image/png' && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <label htmlFor="quality" className="text-[13px] font-extrabold text-navy/75">
              Compression quality
            </label>
            <span className="text-[13px] font-extrabold text-teal-600">{Math.round(quality * 100)}%</span>
          </div>
          <input
            id="quality"
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={quality}
            onChange={(e) => setQuality(parseFloat(e.target.value))}
            className="mt-2 w-full accent-teal-600"
          />
          <p className="mt-1 text-[12px] text-navy/40">Lower quality means a smaller file size.</p>
        </div>
      )}
      {previewUrl && fileType === 'image/png' && (
        <p className="mt-6 text-[12px] text-navy/40">
          PNG is a lossless format, so the quality slider is not shown — file size is reduced through re-encoding only.
        </p>
      )}

      {previewUrl && (
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleDownload}
            disabled={!compressedUrl}
            className="btn-primary disabled:opacity-50"
          >
            Download compressed image
            <Icon name="arrow" className="h-4 w-4" />
          </button>
          <button type="button" onClick={handleReset} className="btn-ghost">
            Remove image
          </button>
        </div>
      )}
    </ToolShell>
  );
}
