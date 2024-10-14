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

const Header = React.memo(() => (
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
));

const Home: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Elegant woman in a purple and gold saree"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
              height={600}
              src="/placeholder.svg"
              width={600}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to Rajambal Cottons
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover the Elegance of Pure Cotton Sarees
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  Explore Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Home;
