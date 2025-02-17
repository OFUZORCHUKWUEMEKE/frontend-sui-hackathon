"use client"

import { SiteHeader } from "./components/site-header"
import { Button } from "@/components/ui/button"
import { Separator } from "../components/ui/separator"
import { motion } from "framer-motion"
import { Footer } from "./components/footer"
import { Zap, Command, Scale, Bot, Shield, Sparkles, Check, Link } from "lucide-react"
import { Globe } from "@/components/magicui/globe"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="flex min-h-screen flex-col items-center justify-center space-y-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container flex flex-col items-center justify-center gap-6 text-center"
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="#"
              className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
            >
              🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Introducing Fourier
            </motion.a>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]"
            >
              Effortless stablecoin collections.
              <br />
              AI-powered payment management.
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-[750px] text-center text-md font-light text-muted-foreground sm:text-xl"
            >
              Streamline your stablecoin payments with intelligent automation, Our AI-powered platform helps businesses and DAOs collect, track, and manage USDT transactions effortlessly.
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <Button size="lg" className="h-12 px-8">
                Launch App
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8">
                View Demo
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <Separator className="my-8" />

        <section className="container w-[90%] mx-auto md:w-4/5 space-y-12 py-8 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Features built for scale</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Transform how you handle stablecoin payments.
            </p>
          </motion.div>
          <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  rotateX: index % 2 === 0 ? 5 : -5,
                  rotateY: index % 3 === 0 ? 5 : -5,
                  transition: { duration: 0.3 },
                }}
                className="relative overflow-hidden rounded-lg border bg-background p-2"
              >
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <feature.icon className="h-12 w-12 text-primary" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* <section id="pricing" className="container w-4/5 mx-auto py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Simple, transparent pricing</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose the plan that's right for you and start building amazing Discord bots today.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden rounded-lg border bg-background"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    ${plan.price}
                    <span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{plan.description}</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full">{plan.buttonText}</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* <Separator className="my-12" /> */}

        <section className="container py-8 md:py-24 lg:py-32 w-4/5 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Ready to get started?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our AI assistant automates collections, tracks transactions in real-time, and manages payment data seamlessly.
            </p>
            <Button size="lg" className="mt-4">
              Launch App
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const features = [
  {
    name: "Easy Setup",
    description: "Get your bot up and running in minutes with our intuitive interface.",
    icon: Zap,
  },
  {
    name: "Payment Link",
    description: "Create customizable links amd send to your community",
    icon: Link,
  },
  {
    name: "Scale Infinitely",
    description: "Built to handle millions of users and transactions.",
    icon: Scale,
  },
  {
    name: "AI-Powered",
    description: "Leverage artificial intelligence to create smarter responses.",
    icon: Bot,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security to protect your bot and users.",
    icon: Shield,
  },
  {
    name: "Custom Features",
    description: "Build custom features without touching any code.",
    icon: Sparkles,
  },
] as const

const pricingPlans = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for small communities and hobbyists.",
    features: ["1 bot", "Up to 100 users", "Basic command set", "Community support"],
    buttonText: "Start for Free",
  },
  {
    name: "Pro",
    price: 8,
    description: "Ideal for growing communities and businesses.",
    features: [
      "Unlimited bots",
      "Unlimited users",
      "Advanced commands",
      "Priority support",
      "Custom branding",
      "Analytics dashboard",
    ],
    buttonText: "Upgrade to Pro",
  },
] as const

