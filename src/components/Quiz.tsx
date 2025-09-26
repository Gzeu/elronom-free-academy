import { useState } from "react";
import { QuizQuestion } from "../lib/content";

type Props = {
  questions: QuizQuestion[];
  onSubmit: (score: number) => void;
};

export default function Quiz({ questions, onSubmit }: Props) {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  
  const score = answers.reduce((acc, a, i) => (a === questions[i].correct ? acc + 1 : acc), 0);
  const allAnswered = answers.every(a => a !== -1);

  const choose = (qi: number, ans: number) => {
    if (submitted) return;
    setAnswers((prev) => prev.map((v, i) => (i === qi ? ans : v)));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit(score);
  };

  return (
    <div className="mt-8 p-6 rounded-lg bg-white/5 border border-white/10">
      <h3 className="text-xl font-semibold mb-4">🧠 Testează-ți cunoștințele</h3>
      
      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div key={q.id} className="space-y-3">
            <h4 className="font-medium text-lg">{qi + 1}. {q.text}</h4>
            <div className="grid gap-2">
              {q.choices.map((c, ai) => {
                const isSelected = answers[qi] === ai;
                const isCorrect = submitted && ai === q.correct;
                const isWrongSel = submitted && isSelected && ai !== q.correct;
                
                return (
                  <button
                    key={ai}
                    onClick={() => choose(qi, ai)}
                    disabled={submitted}
                    className={
                      "text-left px-4 py-3 rounded-lg border transition-colors " +
                      (isCorrect ? "bg-green-600/20 border-green-500 text-green-200"
                      : isWrongSel ? "bg-red-600/20 border-red-500 text-red-200"
                      : isSelected ? "bg-indigo-600/20 border-indigo-500"
                      : "bg-white/5 border-white/20 hover:bg-white/10")
                    }
                  >
                    <span className="mr-3 font-mono text-sm">{String.fromCharCode(65 + ai)}.</span>
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        {!submitted ? (
          <button 
            onClick={handleSubmit} 
            disabled={!allAnswered}
            className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            Trimite răspunsurile
          </button>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="text-lg">
              Scor: <span className="font-semibold text-green-400">{score}</span> / {questions.length}
            </div>
            <div className="text-sm text-gray-400">
              {score === questions.length ? "Perfect! 🎉" : score >= questions.length * 0.7 ? "Foarte bine! 👍" : "Poți să faci mai bine 💪"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}