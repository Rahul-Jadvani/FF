
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Hexagon,
  Wallet,
  Bell,
  Menu,
  User,
  Apple,
  Leaf,
  Droplet,
  TrendingUp,
  ShoppingCart,
  Award,
  Vote,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  meals: number;
  co2: number;
}

const data: DataPoint[] = [
  { name: "Jan", meals: 400, co2: 240 },
  { name: "Feb", meals: 300, co2: 180 },
  { name: "Mar", meals: 500, co2: 300 },
  { name: "Apr", meals: 280, co2: 168 },
  { name: "May", meals: 590, co2: 354 },
  { name: "Jun", meals: 430, co2: 258 },
];

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-black text-white">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 p-4 hidden md:block">
            <div className="flex items-center space-x-2 mb-8">
              <Hexagon className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                FeedForward
              </span>
            </div>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Marketplace
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Award className="mr-2 h-4 w-4" />
                Leaderboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Vote className="mr-2 h-4 w-4" />
                DAO Voting
              </Button>
            </nav>
          </aside>
    
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden flex-end">
            {/* Top Bar */}
            <header className="bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-end">
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="bg-gray-900 text-white">
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <span className="text-green-400 font-semibold">100</span>{" "}
                  FeedCoins
                </div>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src="/placeholder-avatar.jpg"
                          alt="@username"
                        />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">username</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          user@example.com
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
    
            {/* Dashboard Content */}
            <main className="flex-1 overflow-y-auto p-4">
              <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                Dashboard
              </h1>
    
              {/* Impact Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="bg-gray-800 text-emerald-600">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-md font-medium">
                      Meals Donated
                    </CardTitle>
                    <Apple className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,500</div>
                    <Progress value={75} className="mt-2 bg-gray-600" />
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 text-emerald-600">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-md font-medium">
                      Food Waste Reduced
                    </CardTitle>
                    <Leaf className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,250 kg</div>
                    <Progress value={60} className="mt-2 bg-gray-600" />
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 text-emerald-600">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-md font-medium">CO2 Saved</CardTitle>
                    <Droplet className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">500 kg</div>
                    <Progress value={45} className="mt-2 bg-gray-600" />
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 text-emerald-600">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-md font-medium">
                      FeedCoins Earned
                    </CardTitle>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">100</div>
                    <Progress value={30} className="mt-2 bg-gray-600" />
                  </CardContent>
                </Card>
              </div>
    
              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-6 text-lg">
                  Donate Food
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg">
                  Claim Food
                </Button>
              </div>
    
              {/* Charts and Live Feed */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-gray-800 text-emerald-600">
                  <CardHeader>
                    <CardTitle>Impact Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="name" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "none",
                          }}
                          labelStyle={{ color: "#D1D5DB" }}
                        />
                        <Line
                          type="monotone"
                          dataKey="meals"
                          stroke="#10B981"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="co2"
                          stroke="#6366F1"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 text-emerald-600">
                  <CardHeader>
                    <CardTitle>Live Feed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="activity" className="w-full">
                      <TabsList className="w-full">
                        <TabsTrigger value="activity" className="flex-1">
                          Activity
                        </TabsTrigger>
                        <TabsTrigger value="impact" className="flex-1">
                          Impact
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="activity">
                        <p className="text-sm text-gray-400">
                          Jane Doe just donated 50 meals to a local shelter.
                        </p>
                      </TabsContent>
                      <TabsContent value="impact">
                        <p className="text-sm text-gray-400">
                          Congratulations! You've helped save 100 kg of CO2.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </div>
      );
}
