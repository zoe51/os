import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Lightbulb, AlertTriangle, Rocket } from "lucide-react";

const locations = ["DN安吉", "DN余村", "DN黄山", "DN武夷山"];

const insights = [
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "痛点",
    color: "#e8a87c",
    highlight: "大型共居社区模式重资产、重运营——前期建设投入至少千万级，日常运营成本也难以压降",
    desc: '大型共居社区模式重资产、重运营——前期建设投入至少千万级，日常运营成本也难以压降，制约了规模化复制的速度。',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "洞察",
    color: "#4a9e8e",
    highlight: "中国乡镇存在大量闲置或低效的公共小空间",
    desc: '中国乡镇存在大量闲置或低效的公共小空间（文化礼堂、老街中心、乡村驿站等），并在不断建设新空间，但这些空间却普遍缺乏专业运营能力与数字化工具。',
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "机会",
    color: "#d4a853",
    highlight: "针对乡镇小空间的轻量化智能运营业务线",
    desc: '我们计划开辟针对乡镇小空间的轻量化智能运营业务线——以AI自动化运营为核心，为乡镇公共小空间提供低成本、可复制的智能体运营解决方案，将闲置空间转化为自运营的社区节点。',
  },
];

export default function AboutSlide() {
  return (
    <div
      className="snap-section relative grain-overlay"
      style={{ background: "#0a0f1a" }}
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a853]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4a9e8e]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        {/* Section label */}
        <AnimatedSection animation="slide-up" delay={0.1}>
          <p
            className="text-[#d4a853] text-xs tracking-[0.3em] mb-6"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            关于我们
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: Company intro */}
          <div className="lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-8">
            {/* Logo / Image */}
            <AnimatedSection animation="slide-up" delay={0.2}>
              <div className="mb-6">
                <img
                  src="https://51-1327029614.cos.ap-shanghai.myqcloud.com/pitch/dncn.png"
                  alt="DN-CN Logo"
                  className="w-auto h-auto object-contain"
                  style={{ maxHeight: "80px", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}
                />
              </div>
            </AnimatedSection>

            {/* Title */}
            <AnimatedSection animation="slide-up" delay={0.3}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
              >
                DN-CN 数字游民中国
              </h2>
            </AnimatedSection>

            {/* Intro text */}
            <AnimatedSection animation="slide-up" delay={0.4}>
              <p
                className="text-[#e8e4df]/80 text-base md:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                我们是中国数字游民社区的先行者。2021年在浙江安吉落地了国内首个数字游民共居空间，目前已在全国建立四大线下青年共居社区，并即将在杭州落成第五家开发者主题社区。DN-CN 汇聚了大量自由职业者与独立创业者，逐步构建起中国最具活力的数字游民生态圈。
              </p>
            </AnimatedSection>

            {/* Location badges */}
            <AnimatedSection animation="slide-up" delay={0.5}>
              <div className="flex flex-wrap gap-3">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      backgroundColor: "rgba(212, 168, 83, 0.08)",
                      border: "1px solid rgba(212, 168, 83, 0.2)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <MapPin className="w-4 h-4 text-[#d4a853]" />
                    <span
                      className="text-[#d4a853] text-sm font-medium tracking-wide"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      {loc}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: 问题与机会 */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <AnimatedSection animation="slide-up" delay={0.5}>
              <p
                className="text-[#d4a853] text-xs tracking-[0.3em] mb-6"
                style={{ fontFamily: "'Space Grotesk', monospace" }}
              >
                我们看到的问题与机会
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {insights.map((item, i) => (
                <AnimatedSection
                  key={item.title}
                  animation="slide-left"
                  delay={0.6 + i * 0.15}
                >
                  <div
                    className="rounded-lg p-5 transition-all duration-500 hover:translate-x-[-4px]"
                    style={{
                      backgroundColor: `${item.color}08`,
                      border: `1px solid ${item.color}20`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <h3
                        className="text-base font-bold"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif", color: item.color }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      className="text-[#e8e4df]/60 text-sm leading-relaxed"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      {item.highlight ? (
                        <>
                          {item.desc.split(item.highlight)[0]}
                          <span
                            className="font-semibold"
                            style={{ color: item.color }}
                          >
                            {item.highlight}
                          </span>
                          {item.desc.split(item.highlight)[1]}
                        </>
                      ) : (
                        item.desc
                      )}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
