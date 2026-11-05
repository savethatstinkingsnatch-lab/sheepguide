export type SeasonId = "winter" | "spring" | "summer" | "fall";

export type YearTask = {
  id: string;
  label: string;
  detail: string;
};

export type Season = {
  id: SeasonId;
  title: string;
  north: string;
  south: string;
  blurb: string;
  tasks: YearTask[];
};

export const SEASONS: Season[] = [
  {
    id: "winter",
    title: "Winter",
    north: "December – February",
    south: "June – August",
    blurb: "Feed is the job. Late pregnancy and cold rain punish thin ewes and bad shelter.",
    tasks: [
      {
        id: "winter-bcs",
        label: "Score body condition",
        detail: "Hands on the loin, not a glance from the lane. Aim near a 3 before lambing, closer to 3.5 for ewes carrying twins.",
      },
      {
        id: "winter-hay",
        label: "Weigh a day’s hay once",
        detail: "Most people overestimate flakes. Late gestation needs more energy in the last four to six weeks — add it slowly.",
      },
      {
        id: "winter-water",
        label: "Break ice every day",
        detail: "A ewe who cannot drink will not eat. Check heaters and hoses before the cold snap, not during it.",
      },
      {
        id: "winter-jugs",
        label: "Build or bed the jugs",
        detail: "Panels, a heat lamp only if you know the fire risk, iodine, colostrum supplies, and a notebook in the barn.",
      },
      {
        id: "winter-cdt",
        label: "CDT the ewes before lambing",
        detail: "Typically two to four weeks ahead, so antibodies reach the colostrum. Follow the label and your vet, not a rumor.",
      },
      {
        id: "winter-shelter",
        label: "Walk the windward wall",
        detail: "Dry bedding and a draft at sheep height are different things. Ventilation up high, stillness down low.",
      },
    ],
  },
  {
    id: "spring",
    title: "Spring",
    north: "March – May",
    south: "September – November",
    blurb: "Lambs, mud, and the first grass. The pretty part is also when mistakes show up.",
    tasks: [
      {
        id: "spring-bond",
        label: "Keep new pairs in a jug",
        detail: "A day or three until the lamb nurses and the ewe talks to it. Ear-tag or note who belongs to whom before turnout.",
      },
      {
        id: "spring-navel",
        label: "Dip navels and watch navels",
        detail: "Iodine early. A wet, swollen navel a few days later is a reason to call, not to wait for the weekend.",
      },
      {
        id: "spring-grass",
        label: "Turn out gradually",
        detail: "Sudden lush pasture bloats and scours. A few hours, then home to hay, until rumens catch up.",
      },
      {
        id: "spring-coccidia",
        label: "Watch lambs for coccidia",
        detail: "Dark, straining scours in lambs around three to eight weeks, often after stress. It is a management and vet problem, not a weather story.",
      },
      {
        id: "spring-shear",
        label: "Shear before the heat",
        detail: "Or at least crutch udders and docks before lambing if you lamb later. Book the shearer in winter.",
      },
      {
        id: "spring-feet",
        label: "Trim feet while they are in",
        detail: "Mud season hides rot. Smell the hoof. One lame sheep is a flock problem until you prove otherwise.",
      },
    ],
  },
  {
    id: "summer",
    title: "Summer",
    north: "June – August",
    south: "December – February",
    blurb: "Parasites peak when the grass is shortest and the lambs are heaviest.",
    tasks: [
      {
        id: "summer-famacha",
        label: "FAMACHA on a schedule",
        detail: "Lower eyelid color, learned from a trained person. It tracks barber-pole anemia — not every worm, and not a guess from a photo.",
      },
      {
        id: "summer-rest",
        label: "Rest paddocks",
        detail: "Leave residual grass. Grazing to the dirt invites larvae and weak plants. Move water with the flock.",
      },
      {
        id: "summer-shade",
        label: "Shade and extra water",
        detail: "Wool is insulation both ways, but a freshly shorn sheep can sunburn, and an unshorn one can overheat without air.",
      },
      {
        id: "summer-fly",
        label: "Check docks for flystrike",
        detail: "Daily in humid weather if anyone is dirty behind. Shear, crutch, and treat early. Maggots do not wait.",
      },
      {
        id: "summer-wean",
        label: "Plan weaning",
        detail: "Often 60–90 days, when lambs are eating forage or creep well. Dry the ewes off grain and richer pasture for a few days.",
      },
      {
        id: "summer-weeds",
        label: "Walk for toxic plants",
        detail: "Wilted cherry, yew, rhododendron, oleander, and bracken are the usual villains. Fence lines grow what the pasture does not.",
      },
    ],
  },
  {
    id: "fall",
    title: "Fall",
    north: "September – November",
    south: "March – May",
    blurb: "Breeding season for most flocks, and the last chance to put on cheap grass before hay.",
    tasks: [
      {
        id: "fall-flush",
        label: "Flush only the ewes who need it",
        detail: "A rising plane of feed for two weeks before rams can lift ovulation in thinner ewes. Fat ewes do not need the extra.",
      },
      {
        id: "fall-ram",
        label: "Sound the ram before turnout",
        detail: "Feet, body condition, and a look at the testes. One mature ram per about thirty ewes, fewer ewes per ram lamb.",
      },
      {
        id: "fall-mark",
        label: "Mark breedings",
        detail: "A raddle or crayon harness, color changed every 17 days. Repeating marks mean she did not settle.",
      },
      {
        id: "fall-feet2",
        label: "Hooves before the mud returns",
        detail: "Trim ahead of breeding so a lame ram is not your breeding program.",
      },
      {
        id: "fall-replacements",
        label: "Choose replacements on purpose",
        detail: "Keep daughters of ewes who lambed easily, milked, and stayed healthy. Cute is not a selection index.",
      },
      {
        id: "fall-hay-test",
        label: "Test or at least judge the hay",
        detail: "Leafy green grass hay, not yellow stems. If you can, a forage test tells you whether grain is even necessary.",
      },
    ],
  },
];

export const TASK_COUNT = SEASONS.reduce((sum, season) => sum + season.tasks.length, 0);
