import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// --- Types ---
type CardContent = {
  type: 'logo' | 'stat' | 'quote';
  content: React.ReactNode;
};

type TestimonialItem = {
  id: string;
  default: CardContent;
  hover: CardContent;
};

// --- Data ---
const gridItems: TestimonialItem[] = [
  // Row 1
  {
    id: 'video-call',
    default: { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Live Video</div><div className="text-sm text-stone-500">Consultations</div></div> },
    hover: { type: 'quote', content: <div className="text-sm">"Talk face-to-face with AI doctor for instant guidance"</div> }
  },
  {
    id: 'medicine',
    default: { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Medicine</div><div className="text-sm text-stone-500">Information</div></div> },
    hover: { type: 'quote', content: <div className="text-sm">"Get accurate dosage and precaution information"</div> }
  },
  {
    id: 'response-stat',
    default: { type: 'stat', content: <div className="text-center"><div className="text-4xl md:text-5xl font-medium mb-2">3sec</div><div className="text-sm text-muted-foreground">Average response</div></div> },
    hover: { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">24/7</div><div className="text-sm text-stone-500">Available</div></div> }
  },
  {
    id: 'analysis-quote',
    default: { type: 'quote', content: <div className="text-sm md:text-base leading-relaxed">"Visual symptom analysis helps identify skin conditions, wounds, and visible symptoms instantly through your camera."</div> },
    hover: { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Visual</div><div className="text-sm text-stone-500">Analysis</div></div> }
  },

  // Row 2
  {
    id: 'memory',
    default: { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Health</div><div className="text-sm text-stone-500">Memory</div></div> },
    hover: { type: 'quote', content: <div className="text-sm">"Remembers your health journey like a trusted friend"</div> }
  },
  {
    id: 'diagnosis-quote',
    default: { type: 'quote', content: <div className="text-sm md:text-base leading-relaxed">"Describe your symptoms naturally and get instant insights on possible conditions and when to seek professional care."</div> },
    hover: { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Smart</div><div className="text-sm text-stone-500">Diagnosis</div></div> }
  },
  {
    id: 'conditions-stat',
    default: { type: 'stat', content: <div className="text-center"><div className="text-4xl md:text-5xl font-medium mb-2">500+</div><div className="text-sm text-muted-foreground">Medical conditions</div></div> },
    hover: { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Natural</div><div className="text-sm text-stone-500">Conversations</div></div> }
  },
  {
    id: 'secure-quote',
    default: { type: 'quote', content: <div className="text-sm md:text-base leading-relaxed">"Your medical data is protected with military-grade encryption and HIPAA compliance standards."</div> },
    hover: { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Fully</div><div className="text-sm text-stone-500">Secure</div></div> }
  },
];

// --- Component ---
// --- Derived Data for Random Actions ---
// --- Derived Data for Random Actions ---
// Initial base options from grid items
const baseOptions = gridItems.map(item => item.hover);

// Additional random options to expand the pool to 20+
const extraOptions: CardContent[] = [
  { type: 'quote', content: <div className="text-sm">"Instant symptom analysis saves valuable time"</div> },
  { type: 'stat', content: <div className="text-center"><div className="text-4xl md:text-5xl font-medium mb-2">100%</div><div className="text-sm text-muted-foreground">HIPAA Compliant</div></div> },
  { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Hospital</div><div className="text-sm text-stone-500">Connect</div></div> },
  { type: 'quote', content: <div className="text-sm">"Real-time health monitoring at your fingertips"</div> },
  { type: 'stat', content: <div className="text-center"><div className="text-4xl md:text-5xl font-medium mb-2">256-bit</div><div className="text-sm text-muted-foreground">Encryption</div></div> },
  { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Health</div><div className="text-sm text-stone-500">Records</div></div> },
  { type: 'quote', content: <div className="text-sm">"Like having a doctor in your pocket"</div> },
  { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Medical</div><div className="text-sm text-stone-500">AI</div></div> },
  { type: 'stat', content: <div className="text-center"><div className="text-4xl md:text-5xl font-medium mb-2">95%</div><div className="text-sm text-muted-foreground">Accuracy Rate</div></div> },
  { type: 'quote', content: <div className="text-sm">"Comprehensive drug interaction checking"</div> },
  { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Mobile</div><div className="text-sm text-stone-500">First</div></div> },
  { type: 'quote', content: <div className="text-sm">"Emergency triage guidance when you need it"</div> },
  { type: 'stat', content: <div className="text-center"><div className="text-4xl md:text-5xl font-medium mb-2">365</div><div className="text-sm text-muted-foreground">Days Available</div></div> },
  { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Vital</div><div className="text-sm text-stone-500">Tracking</div></div> },
  { type: 'quote', content: <div className="text-sm">"Personalized health recommendations daily"</div> },
  { type: 'stat', content: <div className="text-center"><div className="text-4xl md:text-5xl font-medium mb-2">10+</div><div className="text-sm text-muted-foreground">Languages</div></div> },
  { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Lab</div><div className="text-sm text-stone-500">Results</div></div> },
  { type: 'quote', content: <div className="text-sm">"Preventive care suggestions based on history"</div> },
  { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">Vaccination</div><div className="text-sm text-stone-500">Info</div></div> },
  { type: 'stat', content: <div className="text-center"><div className="text-4xl md:text-5xl font-medium mb-2">5min</div><div className="text-sm text-muted-foreground">Avg Consultation</div></div> },
  { type: 'quote', content: <div className="text-sm">"Mental health support with empathy and care"</div> },
  { type: 'logo', content: <div className="text-center"><div className="font-bold text-lg">First Aid</div><div className="text-sm text-stone-500">Guide</div></div> },
];

const allHoverOptions = [...baseOptions, ...extraOptions];

// --- Component ---
const TestimonialCard = ({ item }: { item: TestimonialItem }) => {
  const [currentContent, setCurrentContent] = useState<CardContent>(item.default);
  const [animationKey, setAnimationKey] = useState(0);

  const handleMouseEnter = () => {
    // Pick a random content from the pool
    const randomIndex = Math.floor(Math.random() * allHoverOptions.length);
    setCurrentContent(allHoverOptions[randomIndex]);
    // Increment key to trigger Framer Motion exit/enter animation
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div
      className="group relative h-64 sm:h-72 border-r border-b border-stone-200 border-dashed bg-[#fdfcf8] overflow-hidden cursor-default transition-colors"
      onMouseEnter={handleMouseEnter}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center p-8 text-[#1c1c1c]"
        >
          {currentContent.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-background pt-24 pb-0 border-t border-stone-200 border-dashed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1c1c1c] mb-6"
          >
            Your personal health companion<br />available anytime, anywhere
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-stone-600 max-w-2xl mx-auto leading-relaxed"
          >
            From quick symptom checks to detailed health consultations, Zeo.ai provides<br className="hidden sm:block" /> intelligent medical guidance through natural conversations.
          </motion.p>
        </div>
      </div>

      {/* Full Width Grid */}
      <div className="w-full border-t border-stone-200 border-dashed">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-stone-200 border-dashed">
          {gridItems.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Bottom spacer or border if needed */}
      <div className="w-full h-px bg-transparent" />
    </section>
  );
};

export default TestimonialsSection;
