import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { Rocket, Bot, Monitor, Briefcase, Lock, X, FileText } from "lucide-react";

const revenueStreams = [
  {
    icon: <Rocket className="w-5 h-5" />,
    name: "空间筹备初期定位和策划服务",
    content: "一次性服务费用",
    price: "约 8～25 万元/空间",
    color: "#d4a853",
    width: "100%",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    name: "智能体系统部署服务",
    content: "AI 运营工作流，如空间无人值守、活动策划、客服问答、内容生成、资源匹配等",
    price: "约 20～30 万元/空间",
    color: "#4a9e8e",
    width: "75%",
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    name: "6个月常态化运营服务",
    content: "现场讲解、接待、活动策划、社媒运营等",
    price: "约 48～72 万元/空间",
    color: "#e8a87c",
    width: "50%",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    name: "整体项目代运营服务",
    content: "从0到1原始团队驻扎，作为项目运营主体",
    price: "待定",
    color: "#8b9dc3",
    width: "35%",
  },
];

const oneTimeItems = [
  { name: "AI空间智能体系统", cost: "5万", revenue: "25万", profit: "20万" },
  { name: "轻量运营服务", cost: "5万", revenue: "8万～25万", profit: "3万～20万" },
  { name: "全包代运营服务", cost: "待定", revenue: "待定", profit: "待定" },
];

const recurringItems = [
  { name: "AI空间智能体系统", cost: "0.5k / 月", cost6m: "3万", revenue: "0.5k / 月", revenue6m: "3万", profit: "0" },
  { name: "轻量运营服务", cost: "3万 / 月", cost6m: "18万", revenue: "8万～12万 / 月", revenue6m: "48万～72万", profit: "30万～54万" },
  { name: "全包代运营服务", cost: "待定", cost6m: "待定", revenue: "待定", revenue6m: "待定", profit: "待定" },
];

function PasswordModal({
  open,
  onSuccess,
  onClose,
}: {
  open: boolean;
  onSuccess: () => void;
  onClose: () => void;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "OS2026") {
      setError(false);
      setPassword("");
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <div
        className="rounded-xl p-8 w-full max-w-sm relative"
        style={{
          background: "linear-gradient(135deg, #0c1220 0%, #0a0f1a 100%)",
          border: "1px solid rgba(212,168,83,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#e8e4df]/40 hover:text-[#e8e4df] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 mx-auto"
          style={{ backgroundColor: "rgba(212,168,83,0.12)", color: "#d4a853" }}
        >
          <Lock className="w-6 h-6" />
        </div>

        <h3
          className="text-xl font-bold text-center mb-2"
          style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
        >
          输入访问密码
        </h3>
        <p
          className="text-[#e8e4df]/50 text-sm text-center mb-6"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          请输入密码查看详细财务分析
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="请输入密码"
            autoFocus
            className="w-full px-4 py-3 rounded-lg outline-none mb-2 text-sm transition-all"
            style={{
              backgroundColor: "rgba(232,228,223,0.06)",
              border: error ? "1px solid #e8a87c" : "1px solid rgba(232,228,223,0.1)",
              color: "#e8e4df",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          />
          {error && (
            <p
              className="text-[#e8a87c] text-xs mb-2"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              密码错误，请重试
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium text-sm mt-2 transition-all hover:opacity-90"
            style={{
              backgroundColor: "#d4a853",
              color: "#0a0f1a",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            确认
          </button>
        </form>
      </div>
    </div>
  );
}

function FinanceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <div
        className="rounded-xl w-full max-w-4xl max-h-[85vh] overflow-y-auto relative"
        style={{
          background: "linear-gradient(135deg, #0c1220 0%, #0a0f1a 100%)",
          border: "1px solid rgba(212,168,83,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5"
          style={{ backgroundColor: "#0a0f1a", borderBottom: "1px solid rgba(232,228,223,0.06)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(212,168,83,0.12)", color: "#d4a853" }}
            >
              <FileText className="w-5 h-5" />
            </div>
            <h3
              className="text-lg font-bold"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
            >
              未来概览 · 财务模型说明
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#e8e4df]/40 hover:text-[#e8e4df] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-8 py-6 space-y-8">
          {/* Summary */}
          <div className="rounded-lg p-6" style={{ backgroundColor: "rgba(212,168,83,0.06)", border: "1px solid rgba(212,168,83,0.15)" }}>
            <p
              className="font-bold mb-4"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "#d4a853", fontSize: "15px" }}
            >
              单个乡镇青创小空间
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "总营收预估", value: "84万～125万", color: "#d4a853" },
                { label: "总成本预估", value: "31万", color: "#e8a87c" },
                { label: "总利润预估", value: "53万～94万", color: "#4a9e8e" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p
                    className="text-[#e8e4df]/50 text-xs mb-1"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Space Grotesk', monospace", color: item.color }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: 一次性交付 */}
          <div>
            <h4
              className="text-base font-bold mb-1"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
            >
              一、一次性交付
            </h4>
            <p
              className="text-[#e8e4df]/40 text-xs mb-4"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              空间开幕筹备阶段，以每空间为单位
            </p>
            <Table1 />
            <div
              className="mt-3 rounded-lg px-5 py-3 flex justify-between items-center"
              style={{ backgroundColor: "rgba(212,168,83,0.06)", border: "1px solid rgba(212,168,83,0.12)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "#e8e4df" }}
              >
                一次性交付小计
              </span>
              <span
                className="text-base font-bold"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#d4a853" }}
              >
                利润：23万～40万
              </span>
            </div>
          </div>

          {/* Section 2: 日常交付 */}
          <div>
            <h4
              className="text-base font-bold mb-1"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
            >
              二、日常交付
            </h4>
            <p
              className="text-[#e8e4df]/40 text-xs mb-4"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              空间日常活动运营阶段，以每空间 / 月为单位，单次合同签署时间为6个月
            </p>
            <Table2 />
            <div
              className="mt-3 rounded-lg px-5 py-3 flex justify-between items-center"
              style={{ backgroundColor: "rgba(212,168,83,0.06)", border: "1px solid rgba(212,168,83,0.12)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "#e8e4df" }}
              >
                日常交付小计
              </span>
              <span
                className="text-base font-bold"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#d4a853" }}
              >
                利润：30万～54万
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table1() {
  const headers = ["", "边际成本", "营收", "利润"];
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left py-2 px-3 text-[#e8e4df]/40 font-normal"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", borderBottom: "1px solid rgba(232,228,223,0.06)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {oneTimeItems.map((item, i) => (
            <tr key={i}>
              <td
                className="py-2.5 px-3 text-[#e8e4df]/80"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.name}
              </td>
              <td
                className="py-2.5 px-3"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#e8a87c", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.cost}
              </td>
              <td
                className="py-2.5 px-3"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#d4a853", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.revenue}
              </td>
              <td
                className="py-2.5 px-3"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#4a9e8e", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.profit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Table2() {
  const headers = ["", "边际成本", "6个月成本", "营收", "6个月营收", "利润"];
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left py-2 px-2 text-[#e8e4df]/40 font-normal whitespace-nowrap"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", borderBottom: "1px solid rgba(232,228,223,0.06)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recurringItems.map((item, i) => (
            <tr key={i}>
              <td
                className="py-2.5 px-2 text-[#e8e4df]/80 whitespace-nowrap"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.name}
              </td>
              <td
                className="py-2.5 px-2"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#e8a87c", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.cost}
              </td>
              <td
                className="py-2.5 px-2"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#e8a87c", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.cost6m}
              </td>
              <td
                className="py-2.5 px-2"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#d4a853", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.revenue}
              </td>
              <td
                className="py-2.5 px-2"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#d4a853", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.revenue6m}
              </td>
              <td
                className="py-2.5 px-2"
                style={{ fontFamily: "'Space Grotesk', monospace", color: "#4a9e8e", borderBottom: "1px solid rgba(232,228,223,0.04)" }}
              >
                {item.profit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BusinessModelSlide() {
  const { ref, isInView } = useInView(0.3);
  const [showPassword, setShowPassword] = useState(false);
  const [showFinance, setShowFinance] = useState(false);

  return (
    <div
      ref={ref}
      className="snap-section relative grain-overlay"
      style={{
        background: "linear-gradient(180deg, #0a0f1a 0%, #0d1320 100%)",
      }}
    >
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
          {/* Left column */}
          <div className="lg:w-2/5 flex flex-col">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <p
                className="text-[#d4a853] text-xs tracking-[0.3em] mb-4"
                style={{ fontFamily: "'Space Grotesk', monospace" }}
              >
                商业模型
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.2}>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  color: "#e8e4df",
                }}
              >
                四层收入
                <span className="gradient-text-amber">叠加</span>
                模型
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.35}>
              <p
                className="text-[#e8e4df]/55 text-sm leading-relaxed mb-8"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                收入由四层叠加构成，随节点成熟度逐步释放
              </p>
            </AnimatedSection>

            {/* Key metrics */}
            <AnimatedSection animation="slide-up" delay={0.5}>
              <div className="glass-card rounded-lg p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div
                      className="text-3xl font-bold text-[#d4a853] mb-1"
                      style={{ fontFamily: "'Space Grotesk', monospace" }}
                    >
                      84-125
                    </div>
                    <div
                      className="text-[#e8e4df]/40 text-xs"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      单节点年营收（万元）
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold text-[#4a9e8e] mb-1"
                      style={{ fontFamily: "'Space Grotesk', monospace" }}
                    >
                      53～94
                    </div>
                    <div
                      className="text-[#e8e4df]/40 text-xs"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      单节点年利润（万元）
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={0.65} className="mt-auto">
              <button
                onClick={() => setShowPassword(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
                style={{
                  backgroundColor: "rgba(212,168,83,0.1)",
                  color: "#d4a853",
                  border: "1px solid rgba(212,168,83,0.25)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                }}
              >
                <FileText className="w-4 h-4" />
                查看详细财务分析
              </button>
            </AnimatedSection>
          </div>

          {/* Right: Revenue stream cards + button */}
          <div className="lg:w-3/5">
            <div className="space-y-4">
              {revenueStreams.map((stream, i) => (
                <AnimatedSection
                  key={i}
                  animation="slide-left"
                  delay={0.3 + i * 0.12}
                >
                  <div
                    className="glass-card rounded-lg p-5 flex items-center gap-5 group hover:translate-x-[-4px] transition-all duration-300"
                    style={{
                      borderLeftWidth: "3px",
                      borderLeftColor: stream.color,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${stream.color}12`,
                        color: stream.color,
                      }}
                    >
                      {stream.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className="text-sm font-semibold"
                          style={{
                            color: stream.color,
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}
                        >
                          {stream.name}
                        </h3>
                        <div className="text-right shrink-0">
                          <span
                            className="text-lg font-bold"
                            style={{
                              color: "#d4a853",
                              fontFamily: "'Space Grotesk', monospace",
                            }}
                          >
                            {stream.price.split('/')[0]}
                          </span>
                          <span
                            className="text-xs text-[#e8e4df]/40 ml-1"
                            style={{ fontFamily: "'Space Grotesk', monospace" }}
                          >
                            /{stream.price.split('/')[1]}
                          </span>
                        </div>
                      </div>
                      <p
                        className="text-[#e8e4df]/50 text-xs mt-2"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                      >
                        {stream.content}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PasswordModal
        open={showPassword}
        onSuccess={() => {
          setShowPassword(false);
          setShowFinance(true);
        }}
        onClose={() => setShowPassword(false)}
      />
      <FinanceModal
        open={showFinance}
        onClose={() => setShowFinance(false)}
      />
    </div>
  );
}
