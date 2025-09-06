import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Sprout,
  CloudRain,
  TrendingUp,
  Droplets,
  DollarSign,
  Bell,
  Search,
  Home,
  BarChart3,
  BookOpen,
  Users,
  MessageSquare,
  HelpCircle,
  User,
} from "lucide-react"
import dynamic from "next/dynamic"
const SoilMoistureChart = dynamic(() => import("../components/charts/soil-moisture-chart"), { ssr: false })

const soilMoistureData = [
  { date: "8/23", moisture: 45 },
  { date: "8/24", moisture: 48 },
  { date: "8/25", moisture: 52 },
  { date: "8/26", moisture: 58 },
  { date: "8/27", moisture: 62 },
  { date: "8/28", moisture: 59 },
  { date: "8/29", moisture: 55 },
  { date: "8/30", moisture: 54 },
  { date: "8/31", moisture: 57 },
  { date: "9/1", moisture: 61 },
  { date: "9/2", moisture: 64 },
  { date: "9/3", moisture: 68 },
  { date: "9/4", moisture: 65 },
  { date: "9/5", moisture: 62 },
]

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: BarChart3, label: "Explore" },
  { icon: BookOpen, label: "Offline Library" },
  { icon: Bell, label: "Alerts & Reminders" },
  { icon: Users, label: "Community Forum" },
  { icon: MessageSquare, label: "Ask a Question" },
  { icon: HelpCircle, label: "Create Post" },
]

const exploreTopics = [
  { icon: Sprout, title: "Crops", description: "Browse guides and FAQs", color: "bg-emerald-100 text-emerald-700" },
  {
    icon: Droplets,
    title: "Soil & Fertilizers",
    description: "Browse guides and FAQs",
    color: "bg-blue-100 text-blue-700",
  },
  { icon: CloudRain, title: "Irrigation", description: "Browse guides and FAQs", color: "bg-cyan-100 text-cyan-700" },
  { icon: Sprout, title: "Pests & Diseases", description: "Browse guides and FAQs", color: "bg-red-100 text-red-700" },
  {
    icon: CloudRain,
    title: "Weather & Seasons",
    description: "Browse guides and FAQs",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: TrendingUp,
    title: "Market Prices",
    description: "Browse guides and FAQs",
    color: "bg-orange-100 text-orange-700",
  },
]

export default function FarmingAssistant() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r border-sidebar-border">
          <SidebarContent className="bg-sidebar">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-sidebar-foreground">Farming Assistant</span>
              </div>

              <div className="flex items-center gap-2 mb-6 p-2 bg-sidebar-accent rounded-lg">
                <User className="w-4 h-4 text-sidebar-accent-foreground" />
                <div>
                  <div className="text-sm font-medium text-sidebar-accent-foreground">Farmer User</div>
                  <div className="text-xs text-sidebar-accent-foreground/70">@farmer</div>
                </div>
              </div>
            </div>

            <SidebarGroup>
              <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs font-medium px-4">
                ASK & EXPLORE
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        isActive={item.active}
                        className="w-full justify-start gap-3 px-4 py-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm">{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-auto">
              <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs font-medium px-4">
                ACCOUNT
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full justify-start gap-3 px-4 py-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                      <User className="w-4 h-4" />
                      <span className="text-sm">Profile</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="lg:hidden" />
                <div>
                  <h1 className="text-3xl font-bold text-foreground text-balance">Ask anything about your farm</h1>
                  <p className="text-muted-foreground mt-1">
                    Type or speak your question. Get guides, best practices, and community answers instantly.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="gap-1">
                  <Sprout className="w-3 h-3" />
                  Language
                </Badge>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-foreground">FU</span>
                  </div>
                  <span className="text-sm font-medium">Farmer User</span>
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 font-sans mx-0 shadow-xl">
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="e.g. How to control aphids in chili plants"
                          className="pl-10 h-12 text-base border-input"
                        />
                      </div>
                      <Button className="h-12 px-6 bg-primary hover:bg-primary/90">Search Answer</Button>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="text-xs bg-transparent">
                        🎤 Voice
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs bg-transparent">
                        ✕ Clear
                      </Button>
                    </div>

                    <div className="mt-6">
                      <p className="text-sm font-medium text-foreground mb-3">Suggested questions</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Best time to apply urea for paddy?",
                          "Organic ways to control aphids in chili",
                          "How often to irrigate tomatoes in summer?",
                          "Soil preparation for groundnut",
                        ].map((question) => (
                          <Button key={question} variant="outline" size="sm" className="text-xs h-8 bg-transparent">
                            {question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card className="border-0 shadow-sm overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <img
                      src="/lush-green-farm-landscape-with-mountains.jpg"
                      alt="Farm landscape"
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" size="sm">
                        Best Practice
                      </Badge>
                      <Badge variant="secondary" size="sm">
                        Updated Weekly
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Our knowledge base combines expert guidance with community experiences to help you make better
                      decisions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Explore Topics */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Explore Topics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {exploreTopics.map((topic) => (
                  <Card
                    key={topic.title}
                    className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${topic.color}`}>
                          <topic.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{topic.title}</h3>
                          <p className="text-xs text-muted-foreground">{topic.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Dashboard Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">TODAY'S WEATHER</h3>
                    <CloudRain className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">29°C</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Humidity: 65% • Wind: 8 km/h</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">SOIL MOISTURE</h3>
                    <Droplets className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">54%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Optimal for tomatoes</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">MARKET PRICE (TOMATO)</h3>
                    <DollarSign className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">₹34/kg</span>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">+12% week-on-week</p>
                </CardContent>
              </Card>
            </div>

            {/* Soil Moisture Chart */}
            <Card className="border-0 shadow-sm mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    📊 Soil Moisture Trend (Last 14 Days)
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Reset Zoom
                    </Button>
                    <Button variant="outline" size="sm">
                      PNG
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <SoilMoistureChart data={soilMoistureData} />
                </div>
              </CardContent>
            </Card>

            {/* Recent Alerts */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground">Recent Alerts & Reminders</CardTitle>
                  <div className="flex gap-2">
                    <select className="text-xs border border-input rounded px-2 py-1 bg-background">
                      <option>All Statuses</option>
                    </select>
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      <Search className="w-3 h-3 mr-1" />
                      Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No recent alerts or reminders</p>
                  <p className="text-xs">Your notifications will appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
