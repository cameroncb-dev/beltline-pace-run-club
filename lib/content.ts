export const club = {
  name: "BeltLine Pace Run Club",
  tagline: "Show up. We will pace you.",
  partnerEmail: "partners@beltlinepace.example",
};

export const facts = {
  about:
    "BeltLine Pace Run Club is a free, volunteer run club in Atlanta. It meets near the BeltLine in Old Fourth Ward, and every run ends with coffee. It started last year with 15 runners and now has about 60 regulars.",
  leadersLine: "It has a few volunteer leaders and no budget for ads.",
  stats:
    "15 runners at the start last year, about 60 regulars now, with a goal of 200 this year",
  free: "Free to join. Every run is free.",
  coffee:
    "Every run ends with coffee at Bean Counter Coffee in Old Fourth Ward",
  paceGroupsLine:
    "Four pace groups: Walk, Social (about 12 minutes per mile), Steady (about 10) and Tempo (about 8 or faster)",
  bring: "Water, shoes you can run in and a light for evening runs.",
  fastAnswer: "No. Every run has a walk group and a social pace group.",
  costAnswer: "No. Every run is free.",
  buddyNote:
    "Maya Okafor, Pace Lead, asked that evening runs include a light and a buddy.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/runs", label: "Weekly runs" },
  { href: "/join", label: "Join" },
  { href: "/partners", label: "Partners" },
  { href: "/gear", label: "Gear" },
] as const;

export const paceGroups = [
  {
    name: "Walk",
    detail: "Every run has a walk group.",
    prompt: "I want to walk",
  },
  {
    name: "Social",
    detail: "About 12 minutes per mile.",
    prompt: "I want the social group",
  },
  {
    name: "Steady",
    detail: "About 10.",
    prompt: "I want the steady group",
  },
  {
    name: "Tempo",
    detail: "About 8 or faster.",
    prompt: "I want the tempo group",
  },
] as const;

export const weeklyRuns = [
  {
    day: "Tuesday",
    time: "6:30 PM",
    name: "Social Run",
    distance: "3 miles",
    start: "Bean Counter Coffee",
    evening: true,
  },
  {
    day: "Thursday",
    time: "6:30 PM",
    name: "Tempo Run",
    distance: "5 miles",
    start: "Bean Counter Coffee",
    evening: true,
  },
  {
    day: "Saturday",
    time: "8:00 AM",
    name: "Long Run",
    distance: "6 to 10 miles",
    start: "Bean Counter Coffee",
    evening: false,
  },
  {
    day: "Sunday",
    time: "9:00 AM",
    name: "Recovery Walk or Jog",
    distance: "2 miles",
    start: "Eastside Trailhead",
    evening: false,
  },
] as const;

export const specialRuns = [
  {
    date: "Saturday, October 17",
    time: "8:00 AM",
    event: "Fall Kickoff Long Run",
    start: "Bean Counter Coffee",
    overlap: true,
  },
  {
    date: "Saturday, October 17",
    time: "8:00 AM",
    event: "Charity 5K for the Food Bank",
    start: "Bean Counter Coffee",
    overlap: true,
  },
  {
    date: "Saturday, October 31",
    time: "8:00 AM",
    event: "Costume Run",
    start: "Bean Counter Coffee",
    overlap: false,
  },
  {
    date: "Saturday, November 8",
    time: "8:00 AM",
    event: "Gear Swap and Brunch Run",
    start: "Eastside Trailhead",
    overlap: false,
  },
  {
    date: "Saturday, November 14",
    time: "8:00 AM",
    event: "Turkey Trot Training Run",
    start: "Bean Counter Coffee",
    overlap: false,
  },
] as const;

export const gear = [
  { name: "Club shirt", price: "$25" },
  { name: "Club hat", price: "$18" },
] as const;

export const leaders = [
  { name: "Jordan Reeves", role: "Founder" },
  { name: "Maya Okafor", role: "Pace Lead" },
  { name: "Chris Tran", role: "Safety Lead" },
  { name: "Lena Ruiz", role: "Owner, Bean Counter Coffee" },
] as const;

export const packages = [
  { name: "Pacer", price: "$150", includes: "Logo on the website" },
  {
    name: "Mile Marker",
    price: "$400",
    includes: "Logo on the website and a mention at one run",
  },
  {
    name: "Title Partner",
    price: "$900",
    includes:
      "Logo on the website, run naming and a table at the Gear Swap",
  },
] as const;

export const faqs = [
  {
    q: "Do I need to be fast?",
    a: "No. Every run has a walk group and a social pace group.",
  },
  { q: "Does it cost money?", a: "No. Every run is free." },
  {
    q: "What should I bring?",
    a: "Water, shoes you can run in and a light for evening runs.",
  },
] as const;

export const palette = [
  {
    name: "Sunrise Yellow",
    hex: "#FFC93C",
    use: "Buttons, highlights and key shapes",
    note: "Asphalt text on this yellow is 9.54 to 1. White text on it is 1.54 to 1, so the button label is Asphalt.",
  },
  {
    name: "Asphalt",
    hex: "#1E2A32",
    use: "Headings and body text",
    note: "On Concrete, 12.87 to 1. On white, 14.66 to 1. On Mist, 10.82 to 1.",
  },
  {
    name: "Concrete",
    hex: "#F2F0EB",
    use: "Page backgrounds",
    note: "Body text on Concrete is Asphalt.",
  },
  {
    name: "Trail Green",
    hex: "#2E7D5B",
    use: "Links and small accents",
    note: "On white, 5.00 to 1. On Concrete, 4.39 to 1. On Mist, 3.69 to 1. On Asphalt, 2.93 to 1. Green text sits on white only.",
  },
  {
    name: "Mist",
    hex: "#D9DEE2",
    use: "Dividers and card backgrounds",
    note: "Cards use Mist with Asphalt text. Links are not placed on Mist.",
  },
] as const;

export const buttonSwatches = [
  { name: "Sunrise Yellow", hex: "#FFC93C", note: "The packet color. 9.54 to 1 with Asphalt text." },
  { name: "Deeper gold", hex: "#F0A202", note: "A visible live edit. 6.89 to 1 with Asphalt text." },
  { name: "Soft gold", hex: "#FFD56A", note: "A lighter live edit. 10.46 to 1 with Asphalt text." },
] as const;

export const submission = {
  option: "A",
  client: "BeltLine Pace Run Club",
  teamName: "Our team",
  mainVisitor: "Nervous first timer",
  goal: "Get first timers to show up.",
  primaryAction: "Join a Run",
  adjectives: "Energetic, welcoming, and a little cheeky",
  members: [
    { name: "", role: "Design Lead" },
    { name: "", role: "Page Designer" },
    { name: "", role: "Product Researcher" },
  ],
};

/**
 * Flip `active` to true and fill `message` when the mid-build client
 * update arrives. The banner is shared, so every page shows it.
 * Change facts in this file. Do not hunt through individual pages.
 */
export const clientUpdate = {
  active: false,
  message: "",
};

export const decisions = [
  {
    id: 1,
    title: "Club shirt price",
    conflict:
      "Jordan Reeves, Founder, wrote that club shirts are $20. The content pack says Club shirt, $25.",
    decision: "The Gear page shows Club shirt, $25. The $20 figure is not on the public pages.",
    why: "Prices in the content pack are fixed. A conflicting email is logged instead of silently changing the price.",
    where: "Gear page, and this log",
  },
  {
    id: 2,
    title: "Who the site leads with",
    conflict:
      "Jordan wrote: make it loud, lead with the Tempo group, we want fast people. The brief puts nervous first timers first, and the primary action is Join a Run. Maya Okafor wrote that nobody should think this is only for fast runners. Lena Ruiz asked for a calm, welcoming tone. The brief tone is energetic, welcoming, and a little cheeky.",
    decision:
      "The nervous first timer is the main visitor. Pace groups are shown as Walk, then Social, then Steady, then Tempo. Type is large. Tempo is one group of four, not the headline.",
    why: "The brief lists goals in priority order. The walk group and the social pace group are also FAQ facts, not only a preference.",
    where: "Home and Join",
  },
  {
    id: 3,
    title: "Four pages or five",
    conflict:
      "The brief and Jordan ask for Home, Weekly Runs, Join, Partners, and Gear. Lena Ruiz wrote that four pages is plenty.",
    decision: "All five pages are built.",
    why: "The brief names the pages. Gear is where the shirt and hat prices live. Partners still shows all three package prices on one laptop screen, which is what Lena asked for.",
    where: "Primary navigation",
  },
  {
    id: 4,
    title: "White text on Sunrise Yellow",
    conflict:
      "Brand rules say buttons are Sunrise Yellow with white text. Brand rules also require text of at least 4.5 to 1. White on #FFC93C measures 1.54 to 1. Asphalt #1E2A32 on #FFC93C measures 9.54 to 1.",
    decision:
      "The button fill stays Sunrise Yellow. The label is Asphalt. Every button uses one shared component.",
    why: "Both rules are in the brand section. Contrast is also a scored requirement. The yellow was not replaced.",
    where: "Shared button, every page",
  },
  {
    id: 5,
    title: "Where Trail Green text can sit",
    conflict:
      "Trail Green is for links and small accents. On Concrete it measures 4.39 to 1. On Mist, 3.69 to 1. On Asphalt, 2.93 to 1. On white it measures 5.00 to 1.",
    decision:
      "The hex stays #2E7D5B. Green text is used only on white. Navigation labels are Asphalt on white. Footer links are Concrete on Asphalt. Cards use Mist with Asphalt text.",
    why: "Changing the hex would break a brand color. Moving the text keeps the color and clears 4.5 to 1.",
    where: "Design system, navigation, footer, cards",
  },
  {
    id: 6,
    title: "Saturday, October 17 is listed more than once",
    conflict:
      "The weekly Saturday long run is 8:00 AM at Bean Counter Coffee. The same morning also lists Fall Kickoff Long Run and Charity 5K for the Food Bank, both at 8:00 AM at Bean Counter Coffee.",
    decision:
      "The weekly row and both special rows are shown exactly. A note on Weekly runs says the packet lists them together. They were not merged or dropped.",
    why: "The kickoff may be the weekly long run. The packet does not say that. Guessing would hide a listed event.",
    where: "Weekly runs",
  },
  {
    id: 7,
    title: "Saturday, November 8 does not match the other Saturdays",
    conflict:
      "October 17, October 31, and November 14 can be Saturdays in the same year. November 8 is 22 days after October 17, and 22 days after a Saturday is a Sunday. The packet still says Saturday, November 8. The year is not written in the packet. The clash does not depend on picking a year.",
    decision:
      "The schedule prints Saturday, November 8 exactly. The weekday was not corrected on the page.",
    why: "Dates and weekdays in the packet stay as written when they disagree. The conflict is recorded here.",
    where: "Weekly runs, and this log",
  },
  {
    id: 8,
    title: "Sunday starts at the trailhead, and coffee is still the ending",
    conflict:
      "Sunday Recovery Walk or Jog starts at Eastside Trailhead. The other weekly runs start at Bean Counter Coffee. A separate fact says every run ends with coffee at Bean Counter Coffee.",
    decision:
      "Sunday keeps Eastside Trailhead as the start. Copy still says every run ends with coffee at Bean Counter Coffee.",
    why: "The start and the ending are different facts. Dropping coffee for Sunday would ignore the club-at-a-glance line.",
    where: "Weekly runs and the coffee section",
  },
  {
    id: 9,
    title: "A buddy on evening runs is not in the FAQ",
    conflict:
      "The FAQ answer is: Water, shoes you can run in and a light for evening runs. Maya Okafor also asked runners to bring a light and run with a buddy. Chris Tran is Safety Lead. The packet does not quote him.",
    decision:
      "The FAQ is quoted exactly. A separate note names Maya and her buddy request. No quote was written for Chris Tran.",
    why: "Putting buddy inside the FAQ would change a fixed answer. Hiding Maya's note would drop a safety request.",
    where: "Join, and the evening note on Weekly runs",
  },
  {
    id: 10,
    title: "No sign-up form, no shop, and one email",
    conflict:
      "The packet gives partners@beltlinepace.example. It does not give a general contact, a registration link, or a place to buy the shirt or hat.",
    decision:
      "Join tells people to show up at the published start. Gear lists $25 and $18 and says the packet does not say where to buy them. The partner email is used only for partners.",
    why: "A shop, a second email, or a fake checkout would be a new fact.",
    where: "Join, Gear, and Partners",
  },
  {
    id: 11,
    title: "Full name in headings, and sentence case",
    conflict:
      "The brand says to always write BeltLine Pace Run Club in headings, and also to use sentence case headings.",
    decision:
      "The full name is the wordmark and the first line of every page heading. Section headings stay specific, such as This week.",
    why: "Repeating the full name on every subheading would make the pages harder to scan. The wordmark is never shortened.",
    where: "Wordmark and page headings",
  },
  {
    id: 12,
    title: "Client update was not in the packet",
    conflict:
      "The event adds a client update during the build. That note was not in the packet used for this site.",
    decision:
      "No update was invented. A shared banner stays off until clientUpdate.active is set in lib/content.ts. Colors, the button, the navigation, and the facts in this file are the update path.",
    why: "Inventing an update would fake the response. One shared change is how the real note should land on every page.",
    where: "lib/content.ts, shared button, design system live edit",
  },
] as const;

export const aiUse = [
  {
    tool: "Cursor agent, Grok 4.7",
    usedFor:
      "Read the Design Derby packets, planned Option A, and built the pages, shared components, and visitor copy.",
    where: "Whole site",
  },
  {
    tool: "Cursor agent, Grok 4.7",
    usedFor:
      "Compared the brief, the content pack, and the three emails, then wrote the decision for each conflict. Packet facts were copied. No client update was invented.",
    where: "Decision log",
  },
  {
    tool: "Cursor agent, Grok 4.7",
    usedFor:
      "Measured the brand color pairs against the 4.5 to 1 rule and kept Asphalt text on Sunrise Yellow buttons.",
    where: "Design system and the shared button",
  },
] as const;

export const photoCredits = [
  { id: "5038818", use: "Home, two people jogging on a city path" },
  { id: "1571939", use: "Join, a group of runners on a trail" },
  { id: "2402777", use: "Weekly runs, a crowd of runners on a road" },
  { id: "4753986", use: "Gear, a runner tying a shoe" },
  { id: "302899", use: "Coffee section, a cup of coffee" },
  { id: "2803158", use: "Partners, one person running on a road" },
] as const;

export const walkthrough = [
  {
    time: "0:00",
    who: "Anyone",
    say: "We picked Option A, BeltLine Pace Run Club. The main visitor is a nervous first timer. The goal is to get them to show up.",
  },
  {
    time: "0:20",
    who: "Design",
    say: "Home leads with the tagline and Join a Run. Pace groups start with Walk, not Tempo. The dark strip under the hero gives regulars this week without a hunt.",
  },
  {
    time: "0:50",
    who: "Research",
    say: "Weekly runs copies the schedule. Saturday, October 17 lists two specials at the same time and place, on top of the weekly long run. Saturday, November 8 cannot share a year with the other Saturdays. Both stay as written, and both are in the decision log.",
  },
  {
    time: "1:25",
    who: "Design",
    say: "Join answers speed, cost, and what to bring in the FAQ wording. The pace picker only offers the four groups from the packet.",
  },
  {
    time: "1:55",
    who: "Research",
    say: "Partners shows Pacer $150, Mile Marker $400, and Title Partner $900, the four leaders, and partners@beltlinepace.example. Gear shows the shirt at $25 and the hat at $18. The $20 from Jordan's email is logged and not shown as the price.",
  },
  {
    time: "2:25",
    who: "Design",
    say: "The design system holds the shared button, navigation, type, and colors. White on Sunrise Yellow fails the contrast rule, so the label is Asphalt. The live edit on that page changes the button color everywhere.",
  },
  {
    time: "2:45",
    who: "Anyone",
    say: "The decision log is the backup for questions. When the client update arrives, it goes into the shared facts and styles, not into five separate pages.",
  },
] as const;

export const contentChecklist = [
  { fact: "Free to join. Every run is free.", where: "Home, Join, FAQ" },
  { fact: "15 runners, about 60 regulars, goal of 200 this year", where: "Home" },
  { fact: "Walk, Social, Steady, Tempo", where: "Home, Join" },
  { fact: "Coffee at Bean Counter Coffee in Old Fourth Ward", where: "Home, Weekly runs, Join, footer" },
  { fact: "Tuesday, Thursday, Saturday, Sunday weekly rows", where: "Home strip, Weekly runs" },
  { fact: "Five special runs, including both October 17 events", where: "Weekly runs" },
  { fact: "Club shirt $25 and Club hat $18", where: "Gear" },
  { fact: "Jordan Reeves, Maya Okafor, Chris Tran, Lena Ruiz", where: "Partners" },
  { fact: "Pacer $150, Mile Marker $400, Title Partner $900", where: "Partners, Home" },
  { fact: "partners@beltlinepace.example", where: "Partners, footer" },
  { fact: "Three FAQ answers, verbatim", where: "Join" },
] as const;
