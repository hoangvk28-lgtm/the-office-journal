import type { ReviewCon } from "@/components/product/ProductReviewCard";

const B = "/images/media/guides/25-best-dorm-items-under-25";

export const guideSlug = "best-dorm-items-under-25";
export const guideTitle = "25 Best Dorm Items Under $25 (2026) -- Everything You Actually Need";
export const guideDescription =
  "25 high-impact, low-cost dorm essentials under $25 -- organized by category: power, sleep, bathroom, closet, desk, and storage. Focused on items freshmen actually miss.";
export const metaTitle = "25 Best Dorm Items Under $25 (2026)";
export const metaDescription = "25 essential dorm room items under $25 -- power, sleep, bathroom, closet, desk, and storage. Focused on high-impact items most freshmen miss before move-in day.";
export const lastUpdated = "2026-05-30";
export const readTime = "13 min";
export const heroImage = `${B}/1-anker-power-strip-6ac-4usb.webp`;

export type DormCategory = "power" | "sleep" | "bathroom" | "closet" | "desk" | "storage";

export interface DormItem {
  number: number;
  id: string;
  name: string;
  brand: string;
  category: DormCategory;
  price: string;
  amazonUrl: string;
  imageUrl: string;
  problemSolved: string;
  pros: string[];
  cons: ReviewCon[];
  reviewText: string[];
  specs: string[];
  chooseIf?: string;
}

export const items: DormItem[] = [
  {
    number: 1, id: "anker-power-strip", name: "Anker Power Strip -- 6 Outlets + 4 USB Ports, 5ft Cord",
    brand: "Anker", category: "power", price: "$19.99",
    amazonUrl: "https://www.amazon.com/dp/B0CKR7B9T9?tag=theofficejournal-20",
    imageUrl: `${B}/1-anker-power-strip-6ac-4usb.webp`,
    problemSolved: "Only 2 wall outlets for your entire room -- and your roommate also needs them.",
    pros: ["6 AC outlets + 2 USB-A + 2 USB-C (20W) -- both people can charge everything", "5ft flat-plug cord reaches desk from wall without blocking the second outlet", "300J surge protection -- important in older dorm buildings with unpredictable wiring"],
    cons: [{ text: "Takes up desk or floor space vs. a wall-mount extender", severity: "minor" }],
    reviewText: [
      "The power strip is the #1 priority purchase before move-in. Dorm rooms have 2 wall outlets for 2 people -- that's 4 plugs for a laptop, phone, monitor, desk lamp, fan, and charger. The math doesn't work without a strip. The Anker's 5ft cord is the right length for most dorm room layouts: it reaches from the wall outlet to the desk without needing a separate extension cord, which most schools prohibit.",
      "Anker specifically because surge protection matters. Dorm buildings have old wiring. A 300J surge protector is basic insurance for a $1,200 laptop. The USB-C 20W port charges a modern iPhone or Android at fast-charge speeds without occupying an AC outlet. Buy this before anything else.",
    ],
    specs: ["6 AC outlets | 2 USB-A + 2 USB-C (20W)", "5ft flat-plug cord | 300J surge protection"],
  },
  {
    number: 2, id: "nuozhi-wall-extender", name: "NUOZHI Wall Outlet Extender -- 6 Outlets + 4 USB",
    brand: "NUOZHI", category: "power", price: "$9.98",
    amazonUrl: "https://www.amazon.com/dp/B0FV356131?tag=theofficejournal-20",
    imageUrl: `${B}/2-nuozhi-wall-outlet-extender.webp`,
    problemSolved: "Your desk is directly next to the wall outlet and you don't want a cord running across the room.",
    pros: ["Plugs directly into wall -- no cord, no floor clutter", "6 AC + 2 USB-A + 2 USB-C from a single wall plate", "ETL certified -- safety-tested for use in institutional buildings"],
    cons: [{ text: "Only works if your outlet is near your bed or desk -- not for opposite-wall outlets", severity: "minor" }],
    reviewText: [
      "If your outlet happens to be near your desk or bed, the NUOZHI wall extender is neater than a floor-level power strip. It plugs directly into the wall and multiplies that outlet into 6 AC + 4 USB without a single cable on the floor. ETL certification means it's been independently safety-tested -- important in older campus buildings where cheap uncertified adapters are a real fire hazard.",
      "Choose this over the Anker strip (#1) when your outlet is within arm's reach of where you actually use power. If the outlet is on the opposite wall from your desk, the 5ft cord of the Anker strip is the right call instead.",
    ],
    specs: ["6 AC outlets | 2 USB-A + 2 USB-C", "Wall-mount, no cord | ETL certified"],
    chooseIf: "Your outlet is close to your desk or bed and you want zero floor cords.",
  },
  {
    number: 3, id: "addtam-lamp-strip", name: "Addtam LED Desk Lamp + Power Strip Combo",
    brand: "Addtam", category: "power", price: "$19.99",
    amazonUrl: "https://www.amazon.com/dp/B0D2LGK82V?tag=theofficejournal-20",
    imageUrl: `${B}/3-addtam-led-lamp-power-strip.webp`,
    problemSolved: "You need a desk lamp AND more outlets AND a USB charger but only have one outlet to spare.",
    pros: ["3-in-1: LED lamp + 3 AC outlets + 4 USB (2 USB-C) -- all from one outlet", "4 color modes, 5 brightness levels on the lamp", "Consolidates lamp + power strip + USB hub into one desk footprint"],
    cons: [{ text: "Fixed lamp position -- less flexible than a separate clip-on lamp", severity: "minor" }, { text: "AC outlets are on the base -- harder to reach than a floor strip", severity: "minor" }],
    reviewText: [
      "The Addtam solves a specific dorm desk problem: you have one outlet near your desk and you need a lamp, charging ports, and AC outlets simultaneously. Instead of three separate devices eating three outlet slots and three desk footprints, the Addtam does all three from a single plug. The lamp is genuinely good -- 4 color modes (warm to cool) and 5 brightness levels cover reading, studying, and ambient use.",
      "This works best when your desk has the outlet nearby and you want to minimize what's sitting on the surface. If your outlet is far from your desk and you need a longer cord, the Anker strip (#1) is more flexible. But if desk real estate is the constraint, consolidating three devices into one base is worth the trade-off.",
    ],
    specs: ["LED lamp: 4 modes, 5 brightness | 3 AC + 4 USB (2 USB-C)", "Single-outlet footprint | Touch control"],
  },
  {
    number: 4, id: "dline-cable-box-small-black", name: "D-Line Cable Management Box Small -- Black",
    brand: "D-Line", category: "storage", price: "$22.99",
    amazonUrl: "https://www.amazon.com/dp/B00846FO0I?tag=theofficejournal-20",
    imageUrl: `${B}/4-d-line-cable-box-small-black.webp`,
    problemSolved: "Your power strip and charger pile sits in a tangled mess on the floor or desk, visible in every video call.",
    pros: ["Hides power strip + adapter pile in a clean rectangular box", "2 cord routing openings keep cables organized", "Takes 30 seconds to set up -- no tools"],
    cons: [{ text: "Only fits power strips up to 10.5\" -- check your strip length first", severity: "minor" }],
    reviewText: [
      "This is the lowest-effort, highest-visual-impact purchase on this list. You put your power strip inside, route the cords through the side openings, and what was a floor-level cable tangle becomes a clean black box. The visual difference in your room -- and especially in video calls and photos -- is immediate. RA inspection note: a neat cord box signals awareness; a pile of cables on the floor sometimes gets flagged as a fire hazard.",
      "Buy the small version if your power strip is 10\" or under. If it's longer (most 6-outlet strips run 11-13\"), buy the large version (#24 on this list). The D-Line brand specifically because cheaper alternatives use thin plastic that cracks -- D-Line is made from impact-resistant ABS and holds up to repeated cord plugging and unplugging.",
    ],
    specs: ["Fits power strips up to 10.5\" | 2 cord entry/exit | 12.75\"x5\"x4.5\" | Black"],
  },
  {
    number: 5, id: "mattress-protector", name: "Waterproof Quilted Twin XL Mattress Protector",
    brand: "SureGuard", category: "sleep", price: "$24.99",
    amazonUrl: "https://www.amazon.com/dp/B09X11K2HC?tag=theofficejournal-20",
    imageUrl: `${B}/5-waterproof-twin-xl-mattress-protector.webp`,
    problemSolved: "Dorm mattresses are vinyl-covered institutional pads that crinkle every time you move and feel hot to sleep on.",
    pros: ["Adds ~2cm of soft quilted padding over the vinyl dorm mattress", "Eliminates the plastic-crinkle noise that disrupts sleep", "Waterproof barrier + dust mite protection", "Machine washable"],
    cons: [{ text: "Adds a fitted-sheet layer -- slightly more work when changing bedding", severity: "minor" }],
    reviewText: [
      "The most impactful comfort upgrade under $25. Dorm mattresses are vinyl-covered for cleaning convenience, which means they're hot, noisy, and uncomfortable without a layer between you and the surface. A quilted protector changes the feel of the bed immediately -- the padding softens the surface and the quilted top layer breathes instead of trapping heat. Most students who skip this buy one in a panic after the first week.",
      "Make sure you buy **Twin XL** (80\" long) and not standard Twin (75\" long). Most US dorm beds are extra-long and standard Twin sheets won't fit correctly. This is the single mistake most freshmen make with bedding. Check your school's housing FAQ to confirm -- 95% of US college dorm beds are Twin XL.",
    ],
    specs: ["Twin XL (fits 80\" dorm beds) | Waterproof | Fitted sheet design | Machine washable"],
  },
  {
    number: 6, id: "ginimax-bedside-caddy", name: "GINIMAX Bedside Caddy 23\"x12\"",
    brand: "GINIMAX", category: "sleep", price: "$14–$20",
    amazonUrl: "https://www.amazon.com/dp/B085ZGVYC8?tag=theofficejournal-20",
    imageUrl: `${B}/6-ginimax-bedside-caddy-23x12.webp`,
    problemSolved: "No nightstand in your dorm room -- phone, water, glasses, charger all end up on the floor or in your bed.",
    pros: ["Slides between mattress and bed frame -- no installation, no damage", "Multiple pockets: phone, water bottle, tablet, remote, book, cable", "23\"x12\" fits both Twin and Twin XL beds", "Accessible from either side of the bed"],
    cons: [{ text: "Needs 3-4\" of gap between mattress and frame to stay secure", severity: "minor" }],
    reviewText: [
      "Dorm rooms don't come with nightstands, and most don't have space for one. The GINIMAX caddy solves this with zero floor footprint: it tucks between the mattress and the bed frame and creates organized side pockets for everything you reach for in bed. Phone in the cup-holder pocket, water bottle in the large pocket, charger cable routed where you need it, book and glasses in the flat pockets.",
      "The 23\"x12\" size is the right proportion for a standard dorm bed -- large enough to hold everything without hanging loose. No installation means no damage to the room, and the whole thing packs flat when you move out. Students consistently rank this as one of the items they're most glad they brought after the first week.",
    ],
    specs: ["23\"x12\" | Slides between mattress + frame | Cup holder | Multiple pockets | No installation"],
  },
  {
    number: 7, id: "room-essentials-tote", name: "Room Essentials Multipurpose Organizer Tote",
    brand: "Room Essentials", category: "sleep", price: "$8–$14",
    amazonUrl: "https://www.amazon.com/dp/B0837ZBMGD?tag=theofficejournal-20",
    imageUrl: `${B}/7-room-essentials-organizer-tote.webp`,
    problemSolved: "Small items -- earbuds, lip balm, hair ties, phone accessories -- scatter across every surface with no dedicated home.",
    pros: ["Hanging loops attach to bunk rail, desk edge, or headboard", "Multiple pockets consolidate small-item clutter", "Machine washable | Compact footprint"],
    cons: [{ text: "Not designed for heavy items -- best for lightweight accessories", severity: "minor" }],
    reviewText: [
      "This is the catch-all for the category of small items that have nowhere to live in a dorm room. Earbuds, lip balm, hair ties, chapstick, a spare charger, pens -- these items end up scattered across every surface because they're too small to organize and too important to put away. The hanging tote gives them a single home attached to your bed frame or desk edge.",
      "It's not a premium product, but it doesn't need to be. The fabric is washable, the hanging loops work on standard metal dorm bed frames, and the multiple pockets keep different categories of items separated. At under $12, it's an easy purchase that eliminates a genuinely annoying daily friction.",
    ],
    specs: ["Multiple pockets | Hanging loops | Machine washable | Compact"],
  },
  {
    number: 8, id: "bunk-bed-hooks", name: "Ciieeo Dorm Bunk Bed Shelf Hooks 2-Pack",
    brand: "Ciieeo", category: "sleep", price: "$20.49",
    amazonUrl: "https://www.amazon.com/dp/B0F4MCHF5L?tag=theofficejournal-20",
    imageUrl: `${B}/8-ciieeo-bunk-bed-shelf-hooks-2-pack.webp`,
    problemSolved: "On a top bunk, you have zero surface storage -- phone, water, and lamp are all on the floor far below you.",
    pros: ["Clips to standard metal bunk bed rail -- no tools, no damage", "Creates a small shelf platform within arm's reach", "2-pack covers both sides of the bed"],
    cons: [{ text: "Designed for standard metal rails -- may not fit all bunk frame types", severity: "minor" }],
    reviewText: [
      "This is specifically for anyone assigned to the top bunk, which is roughly half of all freshmen in double rooms. The top bunk has zero surface storage within reach -- your phone, water bottle, and bedside lamp are all on the floor six feet below you. These hooks clip onto the metal rail of your bunk frame and create a small platform you can reach from bed without climbing down.",
      "Simple solution, immediate impact. You don't realize how many times you reach for your phone in the middle of the night until you're on a top bunk and it requires a full dismount. The 2-pack covers both sides so you can put your phone on one side and your water on the other.",
    ],
    specs: ["2-pack | Clips to standard metal bunk rail | No tools | Holds phone, bottle, small lamp"],
    chooseIf: "You're assigned to the top bunk -- which you won't know until move-in day, so bring these anyway.",
  },
  {
    number: 9, id: "white-noise-machine", name: "Magicteam White Noise Machine -- 20 Sounds, 32 Volumes",
    brand: "Magicteam", category: "sleep", price: "$21.84",
    amazonUrl: "https://www.amazon.com/dp/B07RWRJ4XW?tag=theofficejournal-20",
    imageUrl: `${B}/9-magicteam-white-noise-machine.webp`,
    problemSolved: "Your roommate stays up late, the hallway never quiets down, and you can't fall asleep without your home environment.",
    pros: ["20 non-looping sounds (white noise, fan, rain, brown noise)", "32 volume levels -- fine-tune to your exact noise environment", "Memory function remembers your last settings | USB or AC powered"],
    cons: [{ text: "Doesn't block sound -- masks it. Won't help with very loud neighbors", severity: "minor" }],
    reviewText: [
      "White noise machines don't block sound -- they mask it. The mechanism: your brain treats unpredictable noise (footsteps, a door slamming, a conversation in the hall) as potential alerts that interrupt sleep. Consistent background audio at the right volume gives your brain something to filter continuously, which stops those random sounds from registering as interruptions. Studies on sleep in shared-housing environments consistently show this approach works within 2-3 nights.",
      "At 32 volume levels, you can calibrate this to your specific noise environment rather than using a fixed setting. The 20 non-looping sounds prevent the subtle repetition artifacts that cheaper machines produce. USB or AC powered means it runs off your power strip. Memory function means you don't re-set it every night. This is the purchase that pays for itself in GPA.",
    ],
    specs: ["20 non-looping sounds | 32 volume levels | USB or AC | Memory function | Sleep timer"],
  },
  {
    number: 10, id: "command-shower-caddy", name: "Command Shower Caddy with Water-Resistant Strips",
    brand: "Command (3M)", category: "bathroom", price: "$17.98",
    amazonUrl: "https://www.amazon.com/dp/B09WBS7RLQ?tag=theofficejournal-20",
    imageUrl: `${B}/10-command-shower-caddy.webp`,
    problemSolved: "Carrying shampoo and body wash to the communal shower in your arms -- and occasionally leaving something behind.",
    pros: ["Water-resistant adhesive strips -- rated for shower humidity, won't fail in steam", "Holds shampoo, conditioner, body wash, razor", "Removes clean from shower tile at move-out (no damage)"],
    cons: [{ text: "Needs 1 hour to cure before loading -- don't rush the installation", severity: "minor" }],
    reviewText: [
      "Standard suction-cup caddies fall off at 3am when the shower steam has built up for hours. Command's water-resistant strips are specifically formulated for humid environments and rated for this use case -- they don't fail the way regular adhesive fails in moisture. The caddy holds the full set of shower products for one person: shampoo, conditioner, body wash, face wash, and a razor.",
      "Installation: clean the tile with rubbing alcohol, let dry, attach strips, press firmly for 30 seconds, wait 1 hour before loading. Removal: pull the tab at a 45-degree angle slowly. When done correctly, Command strips remove without taking paint or tile finish with them -- which matters at move-out when the room is inspected.",
    ],
    specs: ["Water-resistant adhesive | Holds full shower product set | Damage-free mounting | Frosted clear"],
  },
  {
    number: 11, id: "command-bath-hook", name: "Command Bath Multi-Hook -- Towel & Robe, Water-Resistant",
    brand: "Command (3M)", category: "bathroom", price: "$6–$10",
    amazonUrl: "https://www.amazon.com/dp/B00HCP7MNE?tag=theofficejournal-20",
    imageUrl: `${B}/11-command-bath-multi-hook.webp`,
    problemSolved: "No hook in the shower stall for your towel -- which means your towel goes on the floor or over the door precariously.",
    pros: ["5 lb capacity -- holds towel, robe, loofa", "Water-resistant strip rated for shower humidity", "Works on tile, fiberglass, glass, and most shower surfaces"],
    cons: [{ text: "5 lb limit -- one towel or robe only, not multiple heavy items", severity: "minor" }],
    reviewText: [
      "This is the smallest purchase on this list with the most immediate daily impact. A towel hook in the shower stall means your towel is within reach after you rinse off -- not draped over a door or on the floor. In a communal bathroom with 10+ people sharing facilities, having your own hook on your assigned stall wall is a genuine quality-of-life improvement.",
      "Same installation process as the shower caddy -- water-resistant strip, clean surface, 1-hour cure time, slow 45-degree removal. The 5 lb rating comfortably holds a standard bath towel or robe. Buy one per person if you share a shower stall with a roommate.",
    ],
    specs: ["5 lb capacity | Water-resistant | Works on tile/fiberglass/glass | Damage-free"],
  },
  {
    number: 12, id: "command-caddy-hanger", name: "Command Caddy Hanger 7.5lb -- Versatile Organizer",
    brand: "Command (3M)", category: "bathroom", price: "$8–$12",
    amazonUrl: "https://www.amazon.com/dp/B00HCQN6RE?tag=theofficejournal-20",
    imageUrl: `${B}/12-command-caddy-hanger-7.5lb.webp`,
    problemSolved: "You need a second caddy for backup shower items, or a bathroom counter organizer for toiletries.",
    pros: ["7.5 lb capacity -- handles heavy shampoo bottles", "Water-resistant adhesive | Multi-purpose beyond just shower use", "White finish blends with most bathroom surfaces"],
    cons: [{ text: "Larger profile than the #10 caddy -- needs more wall space", severity: "minor" }],
    reviewText: [
      "The higher capacity (7.5 lbs vs. 5 lbs on the shower caddy) makes this the right choice for anyone with a heavy shampoo or conditioner collection. It can also serve a second function outside the shower: mounted on the wall next to a sink as a counter organizer for face wash, lotion, and other daily-use items that clutter a shared bathroom counter.",
      "The Command water-resistant strip system is consistent across all three bathroom items (#10, #11, #12) -- same installation, same removal process, same compatibility with standard dorm bathroom surfaces. Buying all three creates a complete organized bathroom setup without drilling a single hole.",
    ],
    specs: ["7.5 lb capacity | Water-resistant | Multi-purpose | White finish"],
    chooseIf: "You want a larger capacity caddy or need an organizer outside the shower.",
  },
  {
    number: 13, id: "amazon-basics-velvet-hangers", name: "Amazon Basics Slim Velvet Hangers 50-Pack",
    brand: "Amazon Basics", category: "closet", price: "$20.98",
    amazonUrl: "https://www.amazon.com/dp/B00FXNAAW2?tag=theofficejournal-20",
    imageUrl: `${B}/13-amazon-basics-velvet-hangers-50-pack.webp`,
    problemSolved: "A 24\" dorm closet rod fits maybe 20-25 plastic hangers -- not enough for a semester's worth of clothes.",
    pros: ["2mm slim profile (vs 5-7mm plastic) -- fits 50-70% more clothes on the same rod", "Non-slip velvet surface keeps clothes from falling overnight", "50 hangers covers most dorm wardrobes for a full semester"],
    cons: [{ text: "No integrated pants bar -- clothes with waistbands need to be folded over", severity: "minor" }],
    reviewText: [
      "Switching from plastic to velvet hangers is one of the highest-ROI purchases in this entire list. Plastic hangers are 5-7mm thick; velvet hangers are 2-3mm. On a 24\" closet rod with 25 items, switching to velvet effectively adds 10-15 more hanger positions -- roughly 50% more capacity from the same rod with zero additional hardware.",
      "The 50-pack is the right quantity for one person's semester wardrobe. If you arrive and realize you need more, the HOUSE DAY 60-pack (#22) or ZOBER with pants bar (#14) are the follow-up options. Amazon Basics velvet hangers specifically because the hook is coated (won't rust) and the velvet is thicker than the cheapest alternatives that shed after a month.",
    ],
    specs: ["50-pack | 2mm slim | Non-slip velvet | 360° swivel hook | Shoulder notches"],
  },
  {
    number: 14, id: "zober-velvet-hangers", name: "ZOBER Velvet Hangers 50-Pack -- with Pants Bar",
    brand: "ZOBER", category: "closet", price: "$25.99",
    amazonUrl: "https://www.amazon.com/dp/B01IRHUV6A?tag=theofficejournal-20",
    imageUrl: `${B}/14-zober-velvet-hangers-50-pack.webp`,
    problemSolved: "Same as #13 -- but you have pants, jeans, skirts, or scarves that need the integrated bar.",
    pros: ["Integrated notched pants bar on every hanger", "Same slim 2mm profile as the Amazon Basics", "10 lb weight capacity -- handles heavier jeans and trousers"],
    cons: [{ text: "Pants bar adds slight bulk -- marginally less slim than #13", severity: "minor" }],
    reviewText: [
      "Identical function to the Amazon Basics (#13) with one practical addition: every hanger has an integrated bar at the bottom for hanging pants folded in half or draping skirts. If more than a third of your wardrobe is pants, jeans, or skirts, the ZOBER is the better choice -- the bar prevents clothes from slipping off the smooth velvet surface that shirt shoulders grip well but waistbands don't.",
      "The 10 lb rating handles the heaviest denim without the bar bending over time. Choose #13 if you have mostly shirts and dresses. Choose the ZOBER if you have a pants-heavy wardrobe.",
    ],
    specs: ["50-pack | Pants/skirt bar | 10 lb capacity | 360° swivel | Non-slip velvet"],
    chooseIf: "You have more pants, jeans, or skirts than shirts in your wardrobe.",
  },
  {
    number: 15, id: "onlyeasy-under-bed-shoes", name: "Onlyeasy Under-Bed Shoe Storage, Set of 2",
    brand: "Onlyeasy", category: "storage", price: "$15.19",
    amazonUrl: "https://www.amazon.com/dp/B07VBJ5MSH?tag=theofficejournal-20",
    imageUrl: `${B}/15-onlyeasy-under-bed-shoe-storage-2-pack.webp`,
    problemSolved: "Shoes pile up on the closet floor and open room floor, eating precious space in a 150 sq ft room.",
    pros: ["Holds 24 pairs total (12 per bag) -- clears the entire shoe pile off the floor", "Clear top window -- see contents without pulling the bag out", "Flat 5.9\" profile fits under most dorm beds with standard 10-12\" clearance"],
    cons: [{ text: "Linen material is lightweight -- not ideal for very heavy boots", severity: "minor" }],
    reviewText: [
      "The under-bed zone is the largest unused storage space in a typical dorm room -- roughly 25-30 cubic feet of clearance under a standard raised dorm bed that most students leave completely empty. Two flat linen bags that together hold 24 pairs of shoes clear the entire floor-level shoe pile and reclaim meaningful open floor space in an already tight room.",
      "The clear top window is a genuinely useful design detail: you can see every pair without pulling the bags out, which means you actually use this storage rather than avoiding it because you can't find anything. The bags are flat enough (5.9\") to slide under beds with standard 10-12\" clearance. If you add bed risers later, you unlock even more under-bed capacity for bigger storage bins.",
    ],
    specs: ["Set of 2 | 24 pairs total | Clear window | 29.3\"x23.6\"x5.9\" | Breathable linen"],
  },
  {
    number: 16, id: "under-bed-600d-shoes", name: "Under Bed Shoe Storage 600D, 16-Pair",
    brand: "WUFFEL", category: "storage", price: "$14.39",
    amazonUrl: "https://www.amazon.com/dp/B08BND9MDS?tag=theofficejournal-20",
    imageUrl: `${B}/16-under-bed-shoe-storage-600d-16-pair.webp`,
    problemSolved: "Same as #15, but you have heavier footwear -- boots, sneakers, men's shoes -- that stress lighter material.",
    pros: ["600D tear-resistant fabric handles boots, heavy sneakers, men's larger sizes", "Extra-strong zipper rated for repeated heavy-load use", "Lower capacity (16 pairs) but significantly more durable per pair"],
    cons: [{ text: "Lower capacity than the Onlyeasy 2-pack (#15)", severity: "minor" }],
    reviewText: [
      "The 600D designation refers to denier -- a measure of fabric thread density. Standard linen-style bags (like #15) are fine for lighter footwear but can deform or zipper-fail under repeated loading of heavy boots or large sneakers. The 600D material is the same weight class used for backpacks and outdoor bags -- it handles the weight without sagging.",
      "Choose this over #15 if you have boots, heavier athletic shoes, or men's size 10+ footwear. The slightly lower capacity (16 pairs vs. 24 pairs) is offset by the durability difference on heavy-use footwear.",
    ],
    specs: ["16-pair | 600D tear-resistant | Extra-strong zipper | Fits men's and women's"],
    chooseIf: "You have boots, heavy sneakers, or men's shoes -- the linen-style bags deform under heavy footwear.",
  },
  {
    number: 17, id: "dpower-clip-lamp", name: "Dpower 48-LED Clip-On Desk Lamp",
    brand: "Dpower", category: "desk", price: "$11.00",
    amazonUrl: "https://www.amazon.com/dp/B08T24FJC9?tag=theofficejournal-20",
    imageUrl: `${B}/17-dpower-48-led-clip-on-desk-lamp.webp`,
    problemSolved: "Dorm overhead lighting casts shadows directly on your desk, making reading and writing uncomfortable after an hour.",
    pros: ["48 LEDs for even, diffused light -- no harsh spotlight effect", "10 brightness levels × 3 color modes (warm/neutral/cool)", "USB powered -- runs off power strip, no outlet consumed | Zero desk footprint (clips to edge)"],
    cons: [{ text: "USB only -- needs a USB port on your power strip or hub", severity: "minor" }],
    reviewText: [
      "Dorm overhead lighting is a single fluorescent panel positioned for room illumination, not desk task lighting. It creates shadows exactly where you're writing and can't be dimmed or color-adjusted. A clip-on desk lamp solves this with targeted task light at the exact angle you need it, without consuming any desk surface -- it clamps to the back edge and disappears.",
      "The 48-LED panel distributes light more evenly than single-bulb clip lamps, which create a harsh spotlight effect in the middle and fall off at the edges. 3 color modes mean you can use warm white for late-night reading (less melatonin disruption) and neutral or cool for afternoon study sessions. USB power means one fewer outlet slot consumed.",
    ],
    specs: ["48 LEDs | 10 brightness × 3 color modes | USB powered | 360° gooseneck | Clips to desk"],
  },
  {
    number: 18, id: "small-desk-mat", name: "Small Desk Mat / Mouse Pad 10\"x12\"",
    brand: "Generic", category: "desk", price: "$8–$12",
    amazonUrl: "https://www.amazon.com/dp/B0827NT4KZ?tag=theofficejournal-20",
    imageUrl: `${B}/18-small-desk-mat-10x12.webp`,
    problemSolved: "Institutional desk laminate is rough on your wrist, scratches, and makes mouse tracking inconsistent.",
    pros: ["Protects desk surface (important for move-out inspection)", "Smooth mouse tracking surface eliminates optical skipping", "10x12\" fits any desk without taking over the surface"],
    cons: [{ text: "Very basic -- no premium material or full-desk coverage", severity: "minor" }],
    reviewText: [
      "The 10x12\" mat covers the mouse and immediate wrist zone without consuming visible desk area on an already tight dorm desk. It protects the desk surface from scratches -- relevant at move-out when surface damage gets charged against your deposit. Most institutional desk surfaces are composite laminate that optical mice occasionally skip on; the mat surface solves this immediately.",
      "This is the entry-level desk mat. If you want full-surface coverage and a premium aesthetic, check the full guide at workcocoon.com/guide/best-desk-mat-for-small-desk. For a dorm setup where the goal is functional and minimal, the 10x12\" covers what you need.",
    ],
    specs: ["10\"x12\" | PU surface | Non-slip back | Multiple color options"],
  },
  {
    number: 19, id: "one-beat-lamp-strip", name: "One Beat LED Desk Lamp + Power Strip Combo",
    brand: "One Beat", category: "desk", price: "$18.99",
    amazonUrl: "https://www.amazon.com/dp/B0CRY97FPB?tag=theofficejournal-20",
    imageUrl: `${B}/19-one-beat-led-lamp-power-strip.webp`,
    problemSolved: "Same as the Addtam (#3) -- lamp + outlets + USB from one plug. Alternative if the Addtam's layout doesn't fit your desk.",
    pros: ["4-mode LED lamp + 3 AC outlets + 4 USB (2 USB-C) -- all from one outlet", "5ft cord reaches from wall to desk", "Different lamp head orientation from Addtam -- fits different desk layouts"],
    cons: [{ text: "Similar trade-offs to #3 -- base-positioned outlets, less lamp flexibility", severity: "minor" }],
    reviewText: [
      "The One Beat is the alternative to the Addtam (#3) when the Addtam's lamp head or outlet positioning doesn't work with your specific desk layout. Both solve the same problem -- lamp + power from one plug -- with slightly different form factors. The One Beat's 5ft cord gives it more flexibility than the Addtam's shorter cord if your outlet is across the room.",
      "If you're choosing between the two: buy the Addtam first. If the outlet position or lamp arm angle doesn't suit your setup, return it and try the One Beat. Both are under $25 and solve identical problems.",
    ],
    specs: ["LED lamp: 4 modes, 5 brightness | 3 AC + 4 USB (2 USB-C) | 5ft cord | White"],
    chooseIf: "The Addtam (#3) doesn't fit your desk layout -- this is the alternative with a different form factor.",
  },
  {
    number: 20, id: "dline-cable-box-white", name: "D-Line Cable Management Box Small -- White",
    brand: "D-Line", category: "storage", price: "$22.99",
    amazonUrl: "https://www.amazon.com/dp/B00846E7JW?tag=theofficejournal-20",
    imageUrl: `${B}/20-d-line-cable-box-white.webp`,
    problemSolved: "Same as #4 (black), but your desk or power strip is white and the black box stands out visually.",
    pros: ["Identical function to #4 in white finish", "Blends with white desks and light-colored rooms", "Same cord management openings and capacity"],
    cons: [{ text: "White shows dust more than black -- needs occasional wiping", severity: "minor" }],
    reviewText: [
      "Same product as #4 in white. If your desk, bed frame, or room aesthetic is light-colored -- which describes most IKEA dorm setups -- the white version integrates more cleanly than the black. The functional spec is identical: fits power strips up to 10.5\", two cord routing openings, impact-resistant ABS.",
      "Choose black (#4) for dark desks or if you want the box to recede visually. Choose white (#20) if your setup is light-colored and you want the box to blend rather than contrast.",
    ],
    specs: ["Fits strips up to 10.5\" | 2 cord openings | 12.75\"x5\"x4.5\" | White"],
    chooseIf: "Your desk and room are light-colored -- white blends better than black.",
  },
  {
    number: 21, id: "laopao-lamp-charger-clock", name: "LAOPAO Desk Lamp + Wireless Charger + Clock -- 3-in-1",
    brand: "LAOPAO", category: "desk", price: "$23.49",
    amazonUrl: "https://www.amazon.com/dp/B08BL9DWXJ?tag=theofficejournal-20",
    imageUrl: `${B}/21-laopao-desk-lamp-charger-clock.webp`,
    problemSolved: "Lamp + wireless charger + alarm clock taking up three separate desk spots and three separate outlet slots.",
    pros: ["3-in-1: adjustable LED lamp + 10W Qi wireless charger + LCD clock (time/temp/date)", "Single USB plug powers all three functions", "Foldable design compresses flat for transport | Multiple color temperatures"],
    cons: [{ text: "10W Qi only -- works for Qi-compatible phones, not MagSafe 15W", severity: "minor" }, { text: "Clock display is small -- not ideal as a primary alarm clock", severity: "minor" }],
    reviewText: [
      "The LAOPAO consolidates three separate desk accessories -- a lamp, a wireless phone charger, and a digital clock -- into a single device with one USB connection. On a small dorm desk where every square inch is contested, replacing three items with one is a meaningful footprint reduction. The 10W Qi pad handles fast charging for most Android phones and standard 7.5W for iPhone.",
      "Worth the slight price premium over a basic lamp if you have a Qi-compatible phone and currently have a separate charger and clock on your desk. The LCD display shows time, temperature, and date -- functional as a secondary reference, though the small display isn't ideal as a primary alarm clock. Pair with the phone alarm as backup.",
    ],
    specs: ["LED lamp + 10W Qi charger + LCD clock | Foldable | USB powered | Multiple color temps"],
    chooseIf: "You have a Qi-compatible phone and want to eliminate your charger + lamp + clock from three separate desk spots.",
  },
  {
    number: 22, id: "house-day-velvet-hangers", name: "HOUSE DAY Velvet Hangers 60-Pack",
    brand: "HOUSE DAY", category: "closet", price: "$28.48",
    amazonUrl: "https://www.amazon.com/dp/B07GYLFFVR?tag=theofficejournal-20",
    imageUrl: `${B}/22-house-day-velvet-hangers-60-pack.webp`,
    problemSolved: "You need more than 50 hangers, or you want to split a pack with your roommate.",
    pros: ["60 hangers -- 10 more than the standard 50-packs at similar price", "Heavy-duty up to 11 lbs per hanger", "Galvanized hook won't rust | 360° rotation"],
    cons: [{ text: "No integrated pants bar -- same limitation as the Amazon Basics", severity: "minor" }],
    reviewText: [
      "The HOUSE DAY 60-pack is the value pick: more hangers per dollar than either 50-pack option, with the same slim 2mm profile and non-slip velvet surface. The galvanized (zinc-coated) hook resists rust, which matters in humid dorm environments -- cheap hooks oxidize and can stain light-colored clothes.",
      "Buy this if your wardrobe is larger than 50 items, or if you and your roommate want to split one pack 30/30. At 11 lbs per hanger, it handles heavy coats and thick sweaters without bending.",
    ],
    specs: ["60-pack | 11 lb capacity | Galvanized hook | 360° | Non-slip velvet | Black"],
    chooseIf: "You have more than 50 items or want to split a pack with your roommate.",
  },
  {
    number: 23, id: "homyfort-under-bed-shoes", name: "homyfort Under-Bed Shoe Storage Set of 2",
    brand: "homyfort", category: "storage", price: "$18.99",
    amazonUrl: "https://www.amazon.com/dp/B07G78X321?tag=theofficejournal-20",
    imageUrl: `${B}/23-homyfort-under-bed-shoe-storage-2-pack.webp`,
    problemSolved: "Same as #15, but you need a stiffer construction that holds its shape when you push it in and pull it out repeatedly.",
    pros: ["Stiffer sidewalls maintain shape through repeated in/out use", "Same 24-pair capacity as #15", "Breathable material | Clear top window"],
    cons: [{ text: "Marginally less flexible than the Onlyeasy for low-clearance beds", severity: "minor" }],
    reviewText: [
      "The homyfort solves the one weakness of the Onlyeasy (#15): the linen-style bags tend to collapse when you pull them out repeatedly, making it harder to reload them without reshaping the sides. The homyfort uses a slightly stiffer construction that holds its rectangular shape through daily use -- relevant if you're rotating shoes frequently rather than using this as seasonal storage.",
      "Choose #15 (Onlyeasy) if you want the lightest, most packable option. Choose #23 (homyfort) if you're accessing the bags daily and want them to stay structured.",
    ],
    specs: ["Set of 2 | 24 pairs | Stiffer construction | Breathable | 28\"x19\"x5.5\""],
    chooseIf: "You pull the bags out daily -- the stiffer sides hold shape better under repeated use.",
  },
  {
    number: 24, id: "dline-cable-box-large-black", name: "D-Line Cable Management Box Large -- Black",
    brand: "D-Line", category: "storage", price: "$27.99",
    amazonUrl: "https://www.amazon.com/dp/B00B1EO1Z4?tag=theofficejournal-20",
    imageUrl: `${B}/24-d-line-cable-box-large-black.webp`,
    problemSolved: "Your power strip is longer than 10.5\" and doesn't fit the small D-Line box (#4).",
    pros: ["Fits power strips up to 14\" -- covers most 6-outlet and 8-outlet strips", "Higher profile fits USB brick adapters alongside the strip", "Same clean exterior and cord routing as the small version"],
    cons: [{ text: "Larger footprint than the small version -- needs more floor or desk space", severity: "minor" }],
    reviewText: [
      "Most standard 6-outlet power strips are 11-13\" long -- which is just over the 10.5\" limit of the small D-Line box. If you have a longer strip (measure it before ordering), the large version is the right call. It has a higher interior profile that also fits most USB adapter bricks alongside the strip, so you can contain the entire charging setup -- strip, bricks, and cables -- in one clean box.",
      "Same quality, same design language as the small version. The footprint is larger but still compact enough for a desk corner or floor position. Buy small (#4 or #20) if your strip is 10\" or under; buy large (#24) if it's 11\"+ (most are).",
    ],
    specs: ["Fits strips up to 14\" | Higher profile | 2 cord openings | Black"],
    chooseIf: "Your power strip is longer than 10.5\" -- most 6-outlet strips are 11-13\".",
  },
  {
    number: 25, id: "utopia-velvet-hangers", name: "Utopia Home Velvet Hangers 50-Pack -- with Pants Bar",
    brand: "Utopia Home", category: "closet", price: "$21.99",
    amazonUrl: "https://www.amazon.com/dp/B01G3WS3PW?tag=theofficejournal-20",
    imageUrl: `${B}/25-utopia-home-velvet-hangers-50-pack.webp`,
    problemSolved: "You want both a pants bar AND the smoothest swivel hook available at this price range.",
    pros: ["Integrated pants bar on every hanger -- for pants, skirts, scarves", "360° swivel hook -- smoothest rotation at this price point", "Holds up to 10 lbs | Non-slip velvet surface"],
    cons: [{ text: "Pants bar adds marginal bulk compared to shirt-only slim hangers", severity: "minor" }],
    reviewText: [
      "The Utopia is the third velvet hanger option for users who want both pants bar AND the best-quality swivel hook in this price range. The ZOBER (#14) has a pants bar but a standard swivel; the Utopia's hook rotates more smoothly -- relevant if you use a closet system where you frequently pull individual hangers from a packed rod.",
      "If your wardrobe is primarily pants/skirts and you find yourself frustrated pulling hangers out one at a time, the smooth rotation makes a small but real daily difference. For most students, the Amazon Basics (#13) or ZOBER (#14) is sufficient. The Utopia is for those who specifically want both features.",
    ],
    specs: ["50-pack | Pants bar | 360° smooth swivel | 10 lb capacity | Non-slip velvet"],
    chooseIf: "You want a pants bar AND the smoothest swivel hook -- best for pants-heavy wardrobes.",
  },
];

export const categories: Array<{ id: DormCategory; label: string; emoji: string; range: string; color: { bg: string; text: string; border: string } }> = [
  { id: "power",    label: "Power & Charging",       emoji: "⚡", range: "Items 1–4",   color: { bg: "#f7f0e3", text: "#b45309", border: "#fcd34d" } },
  { id: "sleep",    label: "Sleep & Bedside",         emoji: "🛏️", range: "Items 5–9",   color: { bg: "#eef2e8", text: "#5c6f4b", border: "#bfdbfe" } },
  { id: "bathroom", label: "Bathroom",                emoji: "🚿", range: "Items 10–12", color: { bg: "#eef3e7", text: "#48602f", border: "#bbf7d0" } },
  { id: "closet",   label: "Closet & Laundry",        emoji: "👗", range: "Items 13–16", color: { bg: "#fdf4ff", text: "#7e22ce", border: "#e9d5ff" } },
  { id: "desk",     label: "Desk & Study",            emoji: "📚", range: "Items 17–21", color: { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa" } },
  { id: "storage",  label: "Storage & Organization",  emoji: "📦", range: "Items 22–25", color: { bg: "#f6f1e9", text: "#63635a", border: "#e6ddd0" } },
];

export const problemsTable = [
  { problem: "\"There are only 2 outlets in my entire room\"", category: "Power & Charging" },
  { problem: "\"I can't sleep -- my roommate stays up late\"", category: "Sleep & Bedside" },
  { problem: "\"Shared bathrooms are chaotic\"", category: "Bathroom" },
  { problem: "\"My closet is tiny\"", category: "Closet & Laundry" },
  { problem: "\"My desk is always a mess\"", category: "Desk & Study" },
  { problem: "\"I have nowhere to put anything\"", category: "Storage & Organization" },
];

export const priorityOrder = [
  { priority: "Buy immediately (1)", items: "Power strip (#1 or #2)", why: "Nothing works without power management" },
  { priority: "Buy immediately (2)", items: "Mattress protector (#5)", why: "Sleep quality is non-negotiable from night one" },
  { priority: "Buy immediately (3)", items: "Velvet hangers (#13 or #14)", why: "Closet is unusable without them" },
  { priority: "Buy before move-in", items: "Bedside caddy (#6), white noise machine (#9)", why: "You'll discover you need these on night one" },
  { priority: "Buy after arrival", items: "Bathroom items (#10–12)", why: "See your actual bathroom layout first" },
  { priority: "Buy after settling in", items: "Desk items (#17–21)", why: "Assess your actual study setup and outlet situation" },
];

export const faq: Array<{ q: string; a: string }> = [
  { q: "What's the single most important item to bring to a dorm?", a: "A power strip with USB ports. Dorm rooms universally have too few outlets, and this creates immediate friction for charging, desk lamps, and fans. Fix this first." },
  { q: "Is a white noise machine actually worth it for a dorm?", a: "Yes -- if you're a light sleeper or moving from a quiet home environment. Dorm hallways produce unpredictable noise from 8am to 2am on any given weekday. Predictable background audio helps your brain stop treating random sounds as alerts. Most students who try one report measurable improvement within 2-3 nights." },
  { q: "Do I need Twin or Twin XL for a dorm?", a: "Almost always Twin XL. US college dorm beds are typically 80\" (extra long) vs. standard Twin which is 75\". Default to Twin XL -- check your school's housing FAQ to confirm, but 95% of US dorm beds are Twin XL." },
  { q: "Can I use Command strips to mount things in a dorm room?", a: "Yes -- Command brand is the standard recommendation for dorms. Designed for damage-free mounting on painted walls and tile. The water-resistant versions (#10-12) are specifically rated for bathroom humidity. Always remove by pulling the tab at 45° slowly to avoid paint damage." },
  { q: "What's the most underrated dorm essential?", a: "The mattress protector (#5). Most freshmen skip it, sleep on a bare institutional vinyl mattress for a week, then buy one in a panic. It changes both comfort and hygiene immediately -- and it's under $25." },
  { q: "Do dorms allow surge protectors?", a: "Most US colleges require surge-protected power strips and prohibit non-surge-protected extension cords. The Anker strip (#1) includes 300J surge protection and is compliant with standard dorm policies. Check your specific school's policy for wattage limits." },
];
