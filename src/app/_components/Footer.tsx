"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Newsletter</h3>
            <p className="mb-4 text-secondary-foreground/80">
              Stay updated with our latest courses and AI advancements
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-r-none"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/60">
            &copy; 2024 BullsEAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
