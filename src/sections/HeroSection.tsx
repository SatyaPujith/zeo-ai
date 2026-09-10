import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hero box content types
type BoxContent = {
  title: string;
  subtitle: string;
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State for each box's current content and hover
  const [left1Content, setLeft1Content] = useState<BoxContent>({ title: 'Symptom', subtitle: 'Analysis' });
  const [left1Key, setLeft1Key] = useState(0);
  const [left2Content, setLeft2Content] = useState<BoxContent>({ title: '24/7', subtitle: 'Available' });
  const [left2Key, setLeft2Key] = useState(0);
  const [left3Content, setLeft3Content] = useState<BoxContent>({ title: 'Visual', subtitle: 'Exam' });
  const [left3Key, setLeft3Key] = useState(0);
  const [left4Content, setLeft4Content] = useState<BoxContent>({ title: 'Quick', subtitle: 'Response' });
  const [left4Key, setLeft4Key] = useState(0);
  const [left5Content, setLeft5Content] = useState<BoxContent>({ title: 'Monitor', subtitle: 'Health' });
  const [left5Key, setLeft5Key] = useState(0);
  const [left6Content, setLeft6Content] = useState<BoxContent>({ title: 'Trusted', subtitle: 'Platform' });
  const [left6Key, setLeft6Key] = useState(0);
  
  const [right1Content, setRight1Content] = useState<BoxContent>({ title: 'Triage', subtitle: 'Advice' });
  const [right1Key, setRight1Key] = useState(0);
  const [right2Content, setRight2Content] = useState<BoxContent>({ title: '0', subtitle: 'Wait Time' });
  const [right2Key, setRight2Key] = useState(0);
  const [right3Content, setRight3Content] = useState<BoxContent>({ title: 'Secure', subtitle: 'Private' });
  const [right3Key, setRight3Key] = useState(0);
  const [right4Content, setRight4Content] = useState<BoxContent>({ title: 'Expert', subtitle: 'Knowledge' });
  const [right4Key, setRight4Key] = useState(0);
  const [right5Content, setRight5Content] = useState<BoxContent>({ title: 'Personal', subtitle: 'Care' });
  const [right5Key, setRight5Key] = useState(0);
  const [right6Content, setRight6Content] = useState<BoxContent>({ title: 'Verified', subtitle: 'Results' });
  const [right6Key, setRight6Key] = useState(0);

  // Pool of random content options
  const contentOptions: BoxContent[] = [
    { title: 'Video', subtitle: 'Calls' },
    { title: 'AI', subtitle: 'Doctor' },
    { title: 'Medicine', subtitle: 'Info' },
    { title: 'Dosage', subtitle: 'Guide' },
    { title: 'Health', subtitle: 'Records' },
    { title: 'Instant', subtitle: 'Analysis' },
    { title: 'Memory', subtitle: 'Enabled' },
    { title: 'Smart', subtitle: 'Diagnosis' },
    { title: '500+', subtitle: 'Conditions' },
    { title: 'HIPAA', subtitle: 'Compliant' },
    { title: 'Encrypted', subtitle: 'Data' },
    { title: 'Real-time', subtitle: 'Support' },
    { title: 'Multi', subtitle: 'Language' },
    { title: 'Lab', subtitle: 'Results' },
    { title: 'Prevention', subtitle: 'Tips' },
    { title: 'Emergency', subtitle: 'Help' },
  ];

  // Random content change handlers
  const handleLeft1Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setLeft1Content(randomContent);
    setLeft1Key(prev => prev + 1);
  };
  const handleLeft2Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setLeft2Content(randomContent);
    setLeft2Key(prev => prev + 1);
  };
  const handleLeft3Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setLeft3Content(randomContent);
    setLeft3Key(prev => prev + 1);
  };
  const handleLeft4Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setLeft4Content(randomContent);
    setLeft4Key(prev => prev + 1);
  };
  const handleLeft5Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setLeft5Content(randomContent);
    setLeft5Key(prev => prev + 1);
  };
  const handleLeft6Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setLeft6Content(randomContent);
    setLeft6Key(prev => prev + 1);
  };
  
  const handleRight1Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setRight1Content(randomContent);
    setRight1Key(prev => prev + 1);
  };
  const handleRight2Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setRight2Content(randomContent);
    setRight2Key(prev => prev + 1);
  };
  const handleRight3Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setRight3Content(randomContent);
    setRight3Key(prev => prev + 1);
  };
  const handleRight4Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setRight4Content(randomContent);
    setRight4Key(prev => prev + 1);
  };
  const handleRight5Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setRight5Content(randomContent);
    setRight5Key(prev => prev + 1);
  };
  const handleRight6Enter = () => {
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];
    setRight6Content(randomContent);
    setRight6Key(prev => prev + 1);
  };

  // Grid background state - 8x6 grid
  const [gridColors, setGridColors] = useState<string[][]>([]);
  
  const bgColors = [
    '#f5f1e6',
    '#e8e4d9',
    '#f0ebe0',
    '#ebe7dc',
    '#f3efe4',
    '#e5e1d6',
  ];

  // Initialize grid
  useEffect(() => {
    const rows = 8;
    const cols = 6;
    const initialGrid = Array(rows).fill(null).map(() => 
      Array(cols).fill(null).map(() => bgColors[0])
    );
    setGridColors(initialGrid);
  }, []);

  // Random color changes
  useEffect(() => {
    const interval = setInterval(() => {
      setGridColors(prev => {
        if (prev.length === 0) return prev;
        const newGrid = prev.map(row => [...row]);
        const randomRow = Math.floor(Math.random() * newGrid.length);
        const randomCol = Math.floor(Math.random() * newGrid[0].length);
        newGrid[randomRow][randomCol] = bgColors[Math.floor(Math.random() * bgColors.length)];
        return newGrid;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleGridHover = (rowIndex: number, colIndex: number) => {
    setGridColors(prev => {
      const newGrid = prev.map(row => [...row]);
      newGrid[rowIndex][colIndex] = bgColors[Math.floor(Math.random() * bgColors.length)];
      return newGrid;
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full min-h-screen z-10 bg-[#f5f1e6] flex flex-col pt-24 pb-12 overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 grid grid-cols-6 grid-rows-8">
          {gridColors.map((row, rowIndex) => (
            row.map((color, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="border border-stone-300/30 transition-colors duration-500 cursor-pointer"
                style={{ backgroundColor: color }}
                onMouseEnter={() => handleGridHover(rowIndex, colIndex)}
              />
            ))
          ))}
        </div>

        {/* Dotted Pattern Overlay */}
        <div 
          className="absolute inset-0 z-[1] opacity-20 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px' 
          }}
        ></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-semibold text-[#1c1c1c] mb-8 text-center px-4 relative z-10"
        >
          Welcome to Zeo.ai Medical Assistant
        </motion.h1>

        {/* Full Width Grid Layout - 3x2 Left + Center + 3x2 Right */}
        <div className="w-full relative z-10">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-8 gap-0">
            
            {/* LEFT COLUMN - 3x2 Grid */}
            <div className="hidden lg:grid lg:col-span-2 grid-cols-2 grid-rows-3 gap-0">
              {/* Left Box 1 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleLeft1Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={left1Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{left1Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{left1Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Left Box 2 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleLeft2Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={left2Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{left2Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{left2Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Left Box 3 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleLeft3Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={left3Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{left3Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{left3Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Left Box 4 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleLeft4Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={left4Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{left4Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{left4Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Left Box 5 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleLeft5Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={left5Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{left5Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{left5Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Left Box 6 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleLeft6Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={left6Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{left6Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{left6Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* CENTER - Agent Display */}
            <div className="col-span-1 lg:col-span-4 border border-stone-300 border-dotted flex flex-col items-center justify-center p-6 md:p-8 bg-transparent relative"
              style={{ 
                backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                backgroundSize: '24px 24px',
                backgroundColor: '#f5f1e6'
              }}
            >
              <div className="w-full aspect-square max-w-[500px] bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-200 flex items-center justify-center relative">
                {/* The D-ID agent will mount here */}
                <div 
                  id="zeo-agent-container" 
                  className="w-full h-full"
                  style={{ minHeight: '400px' }}
                >
                  {/* Fallback content if agent doesn't load */}
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-[#f5f1e6] rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">🩺</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1c1c1c] mb-2">AI Doctor Loading...</h3>
                    <p className="text-sm text-stone-600 max-w-xs">
                      Your medical assistant will appear here. Please ensure you've whitelisted this domain in your D-ID settings.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-stone-500 mt-6 font-mono tracking-widest uppercase font-bold">Zeo.ai Live Medical Agent</p>
            </div>

            {/* RIGHT COLUMN - 3x2 Grid */}
            <div className="hidden lg:grid lg:col-span-2 grid-cols-2 grid-rows-3 gap-0">
              {/* Right Box 1 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleRight1Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={right1Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{right1Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{right1Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Box 2 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleRight2Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={right2Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{right2Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{right2Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Box 3 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleRight3Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={right3Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{right3Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{right3Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Box 4 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleRight4Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={right4Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{right4Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{right4Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Box 5 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleRight5Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={right5Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{right5Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{right5Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Box 6 */}
              <div 
                className="border border-stone-300 border-dotted p-4 flex flex-col justify-center items-center text-center transition-colors cursor-pointer min-h-[140px] bg-transparent overflow-hidden relative"
                onMouseEnter={handleRight6Enter}
                style={{ 
                  backgroundImage: 'radial-gradient(#c8c5b9 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px',
                  backgroundColor: '#f5f1e6'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={right6Key} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.2 }} 
                    className="flex flex-col items-center"
                  >
                    <h3 className="font-bold text-sm mb-1">{right6Content.title}</h3>
                    <p className="text-[10px] text-stone-500">{right6Content.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

        {/* Key Features Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 w-full max-w-5xl px-4 mx-auto relative z-10"
        >
          <p className="text-[10px] text-center text-[#8e8e8e] uppercase tracking-[0.2em] mb-4 sm:mb-8 font-mono bg-[#f5f1e6] inline-block px-4 mx-auto flex justify-center w-max">
            YOUR AI DOCTOR COMPANION
          </p>
          <div
            className="features-scroll flex justify-center items-center gap-6 sm:gap-16 overflow-hidden relative h-10 sm:h-12 w-full"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)'
            }}
          >
            <div className="features-container flex gap-10 sm:gap-20 animate-scroll-features items-center opacity-60">
              {[
                'Live Video Consultations',
                'Medicine & Dosage Info',
                'Visual Symptom Analysis',
                'Remembers Your History',
                'Disease Identification',
                'Precautions & Warnings',
                'Natural Conversations',
                'Symptom-Based Diagnosis',
                'Live Video Consultations',
                'Medicine & Dosage Info',
                'Visual Symptom Analysis',
                'Remembers Your History',
                'Disease Identification',
                'Precautions & Warnings',
                'Natural Conversations',
                'Symptom-Based Diagnosis',
              ].map((feature, i) => (
                <div key={i} className="feature-item text-black flex items-center gap-2 whitespace-nowrap font-semibold text-lg tracking-tight">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll-features {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-features {
          animation: scroll-features 25s linear infinite;
        }
        
        /* Ensure the D-ID agent takes full height/width of its container */
        #zeo-agent-container > * {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
