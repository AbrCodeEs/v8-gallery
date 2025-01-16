import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const recentActivities = [
  {
    name: "Production Completed",
    description: "Dark Chocolate Batch #1234",
    date: "2 hours ago",
    icon: "P",
  },
  {
    name: "Shipment Sent",
    description: "Order #5678 to New York",
    date: "5 hours ago",
    icon: "S",
  },
  {
    name: "New Review",
    description: "5 stars for Milk Chocolate Bar",
    date: "1 day ago",
    icon: "R",
  },
  {
    name: "New Order",
    description: "Order #9012 for Dark Chocolate",
    date: "2 days ago",
    icon: "O",
  },
  {
    name: "New Order",
    description: "Order #9317 for Dark Chocolate",
    date: "5 days ago",
    icon: "O",
  }
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity, index) => (
        <div key={index} className="relative flex items-center">
          <svg viewBox="0 0 9 9" className="hidden absolute right-full -mr-[1.39rem] -bottom-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"><circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" stroke-width="2"></circle></svg>
          <div className="hidden absolute top-3 -bottom-10 right-full -mr-5 w-1 bg-black dark:bg-slate-800 sm:block"></div>
          <Avatar className="h-9 w-9 text-white">
            <AvatarFallback className="bg-black">{activity.icon}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">
              {activity.description}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">
            {activity.date}
          </div>
        </div>
      ))}
    </div>
  )
}

