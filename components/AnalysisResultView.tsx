
import React from 'react';
import { AnalysisResult } from '../types';

interface AnalysisResultViewProps {
  result: AnalysisResult;
  isLoading: boolean;
}

const AnalysisResultView: React.FC<AnalysisResultViewProps> = ({ result, isLoading }) => {
  if (isLoading) {
    return (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass p-8 rounded-[2rem] border-white/5 animate-pulse">
            <div className="h-3 bg-white/10 rounded-full w-32 mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-white/5 rounded-full w-full"></div>
              <div className="h-4 bg-white/5 rounded-full w-5/6"></div>
              <div className="h-4 bg-white/5 rounded-full w-4/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const { explanation, summary, examQuestions } = result;

  return (
    <div className="space-y-8">
      {/* Explanation Module */}
      <section className="glass p-8 rounded-[2rem] hover:border-cyan-500/30 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mr-4 border border-cyan-500/20">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-sm font-black text-cyan-400 uppercase tracking-[0.2em] neon-text-cyan">
            Neural Explanation
          </h3>
        </div>
        <p className="text-slate-300 leading-relaxed font-light tracking-wide whitespace-pre-wrap selection:bg-cyan-500/20">
          {explanation}
        </p>
      </section>

      {/* Summary Module */}
      <section className="glass p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-4 border border-emerald-500/20">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-sm font-black text-emerald-400 uppercase tracking-[0.2em]">
            Context Summary
          </h3>
        </div>
        <div className="space-y-3">
          {summary.split('\n').filter(l => l.trim()).map((line, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-emerald-500 mr-3 mt-1.5">•</span>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{line.replace(/^[-*•]\s*/, '')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Assessment Module */}
      <section className="glass p-8 rounded-[2rem] hover:border-amber-500/30 transition-all relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mr-4 border border-amber-500/20">
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-sm font-black text-amber-400 uppercase tracking-[0.2em]">
            Assessment Matrix
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {examQuestions.map((q, idx) => (
            <div key={idx} className="group p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
              <div className="flex items-start">
                <span className="text-[10px] font-mono text-amber-500 mr-3 opacity-50">Q-0{idx + 1}</span>
                <p className="text-slate-300 text-sm font-medium leading-relaxed group-hover:text-white">
                  {q}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AnalysisResultView;
