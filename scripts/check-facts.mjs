import { readFileSync, existsSync } from "node:fs";

const required = [
  "BeltLine Pace Run Club",
  "Show up. We will pace you.",
  "Free to join. Every run is free.",
  "15 runners at the start last year, about 60 regulars now, with a goal of 200 this year",
  "Every run ends with coffee at Bean Counter Coffee in Old Fourth Ward",
  "Four pace groups: Walk, Social (about 12 minutes per mile), Steady (about 10) and Tempo (about 8 or faster)",
  "Water, shoes you can run in and a light for evening runs.",
  "No. Every run has a walk group and a social pace group.",
  "Tuesday",
  "6:30 PM",
  "Social Run",
  "3 miles",
  "Thursday",
  "Tempo Run",
  "5 miles",
  "Saturday",
  "8:00 AM",
  "Long Run",
  "6 to 10 miles",
  "Sunday",
  "9:00 AM",
  "Recovery Walk or Jog",
  "2 miles",
  "Eastside Trailhead",
  "Saturday, October 17",
  "Fall Kickoff Long Run",
  "Charity 5K for the Food Bank",
  "Saturday, October 31",
  "Costume Run",
  "Saturday, November 8",
  "Gear Swap and Brunch Run",
  "Saturday, November 14",
  "Turkey Trot Training Run",
  "Club shirt",
  "$25",
  "Club hat",
  "$18",
  "Jordan Reeves",
  "Founder",
  "Maya Okafor",
  "Pace Lead",
  "Chris Tran",
  "Safety Lead",
  "Lena Ruiz",
  "Owner, Bean Counter Coffee",
  "Pacer",
  "$150",
  "Logo on the website",
  "Mile Marker",
  "$400",
  "Logo on the website and a mention at one run",
  "Title Partner",
  "$900",
  "Logo on the website, run naming and a table at the Gear Swap",
  "partners@beltlinepace.example",
  "Do I need to be fast?",
  "Does it cost money?",
  "What should I bring?",
  "Join a Run",
  "$20",
  "November 8",
];

const content = readFileSync("lib/content.ts", "utf8");
const missing = required.filter((fact) => !content.includes(fact));
if (missing.length) {
  console.error("Missing packet strings in lib/content.ts:");
  for (const fact of missing) console.error(`- ${fact}`);
  process.exit(1);
}

const publicPages = [
  "app/page.tsx",
  "app/runs/page.tsx",
  "app/join/page.tsx",
  "app/partners/page.tsx",
  "app/gear/page.tsx",
  "components/SiteHeader.tsx",
  "components/SiteFooter.tsx",
  "components/CoffeeBand.tsx",
];

const forbidden = ["$20", "Panther Homecoming", "ATL Fall Fit", "View the Schedule", "See Today's Fit"];
for (const file of publicPages) {
  const source = readFileSync(file, "utf8");
  for (const phrase of forbidden) {
    if (source.includes(phrase)) {
      console.error(`${file} contains forbidden phrase: ${phrase}`);
      process.exit(1);
    }
  }
}

const routes = [
  "app/page.tsx",
  "app/runs/page.tsx",
  "app/join/page.tsx",
  "app/partners/page.tsx",
  "app/gear/page.tsx",
  "app/cover/page.tsx",
  "app/system/page.tsx",
  "app/decisions/page.tsx",
];
for (const route of routes) {
  if (!existsSync(route)) {
    console.error(`Missing route file: ${route}`);
    process.exit(1);
  }
}

if (!readFileSync("components/SiteHeader.tsx", "utf8").includes("Join a Run")) {
  console.error("Navigation is missing the Join a Run button.");
  process.exit(1);
}

console.log(`Fact check passed. ${required.length} packet strings locked.`);
