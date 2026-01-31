
export type DatasetType = 'python' | 'dsa' | 'ml' | 'general';

export interface Dataset {
  id: DatasetType;
  label: string;
  content: string;
}

export interface AnalysisResult {
  explanation: string;
  summary: string;
  examQuestions: string[];
}

export interface HistoryItem {
  id: string;
  timestamp: number;
  dataset: DatasetType;
  notesPreview: string;
  result: AnalysisResult;
}
