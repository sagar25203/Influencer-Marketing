import React from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  TrendingUp,
  Target,
  BarChart3,
  Star,
  Play,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Zap,
  Globe,
  Heart,
  ChevronDown,
  Menu,
  Home,
  Rocket,
  Shield,
  Brain,
  Filter,
  Plus,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const [isSmartMatchingOpen, setIsSmartMatchingOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isCRMOpen, setIsCRMOpen] = useState(false);
  const [isAddInfluencerOpen, setIsAddInfluencerOpen] = useState(false);
  const [isQualityAssuranceOpen, setIsQualityAssuranceOpen] = useState(false);
  const [qaActiveTab, setQaActiveTab] = useState("fraud-detection");
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [accountType, setAccountType] = useState("");

  // Feature Modal States
  const [isInfluencerSearchOpen, setIsInfluencerSearchOpen] = useState(false);
  const [isAuthenticityAnalysisOpen, setIsAuthenticityAnalysisOpen] =
    useState(false);
  const [isBulkOutreachOpen, setIsBulkOutreachOpen] = useState(false);
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);
  const [isCampaignManagementOpen, setIsCampaignManagementOpen] =
    useState(false);
  const [isMonitoringOpen, setIsMonitoringOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);
  const [isSuccessStoriesOpen, setIsSuccessStoriesOpen] = useState(false);
  const [activeStoryCategory, setActiveStoryCategory] = useState("all");
  const [isMobileCreatorsOpen, setIsMobileCreatorsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(""); // "influencer" or "brand"
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [billingCycle, setBillingCycle] = useState("monthly");

  // CRM State Management
  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Sample Influencer Database with Real State
  const [influencers, setInfluencers] = useState([
    {
      id: 1,
      name: "Sarah Fashion",
      handle: "@sarahfashion",
      email: "sarah@fashionista.com",
      platform: "Instagram",
      followers: "125K",
      engagement: "4.8%",
      category: "Fashion",
      status: "Active",
      lastContact: "2 days ago",
      campaigns: 5,
      rating: 4.9,
      pricePerPost: 800,
      notes: "Great conversion rates, very professional",
      tags: ["fashion", "lifestyle", "sustainable"],
      location: "Los Angeles, CA",
    },
    {
      id: 2,
      name: "Tech Mike",
      handle: "@techmike",
      email: "mike@techreview.com",
      platform: "YouTube",
      followers: "89K",
      engagement: "6.2%",
      category: "Technology",
      status: "Pending",
      lastContact: "1 week ago",
      campaigns: 3,
      rating: 4.7,
      pricePerPost: 600,
      notes: "Responds quickly, good technical content",
      tags: ["tech", "reviews", "gadgets"],
      location: "Austin, TX",
    },
    {
      id: 3,
      name: "Fitness Emma",
      handle: "@fitnessemma",
      email: "emma@fitlife.com",
      platform: "TikTok",
      followers: "245K",
      engagement: "7.1%",
      category: "Fitness",
      status: "Active",
      lastContact: "Yesterday",
      campaigns: 8,
      rating: 5.0,
      pricePerPost: 950,
      notes: "Excellent engagement, motivational content",
      tags: ["fitness", "wellness", "motivation"],
      location: "Miami, FL",
    },
    {
      id: 4,
      name: "Food Explorer",
      handle: "@foodexplorer",
      email: "contact@foodexplorer.com",
      platform: "Instagram",
      followers: "67K",
      engagement: "5.4%",
      category: "Food",
      status: "Prospect",
      lastContact: "Never",
      campaigns: 0,
      rating: 0,
      pricePerPost: 450,
      notes: "Potential collaboration for food brands",
      tags: ["food", "travel", "restaurants"],
      location: "New York, NY",
    },
  ]);

  // Login Form State
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    userType: "influencer",
    rememberMe: false,
  });

  // New Influencer Form State
  const [newInfluencer, setNewInfluencer] = useState({
    name: "",
    handle: "",
    email: "",
    platform: "Instagram",
    followers: "",
    engagement: "",
    category: "Fashion",
    pricePerPost: "",
    location: "",
    notes: "",
    tags: [],
  });

  // Sample user accounts for demo
  const demoAccounts = {
    influencer: {
      email: "sarah@influencer.com",
      password: "demo123",
      name: "Sarah Fashion",
      handle: "@sarahfashion",
      platform: "Instagram",
      followers: "125K",
      type: "influencer",
    },
    brand: {
      email: "john@brand.com",
      password: "demo123",
      name: "John Marketing",
      company: "Fashion Brand Inc",
      type: "brand",
    },
  };
  const [matchingForm, setMatchingForm] = useState({
    brandName: "",
    industry: "",
    budget: "",
    targetAudience: "",
    campaignGoals: "",
    preferredPlatforms: "",
  });

  // Functional filtering logic
  const filteredInfluencers = influencers.filter((influencer) => {
    const matchesSearch =
      influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesPlatform =
      platformFilter === "all" ||
      influencer.platform.toLowerCase() === platformFilter;
    const matchesCategory =
      categoryFilter === "all" ||
      influencer.category.toLowerCase() === categoryFilter;
    const matchesStatus =
      statusFilter === "all" ||
      influencer.status.toLowerCase() === statusFilter;

    return matchesSearch && matchesPlatform && matchesCategory && matchesStatus;
  });

  // CRM Actions
  const updateInfluencerStatus = (id, newStatus) => {
    setInfluencers(
      influencers.map((inf) =>
        inf.id === id
          ? { ...inf, status: newStatus, lastContact: "Just now" }
          : inf,
      ),
    );
  };

  const addNewInfluencer = () => {
    const id = Math.max(...influencers.map((inf) => inf.id)) + 1;
    const influencer = {
      ...newInfluencer,
      id,
      status: "Prospect",
      lastContact: "Never",
      campaigns: 0,
      rating: 0,
      tags: newInfluencer.tags.length
        ? newInfluencer.tags
        : [newInfluencer.category.toLowerCase()],
    };
    setInfluencers([...influencers, influencer]);
    setNewInfluencer({
      name: "",
      handle: "",
      email: "",
      platform: "Instagram",
      followers: "",
      engagement: "",
      category: "Fashion",
      pricePerPost: "",
      location: "",
      notes: "",
      tags: [],
    });
    setIsAddInfluencerOpen(false);
  };

  const deleteInfluencer = (id) => {
    setInfluencers(influencers.filter((inf) => inf.id !== id));
  };

  // Authentication Functions
  const handleLogin = () => {
    const account = demoAccounts[loginForm.userType];

    if (
      loginForm.email === account.email &&
      loginForm.password === account.password
    ) {
      setIsLoggedIn(true);
      setUserType(loginForm.userType);
      setCurrentUser(account);
      setIsLogInOpen(false);

      // Show success message
      alert(
        `✅ Welcome ${account.name}!\n\nLogged in as: ${loginForm.userType}\n\n${
          loginForm.userType === "influencer"
            ? "Access your CRM dashboard, manage campaigns, and connect with brands!"
            : "Access your brand dashboard, find influencers, and manage campaigns!"
        }`,
      );
    } else {
      alert(
        "❌ Invalid credentials!\n\nDemo accounts:\n\nInfluencer:\nemail: sarah@influencer.com\npassword: demo123\n\nBrand:\nemail: john@brand.com\npassword: demo123",
      );
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType("");
    setCurrentUser(null);
    alert("👋 Logged out successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b mobile-nav-transition">
        <div className="container-responsive py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in-scale">
              <div className="w-8 h-8 md:w-10 md:h-10 gradient-brand rounded-lg flex items-center justify-center btn-smooth">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-bold gradient-text responsive-text">
                InfluenceHub
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 animate-fade-in-up">
              <div className="relative group">
                <button
                  className="flex items-center text-sm xl:text-base text-muted-foreground hover:text-foreground transition-all duration-300 focus:outline-none px-3 py-2 h-auto font-medium rounded-lg hover:bg-muted/50 btn-smooth bg-transparent border-none cursor-pointer group"
                  onMouseEnter={() => {}}
                >
                  Features
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Hover Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-96 max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[400px] xl:w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 bg-white border border-gray-200 shadow-2xl rounded-xl p-0 transform translate-y-1 group-hover:translate-y-0">
                  {/* Dropdown Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 text-center border-b border-gray-200/60">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-base text-gray-800 mb-1">
                      Platform Features
                    </h3>
                    <p className="text-xs text-gray-600">
                      Explore our comprehensive influencer marketing tools
                    </p>
                  </div>

                  {/* Feature Grid Container */}
                  <div className="p-2 space-y-1.5 max-h-[70vh] overflow-y-auto">
                    {/* Smart Matching - Opens Modal */}
                    <div
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-blue-300/50 overflow-hidden"
                      onClick={() => setIsSmartMatchingOpen(true)}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-blue-600 transition-colors duration-300 truncate">
                          🧠 Smart Matching
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          AI-powered influencer discovery and matching
                        </div>
                      </div>
                      <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        Try Now
                      </div>
                    </div>

                    {/* Real-time Analytics */}
                    <div
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-indigo-300/50 overflow-hidden"
                      onClick={() => setIsMonitoringOpen(true)}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-indigo-600 transition-colors duration-300 truncate">
                          📊 Real-time Analytics
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          Track performance, engagement, and ROI
                        </div>
                      </div>
                      <div className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        Dashboard
                      </div>
                    </div>
                    {/* Campaign Management */}
                    <div
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-green-300/50 overflow-hidden"
                      onClick={() => {
                        setIsCampaignManagementOpen(true);
                      }}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-green-600 transition-colors duration-300 truncate">
                          🎯 Campaign Management
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          Streamlined workflow and automation
                        </div>
                      </div>
                      <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        Workflow
                      </div>
                    </div>
                    {/* Global Reach */}
                    <div
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-purple-300/50 overflow-hidden"
                      onClick={() => setIsInfluencerSearchOpen(true)}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-purple-600 transition-colors duration-300 truncate">
                          🌍 Global Reach
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          Access worldwide influencer network
                        </div>
                      </div>
                      <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        Worldwide
                      </div>
                    </div>
                    {/* Influencer CRM */}
                    <Link
                      to="/influencer-login"
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-cyan-300/50 overflow-hidden"
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-cyan-600 transition-colors duration-300 truncate">
                          👥 Influencer CRM
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          Manage relationships and communications
                        </div>
                      </div>
                      <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        CRM
                      </div>
                    </Link>

                    {/* Quality Assurance */}
                    <div
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-red-300/50 overflow-hidden"
                      onClick={() => setIsQualityAssuranceOpen(true)}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-red-600 transition-colors duration-300 truncate">
                          🛡️ Quality Assurance
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          Fraud detection and content verification
                        </div>
                      </div>
                      <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        Security
                      </div>
                    </div>

                    {/* Influencer Search & Discovery */}
                    <div
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-teal-300/50 overflow-hidden"
                      onClick={() => setIsInfluencerSearchOpen(true)}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-teal-600 transition-colors duration-300 truncate">
                          🔍 Influencer Search
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          10M+ database with advanced filters
                        </div>
                      </div>
                      <div className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        Search
                      </div>
                    </div>

                    {/* Creator Authenticity Analysis */}
                    <div
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-violet-300/50 overflow-hidden"
                      onClick={() => setIsAuthenticityAnalysisOpen(true)}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-violet-600 transition-colors duration-300 truncate">
                          ✅ Authenticity Analysis
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          Verify follower quality and engagement
                        </div>
                      </div>
                      <div className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        Verify
                      </div>
                    </div>

                    {/* Bulk Outreach Tools */}
                    <div
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-amber-300/50 overflow-hidden"
                      onClick={() => setIsBulkOutreachOpen(true)}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-amber-600 transition-colors duration-300 truncate">
                          📧 Bulk Outreach
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          Contact thousands of influencers instantly
                        </div>
                      </div>
                      <div className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        Outreach
                      </div>
                    </div>

                    {/* Creator Marketplace */}
                    <div
                      className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-emerald-300/50 overflow-hidden"
                      onClick={() => setIsMarketplaceOpen(true)}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-800 group-hover/item:text-emerald-600 transition-colors duration-300 truncate">
                          🏪 Creator Marketplace
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                          Receive applications effortlessly
                        </div>
                      </div>
                      <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                        Marketplace
                      </div>
                    </div>

                    {/* Premium Separator */}
                    <div className="relative my-3">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-white px-3 text-xs text-gray-500 font-medium">
                          or
                        </span>
                      </div>
                    </div>

                    {/* View All Features */}
                    <div
                      className="relative flex items-center justify-center space-x-2 p-3 m-1 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 group/item shadow-lg transform hover:scale-[1.02] overflow-hidden"
                      onClick={() =>
                        document
                          .getElementById("features")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-white text-sm">
                        🚀 View All Features
                      </span>
                      <ArrowRight className="w-4 h-4 text-white group-hover/item:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsHowItWorksOpen(true)}
                className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-all duration-300 bg-transparent border-none cursor-pointer px-3 py-2 rounded-lg hover:bg-muted/50 font-medium btn-smooth"
              >
                How it works
              </button>
              <button
                onClick={() => setIsPricingOpen(true)}
                className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-all duration-300 bg-transparent border-none cursor-pointer px-3 py-2 rounded-lg hover:bg-muted/50 font-medium btn-smooth"
              >
                Pricing
              </button>
              <button
                onClick={() => setIsSuccessStoriesOpen(true)}
                className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-all duration-300 bg-transparent border-none cursor-pointer px-3 py-2 rounded-lg hover:bg-muted/50 font-medium btn-smooth"
              >
                Success Stories
              </button>
              <div className="relative group">
                <button className="flex items-center text-sm xl:text-base text-muted-foreground hover:text-foreground transition-all duration-300 focus:outline-none px-3 py-2 h-auto font-medium rounded-lg hover:bg-muted/50 bg-transparent border-none cursor-pointer">
                  For Creators
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* For Creators Dropdown */}
                <div className="absolute top-full right-0 mt-2 w-96 max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[400px] xl:w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 bg-white border border-gray-200 shadow-2xl rounded-xl p-0 transform translate-y-1 group-hover:translate-y-0">
                  {/* Dropdown Header */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 text-center border-b border-gray-200/60">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-base text-gray-800 mb-1">
                      Creator Categories
                    </h3>
                    <p className="text-xs text-gray-600">
                      Find your niche and start creating
                    </p>
                  </div>

                  {/* Creator Categories Container */}
                  <div
                    className={'p-2 space-y-1.5 max-h-[70vh] overflow-y-auto"'}
                  >
                    {/* Comedy Influencers */}
                    <Link to="/influencer-login" className="block group/link">
                      <div className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-yellow-300/50 overflow-hidden">
                        <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-800 group-hover/item:text-orange-600 transition-colors duration-300 truncate">
                            😄 Comedy Influencer
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                            Entertain audiences with humor and viral content
                          </div>
                        </div>
                        <div className="text-xs bg-yellow-100 text-orange-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          Entertainment
                        </div>
                      </div>
                    </Link>

                    {/* Finance Influencers */}
                    <Link to="/influencer-login" className="block group/link">
                      <div className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-green-300/50 overflow-hidden">
                        <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                          <DollarSign className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-800 group-hover/item:text-green-600 transition-colors duration-300 truncate">
                            💰 Finance Influencer
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                            Share investment tips and financial education
                          </div>
                        </div>
                        <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          Finance
                        </div>
                      </div>
                    </Link>

                    {/* Beauty Influencers */}
                    <Link to="/influencer-login" className="block group/link">
                      <div className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-pink-300/50 overflow-hidden">
                        <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-800 group-hover/item:text-pink-600 transition-colors duration-300 truncate">
                            💄 Beauty Influencer
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                            Showcase makeup, skincare, and beauty products
                          </div>
                        </div>
                        <div className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          Beauty
                        </div>
                      </div>
                    </Link>

                    {/* Fashion / Lifestyle Influencers */}
                    <Link to="/influencer-login" className="block group/link">
                      <div className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-purple-300/50 overflow-hidden">
                        <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-800 group-hover/item:text-purple-600 transition-colors duration-300 truncate">
                            👗 Fashion / Lifestyle
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                            Inspire with style, trends, and lifestyle content
                          </div>
                        </div>
                        <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          Lifestyle
                        </div>
                      </div>
                    </Link>

                    {/* Travel Influencers */}
                    <Link to="/influencer-login" className="block group/link">
                      <div className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-teal-300/50 overflow-hidden">
                        <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                          <Globe className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-800 group-hover/item:text-teal-600 transition-colors duration-300 truncate">
                            🌍 Travel Influencer
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                            Share adventures and explore amazing destinations
                          </div>
                        </div>
                        <div className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          Travel
                        </div>
                      </div>
                    </Link>

                    {/* Food Influencers */}
                    <Link to="/influencer-login" className="block group/link">
                      <div className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-red-300/50 overflow-hidden">
                        <div className="w-9 h-9 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-800 group-hover/item:text-red-600 transition-colors duration-300 truncate">
                            🍕 Food Influencer
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                            Create delicious content and culinary experiences
                          </div>
                        </div>
                        <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          Food
                        </div>
                      </div>
                    </Link>

                    {/* Fitness Influencers */}
                    <Link to="/influencer-login" className="block group/link">
                      <div className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-emerald-300/50 overflow-hidden">
                        <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-800 group-hover/item:text-emerald-600 transition-colors duration-300 truncate">
                            💪 Fitness Influencer
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                            Motivate and inspire healthy lifestyle choices
                          </div>
                        </div>
                        <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          Fitness
                        </div>
                      </div>
                    </Link>

                    {/* Gaming Influencers */}
                    <Link to="/influencer-login" className="block group/link">
                      <div className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-violet-300/50 overflow-hidden">
                        <div className="w-9 h-9 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-800 group-hover/item:text-violet-600 transition-colors duration-300 truncate">
                            🎮 Gaming Influencer
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                            Entertain with gameplay and gaming content
                          </div>
                        </div>
                        <div className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          Gaming
                        </div>
                      </div>
                    </Link>

                    {/* Technology Influencers */}
                    <Link to="/influencer-login" className="block group/link">
                      <div className="relative flex items-center space-x-3 p-3 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-300 group/item hover:shadow-md border border-transparent hover:border-blue-300/50 overflow-hidden">
                        <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                          <Rocket className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-800 group-hover/item:text-blue-600 transition-colors duration-300 truncate">
                            🚀 Technology Influencer
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5 group-hover/item:text-gray-700 transition-colors duration-300 line-clamp-1">
                            Review tech products and share innovations
                          </div>
                        </div>
                        <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          Technology
                        </div>
                      </div>
                    </Link>

                    {/* Premium Separator */}
                    <div className="relative my-3">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-white px-3 text-xs text-gray-500 font-medium">
                          or
                        </span>
                      </div>
                    </div>

                    {/* Premium All Creators CTA */}
                    <Link to="/influencer-login" className="block group/cta">
                      <div className="relative flex items-center justify-center space-x-2 p-3 m-1 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all duration-300 group/item shadow-lg transform hover:scale-[1.02] overflow-hidden">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-white text-sm">
                          🚀 Join as Any Creator
                        </span>
                        <ArrowRight className="w-4 h-4 text-white group-hover/item:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4 animate-fade-in-scale animate-stagger-1">
              {!isLoggedIn ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm xl:text-base font-medium px-4 py-2 transition-all duration-300 hover:bg-muted/50 hover:text-foreground"
                  onClick={() => setIsLogInOpen(true)}
                >
                  Log In
                </Button>
              ) : (
                <div className="flex items-center space-x-3">
                  <div className="text-sm">
                    <span className="font-medium">{currentUser?.name}</span>
                    <div className="text-xs text-muted-foreground capitalize">
                      {userType}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm font-medium px-3 py-2 btn-smooth hover:bg-muted/50"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              )}
              <Button
                size="sm"
                className="gradient-brand border-0 text-sm xl:text-base font-medium px-4 lg:px-6 py-2 btn-smooth"
                onClick={() => setIsGetStartedOpen(true)}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden animate-fade-in-scale">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 hover:bg-muted/50 btn-smooth"
                  >
                    <Menu className="w-5 h-5 md:w-6 md:h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 sm:w-96 mobile-nav-transition"
                >
                  <div className="flex flex-col space-y-6 mt-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xl font-bold gradient-text">
                        InfluenceHub
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold mb-3 text-foreground">
                          Features
                        </div>
                        <div className="space-y-3 pl-4">
                          <div
                            className="flex items-center space-x-3 cursor-pointer hover:bg-muted/50 p-2 rounded transition-colors"
                            onClick={() => setIsSmartMatchingOpen(true)}
                          >
                            <div className="w-6 h-6 gradient-brand rounded flex items-center justify-center">
                              <Brain className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-muted-foreground">
                              Smart Matching
                            </span>
                          </div>
                          <div
                            className="flex items-center space-x-3 cursor-pointer hover:bg-muted/50 p-2 rounded transition-colors"
                            onClick={() => {
                              document
                                .getElementById("features")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            <div className="w-6 h-6 gradient-brand rounded flex items-center justify-center">
                              <BarChart3 className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-muted-foreground">
                              Real-time Analytics
                            </span>
                          </div>
                          <div
                            className="flex items-center space-x-3 cursor-pointer hover:bg-muted/50 p-2 rounded transition-colors"
                            onClick={() => {
                              document
                                .getElementById("features")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            <div className="w-6 h-6 gradient-brand rounded flex items-center justify-center">
                              <Target className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-muted-foreground">
                              Campaign Management
                            </span>
                          </div>
                          <div
                            className="flex items-center space-x-3 cursor-pointer hover:bg-muted/50 p-2 rounded transition-colors"
                            onClick={() => {
                              document
                                .getElementById("features")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            <div className="w-6 h-6 gradient-brand rounded flex items-center justify-center">
                              <Shield className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-muted-foreground">
                              Quality Assurance
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setIsHowItWorksOpen(true)}
                        className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors py-2 bg-transparent border-none cursor-pointer hover:bg-muted/50 px-2 rounded"
                      >
                        How it works
                      </button>
                      <button
                        onClick={() => {
                          setIsPricingOpen(true);
                        }}
                        className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors py-2 bg-transparent border-none cursor-pointer hover:bg-muted/50 px-2 rounded"
                      >
                        Pricing
                      </button>
                      <button
                        onClick={() => setIsSuccessStoriesOpen(true)}
                        className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors py-2 bg-transparent border-none cursor-pointer hover:bg-muted/50 px-2 rounded"
                      >
                        Success Stories
                      </button>
                      <div>
                        <button
                          onClick={() =>
                            setIsMobileCreatorsOpen(!isMobileCreatorsOpen)
                          }
                          className="flex items-center justify-between w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 bg-transparent border-none cursor-pointer hover:bg-muted/50 px-2 rounded"
                        >
                          For Creators
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isMobileCreatorsOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {isMobileCreatorsOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            <Link to="/influencer-login" className="block">
                              <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors">
                                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded flex items-center justify-center">
                                  <Star className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                  Comedy Influencer
                                </span>
                              </div>
                            </Link>
                            <Link to="/influencer-login" className="block">
                              <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors">
                                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded flex items-center justify-center">
                                  <DollarSign className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                  Finance Influencer
                                </span>
                              </div>
                            </Link>
                            <Link to="/influencer-login" className="block">
                              <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors">
                                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded flex items-center justify-center">
                                  <Sparkles className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                  Beauty Influencer
                                </span>
                              </div>
                            </Link>
                            <Link to="/influencer-login" className="block">
                              <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors">
                                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded flex items-center justify-center">
                                  <Heart className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                  Fashion / Lifestyle
                                </span>
                              </div>
                            </Link>
                            <Link to="/influencer-login" className="block">
                              <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors">
                                <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded flex items-center justify-center">
                                  <Globe className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                  Travel Influencer
                                </span>
                              </div>
                            </Link>
                            <Link to="/influencer-login" className="block">
                              <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors">
                                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
                                  <Heart className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">Food Influencer</span>
                              </div>
                            </Link>
                            <Link to="/influencer-login" className="block">
                              <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors">
                                <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded flex items-center justify-center">
                                  <Zap className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                  Fitness Influencer
                                </span>
                              </div>
                            </Link>
                            <Link to="/influencer-login" className="block">
                              <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors">
                                <div className="w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded flex items-center justify-center">
                                  <Play className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                  Gaming Influencer
                                </span>
                              </div>
                            </Link>
                            <Link to="/influencer-login" className="block">
                              <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded transition-colors">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded flex items-center justify-center">
                                  <Rocket className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                  Technology Influencer
                                </span>
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t pt-6 space-y-3">
                      {!isLoggedIn ? (
                        <>
                          <Button
                            variant="outline"
                            className="w-full transition-all duration-300 hover:bg-muted/50 hover:border-primary/30"
                            onClick={() => setIsLogInOpen(true)}
                          >
                            Log In
                          </Button>
                          <Button
                            className="w-full gradient-brand border-0 btn-smooth"
                            onClick={() => setIsGetStartedOpen(true)}
                          >
                            Get Started
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="font-medium">
                              {currentUser?.name}
                            </div>
                            <div className="text-sm text-muted-foreground capitalize">
                              {userType}
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="w-full btn-smooth"
                            onClick={handleLogout}
                          >
                            Logout
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="container-responsive py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Master Influencer Management with
                <span className="block" style={{ color: "#c939ca" }}>
                  Heepsy's Comprehensive Influencer CRM
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                The board view of your Lists section to break down by steps your
                campaigns and processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-6 py-3 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700"
                  onClick={() => setIsInfluencerSearchOpen(true)}
                >
                  Check any influencer
                </Button>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-base px-6 py-3 text-white border-0 shadow-lg hover:shadow-xl"
                  onClick={() => setIsGetStartedOpen(true)}
                >
                  Book a demo
                </Button>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* Main Dashboard Image */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbfc29eedfe124a49910f3c0426c39bc0%2F0ac7fb5ae2604563bfb95c931b0c73bb?format=webp&width=800"
                  alt="Influencer CRM Dashboard"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />

                {/* Optional overlay cards for depth effect */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-white rounded-lg shadow-lg p-4 hidden xl:block">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Active</div>
                      <div className="text-xs text-gray-500">Campaigns</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">24</div>
                </div>

                <div className="absolute -bottom-4 -right-4 w-36 h-24 bg-white rounded-lg shadow-lg p-4 hidden xl:block">
                  <div className="text-xs text-gray-500 mb-1">
                    Engagement Rate
                  </div>
                  <div className="text-xl font-bold text-green-600">8.7%</div>
                  <div className="flex items-center text-xs text-green-600">
                    <ArrowRight className="w-3 h-3 mr-1" />
                    +2.1% vs last month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gray-50 relative">
        <div className="container-responsive relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Trusted by thousands of brands worldwide
            </h2>
            <p className="text-gray-600">
              Join the leading influencer marketing platform
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center animate-fade-in-scale animate-stagger-1">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#c939ca" }}
              >
                10M+
              </div>
              <div className="text-sm md:text-base text-black">
                Influencers in Database
              </div>
            </div>
            <div className="text-center animate-fade-in-scale animate-stagger-2">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#c939ca" }}
              >
                50+
              </div>
              <div className="text-sm md:text-base text-black">
                Countries Covered
              </div>
            </div>
            <div className="text-center animate-fade-in-scale animate-stagger-3">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#c939ca" }}
              >
                500K+
              </div>
              <div className="text-sm md:text-base text-black">
                Campaigns Launched
              </div>
            </div>
            <div className="text-center animate-fade-in-scale animate-stagger-4">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#c939ca" }}
              >
                98%
              </div>
              <div className="text-sm md:text-base text-black">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container-responsive">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Features
            </Badge>
            <h2 className="responsive-subheading font-bold mb-4 md:mb-6">
              Everything You Need to
              <span className="gradient-text block">Scale Your Influence</span>
            </h2>
            <p className="responsive-text text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools you need for
              successful influencer marketing campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card
              className="border-2 hover:border-primary/20 transition-all card-magnetic cursor-pointer group/card relative overflow-hidden gradient-glow"
              onClick={() => setIsSmartMatchingOpen(true)}
            >
              <CardHeader className="pb-4 relative">
                {/* "Try Now" Badge */}
                <div className="absolute top-3 right-3 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                  Try Now
                </div>

                <div className="w-12 h-12 md:w-14 md:h-14 gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl group-hover/card:text-primary transition-colors duration-300">
                  Smart Matching
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  AI-powered influencer discovery and matching based on
                  audience, values, and campaign goals.
                </CardDescription>

                {/* Enhanced CTA */}
                <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover/card:underline">
                  <span>Launch AI Matching</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/card:translate-x-1 transition-transform duration-200" />
                </div>
              </CardHeader>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>

            <Card
              className="border-2 hover:border-primary/20 transition-all card-magnetic cursor-pointer group/card relative overflow-hidden"
              onClick={() =>
                alert(
                  "📊 Real-time Analytics Dashboard\n\nView comprehensive campaign metrics, engagement rates, ROI tracking, and performance insights. This feature provides live data visualization and detailed reporting.\n\nComing in full version!",
                )
              }
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-3 right-3 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                  Dashboard
                </div>

                <div className="w-12 h-12 md:w-14 md:h-14 gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl group-hover/card:text-primary transition-colors duration-300">
                  Real-time Analytics
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Track campaign performance with detailed analytics, engagement
                  metrics, and ROI insights.
                </CardDescription>

                <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover/card:underline">
                  <span>View Analytics</span>
                  <BarChart3 className="w-4 h-4 ml-2 group-hover/card:scale-110 transition-transform duration-200" />
                </div>
              </CardHeader>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>

            <Card
              className="border-2 hover:border-primary/20 transition-all card-magnetic cursor-pointer group/card relative overflow-hidden"
              onClick={() =>
                alert(
                  "🎯 Campaign Management Suite\n\nAutomated workflow tools including:\n• Campaign creation wizard\n• Content approval system\n• Payment processing\n• Timeline management\n• Team collaboration\n\nStreamline your entire campaign process!",
                )
              }
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-3 right-3 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  Workflow
                </div>

                <div className="w-12 h-12 md:w-14 md:h-14 gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl group-hover/card:text-primary transition-colors duration-300">
                  Campaign Management
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Streamline your workflow with automated campaign creation,
                  content approval, and payment processing.
                </CardDescription>

                <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover/card:underline">
                  <span>Manage Campaigns</span>
                  <Target className="w-4 h-4 ml-2 group-hover/card:rotate-90 transition-transform duration-200" />
                </div>
              </CardHeader>

              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>

            <Card
              className="border-2 hover:border-primary/20 transition-all hover:shadow-lg card-hover cursor-pointer group/card relative overflow-hidden"
              onClick={() =>
                alert(
                  "🌍 Global Influencer Network\n\nAccess our worldwide network:\n• 50+ Countries\n• 25+ Languages\n• All major platforms (Instagram, TikTok, YouTube, Twitter)\n• 100+ Niches and categories\n• Verified authentic accounts\n\nExpand your reach globally!",
                )
              }
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-3 right-3 bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                  Worldwide
                </div>

                <div className="w-12 h-12 md:w-14 md:h-14 gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl group-hover/card:text-primary transition-colors duration-300">
                  Global Reach
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Access influencers worldwide across all major social platforms
                  and niches.
                </CardDescription>

                <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover/card:underline">
                  <span>Explore Network</span>
                  <Globe className="w-4 h-4 ml-2 group-hover/card:rotate-180 transition-transform duration-500" />
                </div>
              </CardHeader>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>

            <Card
              className="border-2 hover:border-primary/20 transition-all hover:shadow-lg card-hover cursor-pointer group/card relative overflow-hidden"
              onClick={() =>
                alert(
                  "📈 Performance Tracking Suite\n\nAdvanced monitoring tools:\n• ROI Calculator\n• Conversion Tracking\n• Brand Sentiment Analysis\n• Engagement Rate Monitoring\n• KPI Dashboards\n• Custom Reports\n\nOptimize your campaign performance!",
                )
              }
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-3 right-3 bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                  Metrics
                </div>

                <div className="w-12 h-12 md:w-14 md:h-14 gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl group-hover/card:text-primary transition-colors duration-300">
                  Performance Tracking
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Monitor KPIs, conversion rates, and brand sentiment with
                  advanced tracking tools.
                </CardDescription>

                <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover/card:underline">
                  <span>Track Performance</span>
                  <TrendingUp className="w-4 h-4 ml-2 group-hover/card:scale-110 transition-transform duration-200" />
                </div>
              </CardHeader>

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>

            <Card
              className="border-2 hover:border-primary/20 transition-all hover:shadow-lg card-hover cursor-pointer group/card relative overflow-hidden"
              onClick={() =>
                alert(
                  "🛡️ Quality Assurance System\n\nEnsure authenticity with:\n• AI-powered fraud detection\n• Follower authenticity verification\n• Content quality analysis\n• Engagement authenticity checks\n• Brand safety monitoring\n• Compliance verification\n\nProtect your brand reputation!",
                )
              }
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-3 right-3 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                  Security
                </div>

                <div className="w-12 h-12 md:w-14 md:h-14 gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl group-hover/card:text-primary transition-colors duration-300">
                  Quality Assurance
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Ensure authentic engagement with our fraud detection and
                  content verification systems.
                </CardDescription>

                <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover/card:underline">
                  <span>Learn Security</span>
                  <Shield className="w-4 h-4 ml-2 group-hover/card:scale-110 transition-transform duration-200" />
                </div>
              </CardHeader>

              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>

            <Link to="/influencer-login">
              <Card className="border-2 hover:border-primary/20 transition-all card-magnetic cursor-pointer group/card relative overflow-hidden">
                <CardHeader className="pb-4 relative">
                  <div
                    className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                      isLoggedIn
                        ? userType === "brand"
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {isLoggedIn
                      ? userType === "brand"
                        ? "CRM"
                        : "Dashboard"
                      : "Login Required"}
                  </div>

                  <div className="w-12 h-12 md:w-14 md:h-14 gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl group-hover/card:text-primary transition-colors duration-300">
                    {isLoggedIn && userType === "brand"
                      ? "Influencer CRM"
                      : "Dashboard Access"}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    {isLoggedIn
                      ? userType === "brand"
                        ? "Comprehensive database and relationship management system for all your influencer partnerships."
                        : "Access your influencer dashboard to manage collaborations and view opportunities."
                      : "Log in to access personalized dashboard and CRM features based on your account type."}
                  </CardDescription>

                  <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover/card:underline">
                    <span>
                      {isLoggedIn
                        ? userType === "brand"
                          ? "Manage CRM"
                          : "View Dashboard"
                        : "Log In Required"}
                    </span>
                    <Users className="w-4 h-4 ml-2 group-hover/card:scale-110 transition-transform duration-200" />
                  </div>
                </CardHeader>

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Features Section - Heepsy Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Feature 1: Influencer Search & Discovery */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Influencer Database
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-bold text-2xl text-blue-600">
                        10M+
                      </div>
                      <div className="text-gray-600">Influencers</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-bold text-2xl text-green-600">
                        50+
                      </div>
                      <div className="text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Millions of Influencers at Your Fingertips
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Access an extensive network of influencers across Instagram,
                YouTube, TikTok, and more. Use advanced filters to find creators
                that perfectly match your brand and audience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  ✨ Category
                </Badge>
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  📍 Location
                </Badge>
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  🎯 Engagement
                </Badge>
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  ��� Audience
                </Badge>
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  👌 Authenticity
                </Badge>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => setIsInfluencerSearchOpen(true)}
              >
                Start Free Search
              </Button>
            </div>
          </div>

          {/* Feature 2: Creator Authenticity Analysis */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Analyze Creator Authenticity
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ensure authenticity and brand fit with our advanced analytics.
                Get detailed insights into follower quality, engagement
                patterns, and audience demographics.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-purple-100 text-purple-700 px-3 py-1">
                  📊 Publication insights
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 px-3 py-1">
                  📊 Demographics
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 px-3 py-1">
                  👌 Authenticity
                </Badge>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => setIsAuthenticityAnalysisOpen(true)}
              >
                Analyze Now
              </Button>
            </div>
            <div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Authenticity Score
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Real Followers</span>
                    <span className="font-bold text-green-600">94.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "94.2%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Engagement Quality</span>
                    <span className="font-bold text-blue-600">8.7/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Brand Safety</span>
                    <span className="font-bold text-purple-600">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Bulk Outreach */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Outreach Dashboard
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <span>Emails Sent</span>
                    <span className="font-bold text-orange-600">1,247</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <span>Response Rate</span>
                    <span className="font-bold text-green-600">34.2%</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <span>Collaborations</span>
                    <span className="font-bold text-blue-600">87</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact influencers in seconds
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Reach out to hundreds of influencers with personalized
                campaigns. Get contact details, track responses, and manage your
                outreach efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-orange-100 text-orange-700 px-3 py-1">
                  🚀 Bulk outreach
                </Badge>
                <Badge className="bg-orange-100 text-orange-700 px-3 py-1">
                  🗒️ Contact details
                </Badge>
                <Badge className="bg-orange-100 text-orange-700 px-3 py-1">
                  🗒️ Export in CSV
                </Badge>
                <Badge className="bg-orange-100 text-orange-700 px-3 py-1">
                  💻 Outreach analytics
                </Badge>
                <Badge className="bg-orange-100 text-orange-700 px-3 py-1">
                  🔄 Email sync
                </Badge>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => setIsBulkOutreachOpen(true)}
              >
                Start Outreach
              </Button>
            </div>
          </div>

          {/* Feature 4: Creator Marketplace */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Receive creator applications effortlessly
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Create marketplace listings and let creators apply to your
                campaigns. Streamline the application process with automated
                screening and approval workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                  🚀 Offer listing
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                  🗒️ Offer distribution
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                  🗒️ Product catalog integration
                </Badge>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => setIsMarketplaceOpen(true)}
              >
                Create Listing
              </Button>
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Active Campaigns
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Summer Collection</span>
                      <Badge className="bg-green-100 text-green-700">
                        Active
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      47 applications • $2,500 budget
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Product Launch</span>
                      <Badge className="bg-yellow-100 text-yellow-700">
                        Review
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      23 applications • $5,000 budget
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5: Campaign Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Campaign Pipeline
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Negotiation (12)</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Content Creation (8)</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Review (5)</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Published (23)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Organize & manage easily
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Keep track of all your collaborations in one place. Manage
                contracts, payments, content approvals, and communication with
                intuitive tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  📇 Flexible pipelines
                </Badge>
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  💶 Payments
                </Badge>
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  🗨�� Messaging
                </Badge>
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                  📇 Media gallery
                </Badge>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => setIsCampaignManagementOpen(true)}
              >
                Manage Campaigns
              </Button>
            </div>
          </div>

          {/* Feature 6: Real-time Monitoring */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Monitor & Track Effortlessly
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get real-time performance insights across all platforms. Track
                engagement, reach, conversions, and ROI with comprehensive
                analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-indigo-100 text-indigo-700 px-3 py-1">
                  �� Real-time tracking
                </Badge>
                <Badge className="bg-indigo-100 text-indigo-700 px-3 py-1">
                  📹 Automated media collection
                </Badge>
                <Badge className="bg-indigo-100 text-indigo-700 px-3 py-1">
                  📈 Engagement insights
                </Badge>
                <Badge className="bg-indigo-100 text-indigo-700 px-3 py-1">
                  🔍 Performance monitoring
                </Badge>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => setIsMonitoringOpen(true)}
              >
                View Analytics
              </Button>
            </div>
            <div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Performance Dashboard
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="font-bold text-2xl text-blue-600">2.4M</div>
                    <div className="text-sm text-gray-600">Total Reach</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="font-bold text-2xl text-green-600">
                      8.7%
                    </div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="font-bold text-2xl text-purple-600">
                      156
                    </div>
                    <div className="text-sm text-gray-600">Conversions</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="font-bold text-2xl text-orange-600">
                      4.2x
                    </div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A solution for every industry
            </h2>
            <p className="text-lg text-gray-600">
              Tailored influencer marketing strategies for different business
              needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-commerce</h3>
              <p className="text-gray-600">Sell through social media.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Startups</h3>
              <p className="text-gray-600">Get your name out there.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Brands</h3>
              <p className="text-gray-600">Promote your business.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Agencies</h3>
              <p className="text-gray-600">Make marketing easier.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
        <div className="container-responsive">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              How It Works
            </Badge>
            <h2 className="responsive-subheading font-bold mb-4 md:mb-6">
              Simple Process,
              <span className="gradient-text block">Powerful Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <Card
              className="text-center animate-fade-in-up animate-stagger-1 cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-green-500/50 p-6"
              onClick={() => setIsGetStartedOpen(true)}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  1
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Create Your Campaign
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Define your goals, target audience, and budget. Our AI will help
                optimize your campaign strategy.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50"
              >
                Start Campaign
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <Card
              className="text-center animate-fade-in-up animate-stagger-2 cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500/50 p-6"
              onClick={() => setIsInfluencerSearchOpen(true)}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  2
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Find & Match Influencers
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Search through 10M+ influencers and use our smart algorithm to
                find perfect matches based on audience alignment and engagement
                quality.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                Search Influencers
                <Users className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <Card
              className="text-center animate-fade-in-up animate-stagger-3 cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-500/50 p-6"
              onClick={() => setIsMonitoringOpen(true)}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  3
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Launch & Track Performance
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Collaborate seamlessly, approve content, and track real-time
                performance metrics to maximize your ROI.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-purple-500 text-purple-600 hover:bg-purple-50"
              >
                View Analytics
                <BarChart3 className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>

          {/* Interactive Demo Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => setIsHowItWorksOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3"
            >
              <Play className="w-5 h-5 mr-2" />
              See Interactive Workflow
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container-responsive">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Success Stories
            </Badge>
            <h2 className="responsive-subheading font-bold mb-4 md:mb-6">
              Loved by Brands &
              <span className="gradient-text block">Influencers Worldwide</span>
            </h2>
            <Button
              onClick={() => setIsSuccessStoriesOpen(true)}
              variant="outline"
              className="mb-8 border-green-500 text-green-600 hover:bg-green-50"
            >
              <Star className="w-4 h-4 mr-2" />
              View All Success Stories
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-2 card-magnetic gradient-glow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Sarah Martinez</div>
                    <div className="text-sm text-muted-foreground">
                      Fashion Influencer
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  "InfluenceHub transformed my collaborations. The platform
                  makes it so easy to connect with brands that align with my
                  values and audience."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>DK</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">David Kim</div>
                    <div className="text-sm text-muted-foreground">
                      Marketing Director, TechCorp
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  "We saw a 300% increase in engagement and 150% boost in
                  conversions within just 3 months. The ROI has been
                  incredible."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>EJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Emma Johnson</div>
                    <div className="text-sm text-muted-foreground">
                      Lifestyle Creator
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  "The analytics and insights help me understand my audience
                  better and create more engaging content. It's a game-changer!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-brand relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container-responsive text-center relative z-10">
          <h2 className="responsive-subheading font-bold text-white mb-6">
            Ready to Amplify Your Influence?
          </h2>
          <p className="responsive-text text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto">
            Join thousands of successful brands and influencers who trust
            InfluenceHub to grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link to="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-6 btn-smooth bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl"
              >
                Start Your Campaign
                <Heart className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-6 md:px-8 py-3 md:py-6 border-white/30 text-white hover:bg-white/10 btn-smooth hover:border-white/50"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t">
        <div className="container-responsive">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">
                  InfluenceHub
                </span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                The leading platform connecting brands with authentic
                influencers for impactful marketing campaigns.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm md:text-base text-muted-foreground">
            <p>&copy; 2024 InfluenceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Smart Matching Dialog */}
      <Dialog open={isSmartMatchingOpen} onOpenChange={setIsSmartMatchingOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span>AI-Powered Smart Matching</span>
            </DialogTitle>
            <DialogDescription>
              Let our AI find the perfect influencers for your brand. Fill out
              the details below and we'll match you with influencers who align
              with your brand values and target audience.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Brand Information */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <Target className="w-4 h-4 mr-2 text-primary" />
                Brand Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Brand Name
                  </label>
                  <Input
                    placeholder="Enter your brand name"
                    value={matchingForm.brandName}
                    onChange={(e) =>
                      setMatchingForm({
                        ...matchingForm,
                        brandName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Industry
                  </label>
                  <Select
                    value={matchingForm.industry}
                    onValueChange={(value) =>
                      setMatchingForm({ ...matchingForm, industry: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fashion">Fashion & Beauty</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="fitness">Health & Fitness</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                      <SelectItem value="travel">Travel & Lifestyle</SelectItem>
                      <SelectItem value="gaming">
                        Gaming & Entertainment
                      </SelectItem>
                      <SelectItem value="business">
                        Business & Finance
                      </SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="home">Home & Garden</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                Campaign Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Budget Range
                  </label>
                  <Select
                    value={matchingForm.budget}
                    onValueChange={(value) =>
                      setMatchingForm({ ...matchingForm, budget: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">
                        $50,000 - $100,000
                      </SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Preferred Platforms
                  </label>
                  <Select
                    value={matchingForm.preferredPlatforms}
                    onValueChange={(value) =>
                      setMatchingForm({
                        ...matchingForm,
                        preferredPlatforms: value,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select platforms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="twitter">Twitter/X</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="all">All Platforms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                Target Audience
              </h4>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Describe Your Target Audience
                </label>
                <Textarea
                  placeholder="e.g., Women aged 25-35, interested in sustainable fashion, living in urban areas..."
                  value={matchingForm.targetAudience}
                  onChange={(e) =>
                    setMatchingForm({
                      ...matchingForm,
                      targetAudience: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>
            </div>

            {/* Campaign Goals */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                Campaign Goals
              </h4>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  What are your main objectives?
                </label>
                <Textarea
                  placeholder="e.g., Increase brand awareness, drive website traffic, boost sales, launch new product..."
                  value={matchingForm.campaignGoals}
                  onChange={(e) =>
                    setMatchingForm({
                      ...matchingForm,
                      campaignGoals: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>
            </div>

            {/* AI Matching Results Preview */}
            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                AI Matching Preview
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>SF</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">@style_fashionista</div>
                        <div className="text-sm text-muted-foreground">
                          Fashion
                        </div>
                      </div>
                      <Badge className="ml-auto bg-green-100 text-green-800">
                        95% Match
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div>
                        <div className="font-semibold">125K</div>
                        <div className="text-muted-foreground">Followers</div>
                      </div>
                      <div>
                        <div className="font-semibold">4.8%</div>
                        <div className="text-muted-foreground">Engagement</div>
                      </div>
                      <div>
                        <div className="font-semibold">$800</div>
                        <div className="text-muted-foreground">Per Post</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>TI</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">@tech_innovator</div>
                        <div className="text-sm text-muted-foreground">
                          Technology
                        </div>
                      </div>
                      <Badge className="ml-auto bg-green-100 text-green-800">
                        92% Match
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div>
                        <div className="font-semibold">89K</div>
                        <div className="text-muted-foreground">Followers</div>
                      </div>
                      <div>
                        <div className="font-semibold">6.2%</div>
                        <div className="text-muted-foreground">Engagement</div>
                      </div>
                      <div>
                        <div className="font-semibold">$600</div>
                        <div className="text-muted-foreground">Per Post</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Complete the form above to see personalized matches for your
                brand
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => setIsSmartMatchingOpen(false)}
              className="flex-1 btn-smooth"
            >
              Cancel
            </Button>
            <Button
              className="gradient-brand border-0 flex-1 btn-smooth"
              onClick={() => {
                if (!matchingForm.brandName || !matchingForm.industry) {
                  alert(
                    "Please fill in at least your brand name and industry to continue.",
                  );
                  return;
                }
                alert(
                  `���� Smart Matching initiated for ${matchingForm.brandName}!\n\nOur AI is now analyzing 50,000+ influencers to find your perfect matches. You'll receive personalized recommendations within 24 hours.\n\nNext step: Create a free account to access your matches!`,
                );
                setIsSmartMatchingOpen(false);
              }}
            >
              <Brain className="w-4 h-4 mr-2" />
              Find My Matches
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Pricing Modal */}
      <Dialog open={isPricingOpen} onOpenChange={setIsPricingOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-center justify-center">
              <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span>Choose Your Perfect Plan</span>
            </DialogTitle>
            <DialogDescription className="text-center">
              Scale your influencer marketing with plans designed for every
              business size. Start free and upgrade as you grow.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    billingCycle === "monthly"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annual")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all relative ${
                    billingCycle === "annual"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Annual
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                    20% OFF
                  </span>
                </button>
              </div>
            </div>

            {/* Pricing Plans Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* Starter Plan */}
              <Card
                className={`border-2 transition-all duration-300 relative ${
                  selectedPlan === "starter"
                    ? "border-primary shadow-lg scale-105"
                    : "hover:border-primary/20"
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">
                      ${billingCycle === "monthly" ? "49" : "39"}
                    </span>
                    <span className="text-muted-foreground">
                      /{billingCycle === "monthly" ? "month" : "month"}
                    </span>
                  </div>
                  <CardDescription>
                    Perfect for small businesses getting started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Up to 5 campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">
                        Access to 10K+ influencers
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Basic analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Email support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Content approval tools</span>
                    </div>
                  </div>
                  <Button
                    className={`w-full mt-6 ${
                      selectedPlan === "starter"
                        ? "gradient-brand border-0"
                        : ""
                    }`}
                    variant={selectedPlan === "starter" ? "default" : "outline"}
                    onClick={() => {
                      setSelectedPlan("starter");
                      alert(
                        "🚀 Starter Plan Selected!\n\nPerfect for getting started with influencer marketing.\n\nRedirecting to secure checkout...",
                      );
                    }}
                  >
                    {selectedPlan === "starter"
                      ? "Selected Plan"
                      : "Choose Starter"}
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan (Most Popular) */}
              <Card
                className={`border-2 transition-all duration-300 relative ${
                  selectedPlan === "pro"
                    ? "border-primary shadow-lg scale-105"
                    : "border-primary/50"
                }`}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center pb-4 pt-6">
                  <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Pro</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">
                      ${billingCycle === "monthly" ? "149" : "119"}
                    </span>
                    <span className="text-muted-foreground">
                      /{billingCycle === "monthly" ? "month" : "month"}
                    </span>
                  </div>
                  <CardDescription>Best for growing businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Unlimited campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">
                        Access to 50K+ influencers
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">
                        Advanced analytics & insights
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Priority support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">AI Smart Matching</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Team collaboration tools</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Custom reports</span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6 gradient-brand border-0"
                    onClick={() => {
                      setSelectedPlan("pro");
                      alert(
                        "⭐ Pro Plan Selected!\n\nPerfect for scaling your influencer marketing.\n\nIncludes AI Smart Matching and advanced analytics.\n\nRedirecting to secure checkout...",
                      );
                    }}
                  >
                    Choose Pro
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card
                className={`border-2 transition-all duration-300 relative ${
                  selectedPlan === "enterprise"
                    ? "border-primary shadow-lg scale-105"
                    : "hover:border-primary/20"
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Custom</span>
                    <div className="text-sm text-muted-foreground mt-1">
                      Contact for pricing
                    </div>
                  </div>
                  <CardDescription>
                    For large organizations with custom needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Everything in Pro</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Custom integrations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">24/7 phone support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">
                        Advanced security & compliance
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">White-label options</span>
                    </div>
                  </div>
                  <Button
                    className={`w-full mt-6 ${
                      selectedPlan === "enterprise"
                        ? "gradient-brand border-0"
                        : ""
                    }`}
                    variant={
                      selectedPlan === "enterprise" ? "default" : "outline"
                    }
                    onClick={() => {
                      setSelectedPlan("enterprise");
                      alert(
                        "🏢 Enterprise Plan Selected!\n\nPerfect for large organizations.\n\nOur sales team will contact you within 24 hours to discuss your custom requirements.",
                      );
                    }}
                  >
                    {selectedPlan === "enterprise"
                      ? "Selected Plan"
                      : "Contact Sales"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Features Comparison */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="font-semibold text-center mb-4">
                All Plans Include:
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Fraud detection & verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span>Real-time performance tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Influencer discovery tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Campaign management suite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>Content approval workflow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>Global influencer network</span>
                </div>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="text-center mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">
                  30-Day Money-Back Guarantee
                </span>
              </div>
              <p className="text-sm text-green-700">
                Try InfluenceHub risk-free. If you're not completely satisfied,
                we'll refund your money.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => setIsPricingOpen(false)}
              className="flex-1 btn-smooth"
            >
              Close
            </Button>
            <Button
              className="gradient-brand border-0 flex-1 btn-smooth"
              onClick={() => {
                alert(
                  `✨ Ready to get started with the ${selectedPlan.toUpperCase()} plan?\n\nBilling: ${billingCycle}\nNext steps:\n• Complete account setup\n• Add payment method\n• Start your first campaign\n\nRedirecting to secure checkout...`,
                );
                setIsPricingOpen(false);
              }}
            >
              <Zap className="w-4 h-4 mr-2" />
              Get Started with{" "}
              {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Influencer CRM Modal */}
      <Dialog open={isCRMOpen} onOpenChange={setIsCRMOpen}>
        <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span>Influencer CRM & Database</span>
            </DialogTitle>
            <DialogDescription>
              Comprehensive influencer relationship management system with
              advanced search, communication tracking, and performance
              analytics.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            {/* Search and Filters */}
            <div className="mb-6 space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search influencers by name, niche, location, or tags..."
                    className="w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Select
                    value={platformFilter}
                    onValueChange={setPlatformFilter}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="beauty">Beauty</SelectItem>
                      <SelectItem value="fitness">Fitness</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="prospect">Prospects</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setPlatformFilter("all");
                      setCategoryFilter("all");
                      setStatusFilter("all");
                    }}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              </div>

              {/* Active Filters Display */}
              {(searchTerm ||
                platformFilter !== "all" ||
                categoryFilter !== "all" ||
                statusFilter !== "all") && (
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium">Active filters:</span>
                  {searchTerm && (
                    <Badge variant="secondary" className="px-2 py-1">
                      Search: "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm("")}
                        className="ml-1 hover:text-red-500"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {platformFilter !== "all" && (
                    <Badge variant="secondary" className="px-2 py-1">
                      Platform: {platformFilter}
                      <button
                        onClick={() => setPlatformFilter("all")}
                        className="ml-1 hover:text-red-500"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {categoryFilter !== "all" && (
                    <Badge variant="secondary" className="px-2 py-1">
                      Category: {categoryFilter}
                      <button
                        onClick={() => setCategoryFilter("all")}
                        className="ml-1 hover:text-red-500"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {statusFilter !== "all" && (
                    <Badge variant="secondary" className="px-2 py-1">
                      Status: {statusFilter}
                      <button
                        onClick={() => setStatusFilter("all")}
                        className="ml-1 hover:text-red-500"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {/* CRM Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {filteredInfluencers.length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {filteredInfluencers.length === influencers.length
                        ? "Total"
                        : "Filtered"}{" "}
                      Influencers
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {
                        filteredInfluencers.filter(
                          (inf) => inf.status === "Active",
                        ).length
                      }
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Active Partnerships
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {
                        filteredInfluencers.filter(
                          (inf) => inf.status === "Pending",
                        ).length
                      }
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Pending Outreach
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {filteredInfluencers.length > 0
                        ? (
                            filteredInfluencers.reduce(
                              (sum, inf) => sum + (inf.rating || 0),
                              0,
                            ) /
                              filteredInfluencers.filter(
                                (inf) => inf.rating > 0,
                              ).length || 0
                          ).toFixed(1)
                        : "0.0"}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg. Rating
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Influencer List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Influencer Database</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <div className="w-4 h-4 mr-2">📊</div>
                    Export
                  </Button>
                  <Button
                    size="sm"
                    className="gradient-brand border-0"
                    onClick={() => setIsAddInfluencerOpen(true)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Influencer
                  </Button>
                </div>
              </div>

              {/* Dynamic Influencer Cards */}
              <div className="grid gap-4">
                {filteredInfluencers.length === 0 ? (
                  <Card className="p-8 text-center">
                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      No influencers found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {searchTerm ||
                      platformFilter !== "all" ||
                      categoryFilter !== "all" ||
                      statusFilter !== "all"
                        ? "Try adjusting your filters or search terms."
                        : "Add your first influencer to get started."}
                    </p>
                    <Button
                      onClick={() => setIsAddInfluencerOpen(true)}
                      className="gradient-brand border-0"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Influencer
                    </Button>
                  </Card>
                ) : (
                  filteredInfluencers.map((influencer) => (
                    <Card
                      key={influencer.id}
                      className="p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Profile Section */}
                        <div className="flex items-center space-x-3 flex-1">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>
                              {influencer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">
                              {influencer.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {influencer.handle}
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {influencer.platform}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {influencer.category}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Metrics Section */}
                        <div className="hidden lg:flex items-center space-x-6 text-sm">
                          <div className="text-center">
                            <div className="font-semibold">
                              {influencer.followers}
                            </div>
                            <div className="text-muted-foreground">
                              Followers
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">
                              {influencer.engagement}
                            </div>
                            <div className="text-muted-foreground">
                              Engagement
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">
                              {influencer.campaigns}
                            </div>
                            <div className="text-muted-foreground">
                              Campaigns
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">
                                {influencer.rating || "N/A"}
                              </span>
                            </div>
                            <div className="text-muted-foreground">Rating</div>
                          </div>
                        </div>

                        {/* Status and Actions */}
                        <div className="flex items-center space-x-3">
                          <div className="text-right text-sm">
                            <Badge
                              className={`mb-1 ${
                                influencer.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : influencer.status === "Pending"
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {influencer.status}
                            </Badge>
                            <div className="text-muted-foreground">
                              Last: {influencer.lastContact}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Select
                              value={influencer.status}
                              onValueChange={(newStatus) =>
                                updateInfluencerStatus(influencer.id, newStatus)
                              }
                            >
                              <SelectTrigger className="w-28 h-8 text-xs">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Completed">
                                  Completed
                                </SelectItem>
                                <SelectItem value="Prospect">
                                  Prospect
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setSelectedInfluencer(influencer);
                                alert(
                                  `���� ${influencer.name}'s Profile\n\n📧 Email: ${influencer.email}\n���� Rate: $${influencer.pricePerPost}/post\n📍 Location: ${influencer.location}\n📝 Notes: ${influencer.notes}\n🏷️ Tags: ${influencer.tags.join(", ")}\n\n✨ Full profile editor coming soon!`,
                                );
                              }}
                            >
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:bg-red-50"
                              onClick={() => {
                                if (
                                  confirm(
                                    `Delete ${influencer.name} from your CRM?`,
                                  )
                                ) {
                                  deleteInfluencer(influencer.id);
                                }
                              }}
                            >
                              ×
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>

            {/* CRM Features Overview */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Performance Analytics
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Track ROI, engagement rates, and campaign success metrics
                      for each influencer.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Relationship Tracking
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Maintain detailed communication history, notes, and
                      relationship status.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Smart Segmentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatically categorize influencers by performance,
                      niche, and collaboration history.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => setIsCRMOpen(false)}
              className="flex-1 btn-smooth"
            >
              Close
            </Button>
            <Button
              className="gradient-brand border-0 flex-1 btn-smooth"
              onClick={() => {
                alert(
                  "🚀 CRM System Launching!\n\nAccess to:\n• Complete influencer database\n• Advanced search & filtering\n• Communication tracking\n• Performance analytics\n• Automated workflows\n\nRedirecting to CRM dashboard...",
                );
                setIsCRMOpen(false);
              }}
            >
              <Users className="w-4 h-4 mr-2" />
              Launch CRM Dashboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Influencer Modal */}
      <Dialog open={isAddInfluencerOpen} onOpenChange={setIsAddInfluencerOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span>Add New Influencer</span>
            </DialogTitle>
            <DialogDescription>
              Add a new influencer to your CRM database for future campaigns.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                Basic Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    placeholder="e.g. Sarah Johnson"
                    value={newInfluencer.name}
                    onChange={(e) =>
                      setNewInfluencer({
                        ...newInfluencer,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Handle *
                  </label>
                  <Input
                    placeholder="e.g. @sarahjohnson"
                    value={newInfluencer.handle}
                    onChange={(e) =>
                      setNewInfluencer({
                        ...newInfluencer,
                        handle: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="sarah@example.com"
                    value={newInfluencer.email}
                    onChange={(e) =>
                      setNewInfluencer({
                        ...newInfluencer,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Location
                  </label>
                  <Input
                    placeholder="e.g. Los Angeles, CA"
                    value={newInfluencer.location}
                    onChange={(e) =>
                      setNewInfluencer({
                        ...newInfluencer,
                        location: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Platform Information */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <Globe className="w-4 h-4 mr-2 text-primary" />
                Platform & Metrics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Primary Platform
                  </label>
                  <Select
                    value={newInfluencer.platform}
                    onValueChange={(value) =>
                      setNewInfluencer({ ...newInfluencer, platform: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Instagram">Instagram</SelectItem>
                      <SelectItem value="TikTok">TikTok</SelectItem>
                      <SelectItem value="YouTube">YouTube</SelectItem>
                      <SelectItem value="Twitter">Twitter</SelectItem>
                      <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Category
                  </label>
                  <Select
                    value={newInfluencer.category}
                    onValueChange={(value) =>
                      setNewInfluencer({ ...newInfluencer, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Fashion">Fashion</SelectItem>
                      <SelectItem value="Beauty">Beauty</SelectItem>
                      <SelectItem value="Fitness">Fitness</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                      <SelectItem value="Travel">Travel</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Followers
                  </label>
                  <Input
                    placeholder="e.g. 125K or 1.2M"
                    value={newInfluencer.followers}
                    onChange={(e) =>
                      setNewInfluencer({
                        ...newInfluencer,
                        followers: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Engagement Rate
                  </label>
                  <Input
                    placeholder="e.g. 4.8%"
                    value={newInfluencer.engagement}
                    onChange={(e) =>
                      setNewInfluencer({
                        ...newInfluencer,
                        engagement: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <DollarSign className="w-4 h-4 mr-2 text-primary" />
                Business Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price per Post ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g. 500"
                    value={newInfluencer.pricePerPost}
                    onChange={(e) =>
                      setNewInfluencer({
                        ...newInfluencer,
                        pricePerPost: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Tags (comma separated)
                  </label>
                  <Input
                    placeholder="e.g. fashion, lifestyle, sustainable"
                    value={newInfluencer.tags.join(", ")}
                    onChange={(e) =>
                      setNewInfluencer({
                        ...newInfluencer,
                        tags: e.target.value
                          .split(",")
                          .map((tag) => tag.trim())
                          .filter((tag) => tag),
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Notes</label>
                <Textarea
                  placeholder="Internal notes about this influencer..."
                  value={newInfluencer.notes}
                  onChange={(e) =>
                    setNewInfluencer({
                      ...newInfluencer,
                      notes: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => setIsAddInfluencerOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              className="gradient-brand border-0 flex-1"
              onClick={addNewInfluencer}
              disabled={!newInfluencer.name || !newInfluencer.handle}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Influencer
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Log In Modal */}
      <Dialog open={isLogInOpen} onOpenChange={setIsLogInOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span>Log In to InfluenceHub</span>
            </DialogTitle>
            <DialogDescription>
              Access your personalized dashboard and CRM features.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-6">
            {/* Account Type Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Account Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() =>
                    setLoginForm({ ...loginForm, userType: "influencer" })
                  }
                  className={`p-3 border-2 rounded-lg text-left transition-all ${
                    loginForm.userType === "influencer"
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-primary/30"
                  }`}
                >
                  <div className="font-medium">Influencer</div>
                  <div className="text-xs text-muted-foreground">
                    Content creator
                  </div>
                </button>
                <button
                  onClick={() =>
                    setLoginForm({ ...loginForm, userType: "brand" })
                  }
                  className={`p-3 border-2 rounded-lg text-left transition-all ${
                    loginForm.userType === "brand"
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-primary/30"
                  }`}
                >
                  <div className="font-medium">Brand</div>
                  <div className="text-xs text-muted-foreground">
                    Marketing team
                  </div>
                </button>
              </div>
            </div>

            {/* Login Form */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder={
                    loginForm.userType === "influencer"
                      ? "sarah@influencer.com"
                      : "john@brand.com"
                  }
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="demo123"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={loginForm.rememberMe}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, rememberMe: e.target.checked })
                  }
                  className="rounded"
                />
                <label htmlFor="remember" className="text-sm">
                  Remember me
                </label>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium mb-3 text-sm">Demo Credentials</h4>
              <div className="space-y-2 text-xs">
                <div>
                  <strong>Influencer Account:</strong>
                  <br />
                  Email: sarah@influencer.com
                  <br />
                  Password: demo123
                </div>
                <div>
                  <strong>Brand Account:</strong>
                  <br />
                  Email: john@brand.com
                  <br />
                  Password: demo123
                </div>
              </div>
            </div>

            {/* Features Preview */}
            <div className="space-y-3">
              <h4 className="font-medium text-sm">What you'll get:</h4>
              <div className="space-y-2 text-sm">
                {loginForm.userType === "influencer" ? (
                  <>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Personal dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Campaign opportunities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Collaboration tracking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Earnings analytics</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Full Influencer CRM access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Campaign management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Influencer database</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Performance analytics</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t">
            <Button
              className="gradient-brand border-0 w-full"
              onClick={handleLogin}
              disabled={!loginForm.email || !loginForm.password}
            >
              <Users className="w-4 h-4 mr-2" />
              Log In as {loginForm.userType}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsLogInOpen(false)}
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Quality Assurance System Modal */}
      <Dialog
        open={isQualityAssuranceOpen}
        onOpenChange={setIsQualityAssuranceOpen}
      >
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden">
          <DialogHeader className="border-b pb-4">
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span>Quality Assurance & Security Center</span>
            </DialogTitle>
            <DialogDescription>
              Comprehensive fraud detection, content verification, and brand
              safety monitoring tools
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col lg:flex-row gap-6 mt-6 h-[70vh]">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="space-y-2">
                <button
                  onClick={() => setQaActiveTab("fraud-detection")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    qaActiveTab === "fraud-detection"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Fraud Detection</div>
                      <div className="text-xs text-muted-foreground">
                        AI-powered analysis
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setQaActiveTab("follower-verification")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    qaActiveTab === "follower-verification"
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Follower Verification</div>
                      <div className="text-xs text-muted-foreground">
                        Authenticity check
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setQaActiveTab("content-analysis")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    qaActiveTab === "content-analysis"
                      ? "bg-purple-50 text-purple-700 border border-purple-200"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Content Analysis</div>
                      <div className="text-xs text-muted-foreground">
                        Quality metrics
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setQaActiveTab("brand-safety")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    qaActiveTab === "brand-safety"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Brand Safety</div>
                      <div className="text-xs text-muted-foreground">
                        Reputation protection
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto">
              {qaActiveTab === "fraud-detection" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-red-200 bg-red-50/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-red-700">
                          Suspicious Accounts
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-red-600">
                          23
                        </div>
                        <div className="text-xs text-red-600">
                          ↑ 15% from last week
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-yellow-200 bg-yellow-50/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-yellow-700">
                          Under Review
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-yellow-600">
                          157
                        </div>
                        <div className="text-xs text-yellow-600">
                          Pending verification
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200 bg-green-50/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-green-700">
                          Verified Safe
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                          1,847
                        </div>
                        <div className="text-xs text-green-600">
                          98.2% pass rate
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Recent Fraud Detection Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          {
                            name: "TechGuru_2024",
                            risk: "HIGH",
                            reason: "Sudden follower spike +500K in 24h",
                            action: "BLOCKED",
                          },
                          {
                            name: "FashionLover",
                            risk: "MEDIUM",
                            reason: "Engagement rate inconsistency",
                            action: "REVIEWING",
                          },
                          {
                            name: "LifestyleBlogger",
                            risk: "LOW",
                            reason: "Minor bot activity detected",
                            action: "MONITORING",
                          },
                          {
                            name: "FoodieExplorer",
                            risk: "VERIFIED",
                            reason: "All checks passed",
                            action: "APPROVED",
                          },
                        ].map((alert, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-3 border rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-3 h-3 rounded-full ${
                                  alert.risk === "HIGH"
                                    ? "bg-red-500"
                                    : alert.risk === "MEDIUM"
                                      ? "bg-yellow-500"
                                      : alert.risk === "LOW"
                                        ? "bg-orange-500"
                                        : "bg-green-500"
                                }`}
                              ></div>
                              <div>
                                <div className="font-medium">@{alert.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {alert.reason}
                                </div>
                              </div>
                            </div>
                            <Badge
                              variant={
                                alert.risk === "VERIFIED"
                                  ? "default"
                                  : "destructive"
                              }
                            >
                              {alert.action}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {qaActiveTab === "follower-verification" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Follower Authenticity Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Real Followers</span>
                            <span className="font-semibold text-green-600">
                              87.3%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: "87.3%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Suspicious Activity</span>
                            <span className="font-semibold text-yellow-600">
                              8.1%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-500 h-2 rounded-full"
                              style={{ width: "8.1%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Confirmed Bots</span>
                            <span className="font-semibold text-red-600">
                              4.6%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-red-500 h-2 rounded-full"
                              style={{ width: "4.6%" }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Verification Tools</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button className="w-full" variant="outline">
                          <Shield className="w-4 h-4 mr-2" />
                          Run Deep Follower Scan
                        </Button>
                        <Button className="w-full" variant="outline">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Analyze Engagement Patterns
                        </Button>
                        <Button className="w-full" variant="outline">
                          <Users className="w-4 h-4 mr-2" />
                          Check Geographic Distribution
                        </Button>
                        <Button className="w-full" variant="outline">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Monitor Growth Velocity
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Verification Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          {
                            influencer: "Sarah Fashion",
                            score: 94,
                            status: "Excellent",
                            followers: "125K",
                            realRate: "91.2%",
                          },
                          {
                            influencer: "Tech Mike",
                            score: 87,
                            status: "Good",
                            followers: "89K",
                            realRate: "85.7%",
                          },
                          {
                            influencer: "Travel Emma",
                            score: 76,
                            status: "Fair",
                            followers: "156K",
                            realRate: "78.3%",
                          },
                          {
                            influencer: "Fitness John",
                            score: 98,
                            status: "Excellent",
                            followers: "234K",
                            realRate: "96.8%",
                          },
                        ].map((result, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-3 border rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <Avatar className="w-10 h-10">
                                <AvatarFallback>
                                  {result.influencer
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">
                                  {result.influencer}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {result.followers} followers
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg">
                                {result.score}/100
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {result.realRate} real
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {qaActiveTab === "content-analysis" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">
                          Content Quality Score
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-blue-600">
                          8.7/10
                        </div>
                        <div className="text-xs text-blue-600">
                          Above industry average
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">
                          Brand Safety Score
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-green-600">
                          9.4/10
                        </div>
                        <div className="text-xs text-green-600">
                          Excellent safety rating
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">
                          Engagement Quality
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-purple-600">
                          7.9/10
                        </div>
                        <div className="text-xs text-purple-600">
                          High-quality interactions
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Content Categories Analysis</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          {
                            category: "Fashion & Style",
                            percentage: 45,
                            posts: 127,
                          },
                          { category: "Lifestyle", percentage: 28, posts: 82 },
                          { category: "Travel", percentage: 18, posts: 51 },
                          {
                            category: "Food & Dining",
                            percentage: 9,
                            posts: 23,
                          },
                        ].map((cat, i) => (
                          <div key={i}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">
                                {cat.category}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {cat.posts} posts
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full"
                                style={{ width: `${cat.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Language & Sentiment Analysis</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                              92%
                            </div>
                            <div className="text-sm text-green-700">
                              Positive Sentiment
                            </div>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">
                              5%
                            </div>
                            <div className="text-sm text-blue-700">Neutral</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium">
                            Language Detection:
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            <Badge>English (89%)</Badge>
                            <Badge variant="outline">Spanish (8%)</Badge>
                            <Badge variant="outline">French (3%)</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {qaActiveTab === "brand-safety" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card className="border-green-200 bg-green-50/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">
                          Safe
                        </div>
                        <div className="text-sm text-green-700">
                          Brand Alignment
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-blue-200 bg-blue-50/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          97%
                        </div>
                        <div className="text-sm text-blue-700">
                          Safety Score
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-200 bg-purple-50/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          0
                        </div>
                        <div className="text-sm text-purple-700">
                          Risk Flags
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-indigo-200 bg-indigo-50/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-indigo-600">
                          A+
                        </div>
                        <div className="text-sm text-indigo-700">
                          Overall Rating
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Brand Safety Checklist</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {[
                          { check: "No controversial content", status: "pass" },
                          { check: "Family-friendly language", status: "pass" },
                          { check: "No political statements", status: "pass" },
                          { check: "Appropriate imagery", status: "pass" },
                          {
                            check: "No spam or misleading info",
                            status: "pass",
                          },
                          {
                            check: "Compliant with platform rules",
                            status: "warning",
                          },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded-full ${
                                item.status === "pass"
                                  ? "bg-green-500"
                                  : "bg-yellow-500"
                              }`}
                            ></div>
                            <span className="flex-1">{item.check}</span>
                            {item.status === "pass" ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                            )}
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Risk Assessment Tools</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Button
                          className="w-full justify-start"
                          variant="outline"
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Run Full Brand Safety Scan
                        </Button>
                        <Button
                          className="w-full justify-start"
                          variant="outline"
                        >
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Analyze Content History
                        </Button>
                        <Button
                          className="w-full justify-start"
                          variant="outline"
                        >
                          <Target className="w-4 h-4 mr-2" />
                          Check Brand Alignment
                        </Button>
                        <Button
                          className="w-full justify-start"
                          variant="outline"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Monitor Social Mentions
                        </Button>
                        <div className="pt-4 border-t">
                          <div className="text-sm font-medium mb-2">
                            Quick Actions:
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Whitelist
                            </Button>
                            <Button size="sm" variant="outline">
                              Blacklist
                            </Button>
                            <Button size="sm" variant="outline">
                              Monitor
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => setIsQualityAssuranceOpen(false)}
            >
              Close
            </Button>
            <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
              <Shield className="w-4 h-4 mr-2" />
              Generate Security Report
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Get Started Onboarding Modal */}
      <Dialog open={isGetStartedOpen} onOpenChange={setIsGetStartedOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span>Get Started with InfluenceHub</span>
            </DialogTitle>
            <DialogDescription>
              {onboardingStep === 1 &&
                "Choose your account type to get personalized features"}
              {onboardingStep === 2 &&
                "Tell us more about yourself to complete your profile"}
              {onboardingStep === 3 &&
                "You're all set! Here's what you can do next"}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            {/* Step 1: Account Type Selection */}
            {onboardingStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    Which best describes you?
                  </h3>
                  <p className="text-muted-foreground">
                    This helps us customize your experience
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card
                    className={`cursor-pointer transition-all border-2 hover:border-primary/50 ${
                      accountType === "brand"
                        ? "border-primary bg-primary/5"
                        : "border-muted"
                    }`}
                    onClick={() => setAccountType("brand")}
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">I'm a Brand</CardTitle>
                      <CardDescription>
                        Looking to collaborate with influencers and run
                        marketing campaigns
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Access influencer CRM database</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Campaign management tools</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Performance analytics</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>AI-powered matching</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all border-2 hover:border-primary/50 ${
                      accountType === "influencer"
                        ? "border-primary bg-primary/5"
                        : "border-muted"
                    }`}
                    onClick={() => setAccountType("influencer")}
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        I'm an Influencer
                      </CardTitle>
                      <CardDescription>
                        Want to monetize my content and connect with brands
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Brand collaboration opportunities</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Performance dashboard</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Earnings tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Profile optimization tools</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => accountType && setOnboardingStep(2)}
                    disabled={!accountType}
                    className="bg-gradient-to-r from-primary to-purple-600"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Account Setup */}
            {onboardingStep === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    {accountType === "brand"
                      ? "Tell us about your brand"
                      : "Build your influencer profile"}
                  </h3>
                  <p className="text-muted-foreground">
                    {accountType === "brand"
                      ? "This information helps us match you with the right influencers"
                      : "Help brands discover and connect with you"}
                  </p>
                </div>

                <div className="space-y-4">
                  {accountType === "brand" ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Company Name
                          </label>
                          <Input placeholder="Enter your company name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Industry
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fashion">
                                Fashion & Apparel
                              </SelectItem>
                              <SelectItem value="beauty">
                                Beauty & Cosmetics
                              </SelectItem>
                              <SelectItem value="tech">Technology</SelectItem>
                              <SelectItem value="food">
                                Food & Beverage
                              </SelectItem>
                              <SelectItem value="travel">
                                Travel & Tourism
                              </SelectItem>
                              <SelectItem value="fitness">
                                Health & Fitness
                              </SelectItem>
                              <SelectItem value="lifestyle">
                                Lifestyle
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Campaign Budget Range
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">
                              $1,000 - $5,000 per campaign
                            </SelectItem>
                            <SelectItem value="medium">
                              $5,000 - $25,000 per campaign
                            </SelectItem>
                            <SelectItem value="large">
                              $25,000 - $100,000 per campaign
                            </SelectItem>
                            <SelectItem value="enterprise">
                              $100,000+ per campaign
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          What are your main goals?
                        </label>
                        <Textarea placeholder="e.g., Increase brand awareness, drive sales, launch new product..." />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Full Name
                          </label>
                          <Input placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Primary Platform
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="instagram">
                                Instagram
                              </SelectItem>
                              <SelectItem value="youtube">YouTube</SelectItem>
                              <SelectItem value="tiktok">TikTok</SelectItem>
                              <SelectItem value="twitter">Twitter/X</SelectItem>
                              <SelectItem value="linkedin">LinkedIn</SelectItem>
                              <SelectItem value="twitch">Twitch</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Follower Count
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="micro">
                                1K - 10K followers
                              </SelectItem>
                              <SelectItem value="mid">
                                10K - 100K followers
                              </SelectItem>
                              <SelectItem value="macro">
                                100K - 1M followers
                              </SelectItem>
                              <SelectItem value="mega">
                                1M+ followers
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Content Category
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fashion">
                                Fashion & Style
                              </SelectItem>
                              <SelectItem value="beauty">
                                Beauty & Makeup
                              </SelectItem>
                              <SelectItem value="fitness">
                                Health & Fitness
                              </SelectItem>
                              <SelectItem value="food">
                                Food & Cooking
                              </SelectItem>
                              <SelectItem value="travel">
                                Travel & Adventure
                              </SelectItem>
                              <SelectItem value="tech">Technology</SelectItem>
                              <SelectItem value="lifestyle">
                                Lifestyle
                              </SelectItem>
                              <SelectItem value="gaming">Gaming</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Bio/Description
                        </label>
                        <Textarea placeholder="Tell brands about yourself and your content style..." />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setOnboardingStep(1)}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setOnboardingStep(3)}
                    className="bg-gradient-to-r from-primary to-purple-600"
                  >
                    Complete Setup
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Welcome & Next Steps */}
            {onboardingStep === 3 && (
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Welcome to InfluenceHub! 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    Your {accountType} account has been created successfully.
                    Here's what you can do next:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {accountType === "brand" ? (
                    <>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Users className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">
                              Explore Influencers
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Browse our database of verified influencers
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                            <Target className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">Create Campaign</div>
                            <div className="text-sm text-muted-foreground">
                              Launch your first influencer marketing campaign
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                            <Brain className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium">AI Matching</div>
                            <div className="text-sm text-muted-foreground">
                              Get AI-powered influencer recommendations
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <div className="font-medium">Track Performance</div>
                            <div className="text-sm text-muted-foreground">
                              Monitor campaign metrics and ROI
                            </div>
                          </div>
                        </div>
                      </Card>
                    </>
                  ) : (
                    <>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center">
                            <Star className="w-4 h-4 text-pink-600" />
                          </div>
                          <div>
                            <div className="font-medium">Complete Profile</div>
                            <div className="text-sm text-muted-foreground">
                              Add portfolio, rates, and social links
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Heart className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">
                              Browse Opportunities
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Find brands looking for collaborations
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                            <DollarSign className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">Set Your Rates</div>
                            <div className="text-sm text-muted-foreground">
                              Configure pricing for different content types
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium">Track Earnings</div>
                            <div className="text-sm text-muted-foreground">
                              Monitor your collaboration performance
                            </div>
                          </div>
                        </div>
                      </Card>
                    </>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to={
                      accountType === "brand"
                        ? "/dashboard"
                        : "/influencer-login"
                    }
                    onClick={() => {
                      setIsGetStartedOpen(false);
                      setOnboardingStep(1);
                      setAccountType("");
                    }}
                  >
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600">
                      <Rocket className="w-4 h-4 mr-2" />
                      Go to Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => setIsPricingOpen(true)}
                    className="w-full sm:w-auto"
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    View Pricing Plans
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Influencer Search & Discovery Modal */}
      <Dialog
        open={isInfluencerSearchOpen}
        onOpenChange={setIsInfluencerSearchOpen}
      >
        <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span>Influencer Search & Discovery</span>
            </DialogTitle>
            <DialogDescription>
              Search through 10M+ influencers with advanced filters and
              AI-powered matching
            </DialogDescription>
          </DialogHeader>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Search Filters Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Search Keywords
                </label>
                <Input placeholder="e.g. fashion, lifestyle, tech" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Platform
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Platforms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Location
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Followers
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="micro">1K - 10K</SelectItem>
                    <SelectItem value="mid">10K - 100K</SelectItem>
                    <SelectItem value="macro">100K - 1M</SelectItem>
                    <SelectItem value="mega">1M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Engagement Rate
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">5%+ (High)</SelectItem>
                    <SelectItem value="medium">2-5% (Medium)</SelectItem>
                    <SelectItem value="low">Under 2% (Low)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Apply Filters
              </Button>
            </div>

            {/* Search Results */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Found 2,847 influencers
                </div>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="followers">Followers</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="relevance">Relevance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    name: "Emma Johnson",
                    handle: "@emmastyle",
                    platform: "Instagram",
                    followers: "245K",
                    engagement: "4.8%",
                    niche: "Fashion & Lifestyle",
                    location: "Los Angeles, CA",
                    verified: true,
                  },
                  {
                    name: "Tech Mike",
                    handle: "@techmikereviews",
                    platform: "YouTube",
                    followers: "156K",
                    engagement: "6.2%",
                    niche: "Technology",
                    location: "San Francisco, CA",
                    verified: true,
                  },
                  {
                    name: "Foodie Sarah",
                    handle: "@sarahcooks",
                    platform: "TikTok",
                    followers: "89K",
                    engagement: "7.1%",
                    niche: "Food & Cooking",
                    location: "New York, NY",
                    verified: false,
                  },
                  {
                    name: "Fitness John",
                    handle: "@johnfit",
                    platform: "Instagram",
                    followers: "312K",
                    engagement: "5.4%",
                    niche: "Health & Fitness",
                    location: "Miami, FL",
                    verified: true,
                  },
                ].map((influencer, i) => (
                  <Card
                    key={i}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback>
                          {influencer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{influencer.name}</h3>
                          {influencer.verified && (
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {influencer.handle} �� {influencer.platform}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span>
                            <strong>{influencer.followers}</strong> followers
                          </span>
                          <span>
                            <strong>{influencer.engagement}</strong> engagement
                          </span>
                          <span>{influencer.location}</span>
                        </div>
                        <div className="mt-2">
                          <Badge variant="outline">{influencer.niche}</Badge>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Contact
                        </Button>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Creator Authenticity Analysis Modal */}
      <Dialog
        open={isAuthenticityAnalysisOpen}
        onOpenChange={setIsAuthenticityAnalysisOpen}
      >
        <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span>Creator Authenticity Analysis</span>
            </DialogTitle>
            <DialogDescription>
              Comprehensive analysis of influencer authenticity and audience
              quality
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Input Section */}
            <div className="border rounded-lg p-4">
              <label className="text-sm font-medium mb-2 block">
                Analyze Influencer Profile
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter Instagram handle, YouTube channel, or TikTok username"
                  className="flex-1"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Analyze
                </Button>
              </div>
            </div>

            {/* Sample Analysis Results */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-4">Follower Authenticity</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Real Followers</span>
                    <span className="font-bold text-green-600">91.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "91.4%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Suspicious Activity</span>
                    <span className="font-bold text-yellow-600">5.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: "5.2%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Bot Accounts</span>
                    <span className="font-bold text-red-600">3.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: "3.4%" }}
                    ></div>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-4">Engagement Quality</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      8.7/10
                    </div>
                    <div className="text-sm text-gray-600">
                      Overall Quality Score
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Comment Quality</span>
                      <span>Excellent</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Engagement Timing</span>
                      <span>Natural</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Geographic Distribution</span>
                      <span>Consistent</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Demographics & Insights */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  67%
                </div>
                <div className="text-sm text-gray-600">Female Audience</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  25-34
                </div>
                <div className="text-sm text-gray-600">Primary Age Group</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  $850
                </div>
                <div className="text-sm text-gray-600">Est. Cost Per Post</div>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Generate Full Report
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bulk Outreach Tools Modal */}
      <Dialog open={isBulkOutreachOpen} onOpenChange={setIsBulkOutreachOpen}>
        <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span>Bulk Outreach Campaign</span>
            </DialogTitle>
            <DialogDescription>
              Create and manage bulk outreach campaigns to thousands of
              influencers
            </DialogDescription>
          </DialogHeader>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Campaign Setup */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Campaign Name
                </label>
                <Input placeholder="Summer Collection Launch" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email Subject
                </label>
                <Input placeholder="Collaboration Opportunity with [Brand Name]" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email Template
                </label>
                <Textarea
                  placeholder="Hi [Influencer Name],

We love your content and would like to collaborate with you for our upcoming summer collection launch.

We offer:
- Free products worth up to $500
- Commission on sales (15%)
- Long-term partnership opportunities

Let us know if you're interested!

Best regards,
[Your Name]"
                  rows={10}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Budget Per Influencer
                  </label>
                  <Input placeholder="$500 - $2000" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Campaign Duration
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1week">1 Week</SelectItem>
                      <SelectItem value="2weeks">2 Weeks</SelectItem>
                      <SelectItem value="1month">1 Month</SelectItem>
                      <SelectItem value="3months">3 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Target Influencers */}
            <div>
              <h3 className="font-semibold mb-4">Selected Influencers (247)</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {[
                  {
                    name: "Emma Style",
                    handle: "@emmastyle",
                    followers: "245K",
                  },
                  {
                    name: "Fashion Guru",
                    handle: "@fashionguru",
                    followers: "189K",
                  },
                  {
                    name: "Style Maven",
                    handle: "@stylemaven",
                    followers: "156K",
                  },
                  {
                    name: "Trend Setter",
                    handle: "@trendsetter",
                    followers: "203K",
                  },
                ].map((influencer, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 border rounded"
                  >
                    <div>
                      <div className="font-medium text-sm">
                        {influencer.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {influencer.handle} • {influencer.followers}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Remove
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                <Button className="w-full" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add More Influencers
                </Button>
                <Button className="w-full" variant="outline">
                  Import from CSV
                </Button>
              </div>
            </div>
          </div>

          {/* Campaign Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <Card className="p-3 text-center">
              <div className="text-lg font-bold text-orange-600">247</div>
              <div className="text-xs text-gray-600">Target Influencers</div>
            </Card>
            <Card className="p-3 text-center">
              <div className="text-lg font-bold text-blue-600">5.2M</div>
              <div className="text-xs text-gray-600">Total Reach</div>
            </Card>
            <Card className="p-3 text-center">
              <div className="text-lg font-bold text-green-600">$125K</div>
              <div className="text-xs text-gray-600">Est. Budget</div>
            </Card>
            <Card className="p-3 text-center">
              <div className="text-lg font-bold text-purple-600">35%</div>
              <div className="text-xs text-gray-600">Expected Response</div>
            </Card>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline">Save as Draft</Button>
            <Button className="bg-orange-600 hover:bg-orange-700">
              Launch Campaign
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Creator Marketplace Modal */}
      <Dialog open={isMarketplaceOpen} onOpenChange={setIsMarketplaceOpen}>
        <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span>Creator Marketplace</span>
            </DialogTitle>
            <DialogDescription>
              Create campaign listings and receive applications from interested
              creators
            </DialogDescription>
          </DialogHeader>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Create New Listing */}
            <div className="space-y-4">
              <h3 className="font-semibold">Create New Campaign Listing</h3>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Campaign Title
                </label>
                <Input placeholder="Summer Fashion Collection" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Campaign Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">
                      Product Collaboration
                    </SelectItem>
                    <SelectItem value="paid">Paid Partnership</SelectItem>
                    <SelectItem value="affiliate">Affiliate Program</SelectItem>
                    <SelectItem value="brand">Brand Ambassador</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Budget Range
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">
                        $5,000 - $10,000
                      </SelectItem>
                      <SelectItem value="10000+">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Applications Needed
                  </label>
                  <Input placeholder="50" type="number" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Requirements
                </label>
                <Textarea
                  placeholder="- Minimum 10K followers on Instagram
- Fashion/lifestyle niche
- High engagement rate (3%+)
- Professional content quality"
                  rows={4}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Campaign Description
                </label>
                <Textarea
                  placeholder="We're launching our summer collection and looking for fashion influencers to showcase our products..."
                  rows={3}
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Publish Listing
              </Button>
            </div>

            {/* Active Listings */}
            <div>
              <h3 className="font-semibold mb-4">Your Active Listings</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Summer Collection Launch",
                    type: "Product Collaboration",
                    applications: 47,
                    budget: "$500-1000",
                    status: "Active",
                  },
                  {
                    title: "Brand Ambassador Program",
                    type: "Long-term Partnership",
                    applications: 23,
                    budget: "$2000-5000",
                    status: "Review",
                  },
                  {
                    title: "Holiday Campaign",
                    type: "Paid Partnership",
                    applications: 156,
                    budget: "$1000-3000",
                    status: "Closed",
                  },
                ].map((listing, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{listing.title}</h4>
                      <Badge
                        variant={
                          listing.status === "Active"
                            ? "default"
                            : listing.status === "Review"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {listing.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Type: {listing.type}</div>
                      <div>Budget: {listing.budget}</div>
                      <div className="flex justify-between items-center mt-2">
                        <span>{listing.applications} applications</span>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-2">Recent Applications</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>@fashionista_emma applied to Summer Collection</span>
                    <span className="text-blue-600">2h ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>@styleguru_mike applied to Brand Ambassador</span>
                    <span className="text-blue-600">4h ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>@lifestyle_sarah applied to Summer Collection</span>
                    <span className="text-blue-600">6h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Campaign Management Modal */}
      <Dialog
        open={isCampaignManagementOpen}
        onOpenChange={setIsCampaignManagementOpen}
      >
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span>Campaign Management Dashboard</span>
            </DialogTitle>
            <DialogDescription>
              Organize and manage all your influencer collaborations in one
              place
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Pipeline Overview */}
            <div className="grid grid-cols-5 gap-4">
              <Card className="p-4 text-center bg-blue-50">
                <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                <div className="text-sm text-blue-700">Negotiation</div>
              </Card>
              <Card className="p-4 text-center bg-yellow-50">
                <div className="text-2xl font-bold text-yellow-600 mb-1">8</div>
                <div className="text-sm text-yellow-700">Content Creation</div>
              </Card>
              <Card className="p-4 text-center bg-purple-50">
                <div className="text-2xl font-bold text-purple-600 mb-1">5</div>
                <div className="text-sm text-purple-700">Review</div>
              </Card>
              <Card className="p-4 text-center bg-green-50">
                <div className="text-2xl font-bold text-green-600 mb-1">23</div>
                <div className="text-sm text-green-700">Published</div>
              </Card>
              <Card className="p-4 text-center bg-gray-50">
                <div className="text-2xl font-bold text-gray-600 mb-1">15</div>
                <div className="text-sm text-gray-700">Completed</div>
              </Card>
            </div>

            {/* Active Campaigns */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Active Campaigns</h3>
                <div className="space-y-3">
                  {[
                    {
                      name: "Summer Collection",
                      influencers: 12,
                      status: "In Progress",
                      budget: "$25,000",
                      progress: 65,
                    },
                    {
                      name: "Product Launch",
                      influencers: 8,
                      status: "Content Review",
                      budget: "$15,000",
                      progress: 40,
                    },
                    {
                      name: "Brand Awareness",
                      influencers: 25,
                      status: "Active",
                      budget: "$50,000",
                      progress: 80,
                    },
                  ].map((campaign, i) => (
                    <Card key={i} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{campaign.name}</h4>
                          <div className="text-sm text-gray-600">
                            {campaign.influencers} influencers •{" "}
                            {campaign.budget}
                          </div>
                        </div>
                        <Badge>{campaign.status}</Badge>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{campaign.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${campaign.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    {
                      action: "Content approved",
                      influencer: "@emma_style",
                      campaign: "Summer Collection",
                      time: "2h ago",
                    },
                    {
                      action: "Payment processed",
                      influencer: "@tech_mike",
                      campaign: "Product Launch",
                      time: "4h ago",
                    },
                    {
                      action: "Content submitted",
                      influencer: "@foodie_sarah",
                      campaign: "Brand Awareness",
                      time: "6h ago",
                    },
                    {
                      action: "Contract signed",
                      influencer: "@fitness_john",
                      campaign: "Summer Collection",
                      time: "1d ago",
                    },
                  ].map((activity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 border rounded-lg"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          {activity.action}
                        </div>
                        <div className="text-xs text-gray-600">
                          {activity.influencer} • {activity.campaign}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button size="sm" variant="outline">
                      Send Message
                    </Button>
                    <Button size="sm" variant="outline">
                      Approve Content
                    </Button>
                    <Button size="sm" variant="outline">
                      Process Payment
                    </Button>
                    <Button size="sm" variant="outline">
                      Generate Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Real-time Monitoring & Analytics Modal */}
      <Dialog open={isMonitoringOpen} onOpenChange={setIsMonitoringOpen}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span>Real-time Analytics Dashboard</span>
            </DialogTitle>
            <DialogDescription>
              Monitor campaign performance across all platforms with real-time
              insights
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  2.4M
                </div>
                <div className="text-sm text-gray-600">Total Reach</div>
                <div className="text-xs text-green-600 mt-1">
                  +15% vs last week
                </div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  8.7%
                </div>
                <div className="text-sm text-gray-600">Avg Engagement</div>
                <div className="text-xs text-green-600 mt-1">
                  +2.3% vs last week
                </div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  156
                </div>
                <div className="text-sm text-gray-600">Conversions</div>
                <div className="text-xs text-green-600 mt-1">
                  +8% vs last week
                </div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  4.2x
                </div>
                <div className="text-sm text-gray-600">ROI</div>
                <div className="text-xs text-green-600 mt-1">
                  +0.5x vs last week
                </div>
              </Card>
            </div>

            {/* Performance by Platform */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-4">Performance by Platform</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-pink-500 rounded"></div>
                      <span>Instagram</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">1.8M reach</div>
                      <div className="text-sm text-gray-600">
                        9.2% engagement
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span>YouTube</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">450K reach</div>
                      <div className="text-sm text-gray-600">
                        12.1% engagement
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-black rounded"></div>
                      <span>TikTok</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">160K reach</div>
                      <div className="text-sm text-gray-600">
                        15.7% engagement
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-4">Top Performing Content</h3>
                <div className="space-y-3">
                  {[
                    {
                      type: "Instagram Post",
                      influencer: "@emma_style",
                      engagement: "14.2%",
                      reach: "89K",
                    },
                    {
                      type: "YouTube Video",
                      influencer: "@tech_mike",
                      engagement: "18.5%",
                      reach: "156K",
                    },
                    {
                      type: "TikTok Video",
                      influencer: "@foodie_sarah",
                      engagement: "22.1%",
                      reach: "67K",
                    },
                  ].map((content, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-2 border rounded"
                    >
                      <div>
                        <div className="font-medium text-sm">
                          {content.type}
                        </div>
                        <div className="text-xs text-gray-600">
                          {content.influencer}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {content.engagement}
                        </div>
                        <div className="text-xs text-gray-600">
                          {content.reach} reach
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Engagement Timeline */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">
                Engagement Timeline (Last 7 Days)
              </h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                  <div>Interactive engagement chart would appear here</div>
                  <div className="text-sm">Real-time data visualization</div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center gap-4">
              <Button variant="outline">Export Report</Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Generate Detailed Analytics
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Interactive How It Works Modal */}
      <Dialog open={isHowItWorksOpen} onOpenChange={setIsHowItWorksOpen}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span>How InfluenceHub Works - Interactive Guide</span>
            </DialogTitle>
            <DialogDescription>
              Follow our step-by-step process to launch successful influencer
              marketing campaigns
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                      activeWorkflowStep >= step
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                    onClick={() => setActiveWorkflowStep(step)}
                  >
                    {step}
                  </div>
                  {step < 5 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all ${
                        activeWorkflowStep > step
                          ? "bg-green-500"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="min-h-96">
              {/* Step 1: Account Setup */}
              {activeWorkflowStep === 1 && (
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      1. Create Your Account & Set Goals
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Choose between Brand or Influencer account type and set up
                      your profile. Define your campaign objectives, target
                      audience, and budget parameters.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Choose account type (Brand/Influencer)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Complete profile information</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Set campaign goals and budget</span>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button
                        onClick={() => setIsGetStartedOpen(true)}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Start Setup
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setActiveWorkflowStep(2)}
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                        <Rocket className="w-12 h-12 text-green-500" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Account Setup</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Quick 3-minute setup process
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-white rounded-lg p-3">
                          <div className="font-bold text-green-600">2 mins</div>
                          <div className="text-gray-600">Profile Setup</div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="font-bold text-blue-600">1 min</div>
                          <div className="text-gray-600">Goal Setting</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Influencer Discovery */}
              {activeWorkflowStep === 2 && (
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      2. Discover & Filter Influencers
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Search through our database of 10M+ influencers using
                      advanced filters. Find creators that match your brand
                      values, audience demographics, and campaign goals.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span>Search 10M+ influencer database</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span>
                          Apply advanced filters (niche, location, engagement)
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span>Analyze authenticity and audience quality</span>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button
                        onClick={() => setIsInfluencerSearchOpen(true)}
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        Search Influencers
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setActiveWorkflowStep(3)}
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                    <h4 className="font-bold text-lg mb-4 text-center">
                      Search Results
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 flex justify-between items-center">
                        <span className="text-sm">Fashion Influencers</span>
                        <span className="font-bold text-blue-600">2,847</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 flex justify-between items-center">
                        <span className="text-sm">Tech Reviewers</span>
                        <span className="font-bold text-purple-600">1,234</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 flex justify-between items-center">
                        <span className="text-sm">Lifestyle Creators</span>
                        <span className="font-bold text-green-600">3,156</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Outreach & Communication */}
              {activeWorkflowStep === 3 && (
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      3. Contact & Negotiate
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Reach out to selected influencers with personalized
                      messages. Use our bulk outreach tools or marketplace
                      listings to streamline communication.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                        <span>Send personalized outreach messages</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                        <span>Use bulk outreach for efficiency</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                        <span>Negotiate terms and pricing</span>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button
                        onClick={() => setIsBulkOutreachOpen(true)}
                        className="bg-orange-500 hover:bg-orange-600"
                      >
                        Start Outreach
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setActiveWorkflowStep(4)}
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                    <h4 className="font-bold text-lg mb-4 text-center">
                      Outreach Stats
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          247
                        </div>
                        <div className="text-sm text-gray-600">
                          Messages Sent
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">
                          34%
                        </div>
                        <div className="text-sm text-gray-600">
                          Response Rate
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          87
                        </div>
                        <div className="text-sm text-gray-600">Interested</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          23
                        </div>
                        <div className="text-sm text-gray-600">Confirmed</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Campaign Management */}
              {activeWorkflowStep === 4 && (
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      4. Manage Campaigns
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Organize collaborations, approve content, process
                      payments, and track deliverables. Use our campaign
                      management tools to streamline your workflow.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-500" />
                        <span>Track campaign progress with pipelines</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-500" />
                        <span>Approve content and provide feedback</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-500" />
                        <span>Process secure payments</span>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button
                        onClick={() => setIsCampaignManagementOpen(true)}
                        className="bg-purple-500 hover:bg-purple-600"
                      >
                        Manage Campaigns
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setActiveWorkflowStep(5)}
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                    <h4 className="font-bold text-lg mb-4 text-center">
                      Campaign Pipeline
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm flex-1">Negotiation</span>
                        <span className="font-bold text-blue-600">12</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm flex-1">Content Creation</span>
                        <span className="font-bold text-yellow-600">8</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm flex-1">Review</span>
                        <span className="font-bold text-purple-600">5</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm flex-1">Published</span>
                        <span className="font-bold text-green-600">23</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Analytics & Optimization */}
              {activeWorkflowStep === 5 && (
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      5. Track & Optimize Performance
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Monitor real-time performance metrics, track ROI, and
                      gather insights to optimize future campaigns. Generate
                      comprehensive reports for stakeholders.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500" />
                        <span>Real-time performance tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500" />
                        <span>ROI calculation and reporting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500" />
                        <span>Campaign optimization insights</span>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button
                        onClick={() => setIsMonitoringOpen(true)}
                        className="bg-indigo-500 hover:bg-indigo-600"
                      >
                        View Analytics
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setActiveWorkflowStep(1)}
                      >
                        Start Over
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
                    <h4 className="font-bold text-lg mb-4 text-center">
                      Campaign Results
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          2.4M
                        </div>
                        <div className="text-sm text-gray-600">Total Reach</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">
                          8.7%
                        </div>
                        <div className="text-sm text-gray-600">Engagement</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          156
                        </div>
                        <div className="text-sm text-gray-600">Conversions</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          4.2x
                        </div>
                        <div className="text-sm text-gray-600">ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Button
                variant="outline"
                onClick={() =>
                  setActiveWorkflowStep(Math.max(1, activeWorkflowStep - 1))
                }
                disabled={activeWorkflowStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="text-sm text-gray-600">
                Step {activeWorkflowStep} of 5
              </div>

              {activeWorkflowStep === 5 ? (
                <Button
                  onClick={() => {
                    setIsHowItWorksOpen(false);
                    setActiveWorkflowStep(1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-green-500 hover:bg-green-600"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              ) : (
                <Button
                  onClick={() =>
                    setActiveWorkflowStep(Math.min(5, activeWorkflowStep + 1))
                  }
                  className="bg-green-500 hover:bg-green-600"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Stories Modal */}
      <Dialog
        open={isSuccessStoriesOpen}
        onOpenChange={setIsSuccessStoriesOpen}
      >
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span>Success Stories & Testimonials</span>
            </DialogTitle>
            <DialogDescription>
              Real results from brands and influencers who transformed their
              marketing with InfluenceHub
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { id: "all", label: "All Stories", count: 127 },
                { id: "brands", label: "Brand Success", count: 67 },
                { id: "influencers", label: "Influencer Growth", count: 45 },
                { id: "agencies", label: "Agency Results", count: 15 },
              ].map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveStoryCategory(category.id)}
                  variant={
                    activeStoryCategory === category.id ? "default" : "outline"
                  }
                  className={
                    activeStoryCategory === category.id
                      ? "bg-green-500 hover:bg-green-600"
                      : ""
                  }
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>

            {/* Success Metrics Banner */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.2x</div>
                <div className="text-sm text-gray-600">
                  Average ROI Increase
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">500K+</div>
                <div className="text-sm text-gray-600">
                  Successful Campaigns
                </div>
              </div>
            </div>

            {/* Success Stories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Brand Success Stories */}
              {(activeStoryCategory === "all" ||
                activeStoryCategory === "brands") && (
                <>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          DK
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">David Kim</h4>
                        <p className="text-sm text-gray-600">
                          Marketing Director, TechFlow
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      "InfluenceHub helped us achieve 340% ROI on our product
                      launch campaign. The AI matching found perfect
                      micro-influencers in the tech space."
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">340%</div>
                        <div>ROI</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">2.4M</div>
                        <div>Reach</div>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div className="font-bold text-purple-600">12.3%</div>
                        <div>Engagement</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-pink-100 text-pink-600">
                          ES
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Emma Stone</h4>
                        <p className="text-sm text-gray-600">
                          CEO, BeautyBrand Co.
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      "We found 50+ beauty influencers in just one week. The
                      authenticity verification saved us from fake accounts and
                      delivered real results."
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-pink-50 rounded">
                        <div className="font-bold text-pink-600">50+</div>
                        <div>Influencers</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">7 days</div>
                        <div>Setup Time</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">95%</div>
                        <div>Authentic</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-green-100 text-green-600">
                          MR
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Mike Rodriguez</h4>
                        <p className="text-sm text-gray-600">
                          Founder, FitGear Pro
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      "The bulk outreach feature connected us with 200+ fitness
                      influencers. Campaign management tools kept everything
                      organized and on-brand."
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">200+</div>
                        <div>Contacted</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">45%</div>
                        <div>Response Rate</div>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div className="font-bold text-purple-600">$2.1M</div>
                        <div>Revenue</div>
                      </div>
                    </div>
                  </Card>
                </>
              )}

              {/* Influencer Success Stories */}
              {(activeStoryCategory === "all" ||
                activeStoryCategory === "influencers") && (
                <>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-purple-100 text-purple-600">
                          SM
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Sarah Martinez</h4>
                        <p className="text-sm text-gray-600">
                          Fashion Influencer, 250K followers
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      "InfluenceHub connected me with premium fashion brands.
                      I've tripled my monthly income and work with brands that
                      truly match my aesthetic."
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div className="font-bold text-purple-600">3x</div>
                        <div>Income</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">15</div>
                        <div>Brand Deals</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">98%</div>
                        <div>Brand Fit</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-orange-100 text-orange-600">
                          TM
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Tech Mike</h4>
                        <p className="text-sm text-gray-600">
                          Tech Reviewer, 180K subscribers
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      "The authenticity tools showed brands I'm legit. Now I get
                      offers from major tech companies and my rates have doubled
                      in 6 months."
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-orange-50 rounded">
                        <div className="font-bold text-orange-600">2x</div>
                        <div>Rates</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">96%</div>
                        <div>Authenticity</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">12</div>
                        <div>Tech Brands</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-teal-100 text-teal-600">
                          LJ
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Lisa Johnson</h4>
                        <p className="text-sm text-gray-600">
                          Lifestyle Creator, 95K followers
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      "As a micro-influencer, I struggled to find quality
                      partnerships. InfluenceHub's matching algorithm found
                      perfect brand fits for my niche."
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-teal-50 rounded">
                        <div className="font-bold text-teal-600">95K</div>
                        <div>Followers</div>
                      </div>
                      <div className="text-center p-2 bg-pink-50 rounded">
                        <div className="font-bold text-pink-600">8</div>
                        <div>Partnerships</div>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div className="font-bold text-purple-600">100%</div>
                        <div>Brand Match</div>
                      </div>
                    </div>
                  </Card>
                </>
              )}

              {/* Agency Success Stories */}
              {(activeStoryCategory === "all" ||
                activeStoryCategory === "agencies") && (
                <>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-indigo-100 text-indigo-600">
                          AC
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Alex Chen</h4>
                        <p className="text-sm text-gray-600">
                          CEO, Digital Storm Agency
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      "InfluenceHub scaled our agency operations 5x. We now
                      manage 200+ client campaigns simultaneously with their
                      campaign management tools."
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-indigo-50 rounded">
                        <div className="font-bold text-indigo-600">5x</div>
                        <div>Scale</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">200+</div>
                        <div>Campaigns</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">85%</div>
                        <div>Efficiency</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-rose-100 text-rose-600">
                          JW
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Jennifer Wong</h4>
                        <p className="text-sm text-gray-600">
                          Founder, Creative Connect
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      "The white-label solution helped us offer influencer
                      marketing to our clients. Revenue increased 150% while
                      reducing manual work by 80%."
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-rose-50 rounded">
                        <div className="font-bold text-rose-600">150%</div>
                        <div>Revenue</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">80%</div>
                        <div>Less Work</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">25</div>
                        <div>New Clients</div>
                      </div>
                    </div>
                  </Card>
                </>
              )}
            </div>

            {/* Video Testimonials Section */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-center mb-6">
                Video Testimonials
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-1">Brand Success Story</h4>
                  <p className="text-sm text-gray-600">
                    3:45 - FashionForward CEO
                  </p>
                </Card>
                <Card className="p-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-1">Influencer Journey</h4>
                  <p className="text-sm text-gray-600">
                    2:30 - Tech Reviewer Growth
                  </p>
                </Card>
                <Card className="p-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-1">Agency Transformation</h4>
                  <p className="text-sm text-gray-600">
                    4:20 - Digital Agency Scale
                  </p>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center p-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="mb-6 opacity-90">
                Join thousands of brands and influencers achieving incredible
                results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    setIsSuccessStoriesOpen(false);
                    setIsGetStartedOpen(true);
                  }}
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => {
                    setIsSuccessStoriesOpen(false);
                    setIsHowItWorksOpen(true);
                  }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
