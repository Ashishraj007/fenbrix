const paths = {
  share: 'M13 5v6.5M13 5l-3 3M13 5l3 3M6 12v6a2 2 0 002 2h10a2 2 0 002-2v-6',
  camera: 'M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1zm8 3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z',
  target: 'M12 3v3m0 12v3M3 12h3m12 0h3M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z',
  browser: 'M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm0 3.5h18M6 7h.01M8.5 7h.01',
  code: 'M9 8l-4 4 4 4m6-8l4 4-4 4',
  bolt: 'M13 3L5 13h5l-1 8 8-10h-5l1-8z',
  cup: 'M5 8h11v6a5 5 0 01-5 5H10a5 5 0 01-5-5V8zm11 1h2a2 2 0 010 4h-2M4 21h13',
  sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z',
  building: 'M4 21V6l7-3 7 3v15M4 21h16M9 9h.01M13 9h.01M9 13h.01M13 13h.01M9.5 21v-4h3v4',
  heart: 'M12 20s-7-4.4-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.6-7 9-7 9z',
  cap: 'M3 9l9-4 9 4-9 4-9-4zm3 3.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5',
  bag: 'M6 8h12l1 12H5L6 8zm3 0V6a3 3 0 016 0v2',
  box: 'M12 3l8 4.2v9.6L12 21l-8-4.2V7.2L12 3zm0 0v18m8-13.8L12 12 4 7.2',
  brief: 'M4 8h16v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm5 0V6a2 2 0 012-2h2a2 2 0 012 2v2M4 13h16',
  check: 'M4.5 12.5l5 5 10-11',
  arrow: 'M5 12h14m-6-6l6 6-6 6',
  plus: 'M12 5v14M5 12h14',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z',
  mail: 'M3 6h18v12H3V6zm0 0l9 7 9-7',
  pin: 'M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  wa: 'M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-4-1.1L4 20z',
  instagram: 'M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zM12 8.2a3.8 3.8 0 100 7.6 3.8 3.8 0 000-7.6zM16.6 6.4h.01',
  linkedin: 'M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zM7.5 7.8h.01M7.5 10.5V17M11 17v-4a2 2 0 014 0v4M11 17v-6.5',
  chevron: 'M6 9l6 6 6-6',
};

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.7 }) {
  const d = paths[name] || paths.check;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
