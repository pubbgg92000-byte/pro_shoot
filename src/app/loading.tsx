'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Logo pulse */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-gold/20 flex items-center justify-center">
            <span className="font-heading text-2xl text-gold">P</span>
          </div>
          <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-gold/40 animate-ping" />
        </div>
        {/* Shimmer bar */}
        <div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-gold-gradient rounded-full"
            style={{
              width: '40%',
              animation: 'shimmer 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(500%); }
        }
      `}</style>
    </div>
  );
}
