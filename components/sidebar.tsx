import Link from "next/link"
import { Home, ClipboardList, Truck, MessageSquare, HelpCircle } from 'lucide-react'

const navItems = [
  { name: "Dashboard", href: "/tracking", icon: Home },
  { name: "Production", href: "/tracking/production", icon: ClipboardList },
  { name: "Tracking", href: "/tracking/tracking", icon: Truck },
  { name: "Customer Feedback", href: "/tracking/feedback", icon: MessageSquare },
  { name: "Help", href: "/tracking/help", icon: HelpCircle },
]

export function Sidebar() {
  return (
    <div className="w-64 bg-chocolate-800 text-balck p-6">
      <h1 className="text-2xl font-bold mb-8">Chocolate Tracker</h1>
      <nav>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center space-x-3 hover:text-chocolate-300 transition-colors">
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

