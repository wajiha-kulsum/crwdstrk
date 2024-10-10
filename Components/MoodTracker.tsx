"use client"; // Add this at the top to make it a Client Component

import React, { useState, useEffect } from 'react';

// Define types for mood
interface Mood {
  emoji: string;
  label: string;
}

const MoodTracker: React.FC = () => {
  const moods: Mood[] = [
    { emoji: "🌟", label: "Awesome" },
    { emoji: "😊", label: "Great" },
    { emoji: "😍", label: "Loved" },
    { emoji: "🙂", label: "Okay" },
    { emoji: "😕", label: "Meh" },
    { emoji: "😬", label: "Anxious" },
    { emoji: "☹️", label: "Bad" },
    { emoji: "😖", label: "Terrible" },
    { emoji: "😡", label: "Upset" }
  ];

  // State to store current date and selected date by user
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);

  // Effect to update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Handler for date input change
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value); // Updates the selected date from input
  };

  return (
    <div style={styles.container}>
      <div style={styles.modal}>
        <button style={styles.closeButton}>×</button>
        <h2 style={styles.heading}>How are you feeling right now?</h2>

        {/* Display current date and time */}
        <div style={styles.dateTime}>
          <span>{currentDate.toLocaleDateString()}</span> {/* Display Date */}
          <span>{currentDate.toLocaleTimeString()}</span> {/* Display Time */}
        </div>

        {/* Date Input */}
        <div style={styles.dateInputContainer}>
          <label style={styles.dateLabel}>Select a date:</label>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={handleDateChange} 
            style={styles.dateInput}
          />
        </div>

        {/* Moods Grid */}
        <div style={styles.moodGrid}>
          {moods.map((mood) => (
            <MoodItem key={mood.label} emoji={mood.emoji} label={mood.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

// MoodItem component to handle each mood option
const MoodItem: React.FC<Mood> = ({ emoji, label }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.moodItem,
        ...(isHovered ? styles.moodItemHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={styles.emoji}>{emoji}</span>
      <span style={styles.label}>{label}</span>
    </div>
  );
};

// Styling
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #FDE6A1, #F9B4ED)',
    padding: '1rem',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '25px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    maxWidth: '450px',
    textAlign: 'center' as const,
    position: 'relative' as const,
    color: '#1F2937', // gray-800
  },
  closeButton: {
    position: 'absolute' as const,
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    fontSize: '1.75rem',
    color: '#1F2937', // gray-800
    cursor: 'pointer',
  },
  heading: {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '2rem',
    color: '#1F2937', // gray-800
  },
  dateTime: {
    marginBottom: '1.5rem',
    fontSize: '1.25rem',
    color: '#1F2937', // gray-800
  },
  dateInputContainer: {
    marginBottom: '1.5rem',
  },
  dateLabel: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    color: '#1F2937', // gray-800
  },
  dateInput: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #D1D5DB', // gray-300
    color: '#1F2937', // gray-800
  },
  moodGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },
  moodItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  },
  emoji: {
    fontSize: '2.5rem',
    transition: '0.2s ease-in-out',
  },
  label: {
    marginTop: '0.75rem',
    fontSize: '1rem',
    color: '#1F2937', // gray-800
  },
  moodItemHover: {
    transform: 'scale(1.1)',
  },
};

export default MoodTracker;
