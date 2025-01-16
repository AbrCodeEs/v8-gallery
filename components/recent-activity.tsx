import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{activity.icon}</AvatarFallback>
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

