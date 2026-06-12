export function Stats() {
  const stats = [
    { value: "SA", label: "Nationwide Coverage" },
    { value: "20+", label: "Years Experience" },
    { value: "24h", label: "First Action Focus" },
    { value: "0", label: "Fee If We Do Not Recover" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`text-center ${index !== stats.length - 1 ? 'md:border-r border-white/10' : ''}`}
          >
            <div className="text-4xl md:text-5xl font-display font-semibold mb-2">{stat.value}</div>
            <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="h-px bg-white/10 w-full mt-20"></div>
    </div>
  );
}
