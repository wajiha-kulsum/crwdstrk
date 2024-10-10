"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Type,
  Search,
  ChevronDown,
  Menu,
  Save,
  Edit,
  Trash2,
} from "lucide-react";

interface Entry {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface SidebarProps {
  entries: Entry[];
  onNewEntry: () => void;
  onSelectEntry: (entry: Entry, edit?: boolean) => void;
  onDeleteEntry: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ entries, onNewEntry, onSelectEntry, onDeleteEntry }) => (
  <div className="w-64 h-screen p-4 overflow-auto text-white bg-gray-500">
    <h2 className="mb-4 text-xl font-bold">Your Journal</h2>
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search journal..."
        className="w-full px-4 py-2 pl-10 text-white bg-gray-700 rounded-md"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
    </div>
    <button
      className="w-full px-4 py-2 mb-4 font-bold text-white bg-black rounded hover:bg-gray-800"
      onClick={onNewEntry}
    >
      New Entry
    </button>
    <nav>
      <a href="#" className="block py-2 hover:bg-gray-700">
        View All Entries
      </a>
    </nav>
    {entries.length > 0 ? (
      <div className="mt-4">
        <h3 className="mb-2 font-semibold">Recent Entries:</h3>
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between px-2 py-2 cursor-pointer hover:bg-gray-700"
          >
            <span onClick={() => onSelectEntry(entry)}>
              {entry.title || "Untitled Entry"}
            </span>
            <div>
              <button
                className="p-1 text-gray-300 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectEntry(entry, true);
                }}
              >
                <Edit size={16} />
              </button>
              <button
                className="p-1 text-gray-300 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteEntry(entry.id);
                }}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="mt-4 text-gray-400">This journal has no entries</p>
    )}
  </div>
);

const TopNav: React.FC = () => (
  <nav className="flex items-center justify-between p-4 text-gray-600 bg-gray-100">
    <Menu className="md:hidden" />
    <div className="flex items-center space-x-4">
      <span className="text-2xl font-bold">YOUR JOURNAL</span>
    </div>
    <div className="flex items-center space-x-4">
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
        Go PRO
      </button>
      <div className="flex items-center">
        <span>User_name</span>
        <ChevronDown size={16} />
      </div>
    </div>
  </nav>
);

interface JournalEntryProps {
  entry: Entry;
  onSave: (entry: Entry) => void;
  isEditing: boolean;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ entry, onSave, isEditing }) => {
  const [title, setTitle] = useState(entry.title);
  const [content, setContent] = useState(entry.content);
  const [editMode, setEditMode] = useState(isEditing);

  useEffect(() => {
    setTitle(entry.title);
    setContent(entry.content);
    setEditMode(isEditing);
  }, [entry, isEditing]);

  const handleSave = () => {
    onSave({ ...entry, title, content });
    setEditMode(false);
  };

  return (
    <div className="max-w-4xl p-6 mx-auto my-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        {editMode ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-3xl font-bold text-gray-900 placeholder-gray-400 focus:outline-none"
            placeholder="Enter title here"
          />
        ) : (
          <h2 className="text-3xl font-bold text-gray-900">{title || "Untitled Entry"}</h2>
        )}
        {editMode ? (
          <button
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            <Save size={18} className="mr-2" />
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
          >
            <Edit size={18} className="mr-2" />
            Edit
          </button>
        )}
      </div>
      <div className="flex items-center mb-4 text-gray-500">
        <Calendar size={18} className="mr-2" />
        <span>{entry.date}</span>
        <MapPin size={18} className="ml-4 mr-2" />
        <Type size={18} className="ml-4" />
      </div>
      {editMode ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[calc(100vh-300px)] focus:outline-none resize-none text-gray-900 p-4 border rounded-md"
          placeholder="Start writing your entry here..."
        />
      ) : (
        <div className="w-full h-[calc(100vh-300px)] overflow-auto text-gray-900 p-4 border rounded-md">
          {content}
        </div>
      )}
    </div>
  );
};

const JournalPage: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<Entry | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedEntries = localStorage.getItem("journalEntries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveEntry = (entry: Entry) => {
    let updatedEntries;
    if (entry.id) {
      updatedEntries = entries.map((e) =>
        e.id === entry.id ? entry : e
      );
    } else {
      const newEntry = { ...entry, id: Date.now() };
      updatedEntries = [newEntry, ...entries];
      entry = newEntry;
    }
    setEntries(updatedEntries);
    setCurrentEntry(entry);
    setIsEditing(false);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
  };

  const createNewEntry = () => {
    const newEntry = {
      id: 0,
      title: "",
      content: "",
      date: new Date().toLocaleDateString(),
    };
    setCurrentEntry(newEntry);
    setIsEditing(true);
  };

  const deleteEntry = (id: number) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    if (currentEntry && currentEntry.id === id) {
      setCurrentEntry(null);
    }
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        entries={entries}
        onNewEntry={createNewEntry}
        onSelectEntry={(entry, edit = false) => {
          setCurrentEntry(entry);
          setIsEditing(edit);
        }}
        onDeleteEntry={deleteEntry}
      />
      <div className="flex-1">
        <TopNav />
        {currentEntry ? (
          <JournalEntry entry={currentEntry} onSave={saveEntry} isEditing={isEditing} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>Select an entry to view or create a new one.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalPage;



