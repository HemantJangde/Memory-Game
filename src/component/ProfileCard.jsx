import React, { useState } from 'react';

interface ActionButtonProps {
  id: string;
  label: string;
  isPrimary?: boolean;
  checked: boolean;
  onChange: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  id, 
  label, 
  isPrimary = false, 
  checked, 
  onChange 
}) => {
  const baseClasses = "flex items-center px-4 py-2 rounded-md cursor-pointer font-medium transition-all";
  const primaryClasses = "bg-blue-500 text-white border border-blue-500 hover:bg-blue-600";
  const secondaryClasses = "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50";

  return (
    <div 
      className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`}
      onClick={onChange}
    >
      <input 
        type="checkbox" 
        id={id}
        checked={checked}
        onChange={onChange}
        className="mr-2 cursor-pointer"
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

const ProfileCard: React.FC = () => {
  const [hireChecked, setHireChecked] = useState(false);
  const [resumeChecked, setResumeChecked] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
        <p className="text-lg text-gray-600 mb-1">Hey there, I am</p>
        <h1 className="text-2xl font-bold text-gray-800 mt-1">Vikram Mahto</h1>
        <div className="flex items-center text-gray-600 text-lg my-2">
          <span>Frontend Engineer</span>
          <span className="mx-2">|</span>
          <span>Open-Source Contributor</span>
        </div>
        <p className="text-gray-700 leading-relaxed my-5">
          I craft visually stunning, accessible, and high-performing websites.
          With expertise in React.js, Next.js, and TailwindCSS, I blend creativity 
          with code to build seamless digital experiences.
        </p>
        <div className="flex items-start my-5">
          <span className="text-blue-500 mr-2">●</span>
          <span>Actively looking for full-time opportunities.</span>
        </div>
        <div className="flex gap-4 mt-6">
          <ActionButton
            id="hire-me"
            label="Hire me"
            isPrimary
            checked={hireChecked}
            onChange={() => setHireChecked(!hireChecked)}
          />
          <ActionButton
            id="resume"
            label="My resume"
            checked={resumeChecked}
            onChange={() => setResumeChecked(!resumeChecked)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;