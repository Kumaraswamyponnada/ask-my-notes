
import React, { useState, useCallback } from 'react';
import { analyzeNotes } from './services/geminiService';
import { DATASETS } from './constants';
import { DatasetType, AnalysisResult } from './types';
import AnalysisResultView from './components/AnalysisResultView';

const App: React.FC = () => {
  const [notes, setNotes] = useState('');
  const [datasetId, setDatasetId] = useState<DatasetType>('general');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!notes.trim()) {
      setError('Please provide study input before activation.');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await analyzeNotes(notes, datasetId);
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'System error detected. Re-authentication may be required.');
    } finally {
      setLoading(false);
    }
  }, [notes, datasetId]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-widest text-white uppercase">AskMyNotes</h1>
              <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-[0.2em] leading-none">Neural Study Nexus</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-400">
            <span className="hover:text-white transition-colors cursor-pointer">Grounding Engine</span>
            <span className="hover:text-white transition-colors cursor-pointer">Contextualizer</span>
            <div className="w-px h-4 bg-white/10 mx-2"></div>
            <span className="text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-500/20">Active Session</span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 mt-16 relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight mb-6 leading-tight">
            Transcend Your Learning.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            Synthesize disorganized knowledge into crystal-clear insights using the <span className="text-indigo-400 font-medium">Gemini Intelligence Layer</span>.
          </p>
        </header>

        {/* Input Interface */}
        <div className="glass rounded-[2.5rem] p-8 shadow-2xl relative">
          <div className="absolute top-0 right-10 -translate-y-1/2 flex space-x-2">
            <div className="px-4 py-1.5 bg-slate-900 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              Quantum Ready
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-6">
              <div>
                <label className="block text-[11px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3 ml-1">
                  Reference Matrix
                </label>
                <div className="space-y-2">
                  {DATASETS.map((ds) => (
                    <button
                      key={ds.id}
                      onClick={() => setDatasetId(ds.id)}
                      className={`
                        w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 flex items-center justify-between
                        ${datasetId === ds.id 
                          ? 'bg-indigo-600/10 border-indigo-500/50 text-white ring-1 ring-indigo-500/20' 
                          : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/20'
                        }
                      `}
                    >
                      <span className="font-medium text-sm">{ds.label}</span>
                      {datasetId === ds.id && (
                        <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col">
              <label className="block text-[11px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3 ml-1">
                Data Input Stream
              </label>
              <div className="relative flex-grow">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Paste raw notes, research snippets, or lecture fragments here..."
                  className="w-full h-[320px] p-6 bg-slate-900/50 border border-white/5 rounded-3xl text-slate-200 placeholder-slate-600 focus:bg-slate-900 focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
                />
                <div className="absolute bottom-4 right-4 text-[10px] text-slate-600 font-mono">
                  CHR: {notes.length} | CHKSUM: OK
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center">
            {error && (
              <div className="mb-6 w-full max-w-md p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-2xl text-xs font-medium flex items-center backdrop-blur-md">
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            )}
            
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className={`
                group relative px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] overflow-hidden
                transition-all duration-500 transform active:scale-95
                ${loading 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5' 
                  : 'bg-white text-black hover:bg-white shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                }
              `}
            >
              <span className="relative z-10 flex items-center">
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Synthesizing...
                  </>
                ) : (
                  'Initiate Nexus'
                )}
              </span>
              {!loading && <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>}
            </button>
          </div>
        </div>

        {/* Results Stream */}
        {(result || loading) && (
          <div className="mt-20">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white/10"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Synthesized Output</span>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white/10"></div>
            </div>
            <AnalysisResultView result={result || { explanation: '', summary: '', examQuestions: [] }} isLoading={loading} />
          </div>
        )}

        <footer className="mt-32 pb-16 text-center">
          <div className="flex justify-center space-x-8 mb-8 grayscale opacity-40">
            <span className="text-xs font-bold tracking-widest uppercase">Protocol v3.1</span>
            <span className="text-xs font-bold tracking-widest uppercase">AES-256</span>
            <span className="text-xs font-bold tracking-widest uppercase">LLM-G3F</span>
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.5em]">
            Automated Knowledge Synthesis &copy; 2025
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
