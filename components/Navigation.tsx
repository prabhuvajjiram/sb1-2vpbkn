// File: components/Header.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Moon, ShoppingBag, Sun } from 'lucide-react';

import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/process', label: 'Our Process' },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="transition-colors hover:text-foreground/80 text-foreground/60">
    {children}
  </Link>
);

const Navigation = () => (
  <nav className="flex items-center space-x-6 text-sm font-medium">
    {NAV_ITEMS.map(item => (
      <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
    ))}
  </nav>
);

const ThemeToggle = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>Light</DropdownMenuItem>
      <DropdownMenuItem>Dark</DropdownMenuItem>
      <DropdownMenuItem>System</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
      <div className="mr-4 hidden md:flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">Rajambal Cottons
        </Link>
        <Navigation />
      </div>
      <Button variant="outline" size="icon" className="mr-2 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu
      </Button>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <nav className="flex items-center">
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
