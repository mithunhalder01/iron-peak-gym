import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  BadgeCheck,
  CalendarClock,
  Dumbbell,
  Flame,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Zap,
} from 'lucide-react'

export type NavItem = { label: string; to: string }

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export type Program = {
  title: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  durationMins: number
  intensity: 'Low' | 'Medium' | 'High'
  icon: LucideIcon
  blurb: string
  image: string
  tags: string[]
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`

export const programs: Program[] = [
  {
    title: 'Strength Foundations',
    level: 'Beginner',
    durationMins: 55,
    intensity: 'Medium',
    icon: Dumbbell,
    blurb: 'Technique-first lifting, progressive overload, and confidence on the floor.',
    image: u('photo-1517836357463-d25dfeac3438'),
    tags: ['Barbell', 'Form', 'Progression'],
  },
  {
    title: 'HIIT Engine',
    level: 'Intermediate',
    durationMins: 40,
    intensity: 'High',
    icon: Flame,
    blurb: 'Intervals that hit fast—conditioning, grit, and a serious sweat.',
    image: u('photo-1558611848-73f7eb4001a1'),
    tags: ['Conditioning', 'Intervals', 'Calorie Burn'],
  },
  {
    title: 'Functional Fitness',
    level: 'Beginner',
    durationMins: 50,
    intensity: 'Medium',
    icon: Activity,
    blurb: 'Move better, lift safer—mobility, core, and real-world strength.',
    image: u('photo-1517832207067-4db24a2ae47c'),
    tags: ['Mobility', 'Core', 'Balance'],
  },
  {
    title: 'Cross Training',
    level: 'Advanced',
    durationMins: 60,
    intensity: 'High',
    icon: Zap,
    blurb: 'Strength + metcon blends for athletes chasing performance.',
    image: u('photo-1526401485004-2aa6c6b3c5a4'),
    tags: ['Metcon', 'WOD', 'Performance'],
  },
  {
    title: 'Boxing & Conditioning',
    level: 'Intermediate',
    durationMins: 50,
    intensity: 'High',
    icon: ShieldCheck,
    blurb: 'Footwork, bag work, and conditioning with clean technique.',
    image: u('photo-1517963879433-6ad2b056d712'),
    tags: ['Technique', 'Cardio', 'Coordination'],
  },
  {
    title: 'Recovery Flow',
    level: 'Beginner',
    durationMins: 45,
    intensity: 'Low',
    icon: HeartPulse,
    blurb: 'Breathe, lengthen, and reset—recovery that keeps you training.',
    image: u('photo-1544367567-0f2fcb009e0b'),
    tags: ['Stretch', 'Breath', 'Recovery'],
  },
]

export type Trainer = {
  name: string
  role: string
  focus: string[]
  image: string
  experienceYears: number
}

export const trainers: Trainer[] = [
  {
    name: 'Arjun Mehta',
    role: 'Head Coach',
    focus: ['Strength', 'Hypertrophy', 'Coaching Systems'],
    image: u('photo-1549476464-37392f717541'),
    experienceYears: 9,
  },
  {
    name: 'Sara Khan',
    role: 'Conditioning Coach',
    focus: ['HIIT', 'Athletic Performance', 'Fat Loss'],
    image: u('photo-1526506118085-60ce8714f8c5'),
    experienceYears: 7,
  },
  {
    name: 'Rohit Verma',
    role: 'Mobility Specialist',
    focus: ['Mobility', 'Core', 'Injury Prevention'],
    image: u('photo-1599058917765-3f5a7f0f6c9b'),
    experienceYears: 6,
  },
  {
    name: 'Nadia Shaikh',
    role: 'Boxing Coach',
    focus: ['Boxing', 'Footwork', 'Conditioning'],
    image: u('photo-1549570652-97324981a6fd'),
    experienceYears: 8,
  },
]

export type Testimonial = {
  name: string
  title: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Kunal S.',
    title: 'Down 8kg in 10 weeks',
    quote:
      'The programming is structured, the coaches actually watch your form, and the vibe is focused. My energy levels are unreal now.',
    avatar: u('photo-1544723795-3fb6469f5b39'),
  },
  {
    name: 'Ayesha R.',
    title: 'Stronger + pain-free',
    quote:
      'Recovery Flow fixed my shoulders and the strength sessions feel safe and progressive. It’s minimal, clean, and effective.',
    avatar: u('photo-1544005313-94ddf0286df2'),
  },
  {
    name: 'Dev P.',
    title: 'Best HIIT in town',
    quote:
      'Fast, intense, and fun. The class pacing is perfect and I love the schedule clarity. In and out—no wasted time.',
    avatar: u('photo-1520975682031-ae1f7b1a8b4b'),
  },
]

export type PricingPlan = {
  name: string
  priceMonthly: number
  highlight?: boolean
  features: string[]
  icon: LucideIcon
}

export const pricing: PricingPlan[] = [
  {
    name: 'Starter',
    priceMonthly: 1499,
    icon: Timer,
    features: ['Gym access', '2 classes / week', 'Form check-ins', 'Basic nutrition guide'],
  },
  {
    name: 'Pro',
    priceMonthly: 2499,
    highlight: true,
    icon: BadgeCheck,
    features: [
      'Gym access',
      'Unlimited classes',
      'Monthly assessments',
      'Program personalization',
      'WhatsApp support',
    ],
  },
  {
    name: 'Elite',
    priceMonthly: 4499,
    icon: Sparkles,
    features: [
      'Everything in Pro',
      '1:1 coaching (weekly)',
      'Custom macros',
      'Recovery + mobility plan',
      'Priority booking',
    ],
  },
]

export type ScheduleItem = {
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
  time: { start: string; end: string }
  title: string
  level: Program['level']
  coach: string
}

export const schedule: ScheduleItem[] = [
  { day: 'Mon', time: { start: '06:30', end: '07:20' }, title: 'HIIT Engine', level: 'Intermediate', coach: 'Sara' },
  { day: 'Mon', time: { start: '19:00', end: '20:00' }, title: 'Strength Foundations', level: 'Beginner', coach: 'Arjun' },
  { day: 'Tue', time: { start: '07:00', end: '07:50' }, title: 'Functional Fitness', level: 'Beginner', coach: 'Rohit' },
  { day: 'Tue', time: { start: '20:00', end: '20:50' }, title: 'Boxing & Conditioning', level: 'Intermediate', coach: 'Nadia' },
  { day: 'Wed', time: { start: '06:30', end: '07:30' }, title: 'Cross Training', level: 'Advanced', coach: 'Arjun' },
  { day: 'Wed', time: { start: '19:30', end: '20:15' }, title: 'Recovery Flow', level: 'Beginner', coach: 'Rohit' },
  { day: 'Thu', time: { start: '07:00', end: '07:40' }, title: 'HIIT Engine', level: 'Intermediate', coach: 'Sara' },
  { day: 'Thu', time: { start: '19:00', end: '20:00' }, title: 'Strength Foundations', level: 'Beginner', coach: 'Arjun' },
  { day: 'Fri', time: { start: '06:45', end: '07:35' }, title: 'Functional Fitness', level: 'Beginner', coach: 'Rohit' },
  { day: 'Fri', time: { start: '20:00', end: '20:50' }, title: 'Boxing & Conditioning', level: 'Intermediate', coach: 'Nadia' },
  { day: 'Sat', time: { start: '09:00', end: '10:00' }, title: 'Cross Training', level: 'Advanced', coach: 'Sara' },
  { day: 'Sun', time: { start: '10:00', end: '10:45' }, title: 'Recovery Flow', level: 'Beginner', coach: 'Rohit' },
]

export const featureBullets: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Users, title: 'Small groups', desc: 'Coach attention with class energy—best of both worlds.' },
  { icon: CalendarClock, title: 'Clear schedule', desc: 'Fixed timings, quick booking, and on-time sessions.' },
  { icon: MapPin, title: 'Prime location', desc: 'Easy access, parking friendly, and safe late hours.' },
  { icon: BadgeCheck, title: 'Progress tracking', desc: 'Assessments, PRs, and a plan you can stick to.' },
]

export const galleryImages: { src: string; alt: string }[] = [
  { src: u('photo-1517963628607-235ccdd5476c'), alt: 'Dumbbells in a dark gym' },
  { src: u('photo-1517838277536-f5f99be5016d'), alt: 'Barbell plates close-up' },
  { src: u('photo-1546484959-f9a86e37f719'), alt: 'Athlete sprinting indoors' },
  { src: u('photo-1518611012118-f0c5f1e7d2b3'), alt: 'Kettlebells lineup' },
  { src: u('photo-1521804906057-1df8fdb718b7'), alt: 'Battle ropes workout' },
  { src: u('photo-1518459031867-a89b944bffe4'), alt: 'Treadmills in low light' },
  { src: u('photo-1540539234-c14a20fb7c7b'), alt: 'Pull-up rig and rings' },
  { src: u('photo-1549570652-97324981a6fd'), alt: 'Boxing training portrait' },
  { src: u('photo-1550345332-09e3ac987658'), alt: 'Gym interior wide shot' },
  { src: u('photo-1576678927484-cc907957088c'), alt: 'Squat rack with barbell' },
  { src: u('photo-1517964108464-32c7e7bbef87'), alt: 'Hands chalking up' },
  { src: u('photo-1519311965067-36e9aa2d3b5f'), alt: 'Rower machine training' },
  { src: u('photo-1517832207067-4db24a2ae47c'), alt: 'Functional training session' },
  { src: u('photo-1558611848-73f7eb4001a1'), alt: 'HIIT class action' },
  { src: u('photo-1544367567-0f2fcb009e0b'), alt: 'Stretching and recovery' },
  { src: u('photo-1526401485004-2aa6c6b3c5a4'), alt: 'Cross training workout' },
  { src: u('photo-1517836357463-d25dfeac3438'), alt: 'Strength training' },
  { src: u('photo-1517963879433-6ad2b056d712'), alt: 'Boxing gloves close-up' },
]

