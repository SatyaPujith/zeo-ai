import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    useEffect(() => {
        // Auto-complete after 2 seconds
        const timer = setTimeout(() => {
            onComplete();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#eff0eb]"
            initial={{ y: 0 }}
            exit={{
                y: '-100%',
                transition: {
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1]
                }
            }}
        >
            {/* Simple logo or animation - no counter */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center gap-4"
            >
                <div className="h-16 w-16 bg-[#2a3025] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    Z
                </div>
                <motion.div
                    className="text-3xl font-semibold text-[#2a3025] tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Zeo.ai
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
