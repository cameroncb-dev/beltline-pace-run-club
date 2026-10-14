# BeltLine Pace Run Club

Option A for the ColorStack Tech League Design Derby. This is a five-page site for a fictional Atlanta run club. Facts, prices, dates, and the schedule come from the client packet. Headlines, layout, and voice are original.

The tagline is **Show up. We will pace you.**

## Run it

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317) if you start the dev server with `--port 4317`. The default Next.js port is 3000.

```bash
npm run dev -- --port 4317
```

`npm run check` confirms the packet strings are still in `lib/content.ts` and that visitor pages do not show the conflicting $20 shirt price.

`npm run lint` runs ESLint.

## Pages

| Route | Who it is for |
| --- | --- |
| `/` | Nervous first timer. Join a Run, pace groups, this week. |
| `/runs` | Regular runner. Weekly schedule and special runs. |
| `/join` | What it costs, what to bring, which pace group. |
| `/partners` | Three package prices, leaders, partner email. |
| `/gear` | Club shirt $25, club hat $18. |
| `/cover` | Option, visitor, goal, roles, and the 3-minute script. |
| `/system` | Colors, type, shared components, live button-color edit. |
| `/decisions` | Conflicts, decisions, and a content checklist. |

## Before you present

Team name: Hackologists. Cameron is Design Lead, Yiqi is Page Designer, David is Product Researcher, and Kennedy is Content and Accessibility Researcher.

Start the walkthrough on `/cover` by saying you picked Option A. Then open Home and click through the nav. Join a Run is in the navigation on every page.

## If the client update arrives

Do not edit five pages by hand.

1. Change the affected fact in `lib/content.ts`.
2. If they want a banner, set `clientUpdate.active` to `true` and write `clientUpdate.message`.
3. If they want a new button color, change `--sunrise` in `app/globals.css`, or use the live edit on `/system`.

Keep Asphalt text on yellow buttons. White on `#FFC93C` is 1.54 to 1 and fails the packet contrast rule.

## Brand notes that are easy to defend

- Button fill is Sunrise Yellow `#FFC93C`. Label color is Asphalt `#1E2A32` (9.54 to 1), not white.
- Fonts are Oswald Bold and Open Sans Regular only.
- Shirt price on the site is $25. Jordan's email said $20. That conflict is decision 1.
- Saturday, October 17 lists two specials at the same time and place. Both are shown.
- Saturday, November 8 is printed as written and flagged in the decision log.
