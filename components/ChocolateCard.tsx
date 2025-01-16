"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChocolateBar } from '../data/chocolateBars'
import { BananaIcon as Fruit, Flower, Coffee, SpadeIcon as Spices, TreesIcon as Tree, Star } from 'lucide-react'

const iconMap: { [key: string]: React.ReactNode } = {
  fruit: <Fruit className="w-4v8 h-4" />,
  flowers: <Flower className="w-4 h-4" />,
  cocoa: <Coffee className="w-4 h-4" />,
  spices: <Spices className="w-4 h-4" />,
  wood: <Tree className="w-4 h-4" />,
  citrus: <Fruit className="w-4 h-4" />,
}

export function ChocolateCard({ chocolate }: { chocolate: ChocolateBar }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className="w-full overflow-hidden relative group bg-chocolate-lightest"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={chocolate.image || "/placeholder.svg"}
            alt={chocolate.name}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-4 flex flex-col justify-end">
            <h3 className="text-lg font-semibold text-white mb-1">{chocolate.name}</h3>
            <div className="flex items-center text-white">
              <Star className="w-4 h-4 mr-1 fill-current text-amber-400" />
              <span>{chocolate.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div 
          className={`absolute inset-0 bg-[#b08868c2] p-4 flex flex-col justify-center items-center text-secondary-foreground transition-opacity duration-300 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={!isHovered}
        >
          <div className="space-y-2 text-center">
            <div className="flex flex-wrap justify-center gap-1 mb-2">
              {chocolate.fermented && <Badge variant="secondary" className="bg-primary hover:bg-[#6c584c] text-primary-foreground">Fermented</Badge>}
              {chocolate.certified && <Badge variant="secondary" className="bg-primary hover:bg-[#6c584c] text-primary-foreground">Certified</Badge>}
              {chocolate.awarded && <Badge variant="secondary" className="bg-primary hover:bg-[#6c584c] text-primary-foreground">Awarded</Badge>}
            </div>
            <p className="text-white text-md pt-2">{chocolate.country}</p>
            <p className="text-white text-md pb-2">{chocolate.flavors.join(', ')}</p>
            <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
              {Object.entries(chocolate.ingredients).map(([ingredient, amount]) => (
                <div key={ingredient} className="flex flex-col items-center bg-black rounded-full text-white p-3 py-4">
                  {iconMap[ingredient] || ingredient}
                  <span className="text-xs mt-1">{amount}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
