import Cta from '@/components/cta';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import RepGoalList from '@/components/repGoalList';
import Section from '@/components/section';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="max-w-7xl mx-auto px-4 md:px-6 xl:px-0">
      <Section
        focus="Achieve"
        title="Personalized Training with Dynamic Rep Goal System"
        paragraph="Experience the benefits of the dynamic rep goal system, a personalized approach to training that helps you reach your fitness goals efficiently and effectively."
      >
        <ul className="list-disc list-outside pl-4 text-sm lg:text-base py-5 space-y-3">
          <li>Set Rep Goals for Optimal Performance</li>
          <li>Track Your Progress and Adjust Accordingly</li>
          <li>Continuously Challenge Yourself and Make Gains</li>
        </ul>
      </Section>

      <Section
        focus="Efficiency"
        title="Maximize Your Workout Efficiency and Progression"
        paragraph="The dynamic rep goal system is designed to optimize your workouts by setting rep targets and gradually increasing weights for maximum efficiency and progression."
      >
        <div className="grid lg:grid-cols-2 gap-6 py-5">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Target Reps</h3>
            <p className="text-sm lg:text-base text-pretty lg:text-balance">
              Set specific rep goals for each exercise to track your progress
              and push yourself.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Weight Progression</h3>
            <p className="text-sm lg:text-base text-pretty lg:text-balance">
              Gradually increase weights as you achieve your rep goals, ensuring
              continuous improvement.
            </p>
          </div>
        </div>
      </Section>

      <Section
        focus="Achieve"
        title="Introducing the Dynamic Rep Goal System"
        paragraph="Our exercise logger uses the Dynamic Rep Goal System to help you reach your fitness goals. Set rep goal targets and adjust weights dynamically for optimal progress."
        center
      >
        <ul className="grid md:grid-cols-3 auto-cols- gap-10 text-center">
          <RepGoalList
            title="What is a Rep Goal Target?"
            paragraph="A rep goal target is the total number of reps you aim to achieve
              when adding up each set of an exercise."
            img=""
          />
          <RepGoalList
            title="How Does the Dynamic Rep Goal System Work?"
            paragraph="Our system adjusts weights based on your rep goal targets,
              allowing for progressive overload and continuous improvement."
            img=""
          />
          <RepGoalList
            title="Set Rep Goal Targets for Optimal Progress"
            paragraph="Determine your rep goal targets to work within your desired rep
              range and achieve maximum results."
            img=""
          />
        </ul>
      </Section>

      <Cta />

      <FAQ />

      <Footer />
    </main>
  );
}
