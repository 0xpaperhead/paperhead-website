"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ExternalLink,
  Play,
  Code,
  Zap,
  Users,
  Search,
  Grid,
  List,
  Calendar,
  Github,
  Globe,
  Bot,
  TrendingUp,
  Shield,
  Coins,
} from "lucide-react"
import { Project } from "@/types/types"

import paperhead from "@/app/_assets/logo.png"

import '@jup-ag/terminal/css'

export default function PaperheadWebsite() {
  const [matrixChars, setMatrixChars] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("home")
  const [projectsView, setProjectsView] = useState<"cards" | "table">("cards")
  const [searchQuery, setSearchQuery] = useState("")
  
  useEffect(() => {
    // Generate random matrix characters
    const chars = "PAPERHEAD01$SOLDEFI".split("")
    const generateMatrix = () => {
      const newChars = Array.from({ length: 50 }, () => chars[Math.floor(Math.random() * chars.length)])
      setMatrixChars(newChars)
    }

    generateMatrix()
    const interval = setInterval(generateMatrix, 150)
    return () => clearInterval(interval)
  }, [])

  // AI Trading Agent project data
  const projects: Project[] = [
    {
      id: 1,
      name: "Paperhead AI Trading Agent",
      description: "An AI-powered crypto trading agent built live on stream using AI coding tools",
      status: "In Development",
      technology: ["Solana", "AI/ML", "Python", "React", "TypeScript"],
      liveUrl: null,
      githubUrl: null,
      streamDate: "2025-07-15",
      paperheadIntegration: "Requires $PAPERHEAD tokens for access and enhanced features"
    }
  ]

  // Initialize Jupiter Terminal only when on home page
  useEffect(() => {
    if (typeof window !== "undefined" && activeTab === "home") {
      // Small delay to ensure the DOM has updated
      const timer = setTimeout(() => {
        const terminalElement = document.getElementById("integrated-terminal");
        if (terminalElement) {
          import("@jup-ag/terminal").then((mod) => {
            const init = mod.init;
            init({
              displayMode: "integrated",
              integratedTargetId: "integrated-terminal",
              formProps: {
                initialInputMint: "So11111111111111111111111111111111111111112",
                initialOutputMint: "2AtFgHT5LDuZ2AUqGUNBGQh2XiKJQTEyiG2w2BqLpump",
              },
            });
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-x-hidden">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="matrix-rain">
          {matrixChars.map((char, i) => (
            <span
              key={i}
              className="absolute text-green-500 animate-pulse"
              style={{
                left: `${(i * 2) % 100}%`,
                top: `${(i * 3) % 100}%`,
                animationDelay: `${i * 0.1}s`,
                fontSize: `${Math.random() * 0.5 + 0.5}rem`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-green-900 bg-black/90 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400 glitch-text cursor-pointer" onClick={() => setActiveTab("home")}>
            PAPERHEAD
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("home")}
                className={`px-4 py-2 font-mono transition-colors ${activeTab === "home"
                  ? "text-green-400 border-b-2 border-green-400"
                  : "text-green-600 hover:text-green-400"
                  }`}
              >
                HOME
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-4 py-2 font-mono transition-colors ${activeTab === "projects"
                  ? "text-green-400 border-b-2 border-green-400"
                  : "text-green-600 hover:text-green-400"
                  }`}
              >
                AI AGENT
              </button>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                asChild
              >
                <a
                  href="https://pump.fun/coin/2AtFgHT5LDuZ2AUqGUNBGQh2XiKJQTEyiG2w2BqLpump"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  PUMP.FUN
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                asChild
              >
                <a href="https://x.com/i/communities/1928014303090860149" target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  TWITTER
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                asChild
              >
                <a href="https://github.com/0xpaperhead/paperhead-whitepaper" target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  WHITEPAPER
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {activeTab === "home" && (
        <>
          {/* Hero Section */}
          <section className="relative z-10 container mx-auto px-4 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <Image
                src={paperhead.src}
                alt="Paperhead"
                width={150}
                height={150}
                className="mx-auto rounded-lg"
              />
              <div className="text-xl md:text-2xl mb-8 mt-2 text-green-300">
                {"> AI TRADING AGENT BUILT LIVE ON STREAM"}
              </div>
              <p className="text-lg mb-12 text-green-200 max-w-2xl mx-auto">
                Watch an AI crypto trading agent being built transparently live using AI coding tools. 
                Join Paperhead for "vibe coding" and gain exclusive access with $PAPERHEAD tokens.
              </p>

              {/* Jupiter Terminal */}
              <div className="flex justify-center mb-8">
                <div className="bg-black/80 border border-green-500 rounded-lg p-4">
                  <div className="text-green-400 text-sm mb-2 text-center font-mono">{"> SWAP_TERMINAL_ACTIVE"}</div>
                  <div id="integrated-terminal" style={{ width: "400px", height: "568px" }}></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-500 text-black hover:bg-green-400 font-bold" asChild>
                  <a
                    href="https://x.com/i/communities/1928014303090860149"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    WATCH AI DEVELOPMENT
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold" asChild>
                  <a
                    href="https://github.com/0xpaperhead/paperhead-whitepaper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    READ WHITEPAPER
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="relative z-10 container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-black/80 border-green-500">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1B $PAPERHEAD</div>
                  <div className="text-green-300">Total Supply</div>
                </CardContent>
              </Card>
              <Card className="bg-black/80 border-green-500">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">7.98M</div>
                  <div className="text-green-300">Creator Holdings</div>
                </CardContent>
              </Card>
              <Card className="bg-black/80 border-green-500">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">LIVE</div>
                  <div className="text-green-300">AI Development</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Problem & Solution */}
          <section className="relative z-10 container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-black/80 border-red-500">
                <CardHeader>
                  <CardTitle className="text-red-400 text-2xl">{"> PROBLEM_DETECTED"}</CardTitle>
                </CardHeader>
                <CardContent className="text-green-200">
                  <ul className="space-y-3">
                    <li>• Lack of transparency in crypto projects</li>
                    <li>• Meme coins without real utility</li>
                    <li>• Creator monetization challenges leading to rugpulls</li>
                    <li>• Community disconnect from development</li>
                    <li>• Limited access to advanced trading tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-400 text-2xl">{"> SOLUTION_DEPLOYED"}</CardTitle>
                </CardHeader>
                <CardContent className="text-green-200">
                  <ul className="space-y-3">
                    <li>• Live streaming AI agent development</li>
                    <li>• Real utility through exclusive AI trading access</li>
                    <li>• Sustainable creator rewards via Pump.fun (0.05%)</li>
                    <li>• Community engagement in real-time development</li>
                    <li>• AI-powered "vibe coding" demonstrations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Features */}
          <section className="relative z-10 container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-400">{"> SYSTEM_FEATURES"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-black/80 border-green-500 hover:border-green-400 transition-colors">
                <CardHeader>
                  <Bot className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">AI Trading Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">Exclusive access to AI-powered crypto trading agent with $PAPERHEAD tokens</p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500 hover:border-green-400 transition-colors">
                <CardHeader>
                  <Play className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">Live Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">Watch the AI trading agent being built in real-time with full transparency</p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500 hover:border-green-400 transition-colors">
                <CardHeader>
                  <Code className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">AI Vibe Coding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">Experience AI building AI with cutting-edge coding tools and techniques</p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500 hover:border-green-400 transition-colors">
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">Enhanced Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">Token holders get enhanced trading features based on volume and holdings</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tokenomics */}
          <section className="relative z-10 container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-400">{"> TOKENOMICS_DATA"}</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-black/80 border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-400 text-2xl">$PAPERHEAD Token</CardTitle>
                  <CardDescription className="text-green-300">Built on Solana • Launched on Pump.fun</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-green-400 font-bold mb-3">Token Details</h3>
                      <ul className="space-y-2 text-green-200">
                        <li>• Symbol: $PAPERHEAD</li>
                        <li>• Total Supply: 1,000,000,000</li>
                        <li>• Blockchain: Solana</li>
                        <li>• Creator Holdings: 7.98M tokens</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-green-400 font-bold mb-3">Utility Features</h3>
                      <ul className="space-y-2 text-green-200">
                        <li>• Access to AI Trading Agent</li>
                        <li>• Enhanced features based on volume</li>
                        <li>• Potential yield sharing from agent performance</li>
                        <li>• Lower trading fees (1% agent fee)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Roadmap */}
          <section className="relative z-10 container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-400">{"> EXECUTION_ROADMAP"}</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-black/80 border-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-green-500 text-black">Q2 2025</Badge>
                    <CardTitle className="text-green-400">Launch Phase</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-green-200">
                  <ul className="space-y-2">
                    <li>• $PAPERHEAD token launch on Pump.fun ✓</li>
                    <li>• Begin live streaming AI development sessions ✓</li>
                    <li>• Release paperhead.io website ✓</li>
                    <li>• Launch community Telegram group ✓</li>
                    <li>• Outline roadmap and objectives ✓</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-yellow-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-yellow-500 text-black">Q3 2025</Badge>
                    <CardTitle className="text-yellow-400">Development Phase</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-green-200">
                  <ul className="space-y-2">
                    <li>• Release initial public repository for AI Trading Agent</li>
                    <li>• Integrate automated trading capabilities (swaps)</li>
                    <li>• Implement AI engine for buy/sell signals</li>
                    <li>• Announce public launch of trading agent</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-500 text-black">Q4 2025</Badge>
                    <CardTitle className="text-blue-400">Enhancement Phase</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-green-200">
                  <ul className="space-y-2">
                    <li>• Rollout enhanced $PAPERHEAD utility features</li>
                    <li>• Implement volume-based trading enhancements</li>
                    <li>• Launch referral system for additional benefits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-500 text-black">Q2 2026</Badge>
                    <CardTitle className="text-purple-400">Expansion Phase</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-green-200">
                  <ul className="space-y-2">
                    <li>• Expand AI Trading Agent capabilities</li>
                    <li>• Implement yield sharing mechanisms</li>
                    <li>• Introduce governance for community decisions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Vision */}
          <section className="relative z-10 container mx-auto px-4 py-16">
            <Card className="bg-black/80 border-green-500 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-green-400 text-3xl text-center">{"> MISSION_STATEMENT"}</CardTitle>
              </CardHeader>
              <CardContent className="text-green-200 text-lg leading-relaxed">
                <p className="mb-6">
                  Paperhead pioneers a revolutionary approach to AI development in crypto by building an AI trading agent 
                  live on stream using AI coding tools. We showcase the transformative potential of "vibe coding"—a dynamic, 
                  intuitive method of building software with AI assistance.
                </p>
                <p>
                  Through transparent development and real utility via $PAPERHEAD token access to our AI trading agent, 
                  we're creating authentic value while demonstrating the future of AI-powered software development. 
                  This isn't just content—it's the evolution of how we build and interact with AI systems.
                </p>
              </CardContent>
            </Card>
          </section>
        </>
      )}

      {activeTab === "projects" && (
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-400 text-center glitch-text">
              {"> AI_TRADING_AGENT"}
            </h1>
            <p className="text-lg mb-12 text-green-200 text-center max-w-2xl mx-auto">
              The AI crypto trading agent built live on stream using AI coding tools. 
              Gain exclusive access with $PAPERHEAD tokens.
            </p>

            {/* Agent Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-black/80 border-green-500">
                <CardHeader>
                  <Shield className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">Secure Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">$PAPERHEAD tokens required for agent access</p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500">
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">Enhanced Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">Exclusive trading agent features based on trading volume and holdings</p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500">
                <CardHeader>
                  <Coins className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">Yield Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">Potential share in agent performance fees - <span className="text-xs">(the technical feasibility is yet to be determined)</span></p>
                </CardContent>
              </Card>
            </div>

            {/* Project Card */}
            <Card className="bg-black/80 border-green-500 hover:border-green-400 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-green-400 text-2xl">Paperhead AI Trading Agent</CardTitle>
                  <Badge className="bg-yellow-500 text-black">In Development</Badge>
                </div>
                <CardDescription className="text-green-200">
                  An AI-powered crypto trading agent built live on stream using cutting-edge AI coding tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Solana", "AI/ML", "Python", "React", "TypeScript"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-green-600 text-green-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-green-400 font-semibold mb-3">Key Features</h4>
                    <ul className="text-green-200 space-y-2">
                      <li>• AI-powered buy/sell signal generation</li>
                      <li>• Automated trading capabilities</li>
                      <li>• $PAPERHEAD token-gated access</li>
                      <li>• Enhanced features for larger holders</li>
                      <li>• Potential yield sharing from performance fees</li>
                      <li>• Built transparently live on stream</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-green-400 font-semibold mb-3">Development Timeline</h4>
                    <div className="space-y-2 text-green-200">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Q3 2025: Public repository release</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Q3 2025: Trading capabilities integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Q3 2025: AI engine implementation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Q3 2025: Public launch announcement</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button className="bg-green-500 text-black hover:bg-green-400" asChild>
                      <a
                        href="https://x.com/i/communities/1928014303090860149"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Development Live
                      </a>
                    </Button>
                    <Button variant="outline" className="border-green-500 text-green-400" onClick={() => window.open("https://github.com/0xpaperhead/paperhead-trading-agent", "_blank")}>
                      <Github className="w-4 h-4 mr-2" />
                      Repository
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Access Requirements */}
            <Card className="bg-black/80 border-blue-500 mt-8">
              <CardHeader>
                <CardTitle className="text-blue-400 text-xl">{"> ACCESS_REQUIREMENTS"}</CardTitle>
              </CardHeader>
              <CardContent className="text-green-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-3">Basic Access</h4>
                    <p className="mb-2">Hold $PAPERHEAD tokens to access the AI Trading Agent</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Core trading functionality</li>
                      <li>• Basic AI signals</li>
                      <li>• Standard trading fees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-3">Enhanced Access</h4>
                    <p className="mb-2">Additional benefits based on volume and holdings</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Advanced trading features</li>
                      <li>• Potential yield sharing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-900 bg-black/90 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-green-400 mb-4">{"> PAPERHEAD_AI_AGENT_ACTIVE"}</div>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://pump.fun/coin/2AtFgHT5LDuZ2AUqGUNBGQh2XiKJQTEyiG2w2BqLpump"
              target="_blank"
              className="text-green-400 hover:text-green-300 transition-colors"
              rel="noreferrer"
            >
              PUMP.FUN
            </a>
            <a
              href="https://x.com/i/communities/1928014303090860149"
              target="_blank"
              className="text-green-400 hover:text-green-300 transition-colors"
              rel="noreferrer"
            >
              TWITTER/X
            </a>
            <a
              href="https://github.com/0xpaperhead/paperhead-whitepaper"
              target="_blank"
              className="text-green-400 hover:text-green-300 transition-colors"
              rel="noreferrer"
            >
              WHITEPAPER
            </a>
          </div>
          <div className="text-green-600 text-sm">
            This is not financial advice. DYOR. Built with AI-powered vibe coding.
          </div>
        </div>
      </footer>
    </div>
  )
}
