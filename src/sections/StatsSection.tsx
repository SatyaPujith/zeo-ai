import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';


// --- Badge Icons ---
const BadgeSOC2 = () => (
  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center bg-[#fdfcf8] text-[8px] font-mono text-center p-1 leading-tight text-stone-600">
    AICPA<br /><span className="font-bold">SOC2</span>
  </div>
);
const BadgeGDPR = () => (
  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center bg-[#fdfcf8] text-[8px] font-mono p-1 text-stone-600">
    ★ GDPR ★
  </div>
);
const BadgeHIPAA = () => (
  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center bg-[#fdfcf8] text-[8px] font-mono text-center p-1 leading-tight text-stone-600">
    HIPAA<br />COMPLIANT
  </div>
);

// --- Animated Counter Component ---
const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimated = useRef(false);

  // Memoize the parsed values so they don't change on every render
  const parsedValue = useMemo(() => {
    const digitMatch = value.match(/\d+/);
    
    if (!digitMatch) {
      return { hasNumber: false, targetNum: 0, prefix: '', suffix: '', fullValue: value };
    }

    const numericPart = digitMatch[0];
    const targetNum = parseInt(numericPart, 10);
    
    if (isNaN(targetNum)) {
      return { hasNumber: false, targetNum: 0, prefix: '', suffix: '', fullValue: value };
    }
    
    const numberIndex = value.indexOf(numericPart);
    const prefix = value.substring(0, numberIndex);
    const suffix = value.substring(numberIndex + numericPart.length);

    return { hasNumber: true, targetNum, prefix, suffix, fullValue: value };
  }, [value]);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    
    if (!parsedValue.hasNumber) {
      setDisplayValue(parsedValue.fullValue);
      hasAnimated.current = true;
      return;
    }

    hasAnimated.current = true;
    const { targetNum, prefix, suffix } = parsedValue;

    // Animate the counter
    let currentNum = 0;
    const increment = Math.ceil(targetNum / 50); // 50 steps
    const duration = 1500; // 1.5 seconds
    const stepTime = duration / 50;

    const timer = setInterval(() => {
      currentNum += increment;
      if (currentNum >= targetNum) {
        currentNum = targetNum;
        clearInterval(timer);
      }
      setDisplayValue(`${prefix}${currentNum}${suffix}`);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, parsedValue]);

  return (
    <motion.span 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayValue}
    </motion.span>
  );
};


const reliabilityStats = [
  { value: '500+', label: 'Medical\nConditions', desc: 'Comprehensive disease\nknowledge base' },
  { value: '3sec', label: 'Response\nTime', desc: 'Instant answers to\nyour health questions' },
  { value: '24/7', label: 'Always\nAvailable', desc: 'Round-the-clock\nmedical assistance' },
  { value: '256-bit', label: 'Encryption\nSecurity', desc: 'Military-grade data\nprotection standard' },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background mb-24">
      <div className="max-w-7xl mx-auto">

        {/* --- PART 1: Architecture --- */}

        {/* Header Block */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1c1c1c] mb-8 max-w-4xl"
          >
            For accessible healthcare<br className="hidden sm:block" /> anytime, anywhere
          </motion.h2>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-stone-200">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-stone-600 max-w-xl leading-relaxed"
            >
              Zeo.ai is your intelligent medical companion that combines advanced AI with visual analysis to provide instant health insights through natural conversations.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#2e2b26] hover:bg-[#1a1916] text-[#fdfcf8] px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-colors"
            >
              START CONSULTATION
            </motion.button>
          </div>
        </div>

        {/* Architect Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-12"
        >
          <div className="max-w-4xl mx-auto border border-stone-800/10 bg-[#fdfcf8] p-2 sm:p-4 rounded-sm">
            <img
              src="/images/architecture-diagram.jpg"
              alt="Zeo.ai Medical AI Architecture"
              className="w-full h-auto opacity-90 mix-blend-multiply"
            />
          </div>
        </motion.div>

        {/* Footer Stats/Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg text-[#1c1c1c] mb-2">Instant Access</h3>
            <p className="text-stone-600 text-sm">Medical help whenever you need</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg text-[#1c1c1c] mb-2">Privacy First</h3>
            <p className="text-stone-600 text-sm">Your health data stays secure</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg text-[#1c1c1c] mb-2">Visual Analysis</h3>
            <p className="text-stone-600 text-sm">AI-powered symptom detection</p>
          </motion.div>

          {/* Badges Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 md:justify-end"
          >
            <BadgeSOC2 />
            <BadgeGDPR />
            <BadgeHIPAA />
          </motion.div>
        </div>


        {/* --- PART 2: Reliability --- */}
        <div className="mt-40 mb-20 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-normal tracking-tight text-[#1c1c1c] mb-6"
            >
              Intelligent features designed<br />for better healthcare
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-stone-600 max-w-lg leading-relaxed text-sm sm:text-base"
            >
              Zeo.ai combines cutting-edge AI technology with medical expertise to deliver accurate, reliable health guidance through natural video conversations.
            </motion.p>
          </div>

          {/* Stats List */}
          <div className="border-t border-stone-800/10">
            <div className="divide-y divide-stone-800/10 border-b border-stone-800/10 border-dashed">
              {reliabilityStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-1 sm:grid-cols-12 py-8 sm:py-10 items-start sm:items-center gap-4 border-dashed border-stone-300"
                  style={{ borderBottomStyle: 'dashed' }}
                >
                  {/* Value */}
                  <div className="sm:col-span-5 text-4xl sm:text-5xl md:text-6xl font-normal text-[#1c1c1c] tracking-tight tabular-nums">
                    <Counter value={stat.value} />
                  </div>

                  {/* Label */}
                  <div className="sm:col-span-3 text-xs sm:text-sm font-medium text-stone-500 uppercase tracking-wide whitespace-pre-line">
                    {stat.label}
                  </div>

                  {/* Desc */}
                  <div className="sm:col-span-4 text-xs sm:text-sm text-stone-500 whitespace-pre-line">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
