
import { Dataset } from './types';

export const DATASETS: Dataset[] = [
  {
    id: 'python',
    label: 'Python Programming',
    content: `Python is a high-level, interpreted programming language known for its readability. 
    Key concepts include: 
    - Dynamic typing: Variable types are determined at runtime.
    - List Comprehensions: A concise way to create lists.
    - Generators: Functions that yield values one at a time using 'yield'.
    - Decorators: Functions that modify the behavior of other functions.
    - GIL (Global Interpreter Lock): A mechanism that limits Python to executing one thread at a time in the standard CPython implementation.`
  },
  {
    id: 'dsa',
    label: 'Data Structures & Algorithms',
    content: `DSA covers the fundamental building blocks of efficient software.
    Key concepts include:
    - Big O Notation: Describing time and space complexity (O(1), O(log n), O(n), O(n log n), O(n²)).
    - Arrays & Linked Lists: Continuous vs. linked memory allocation.
    - Trees & Graphs: Hierarchical and networked data structures.
    - Sorting: QuickSort, MergeSort, and their performance trade-offs.
    - Dynamic Programming: Solving complex problems by breaking them into overlapping subproblems.`
  },
  {
    id: 'ml',
    label: 'Machine Learning Basics',
    content: `Machine Learning involves building systems that learn from data.
    Key concepts include:
    - Supervised Learning: Learning with labeled data (Regression, Classification).
    - Unsupervised Learning: Finding patterns in unlabeled data (Clustering, PCA).
    - Loss Functions: Measuring the error of a model (MSE, Cross-Entropy).
    - Overfitting: When a model learns noise in training data rather than generalizing.
    - Backpropagation: The algorithm used to train neural networks by updating weights via gradients.`
  },
  {
    id: 'general',
    label: 'General Knowledge',
    content: `Academic success requires effective learning strategies.
    Key concepts include:
    - Active Recall: Testing yourself rather than re-reading.
    - Spaced Repetition: Reviewing material at increasing intervals.
    - Feynman Technique: Explaining a concept in simple terms to identify gaps in understanding.
    - Critical Thinking: Analyzing facts to form a judgment.`
  }
];
