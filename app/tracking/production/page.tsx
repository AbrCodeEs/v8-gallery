"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  chocolateType: z.string(),
  quantity: z.string().min(1, {
    message: "Quantity must be at least 1.",
  }),
  productionDate: z.string(),
  ingredientOrigin: z.string(),
  notes: z.string().optional(),
})

export default function ProductionRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chocolateType: "",
      quantity: "",
      productionDate: "",
      ingredientOrigin: "",
      notes: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Production registered successfully",
        description: "Your chocolate production has been recorded.",
      })
      setIsSubmitting(false)
      form.reset()
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-chocolate-900">Production Registration</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="chocolateType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chocolate Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select chocolate type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="dark">Dark Chocolate</SelectItem>
                    <SelectItem value="milk">Milk Chocolate</SelectItem>
                    <SelectItem value="white">White Chocolate</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity (kg)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter quantity" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productionDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Production Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ingredientOrigin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingredient Origin</FormLabel>
                <FormControl>
                  <Input placeholder="Enter country or farm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Add any additional notes here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register Production"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

