import AnimatedSection from "@/components/AnimatedSection";
import { Users, Cpu, Target, Sparkles } from "lucide-react";

const approachItems = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "资源整合与供需匹配",
    desc: "统一沉淀空间内的信息与资源，基于用户线索智能完成供需对接",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "内容策划与活动运营",
    desc: "自动抓取区域热点与行业动态，据此生成活动创意方案并输出社交媒体宣发内容",
  },
];

export default function SolutionSlide() {
  return (
    <div
      className="snap-section relative grain-overlay"
      style={{ background: "#0a0f1a" }}
    >
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663468040496/ZvtLcmbVsxknwMtEAQho7F/ai-network-nodes-YnVGFmbVDfXKPMypEvuJ3A.webp"
          alt="AI Network"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/95 via-[#0a0f1a]/80 to-[#0a0f1a]/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        {/* Section label */}
        <AnimatedSection animation="slide-up" delay={0.1}>
          <p
            className="text-[#4a9e8e] text-xs tracking-[0.3em] mb-4"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            我们的解决方案
          </p>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection animation="slide-up" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
          >
            <span className="gradient-text-teal">"人+AI"</span>双驱动的轻量化智能运营体系
          </h2>
        </AnimatedSection>

        {/* Intro text */}
        <AnimatedSection animation="slide-up" delay={0.3}>
          <p
            className="text-[#e8e4df]/70 text-base md:text-lg leading-relaxed max-w-4xl mb-10"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            针对乡镇公共小空间<span className="text-[#e8a87c] font-semibold">"有场地、缺运营"</span>的核心痛点，提供从定位策划到日常运营全链路覆盖的轻量化解决方案。
          </p>
        </AnimatedSection>

        {/* Two-column solution */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 max-w-5xl lg:grid-cols-[1fr_1.3fr]">
          {/* Column 1: 空间赋能 */}
          <AnimatedSection animation="slide-up" delay={0.4}>
            <div className="rounded-lg p-6 lg:p-7 h-full transition-all duration-500 hover:translate-y-[-4px]"
              style={{
                backgroundColor: "rgba(212, 168, 83, 0.06)",
                border: "1px solid rgba(212, 168, 83, 0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(212, 168, 83, 0.15)", color: "#d4a853" }}
                >
                  <Users className="w-5 h-5" />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "#d4a853" }}
                >
                  专业空间赋能：人驻 + 策划
                </h3>
              </div>
              <p
                className="text-[#e8e4df]/60 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                为每个合作空间提供专业的运营定位与空间设计策划服务，明确差异化定位与用户画像。同时依托数字游民社区网络，从全国游民中甄选匹配的驻场主理人，以创业者心态深度运营线下空间。
              </p>
              <div
                className="rounded-lg px-4 py-3"
                style={{
                  backgroundColor: "rgba(212, 168, 83, 0.08)",
                  borderLeft: "2px solid #d4a853",
                }}
              >
                <p
                  className="text-[#d4a853] text-xs leading-relaxed"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  解决传统雇员模式积极性不足、运营质量难以保障的问题
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Column 2: AI智能体 */}
          <AnimatedSection animation="slide-up" delay={0.55}>
            <div className="rounded-lg p-6 lg:p-7 h-full transition-all duration-500 hover:translate-y-[-4px]"
              style={{
                backgroundColor: "rgba(74, 158, 142, 0.06)",
                border: "1px solid rgba(74, 158, 142, 0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(74, 158, 142, 0.15)", color: "#4a9e8e" }}
                >
                  <Cpu className="w-5 h-5" />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "#4a9e8e" }}
                >
                  AI空间智能体：降本 + 提效
                </h3>
              </div>
              <p
                className="text-[#e8e4df]/60 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                自研AI空间智能体系统，自动化处理高频标准事务，大幅降低运营的人力投入与管理门槛，典型能力如：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {approachItems.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg px-4 py-3"
                    style={{
                      backgroundColor: "rgba(74, 158, 142, 0.06)",
                      border: "1px solid rgba(74, 158, 142, 0.1)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span style={{ color: "#4a9e8e" }}>{item.icon}</span>
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "#e8e4df" }}
                      >
                        {item.title}
                      </span>
                    </div>
                    <p
                      className="text-[#e8e4df]/50 text-xs leading-relaxed pl-7"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Closing synergy statement */}
        <AnimatedSection animation="fade-in" delay={0.8}>
          <div className="mt-8 max-w-5xl">
            <div
              className="rounded-lg px-6 py-4 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(212,168,83,0.08) 0%, rgba(74,158,142,0.08) 100%)",
                border: "1px solid rgba(212,168,83,0.15)",
              }}
            >
              <p
                className="text-base md:text-lg font-medium"
                style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
              >
                两者协同形成<span className="text-[#d4a853]">"主理人负责温度、AI负责效率"</span>的运营闭环，使单个空间在极低人力成本下实现持续、专业的社区运营。
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
