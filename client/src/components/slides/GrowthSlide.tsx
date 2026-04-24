import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    round: "天使轮",
    nodes: "10",
    revenue: "530～940 万",
    valuation: "5,000 万～1亿",
    milestone: "建立可参观、可复盘的乡村样板节点",
    active: true,
  },
  {
    round: "A轮",
    nodes: "100",
    revenue: "5,300–9,400 万",
    valuation: "5.3亿～9.4 亿",
    milestone: "验证节点复制性，形成标准化交付体系",
    active: false,
  },
  {
    round: "B轮",
    nodes: "1,000",
    revenue: "5.3亿～9.4 亿",
    valuation: "100亿",
    milestone: "SaaS 化改造完成，启动全国渠道建设，激活生态网络效应",
    active: false,
  },
];

function StageCard({
  stage,
  index,
}: {
  stage: (typeof stages)[0];
  index: number;
}) {
  return (
    <div className="flex-1 relative">
      <AnimatedSection animation="slide-up" delay={0.4 + index * 0.15}>
        <div
          className={`rounded-xl p-6 transition-all duration-500 hover:translate-y-[-4px] h-full ${
            stage.active ? "" : ""
          }`}
          style={{
            background: stage.active
              ? "linear-gradient(180deg, rgba(212,168,83,0.08) 0%, rgba(10,15,26,0.95) 100%)"
              : "rgba(16,20,32,0.5)",
            border: stage.active
              ? "1px solid rgba(212,168,83,0.3)"
              : "1px solid rgba(232,228,223,0.06)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Round badge */}
          <div className="flex items-center justify-between mb-5">
            <h3
              className="text-xl font-bold"
              style={{
                color: stage.active ? "#d4a853" : "#e8e4df",
                fontFamily: "'Space Grotesk', monospace",
              }}
            >
              {stage.round}
            </h3>
            {stage.active && (
              <span
                className="text-[10px] px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(212,168,83,0.15)",
                  color: "#d4a853",
                  border: "1px solid rgba(212,168,83,0.25)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                }}
              >
                当前轮次
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="space-y-3.5 mb-5">
            <div
              className="flex items-center justify-between py-2 px-3 rounded-lg"
              style={{
                backgroundColor: "rgba(232,228,223,0.03)",
              }}
            >
              <span
                className="text-[#e8e4df]/40 text-xs"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                节点规模
              </span>
              <span
                className="text-sm font-semibold"
                style={{
                  color: "#e8e4df",
                  fontFamily: "'Space Grotesk', monospace",
                }}
              >
                {stage.nodes}
                <span
                  className="text-[#e8e4df]/30 text-xs ml-0.5"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  个
                </span>
              </span>
            </div>
            <div
              className="flex items-center justify-between py-2 px-3 rounded-lg"
              style={{
                backgroundColor: "rgba(232,228,223,0.03)",
              }}
            >
              <span
                className="text-[#e8e4df]/40 text-xs"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                年营收
              </span>
              <span
                className="text-sm font-semibold"
                style={{
                  color: "#d4a853",
                  fontFamily: "'Space Grotesk', monospace",
                }}
              >
                {stage.revenue}
              </span>
            </div>
            <div
              className="flex items-center justify-between py-2 px-3 rounded-lg"
              style={{
                backgroundColor: stage.active
                  ? "rgba(212,168,83,0.06)"
                  : "rgba(232,228,223,0.03)",
              }}
            >
              <span
                className="text-[#e8e4df]/40 text-xs"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                估值区间
              </span>
              <span
                className="text-sm font-bold"
                style={{
                  color: stage.active ? "#d4a853" : "#4a9e8e",
                  fontFamily: "'Space Grotesk', monospace",
                }}
              >
                {stage.valuation}
              </span>
            </div>
          </div>

          {/* Milestone */}
          <div
            className="pt-4 border-t"
            style={{ borderColor: "rgba(232,228,223,0.06)" }}
          >
            <p
              className="text-[#e8e4df]/40 text-xs leading-relaxed"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              {stage.milestone}
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default function GrowthSlide() {
  return (
    <div
      className="snap-section relative grain-overlay"
      style={{
        background: "linear-gradient(135deg, #0a0f1a 0%, #0c1220 100%)",
      }}
    >
      {/* Top decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,168,83,0.08), transparent)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <AnimatedSection animation="slide-up" delay={0.1}>
              <p
                className="text-[#d4a853] text-xs tracking-[0.3em] mb-3"
                style={{ fontFamily: "'Space Grotesk', monospace" }}
              >
                增长路径
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.2}>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  color: "#e8e4df",
                }}
              >
                扩张路径与<span className="gradient-text-amber">估值逻辑</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-up" delay={0.35}>
            <div
              className="rounded-lg px-5 py-3 shrink-0"
              style={{
                backgroundColor: "rgba(212,168,83,0.06)",
                border: "1px solid rgba(212,168,83,0.12)",
              }}
            >
              <p
                className="text-[#e8e4df]/40 text-xs mb-1"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                核心估值公式
              </p>
              <p
                className="text-sm font-semibold text-[#d4a853]"
                style={{ fontFamily: "'Space Grotesk', monospace" }}
              >
                潜在节点网络规模 × 单节点价值
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Stages with connectors */}
        <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0">
          {stages.map((stage, i) => (
            <div key={i} className="flex-1 flex items-stretch">
              <StageCard stage={stage} index={i} />
              {i < stages.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-3 shrink-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(212,168,83,0.08)",
                      border: "1px solid rgba(212,168,83,0.15)",
                    }}
                  >
                    <ArrowRight className="w-4 h-4 text-[#d4a853]/40" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection animation="fade-in" delay={0.8}>
          <div
            className="mt-8 rounded-lg px-6 py-4 flex items-start gap-3"
            style={{
              backgroundColor: "rgba(232,228,223,0.02)",
              border: "1px solid rgba(232,228,223,0.05)",
            }}
          >
            <span
              className="text-[#d4a853]/40 text-lg leading-none mt-0.5"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              ※
            </span>
            <p
              className="text-[#e8e4df]/35 text-sm leading-relaxed"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              乡村是中国最大的线下网络之一。节点网络一旦形成规模，可持续叠加电商、产业服务、AI
              服务、数据资产等高毛利业务。
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
