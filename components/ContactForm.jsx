'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { trackEvent } from '@/lib/gtag';
import { SITE, SERVICES } from '@/lib/content';

const BUDGETS = ['Under ₹25,000/mo', '₹25,000 – ₹60,000/mo', '₹60,000 – ₹1,50,000/mo', 'Project only'];

const field =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/35 ' +
  'transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15';
const label = 'mb-1.5 block text-[12px] font-extrabold uppercase tracking-[0.1em] text-navy/55';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '', service: '', budget: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const summary = () =>
    [
      `New enquiry from the Fenbrix website`,
      ``,
      `Name: ${form.name || '—'}`,
      `Business: ${form.business || '—'}`,
      `Phone: ${form.phone || '—'}`,
      `Email: ${form.email || '—'}`,
      `Interested in: ${form.service || '—'}`,
      `Budget: ${form.budget || '—'}`,
      ``,
      `Message:`,
      form.message || '—',
    ].join('\n');

  const valid = form.name.trim() && (form.phone.trim() || form.email.trim());

  // contact_form_submit fires only here — after validation passes and the
  // hand-off action actually runs — never on a bare button click. Only the
  // selected service category is sent (a catalog label, not personal data);
  // name, phone, email, business and message are never sent to GA4.
  const sendWhatsApp = () => {
    if (!valid) return;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(summary())}`, '_blank');
    setSent(true);
    trackEvent('contact_form_submit', { method: 'whatsapp', service: form.service || undefined });
  };

  const sendEmail = () => {
    if (!valid) return;
    window.location.href =
      `mailto:${SITE.email}?subject=${encodeURIComponent('Website enquiry — ' + (form.business || form.name))}` +
      `&body=${encodeURIComponent(summary())}`;
    setSent(true);
    trackEvent('contact_form_submit', { method: 'email', service: form.service || undefined });
  };

  return (
    <div className="rounded-2xl border border-line bg-white p-7 shadow-soft sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Your name *</label>
          <input id="name" className={field} value={form.name} onChange={set('name')} placeholder="Rohan Sharma" />
        </div>
        <div>
          <label className={label} htmlFor="business">Business name</label>
          <input id="business" className={field} value={form.business} onChange={set('business')} placeholder="Sharma Dental Clinic" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone / WhatsApp *</label>
          <input id="phone" type="tel" className={field} value={form.phone} onChange={set('phone')} placeholder="+91 98xxx xxxxx" />
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" type="email" className={field} value={form.email} onChange={set('email')} placeholder="you@business.com" />
        </div>
        <div>
          <label className={label} htmlFor="service">What do you need?</label>
          <select id="service" className={field} value={form.service} onChange={set('service')}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="budget">Rough budget</label>
          <select id="budget" className={field} value={form.budget} onChange={set('budget')}>
            <option value="">Select a range</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="message">Anything else?</label>
          <textarea
            id="message"
            rows={4}
            className={`${field} resize-none`}
            value={form.message}
            onChange={set('message')}
            placeholder="What have you tried so far, and what would success look like in six months?"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={sendWhatsApp} disabled={!valid} className="btn-teal flex-1 disabled:cursor-not-allowed disabled:opacity-40">
          <Icon name="wa" className="h-4 w-4" />
          Send on WhatsApp
        </button>
        <button type="button" onClick={sendEmail} disabled={!valid} className="btn-ghost flex-1 disabled:cursor-not-allowed disabled:opacity-40">
          <Icon name="mail" className="h-4 w-4" />
          Send by email
        </button>
      </div>

      {!valid && (
        <p className="mt-3 text-center text-xs text-navy/40">
          Add your name and a phone number or email to continue.
        </p>
      )}

      {sent && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-xl bg-teal-600/10 px-4 py-3 text-center text-sm font-semibold text-teal-600"
        >
          Thanks — your message is ready to send in the app that just opened.
        </motion.p>
      )}
    </div>
  );
}
