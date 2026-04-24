/*
 * Design: 「山水数字」— Funding Slide
 */
import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { Code2, GitBranch, Users } from "lucide-react";

const useOfFunds = [
  {
    icon: <Code2 className="w-5 h-5" />,
    num: "01",
    title: "产品研发与 AI 系统完善",
    desc: "持续迭代AI空间智能体系统，提升自动化运营能力",
    color: "#d4a853",
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    num: "02",
    title: "线下轻运营节点复制标准化体系搭建",
    desc: "建立可快速复制的标准化交付流程与系统架构",
    color: "#4a9e8e",
  },
  {
    icon: <Users className="w-5 h-5" />,
    num: "03",
    title: "市场渠道建设",
    desc: "招募运营人才，打通全国乡镇空间服务渠道网络",
    color: "#e8a87c",
  },
];

export default function FundingSlide() {
  const { ref } = useInView(0.3);

  return (
    <div
      ref={ref}
      className="snap-section relative grain-overlay"
      style={{
        background: "linear-gradient(135deg, #0a0f1a 0%, #0f1520 100%)",
      }}
    >
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Left: Funding details */}
          <div className="lg:w-1/2">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <p
                className="text-[#d4a853] text-xs tracking-[0.3em] mb-4"
                style={{ fontFamily: "'Space Grotesk', monospace" }}
              >
                融资计划
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.2}>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-10"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  color: "#e8e4df",
                }}
              >
                本轮<span className="gradient-text-amber">融资</span>目标
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {[
                { label: "融资轮次", value: "种子轮", highlight: true },
                { label: "投前估值", value: "5,000 万元", highlight: false },
                { label: "目标融资额", value: "350 万元", highlight: true },
                { label: "出让股份", value: "7%", highlight: false },
              ].map((item, i) => (
                <AnimatedSection
                  key={i}
                  animation="slide-up"
                  delay={0.3 + i * 0.1}
                >
                  <div
                    className="flex items-center justify-between py-3 border-b"
                    style={{ borderColor: "rgba(232,228,223,0.06)" }}
                  >
                    <span
                      className="text-[#e8e4df]/45 text-sm"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`text-lg font-bold ${item.highlight ? "text-[#d4a853]" : "text-[#e8e4df]"}`}
                      style={{ fontFamily: "'Space Grotesk', monospace", marginRight: "200px" }}
                    >
                      {item.value}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right: 资金用途 */}
          <div
            className="lg:w-1/2 flex flex-col justify-center relative"
          >
            {/* Vertical divider */}
            <div
              className="hidden lg:block absolute left-0 top-[10%] bottom-[10%] w-px"
              style={{ background: "linear-gradient(180deg, transparent, rgba(212,168,83,0.08), transparent)" }}
            />

            <AnimatedSection animation="slide-up" delay={0.3}>
              <div
                className="rounded-xl p-7"
                style={{
                  backgroundColor: "rgba(232,228,223,0.03)",
                  border: "1px solid rgba(232,228,223,0.06)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-px h-4" style={{ backgroundColor: "rgba(212,168,83,0.3)" }} />
                  <p
                    className="text-[#d4a853] text-xs tracking-[0.2em]"
                    style={{ fontFamily: "'Space Grotesk', monospace" }}
                  >
                   未来18个月资金用途
                  </p>
                </div>

                <div className="space-y-3">
                  {useOfFunds.map((item, i) => (
                    <AnimatedSection
                      key={i}
                      animation="slide-left"
                      delay={0.4 + i * 0.15}
                    >
                      <div
                        className="rounded-lg p-4 flex gap-4 transition-all duration-300"
                        style={{
                          backgroundColor: `${item.color}08`,
                          border: `1px solid ${item.color}15`,
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `${item.color}12`,
                            color: item.color,
                          }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span
                              className="text-[10px] font-bold"
                              style={{
                                color: item.color,
                                fontFamily: "'Space Grotesk', monospace",
                              }}
                            >
                              {item.num}
                            </span>
                            <h4
                              className="text-sm font-semibold"
                              style={{
                                color: "#e8e4df",
                                fontFamily: "'Noto Sans SC', sans-serif",
                              }}
                            >
                              {item.title}
                            </h4>
                          </div>
                          <p
                            className="text-[#e8e4df]/35 text-xs leading-relaxed"
                            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
