import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function FAQ() {
  return (
    <section className="space-y-8 md:space-y-12 py-10 lg:py-24 max-w-7xl mx-auto px-4 md:px-6 xl:px-0">
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-semibold xl:text-4xl">FAQs</h3>
        <p className="text-pretty text-lg">
          Answer common questions about the exercise logger and the dynamic rep
          goal system.
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx + 1}`}
            className="text-lg"
          >
            <AccordionTrigger className="text-start">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="space-y-4 text-center">
        <h4 className="text-2xl font-semibold">Contact Us</h4>
        <p className="text-lg">Have more questions? Get in touch with us.</p>
        <Button>Contact</Button>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: 'What is a rep goal target?',
    answer:
      'A rep goal target is the total number of reps you want to hit when you add up each set of an exercise. For example, if you bench press 180 pounds for 3 sets, you would perform all 3 sets for the maximum safe reps and add up the total reps performed.',
  },
  {
    question: 'How do I determine my rep goal target?',
    answer:
      'To determine your rep goal target, you can use the average rep range you want to work in and multiply it by the total number of sets. For example, if you want to average 7 reps per set for each of your 3 sets, you would multiply 3 sets by 7 reps to get a total of 21 reps.',
  },
  {
    question: 'Why should I set my rep goal target slightly higher?',
    answer:
      'Setting your rep goal target slightly higher than the average you want to hit allows for the drop in total reps that occurs when you add weight. It ensures that you continue to challenge yourself and progress in your workouts.',
  },
  {
    question: 'How does the "dynamic" part work?',
    answer:
      'In the dynamic rep goal system, you set the rep goal total. When you hit that total, you only move up the weight of the first set. When you hit the rep goal total again, you move up the weight of the second set. This pattern continues until you move up the weight on all sets, and then you repeat the process.',
  },
];
