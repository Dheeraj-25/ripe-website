import { useEffect, useState, useRef } from "react";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const StatsCounter = () => {
  const [stats, setStats] = useState<Stat[]>([
    { value: 0, label: "School Children educated", suffix: "" },
    { value: 0, label: "Women empowered through SHG's and ivehood training", suffix: "" },
    { value: 0, label: "Villages benefited from the improved irrigation systems", suffix: "+" },
    { value: 0, label: "People reached through WASH and hygiene awareness", suffix: "" },
  ]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetStats = [
    { value: 2700, label: "School Children educated", suffix: "" },
    { value: 5000, label: "Women empowered through SHG's and ivehood training", suffix: "" },
    { value: 50, label: "Villages benefited from the improved irrigation systems", suffix: "+" },
    { value: 10000, label: "People reached through WASH and hygiene awareness", suffix: "" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    targetStats.forEach((target, index) => {
      let currentStep = 0;
      const increment = target.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(increment * currentStep, target.value);

        setStats((prevStats) => {
          const newStats = [...prevStats];
          newStats[index] = {
            ...newStats[index],
            value: newValue,
          };
          return newStats;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  return (
    <section ref={sectionRef} className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.label.includes("Million")
                  ? stat.value.toFixed(1)
                  : Math.round(stat.value).toLocaleString()}
                {targetStats[index].suffix}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
