import React, { useState, useEffect } from 'react';

interface OptionType {
  value: string;
  label: string;
  image?: string;
  icon?: string | { name: string; src?: string; native?: JSX.Element };
}

interface RankingControlProps {
  options: OptionType[];
  onChange: (rankings: Record<string, number>) => void;
  getOptionIconOrImage: (option: OptionType) => JSX.Element | null;
}

export const RankingInput: React.FC<RankingControlProps> = ({
  options, onChange, getOptionIconOrImage
}) => {
  const [rankings, setRankings] = useState<Record<string, number>>({});

  useEffect(() => {
    // Initialize rankings
    const initialRankings = options.reduce((acc, option, index) => {
      acc[option.name] = index + 1;
      return acc;
    }, {} as Record<string, number>);
    setRankings(initialRankings);
  }, [options]);

  const handleSelectChange = (optionName: string, rank: number) => {
    setRankings(prev => ({ ...prev, [optionName]: rank }));
    onChange({ ...rankings, [optionName]: rank });
  };

  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <div key={option.value} className="flex items-center justify-between">
          {getOptionIconOrImage(option)}
          <span className="mr-2">{option.label}</span>
          <select
            value={rankings[option.value]}
            onChange={(e) => handleSelectChange(option.value, parseInt(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-gray-700"
          >
            {options.map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};
