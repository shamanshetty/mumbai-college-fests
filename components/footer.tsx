import Link from "next/link"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold gradient-text">MumbaiCollegeFest</h3>
          <p className="text-sm text-muted-foreground">
            Celebrating and promoting the vibrant fest culture in Mumbai by showcasing college events.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="mailto:shaman280505@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/register" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Register Your Fest
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Subscribe</h3>
          <p className="text-sm text-muted-foreground">Stay updated with the latest fest announcements and news.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md border bg-background"
              required
            />
            <button
              type="submit"
              className="festival-button bg-gradient-to-r from-festival-purple to-festival-pink text-white px-4 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MumbaiCollegeFest. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

