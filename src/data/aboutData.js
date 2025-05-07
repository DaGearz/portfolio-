import BackPacker from "../assets/aboutpictures/BackPacker.JPG";
import AvidHiker from "../assets/aboutpictures/AvidHiker.JPG";
import Soldier from "../assets/aboutpictures/soldier.JPG";
import NativeHabit from "../assets/aboutpictures/NativeHabit.JPG";
import DailyRunner from "../assets/aboutpictures/DailyRunner.png";
import FamilyAndFriends from "../assets/aboutpictures/FamilyAndFriends.jpg";
import inthefield from '../assets/aboutpictures/inthefield.jpg';
import teamwork from '../assets/aboutpictures/teamwork.jpg'

const aboutData = [
  {
    id: 1,
    title: `All Weather Explorer`,
    img: BackPacker,
    alt: `sitting in chair`,
    description: `I’m an avid backpacker who embraces the outdoors in every season—rain, shine, or sub-freezing snow. I find peace and purpose off the grid, where the air is crisp and the challenges are real. Cold mornings, snow-covered trails, and quiet forests are where I feel most alive. This is where I reset, reflect, and push past limits. The elements don’t intimidate me—they push me to adapt, think clearly, and trust my preparation. Backpacking sharpens my resilience and ability to think critically under pressure—two skills that translate perfectly into full-stack development. When the trail gets tough, I don’t quit—I troubleshoot, plan ahead, and keep moving. That same mindset drives how I debug code, architect features, and commit to growth as a developer.`,
    isUse: true,
  },
  {
    id: 2,
    title: `Peak Seeker`,
    img: AvidHiker,
    alt: `Top of Cuyamaca Peak`,
    description: `Hiking is more than a hobby—it's how I challenge myself to keep moving forward, both physically and mentally. Each summit I reach, like Cuyamaca Peak, reminds me that growth lives just beyond comfort. My goal? Conquer as many peaks as I can and keep leveling up with every climb. The grind of uphill climbs mirrors real life: progress is slow, your legs burn, but the payoff is always worth it. Every mountain teaches a lesson in persistence, and every trail helps sharpen my resilience and hunger for more. That mindset fuels me in software too. Whether it's learning a new backend system or building out a responsive frontend, I treat each feature like a new peak to conquer. I don't cut corners, and I don't stop until the job is done right—no matter how steep the climb.`,
    isUse: true,
  },
  {
    id: 3,
    title: `Proud Soldier`,
    img: Soldier,
    alt: `in military attire`,
    description: `Before I became a developer, I served my country with pride. I spent six years in the Army National Guard and one year in the Army Reserves as a Combat Engineer. My time in uniform taught me the value of discipline, leadership, and teamwork—qualities I carry with me into every project I build. Serving in the military gave me the mindset to overcome challenges, stay mission-focused, and always back up my team. The military wasn’t just a job—it was a crucible that forged my mindset, work ethic, and ability to lead under pressure. These traits transfer directly to full-stack development. In code as in combat, the ability to assess, adapt, and execute as part of a team is everything. I take ownership of my tasks, support my peers, and work with precision and urgency, always pushing toward the mission objective: a working, reliable, scalable app.`,
    isUse: true,
  },
  {
    id: 4,
    title: `Natural Habitat`,
    img: NativeHabit,
    alt: `gym mirror`,
    description: `When I’m not out on the trail or leveling up my software dev skills, you’ll find me in the gym—my second home. For me, fitness isn’t just about building strength, it’s about sharpening discipline and mental clarity. A strong body supports a stronger mind, and I treat both like tools I’m always upgrading. Lifting, sweating, and staying consistent in the gym helps anchor my daily routine. It’s where I work through ideas, decompress from stress, and remind myself that growth is earned through consistent effort and self-respect. As a developer, this discipline keeps me sharp. I believe strong habits off the keyboard reinforce strong execution on it. I’m not just building my codebase—I’m building myself daily. That physical grind carries over to coding: show up every day, build, test, and improve—even when no one's watching.`,
    isUse: true,
  },
  {
    id: 5,
    title: `Relentless Runner`,
    img: DailyRunner,
    alt: `Garmin app`,
    description: `I believe in consistency over everything. Once I lock into a goal, I go all in—no excuses. Running is part of my rhythm, and logging miles throughout the week keeps me grounded, focused, and disciplined. Whether it's 4 or 5 miles, I lace up and get after it. Momentum is everything. Running helps clear my mind, reset my thoughts, and stay accountable to myself. It’s a habit that reinforces my mental stamina and reminds me that progress is built through repetition and effort—even when motivation runs low. That mindset carries directly into development. Some problems take 5 minutes. Others take hours. But I don't quit. I break it down, take the next step, and trust the process. Software is a marathon, not a sprint—and I'm built for the long game.`,
    isUse: true,
  },
  {
    id: 6,
    title: `Chosen and Givin'`,
    img: FamilyAndFriends,
    alt: `selfie with girlfriend`,
    description: `The best part of life is the people you share it with. I’m grateful to be surrounded by love—some relationships I was born into, others I chose along the way. Friends, family, and all the moments in between remind me what really matters. These connections keep me grounded, inspired, and always smiling. Life’s highest highs and lowest lows are made easier when you’re backed by people who truly care. I strive to show up for my circle just as they’ve shown up for me, because that’s where real strength comes from—mutual love, loyalty, and laughter. These values shape how I collaborate on dev teams. I bring respect, patience, and effort into every group project. I don’t just build features—I build people up. That human connection is why I love full-stack work: it’s not just solving problems, it’s solving them together.`,
    isUse: true,
  },
  {
    id: 7,
    title: `Engineer in the Field`,
    img: inthefield,
    alt: "on site with hard hat and safety gear",
    description: `Before stepping into tech, I spent years working as a utility designer and project engineer—boots on the ground, solving real-world problems. I was responsible for translating large-scale project specs into detailed, actionable construction plans for gas and electric utility infrastructure. That meant coordinating with civil engineers, municipalities, inspectors, and field crews while balancing budget, compliance, and safety. Whether it was redesigning cable routes due to field conflicts or navigating client constraints, I had to stay sharp, collaborative, and adaptable at all times. That field-tested experience directly fuels my strength as a developer. I’ve worked with constraints, deadlines, and people from every discipline. I know how to architect and deliver systems that solve problems, not just pass code checks. Full-stack development is just a new set of tools—but I bring the same mindset: build for real users, anticipate obstacles, and communicate like the whole job depends on it—because it does.`,
    isUse: true
  },
  {
    id: 8,
    title: "Team First, Always",
    img: teamwork,
    alt: "college rugby team group photo",
    description: `In college, I played competitive rugby—a sport where trust, communication, and sacrifice aren’t just encouraged, they’re required. You train until your body gives out, you hit hard, you get knocked down, and you get back up—together. I learned how to rally teammates when morale dropped, how to take hits and keep pushing, and how to lead by example. That experience shaped how I operate in any team: show up early, speak up with purpose, and never leave someone behind. Rugby taught me that every role matters—whether you're scoring tries or doing the unseen grind work in the pack—and that success comes from synchronized effort. These lessons map perfectly to software. I don’t just want to be a coder—I want to be a dependable teammate, someone who supports the squad and knows that building great software is a contact sport in its own right: it takes communication, pressure-tested trust, and absolute commitment to a shared goal.`,
    isUse: true
  }
  
];

export default aboutData;
