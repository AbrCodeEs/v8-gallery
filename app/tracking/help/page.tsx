import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How can I track my chocolate order?",
    answer: "You can track your order by entering your tracking ID on the Tracking page. The tracking ID is provided in your order confirmation email.",
  },
  {
    question: "What types of chocolate do you produce?",
    answer: "We produce a variety of chocolates including dark chocolate, milk chocolate, and white chocolate. Each type is available in different cocoa percentages and flavor combinations.",
  },
  {
    question: "How long does shipping usually take?",
    answer: "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
  },
  {
    question: "How can I provide feedback on my chocolate?",
    answer: "We welcome your feedback! You can submit your comments and ratings on our Customer Feedback page. Your input helps us improve our products and services.",
  },
  {
    question: "What measures do you take to ensure the quality of your chocolate?",
    answer: "We maintain strict quality control measures throughout our production process. This includes sourcing high-quality ingredients, maintaining optimal storage conditions, and conducting regular taste tests.",
  },
]

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-chocolate-900">Help & FAQs</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

