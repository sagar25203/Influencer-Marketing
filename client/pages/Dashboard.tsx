import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  BarChart3,
  Users,
  TrendingUp,
  Target,
  Plus,
  Calendar,
  DollarSign,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Filter,
  Search,
  Bell,
  Settings,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link to="/">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold gradient-text">
                    InfluenceHub
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="w-4 h-4" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="p-3 border-b">
                    <h4 className="font-semibold">Notifications</h4>
                  </div>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div>
                      <div className="font-medium">
                        New campaign application
                      </div>
                      <div className="text-sm text-muted-foreground">
                        @fashionista_sara wants to join your summer campaign
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        2 minutes ago
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div>
                      <div className="font-medium">
                        Campaign milestone reached
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Tech Product Launch reached 50% completion
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        1 hour ago
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div>
                      <div className="font-medium">Payment processed</div>
                      <div className="text-sm text-muted-foreground">
                        $1,200 payment to @lifestyle_emma completed
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        3 hours ago
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="p-3 cursor-pointer text-center">
                    <span className="text-primary">View all notifications</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => alert("Account settings coming soon!")}
                  >
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => alert("Campaign preferences coming soon!")}
                  >
                    Campaign Preferences
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => alert("Notification settings coming soon!")}
                  >
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => alert("Billing settings coming soon!")}
                  >
                    Billing & Payments
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => alert("API settings coming soon!")}
                  >
                    API Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => alert("Integrations coming soon!")}
                  >
                    Integrations
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => alert("Help center coming soon!")}
                  >
                    Help & Support
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="w-8 h-8 cursor-pointer">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="p-3 border-b">
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">
                      john@company.com
                    </div>
                  </div>
                  <DropdownMenuItem
                    onClick={() => alert("Profile settings coming soon!")}
                  >
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => alert("Company settings coming soon!")}
                  >
                    Company Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => alert("Team management coming soon!")}
                  >
                    Team Management
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => alert("Billing dashboard coming soon!")}
                  >
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => alert("Usage analytics coming soon!")}
                  >
                    Usage & Analytics
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      if (confirm("Are you sure you want to sign out?")) {
                        alert("Signing out...");
                      }
                    }}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your campaigns today.
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  This Month
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => console.log("Today selected")}>
                  Today
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => console.log("This Week selected")}
                >
                  This Week
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => console.log("This Month selected")}
                >
                  This Month
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => console.log("Last Month selected")}
                >
                  Last Month
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => console.log("Last 3 Months selected")}
                >
                  Last 3 Months
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => console.log("Last 6 Months selected")}
                >
                  Last 6 Months
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => console.log("This Year selected")}
                >
                  This Year
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => alert("Custom date range picker coming soon!")}
                >
                  Custom Range...
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              className="gradient-brand border-0"
              onClick={() => alert("Campaign creation wizard coming soon!")}
            >
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Campaigns
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+15%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Engagement Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.3%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Campaign ROI
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="campaigns" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="influencers">Influencers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Active Campaigns</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Summer Fashion Collection</CardTitle>
                      <CardDescription>
                        Fashion • Running for 2 weeks
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">8</div>
                      <div className="text-sm text-muted-foreground">
                        Influencers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">450K</div>
                      <div className="text-sm text-muted-foreground">Reach</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">12.5K</div>
                      <div className="text-sm text-muted-foreground">
                        Engagements
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">$15K</div>
                      <div className="text-sm text-muted-foreground">
                        Budget
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Tech Product Launch</CardTitle>
                      <CardDescription>
                        Technology • Starting next week
                      </CardDescription>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      Pending
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm text-muted-foreground">
                        Influencers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">890K</div>
                      <div className="text-sm text-muted-foreground">
                        Est. Reach
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">-</div>
                      <div className="text-sm text-muted-foreground">
                        Engagements
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">$25K</div>
                      <div className="text-sm text-muted-foreground">
                        Budget
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Setup Progress</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="influencers" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Your Influencers</h2>
              <Button className="gradient-brand border-0">
                <Plus className="w-4 h-4 mr-2" />
                Find Influencers
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>IN</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          @influencer{i}
                        </CardTitle>
                        <CardDescription>Fashion & Lifestyle</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center mb-4">
                      <div>
                        <div className="font-semibold">125K</div>
                        <div className="text-xs text-muted-foreground">
                          Followers
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">4.8%</div>
                        <div className="text-xs text-muted-foreground">
                          Engagement
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">$500</div>
                        <div className="text-xs text-muted-foreground">
                          Per Post
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Profile
                      </Button>
                      <Button size="sm" className="flex-1">
                        Collaborate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-semibold">Analytics Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>Likes</span>
                      </div>
                      <span className="font-semibold">45.2K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-blue-500" />
                        <span>Comments</span>
                      </div>
                      <span className="font-semibold">8.7K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Share2 className="w-4 h-4 text-green-500" />
                        <span>Shares</span>
                      </div>
                      <span className="font-semibold">2.1K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-purple-500" />
                        <span>Views</span>
                      </div>
                      <span className="font-semibold">890K</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Reach Growth</span>
                        <span className="text-green-600">+24%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Engagement Rate</span>
                        <span className="text-green-600">+8%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Conversion Rate</span>
                        <span className="text-green-600">+15%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Brand Sentiment</span>
                        <span className="text-green-600">+12%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-semibold">Messages</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    No messages yet
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Start a conversation with influencers to begin
                    collaborating.
                  </p>
                  <Button className="gradient-brand border-0">
                    Find Influencers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
