"use client"

import { useState } from 'react'
import { ChocolateBar, chocolateBars } from '../data/chocolateBars'
import { ChocolateCard } from './ChocolateCard'
import { Button } from "@/components/ui/button"
import { SortAscIcon, CoffeeIcon, GlobeIcon } from 'lucide-react'

type SortOption = 'rated' | 'fermented' | 'certified' | 'awarded'
type FlavorOption = 'Fruity Sweet' | 'Fruity Citrus' | 'Floral' | 'Criollo' | 'Cocoa' | 'Woody' | 'Spices'
type CountryOption = 'Colombia' | 'Peru' | 'Venezuela'

export function ChocolateGallery() {
  const [sortBy, setSortBy] = useState<SortOption>('rated')
  const [selectedFlavors, setSelectedFlavors] = useState<FlavorOption[]>([])
  const [selectedCountries, setSelectedCountries] = useState<CountryOption[]>([])

  const filteredChocolates = chocolateBars
    .filter(chocolate => 
      (selectedFlavors.length === 0 || selectedFlavors.some(flavor => chocolate.flavors.includes(flavor))) &&
      (selectedCountries.length === 0 || selectedCountries.includes(chocolate.country as CountryOption))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rated':
          return b.rating - a.rating
        case 'fermented':
          return Number(b.fermented) - Number(a.fermented)
        case 'certified':
          return Number(b.certified) - Number(a.certified)
        case 'awarded':
          return Number(b.awarded) - Number(a.awarded)
        default:
          return 0
      }
    })

  const handleFlavorToggle = (flavor: FlavorOption) => {
    setSelectedFlavors(prev => 
      prev.includes(flavor) ? prev.filter(f => f !== flavor) : [...prev, flavor]
    )
  }

  const handleCountryToggle = (country: CountryOption) => {
    setSelectedCountries(prev => 
      prev.includes(country) ? prev.filter(c => c !== country) : [...prev, country]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-chocolate-lightest">
      <div className='flex justify-center items-center h-60 border-b border-gray-200'>
        <h1 className="text-5xl font-bold mb-8 text-primary">Chocolate Gallery</h1>
      </div>
      <div className="space-y-4 mb-8 border-b border-gray-200">
        <div className='flex gap-10 pt-5'>
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-primary">
            <SortAscIcon className="w-5 h-5" />
            Sort by
          </h2>
          <div className="flex flex-wrap gap-2">
            {(['rated', 'fermented', 'certified', 'awarded'] as SortOption[]).map(option => (
              <Button
                key={option}
                variant={sortBy === option ? "default" : "outline"}
                onClick={() => setSortBy(option)}
                size="sm"
                className={sortBy === option ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        <div className='flex gap-10 py-5'>
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-primary">
            <CoffeeIcon className="w-5 h-5" />
            World of Flavors
          </h2>
          <div className="flex flex-wrap gap-2">
            {(['Fruity Sweet', 'Fruity Citrus', 'Floral', 'Criollo', 'Cocoa', 'Woody', 'Spices'] as FlavorOption[]).map(flavor => (
              <Button
                key={flavor}
                variant={selectedFlavors.includes(flavor) ? "default" : "outline"}
                onClick={() => handleFlavorToggle(flavor)}
                size="sm"
                className={selectedFlavors.includes(flavor) ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}
              >
                {flavor}
              </Button>
            ))}
          </div>
        </div>
        <div className='flex gap-10 pb-5'>
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-primary">
            <GlobeIcon className="w-5 h-5" />
            Country
          </h2>
          <div className="flex flex-wrap gap-2">
            {(['Colombia', 'Peru', 'Venezuela'] as CountryOption[]).map(country => (
              <Button
                key={country}
                variant={selectedCountries.includes(country) ? "default" : "outline"}
                onClick={() => handleCountryToggle(country)}
                size="sm"
                className={selectedCountries.includes(country) ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}
              >
                {country}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredChocolates.map(chocolate => (
          <ChocolateCard key={chocolate.id} chocolate={chocolate} />
        ))}
      </div>
    </div>
  )
}
