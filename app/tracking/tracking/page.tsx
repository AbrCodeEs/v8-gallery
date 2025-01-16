"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const mockTrackingData = {
  id: "CHO-1234-5678",
  type: "Dark Chocolate",
  status: "In Production",
  origin: "Ghana",
  destination: "New York, USA",
  progress: 40,
  milestones: [
    { name: "Harvested", completed: true },
    { name: "In Production", completed: true },
    { name: "Quality Check", completed: false },
    { name: "Packaging", completed: false },
    { name: "Shipping", completed: false },
    { name: "Delivered", completed: false },
  ],
}

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState("")
  const [trackingResult, setTrackingResult] = useState<typeof mockTrackingData | null>(null)

  const handleTracking = () => {
    // Simulate API call
    setTimeout(() => {
      setTrackingResult(mockTrackingData)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-chocolate-900">Track Your Chocolate</h1>
      <div className="flex space-x-4">
        <Input
          placeholder="Enter tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
        />
        <Button onClick={handleTracking}>Track</Button>
      </div>
      {trackingResult && (
        <Card>
          <CardHeader>
            <CardTitle>Tracking Result</CardTitle>
            <CardDescription>Tracking ID: {trackingResult.id}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{trackingResult.type}</span>
                <Badge variant="outline" className="text-lg">
                  {trackingResult.status}
                </Badge>
              </div>
              <div className="space-y-2">
                <p><span className="font-semibold">Origin:</span> {trackingResult.origin}</p>
                <p><span className="font-semibold">Destination:</span> {trackingResult.destination}</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Progress</span>
                  <span>{trackingResult.progress}%</span>
                </div>
                <Progress value={trackingResult.progress} className="w-full" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Milestones</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {trackingResult.milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg text-center ${
                        milestone.completed
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {milestone.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

