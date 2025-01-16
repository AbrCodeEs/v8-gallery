import { Star } from 'lucide-react'

interface StarRatingProps {
  value: number
  onChange: (value: number) => void
}

export function StarRating({ value, onChange }: StarRatingProps) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-6 w-6 cursor-pointer ${
            star <= value ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          onClick={() => onChange(star)}
        />
      ))}
    </div>
  )
}

