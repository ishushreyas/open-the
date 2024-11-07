import React, { useEffect, useState } from 'react';
import { 
  Loader2, 
  Server, 
  Database, 
  Cpu, 
  Power
} from 'lucide-react';

const ModernLoading = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const [loadingText, setLoadingText] = useState('Starting up');

  const loadingStates = [
    { icon: Power, text: 'Starting up' },
    { icon: Server, text: 'Connecting to server' },
    { icon: Database, text: 'Loading data' },
    { icon: Cpu, text: 'Initializing' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % loadingStates.length);
      setLoadingText(loadingStates[(activeIcon + 1) % loadingStates.length].text);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [activeIcon]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl max-w-md w-full mx-4">
        {/* Main loading spinner */}
        <div className="flex justify-center mb-8">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
        </div>

        {/* Loading text */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            {loadingText}
          </h2>
          <p className="text-slate-400 text-sm">
            Please wait while we prepare your experience
          </p>
        </div>

        {/* Loading steps */}
        <div className="flex justify-between items-center gap-4">
          {loadingStates.map((state, index) => {
            const Icon = state.icon;
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center transition-all duration-300 ${
                  index === activeIcon 
                    ? 'text-blue-500 scale-110' 
                    : index < activeIcon 
                      ? 'text-green-500' 
                      : 'text-slate-600'
                }`}
              >
                <Icon className={`w-6 h-6 mb-2 ${
                  index === activeIcon ? 'animate-bounce' : ''
                }`} />
                <div className="w-8 h-1 rounded-full bg-current" />
              </div>
            );
          })}
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default ModernLoading;
