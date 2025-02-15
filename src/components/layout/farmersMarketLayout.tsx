import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu } from "lucide-react";

const FarmersMarketApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col space-y-4 mt-6">
                  <a href="#" className="text-lg hover:text-green-600">Home</a>
                  <a href="#" className="text-lg hover:text-green-600">Vendors</a>
                  <a href="#" className="text-lg hover:text-green-600">Products</a>
                  <a href="#" className="text-lg hover:text-green-600">Events</a>
                  <a href="#" className="text-lg hover:text-green-600">About</a>
                </nav>
              </SheetContent>
            </Sheet>
            
            <h1 className="text-xl font-bold text-green-700">Rooted Market</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Vendors</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Products</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Events</a>
            <a href="#" className="text-gray-600 hover:text-green-600">About</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <Card className="mb-12 bg-green-50 border-none">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-800">Welcome to Rooted Market</h2>
            <p className="text-lg text-gray-600 mb-6">
              Supporting local farmers and artisans in our community
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              Explore Our Market
            </Button>
          </CardContent>
        </Card>

        {/* Featured Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Vendors */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Featured Vendors</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-green-100"></div>
                  <div>
                    <p className="font-medium">Green Acres Farm</p>
                    <p className="text-sm text-gray-500">Organic Vegetables</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-green-100"></div>
                  <div>
                    <p className="font-medium">Sweet Valley Dairy</p>
                    <p className="text-sm text-gray-500">Artisanal Cheese</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Schedule */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Market Schedule</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Saturday Market</p>
                  <p className="text-sm text-gray-500">8:00 AM - 2:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Sunday Market</p>
                  <p className="text-sm text-gray-500">9:00 AM - 1:00 PM</p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Full Schedule
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Upcoming Events</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Seasonal Cooking Workshop</p>
                  <p className="text-sm text-gray-500">Saturday, 10 AM</p>
                </div>
                <div>
                  <p className="font-medium">Kids' Gardening Day</p>
                  <p className="text-sm text-gray-500">Sunday, 11 AM</p>
                </div>
                <Button variant="outline" className="w-full mt-2">
                  See All Events
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-green-700">Contact Us</h4>
              <p className="text-gray-600">123 Market Street</p>
              <p className="text-gray-600">Local Town, ST 12345</p>
              <p className="text-gray-600">info@rootedmarket.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-700">Market Hours</h4>
              <p className="text-gray-600">Saturday: 8am - 2pm</p>
              <p className="text-gray-600">Sunday: 9am - 1pm</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-700">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-green-600">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-green-600">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-green-600">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmersMarketApp;