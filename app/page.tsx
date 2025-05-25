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

  // Mock projects data structure - will be populated as projects are built
  const projects: Project[] = [
    // Example structure for future projects:
    // {
    //   id: 1,
    //   name: "DeFi Gambling Game",
    //   description: "A provably fair gambling game with $PAPERHEAD integration",
    //   status: "In Development",
    //   technology: ["Solana", "Rust", "React"],
    //   liveUrl: null,
    //   githubUrl: null,
    //   streamDate: "2025-07-15",
    //   paperheadIntegration: "Enhanced odds for holders"
    // }
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
                PROJECTS
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
                <a href="https://x.com/sourenkhetcho" target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  TWITTER
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
                {"> BRIDGING LIVE STREAMING & DEFI ON SOLANA"}
              </div>
              <p className="text-lg mb-12 text-green-200 max-w-2xl mx-auto">
                Watch DeFi projects being built transparently live. Join Paperhead for "vibe coding" in real-time.
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
                    href="https://x.com/SourenKhetcho"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    WATCH LIVE STREAMS
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
                  <div className="text-3xl font-bold text-green-400 mb-2">A lot</div>
                  <div className="text-green-300"># of projects</div>
                </CardContent>
              </Card>
              <Card className="bg-black/80 border-green-500">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">LIVE</div>
                  <div className="text-green-300">Development</div>
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
                    <li>• Creator monetization challenges</li>
                    <li>• Community disconnect from development</li>
                    <li>• High risk of rugpulls</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-400 text-2xl">{"> SOLUTION_DEPLOYED"}</CardTitle>
                </CardHeader>
                <CardContent className="text-green-200">
                  <ul className="space-y-3">
                    <li>• Live streaming development process</li>
                    <li>• Real utility through DeFi integration</li>
                    <li>• Sustainable creator rewards system</li>
                    <li>• Community engagement in real-time</li>
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
                  <Play className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">Live Streaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">Watch DeFi projects being built in real-time with full transparency</p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500 hover:border-green-400 transition-colors">
                <CardHeader>
                  <Code className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">AI Vibe Coding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">Experience the future of development with AI-assisted coding tools</p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500 hover:border-green-400 transition-colors">
                <CardHeader>
                  <Zap className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">DeFi Utility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">$PAPERHEAD provides real benefits in developed DeFi applications</p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500 hover:border-green-400 transition-colors">
                <CardHeader>
                  <Users className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-green-400">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">Engage directly with development and influence project direction</p>
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
                        <li>• Enhanced odds in DeFi games</li>
                        <li>• Reduced fees in applications</li>
                        <li>• Future yield sharing potential</li>
                        <li>• Governance participation</li>
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
                    <li>• Begin live streaming development sessions ✓</li>
                    <li>• Community building and engagement</li>
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
                    <li>• Launch paperhead.io website  ✓</li>
                    <li>• Release community Telegram group</li>
                    <li>• Deploy first DeFi project with $PAPERHEAD integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-500 text-black">Q4 2025</Badge>
                    <CardTitle className="text-blue-400">Expansion Phase</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-green-200">
                  <ul className="space-y-2">
                    <li>• Additional DeFi project releases</li>
                    <li>• Enhanced token utility features such as project yield earnings</li>
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
                  Paperhead is more than a token or streaming channel—it's a movement to bring humanity and purpose to
                  the crypto space. We're pioneering a new era of software development that's more accessible,
                  efficient, and attuned to tomorrow's creators.
                </p>
                <p>
                  Through live demonstrations of AI-powered "vibe coding," we showcase the transformative potential of
                  AI tools in software development, offering viewers a front-row seat to the evolution of coding while
                  building real, functional DeFi applications.
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
              {"> PROJECTS_DATABASE"}
            </h1>
            <p className="text-lg mb-12 text-green-200 text-center max-w-2xl mx-auto">
              All DeFi projects built live on stream. Watch them come to life through AI-powered vibe coding.
            </p>

            {/* Search and View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-black/80 border-green-500 text-green-400 placeholder:text-green-600"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={projectsView === "cards" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setProjectsView("cards")}
                  className={
                    projectsView === "cards"
                      ? "bg-green-500 text-black"
                      : "border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                  }
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={projectsView === "table" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setProjectsView("table")}
                  className={
                    projectsView === "table"
                      ? "bg-green-500 text-black"
                      : "border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                  }
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
              <Card className="bg-black/80 border-green-500 border-dashed">
                <CardContent className="p-12 text-center">
                  <Code className="w-16 h-16 text-green-500 mx-auto mb-4 opacity-50" />
                  <h3 className="text-2xl font-bold text-green-400 mb-4">{"> NO_PROJECTS_FOUND"}</h3>
                  <p className="text-green-200 mb-6 max-w-md mx-auto">
                    Projects are currently being developed live on stream. Check back soon to see the first DeFi
                    applications built with AI-powered vibe coding.
                  </p>
                  <Button className="bg-green-500 text-black hover:bg-green-400" asChild>
                    <a
                      href="https://x.com/SourenKhetcho"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Live Development
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Projects Content - Cards View */}
            {projects.length > 0 && projectsView === "cards" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="bg-black/80 border-green-500 hover:border-green-400 transition-colors"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-green-400">{project.name}</CardTitle>
                        <Badge
                          className={
                            project.status === "Live"
                              ? "bg-green-500 text-black"
                              : project.status === "In Development"
                                ? "bg-yellow-500 text-black"
                                : "bg-gray-500 text-white"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-green-200">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-green-400 font-semibold mb-2">Technology Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technology.map((tech) => (
                              <Badge key={tech} variant="outline" className="border-green-600 text-green-300">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <Button size="sm" className="bg-green-500 text-black hover:bg-green-400" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                <Globe className="w-4 h-4 mr-1" />
                                Live
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button size="sm" variant="outline" className="border-green-500 text-green-400" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                <Github className="w-4 h-4 mr-1" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Projects Content - Table View */}
            {projects.length > 0 && projectsView === "table" && (
              <Card className="bg-black/80 border-green-500">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-green-900">
                        <TableHead className="text-green-400">Project</TableHead>
                        <TableHead className="text-green-400">Status</TableHead>
                        <TableHead className="text-green-400">Technology</TableHead>
                        <TableHead className="text-green-400">Stream Date</TableHead>
                        <TableHead className="text-green-400">Links</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProjects.map((project) => (
                        <TableRow key={project.id} className="border-green-900 hover:bg-green-950/20">
                          <TableCell>
                            <div>
                              <div className="font-semibold text-green-400">{project.name}</div>
                              <div className="text-sm text-green-200">{project.description}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={
                                project.status === "Live"
                                  ? "bg-green-500 text-black"
                                  : project.status === "In Development"
                                    ? "bg-yellow-500 text-black"
                                    : "bg-gray-500 text-white"
                              }
                            >
                              {project.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {project.technology.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-green-600 text-green-300 text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="text-green-200">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(project.streamDate).toLocaleDateString()}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              {project.liveUrl && (
                                <Button size="sm" className="bg-green-500 text-black hover:bg-green-400" asChild>
                                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                    <Globe className="w-4 h-4" />
                                  </a>
                                </Button>
                              )}
                              {project.githubUrl && (
                                <Button size="sm" variant="outline" className="border-green-500 text-green-400" asChild>
                                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                    <Github className="w-4 h-4" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {/* No Search Results */}
            {projects.length > 0 && filteredProjects.length === 0 && (
              <Card className="bg-black/80 border-yellow-500">
                <CardContent className="p-8 text-center">
                  <Search className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{"> NO_RESULTS_FOUND"}</h3>
                  <p className="text-green-200">
                    No projects match your search query "{searchQuery}". Try different keywords.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-900 bg-black/90 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-green-400 mb-4">{"> PAPERHEAD_PROTOCOL_ACTIVE"}</div>
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
              href="https://x.com/sourenkhetcho"
              target="_blank"
              className="text-green-400 hover:text-green-300 transition-colors"
              rel="noreferrer"
            >
              TWITTER/X
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
