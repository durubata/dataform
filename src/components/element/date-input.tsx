import React, { useState } from 'react';

export const DateInput = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [error, setError] = useState('');

    const validateDay = (day) => {
        return day >= 1 && day <= 31;
    };

    const validateMonth = (month) => {
        return month >= 1 && month <= 12;
    };

    const validateYear = (year) => {
        const currentYear = new Date().getFullYear();
        return year >= 1900 && year <= currentYear;
    };

    const handleDayChange = (e) => {
        const value = e.target.value;
        setDay(value);
        if (!validateDay(value)) {
            setError('Invalid day');
        } else {
            setError('');
        }
    };

    const handleMonthChange = (e) => {
        const value = e.target.value;
        setMonth(value);
        if (!validateMonth(value)) {
            setError('Invalid month');
        } else {
            setError('');
        }
    };

    const handleYearChange = (e) => {
        const value = e.target.value;
        setYear(value);
        if (!validateYear(value)) {
            setError('Invalid year');
        } else {
            setError('');
        }
    };

    return (
        <div className="flex items-center border border-gray-200 shadow-sm rounded-md bg-white p-2">
            <input
                type="number"
                placeholder="DD"
                value={day}
                onChange={handleDayChange}
                className="focus:outline-none w-12 text-center"
            />
            <span className="mx-1">/</span>
            <input
                type="number"
                placeholder="MM"
                value={month}
                onChange={handleMonthChange}
                className="focus:outline-none w-12 text-center"
            />
            <span className="mx-1">/</span>
            <input
                type="number"
                placeholder="YYYY"
                value={year}
                onChange={handleYearChange}
                className="focus:outline-none w-20 text-center"
            />
            {error && <div className="text-red-500 ml-2">{error}</div>}
        </div>
    );
};