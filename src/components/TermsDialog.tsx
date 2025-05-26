
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-neutral-400 hover:text-white transition-colors duration-300">
          Terms & Project Info
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src="/logo.png" 
              alt="Arav Makeover Logo" 
              className="w-10 h-10 filter brightness-0 invert dark:brightness-100 dark:invert-0"
            />
            <DialogTitle className="text-2xl">Terms & Project Information</DialogTitle>
          </div>
          <DialogDescription className="text-left">
            Project information and development details
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Project Details</h3>
            <p>Project: ARAV MAKEOVER - Professional Makeup Artist Portfolio</p>
            <p>Created by: Full Stack Web Developer @ ARAV SAHU</p>
            <p>Status: Production Ready ✨</p>
            <p>Development Timeline: 6 weeks</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Development Phases</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Planning & Design: 1 week</li>
              <li>Frontend Development: 2-3 weeks</li>
              <li>Testing & Optimization: 1 week</li>
              <li>Content Integration: 1 week</li>
              <li>Performance Test: 2 weeks</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>React with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>Shadcn UI for components</li>
              <li>Vite for build tooling</li>
            </ul>
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-sm text-muted-foreground">
              © 2025 ARAV MAKEOVER. All rights reserved. This website and its contents are protected by copyright laws.
              Unauthorized reproduction or distribution of this material is strictly prohibited.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
