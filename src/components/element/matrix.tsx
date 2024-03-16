import React, { useState } from 'react';

interface OptionType {
  value: string;
  label: string;
}

interface QuestionType {
  question: string;
  options: OptionType[];
  selectedOption: string | null;
}

const initialOptions: OptionType[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const MatrixInput: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([
    { question: 'Question 1', options: [...initialOptions], selectedOption: null },
    { question: 'Question 2', options: [...initialOptions], selectedOption: null },
    { question: 'Question 3', options: [...initialOptions], selectedOption: null }
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: `Question ${questions.length + 1}`, options: [...initialOptions], selectedOption: null }
    ]);
  };

  const addOption = () => {
    const newOption = { value: `option${initialOptions.length + 1}`, label: `Option ${initialOptions.length + 1}` };
    initialOptions.push(newOption);
    setQuestions(questions.map(q => ({ ...q, options: [...q.options, newOption] })));
  };

  const deleteQuestion = (questionIndex: number) => {
    setQuestions(questions.filter((_, index) => index !== questionIndex));
  };

  const deleteOption = (optionValue: string) => {
    initialOptions.splice(initialOptions.findIndex(opt => opt.value === optionValue), 1);
    setQuestions(questions.map(q => ({
      ...q,
      options: q.options.filter(opt => opt.value !== optionValue),
      selectedOption: q.selectedOption === optionValue ? null : q.selectedOption
    })));
  };

  const handleOptionChange = (questionIndex: number, selectedValue: string) => {
    const updatedQuestions = questions.map((q, idx) => {
      if (idx === questionIndex) {
        return { ...q, selectedOption: selectedValue };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  return (
    <div className='overflow-auto'>
      <div className="grid grid-cols-[auto_repeat(3,_minmax(70px,_1fr))] overflow-auto" style={{ gap: '5px' }}>
        <div className="col-span-1  text-xs">Questions</div>
        {initialOptions.map((option, index) => (
          <div key={index} className="col-span-1  text-xs text-center">{option.label}</div>
        ))}

        {questions.map((question, questionIndex) => (
          <React.Fragment key={questionIndex}>
            <div className="col-span-1 text-xs whitespace-nowrap pr-4">{question.question}</div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="col-span-1 text-xs  text-center">
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  checked={question.selectedOption === option.value}
                  onChange={() => handleOptionChange(questionIndex, option.value)}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
