"use client";

import { useState } from "react";

const gurbaniSample = `
ਭਗਤਿ ਤੇਰੀ ਸਤਿ ਸਬਦੁ ਸਾਜਨੁ ॥
ਅੰਮ੍ਰਿਤ ਪਾਨੇ ਚਰਨ ਅਰਵਚਨੁ ॥
ਸੀਤਾ ਕਦੰਨੁ ਗੁਰੁ ਪਿਆਰਾ ॥
`;

export function BaniReader() {
  const [nightMode, setNightMode] = useState(false);

  return (
    <section className="rounded-[2px] border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-900/5 sm:p-8">
      <div className="flex items-center justify-between gap-4 pb-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[#002366]">Bani Reading</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#002366]">Night Mode for Peaceful Study</h2>
        </div>
        <button
          type="button"
          onClick={() => setNightMode(!nightMode)}
          className="inline-flex items-center rounded-[2px] border border-slate-300 bg-[#ff9933]/10 px-4 py-2 text-sm font-medium text-[#002366] transition hover:bg-[#ff9933]/15"
        >
          {nightMode ? "Day Mode" : "Night Mode"}
        </button>
      </div>

      <div className={`rounded-[2px] border ${nightMode ? "border-slate-700 bg-[#07101b] text-slate-100" : "border-slate-200 bg-[#f9f5ef] text-slate-900"} min-h-[320px] p-6 leading-8 shadow-sm`}>
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#002366]/80">Gurbani Sample</p>
        <div className="space-y-4 whitespace-pre-line text-lg font-medium">
          {gurbaniSample}
        </div>
        <div className="mt-8 rounded-[2px] border border-slate-200 bg-white/90 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Santhiya Guidance</p>
          <p className="mt-2">Practice precise Paath and Rahau to carry the correct pronunciation of Gurbani in every recitation.</p>
        </div>
      </div>
    </section>
  );
}
