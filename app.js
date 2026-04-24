"use strict";

const PHRASE_GROUPS = {
  "Everyday Objects": [
    "BRAND NEW NOTEBOOK",
    "SECRET INGREDIENT",
    "BROKEN COMPASS",
    "LAST PUZZLE PIECE",
    "SILVER POCKET WATCH",
    "WARM WINTER COAT",
    "PERFECT PASSWORD",
    "HANDWRITTEN LETTER",
    "LUCKY PENNY",
    "GLASS OF LEMONADE",
    "STACK OF POSTCARDS",
    "WELL WORN MAP",
    "VINTAGE RECORD PLAYER",
    "REMOTE CONTROL",
    "PAPER AIRPLANE",
    "PAIR OF SUNGLASSES",
    "GLOWING EXIT SIGN",
    "BOX OF SPARE KEYS",
    "FRESH PAINTBRUSH",
    "MORNING NEWSPAPER",
    "WOODEN TOY TRAIN",
    "QUIET ALARM CLOCK",
    "BLUE RIBBON",
    "FULL BATTERY",
    "MAGIC EIGHT BALL"
  ],
  "Destinations & Venues": [
    "CORNER BOOKSTORE",
    "SUNNY BOARDWALK",
    "CITY PLANETARIUM",
    "QUIET MOUNTAIN CABIN",
    "LOCAL FARMERS MARKET",
    "CANDLELIT RESTAURANT",
    "AIRPORT TERMINAL",
    "HIDDEN COURTYARD",
    "COMMUNITY THEATER",
    "ROOFTOP GARDEN",
    "END OF THE TRAIL",
    "NEIGHBORHOOD BAKERY",
    "OLD TRAIN STATION",
    "BEACHFRONT HOTEL",
    "PUBLIC LIBRARY",
    "BUSY SUBWAY PLATFORM",
    "COUNTY FAIRGROUNDS",
    "DESERT HIGHWAY",
    "SCHOOL GYMNASIUM",
    "RIVERSIDE CAMPSITE",
    "ICE CREAM PARLOR",
    "HISTORIC LIGHTHOUSE",
    "BASEMENT WORKSHOP",
    "TINY ISLAND CAFE",
    "MAIN STREET DINER"
  ],
  "What Are You Doing?": [
    "SOLVING A MYSTERY",
    "PACKING FOR VACATION",
    "MAKING A WISH",
    "CATCHING THE LAST TRAIN",
    "LEARNING A NEW SONG",
    "BUILDING A TREEHOUSE",
    "WATCHING THE SUNSET",
    "WRITING THANK YOU NOTES",
    "SETTING THE TABLE",
    "CHASING A DREAM",
    "TAKING A SCENIC ROUTE",
    "BAKING CHOCOLATE COOKIES",
    "PRACTICING CARD TRICKS",
    "PLANTING SPRING FLOWERS",
    "READING BETWEEN THE LINES",
    "TUNING A GUITAR",
    "CLEANING OUT THE GARAGE",
    "COUNTING DOWN THE SECONDS",
    "DRAWING A TREASURE MAP",
    "LAUGHING AT AN OLD JOKE",
    "JUMPING INTO THE POOL",
    "SINGING IN HARMONY",
    "WRAPPING A BIRTHDAY GIFT",
    "SEARCHING FOR CLUES",
    "TAKING A VICTORY LAP"
  ],
  "Before & After": [
    "CUP OF TEA PARTY",
    "PAPER TRAIL MIX",
    "MOVIE STAR GAZING",
    "BIRTHDAY CAKE WALK",
    "SCHOOL BUS DRIVER",
    "SNOW DAY PLANNER",
    "ROCK BAND PRACTICE",
    "FAMILY TREE HOUSE",
    "DINNER TABLE TENNIS",
    "COFFEE BREAK DANCING",
    "GOLDEN GATE KEEPER",
    "PIZZA DELIVERY ROOM",
    "RAINBOW TROUT FISHING",
    "CAMP FIRE DRILL",
    "CHECKER BOARD GAME",
    "FORTUNE COOKIE JAR",
    "HONEY BEE KEEPER",
    "TRAFFIC JAM SESSION",
    "GARDEN PARTY FAVOR",
    "SILVER SCREEN DOOR",
    "PILLOW FIGHT SONG",
    "BUBBLE BATH ROBE",
    "TENNIS COURT REPORTER",
    "CANDLE STICK FIGURE",
    "STORY BOOK CLUB"
  ],
  "Food & Drink": [
    "CARAMEL APPLE CIDER",
    "SPICY STREET TACOS",
    "LEMON BLUEBERRY PANCAKES",
    "BOWL OF TOMATO SOUP",
    "GRILLED CHEESE SANDWICH",
    "MINT CHOCOLATE CHIP",
    "FRESH SQUEEZED ORANGE JUICE",
    "GARLIC BUTTER NOODLES",
    "CRANBERRY WALNUT SALAD",
    "SLICE OF KEY LIME PIE",
    "CINNAMON FRENCH TOAST",
    "HONEY GLAZED CARROTS",
    "STRAWBERRY RHUBARB JAM",
    "CUP OF HOT COCOA",
    "ROASTED VEGETABLE PIZZA",
    "PEANUT BUTTER FUDGE",
    "SWEET CORN CHOWDER",
    "MANGO LASSI",
    "APPLE CIDER DOUGHNUTS",
    "AVOCADO BREAKFAST TOAST",
    "CHERRY VANILLA SODA",
    "BLACK BEAN BURRITO",
    "PINEAPPLE FRIED RICE",
    "RASPBERRY ICED TEA",
    "CLASSIC BANANA SPLIT"
  ],
  "People & Roles": [
    "FRIENDLY TOUR GUIDE",
    "TEAM CAPTAIN",
    "LOCAL NEWS ANCHOR",
    "SUBSTITUTE TEACHER",
    "MASTER CARPENTER",
    "LEAD SINGER",
    "RETIRED ASTRONAUT",
    "NIGHT SHIFT NURSE",
    "CHESS GRANDMASTER",
    "TOWN HISTORIAN",
    "ROOKIE DETECTIVE",
    "CLASS VALEDICTORIAN",
    "PATIENT DOG TRAINER",
    "BRIDE'S BEST FRIEND",
    "CHEERFUL BARISTA",
    "WEATHER REPORTER",
    "QUICK THINKING PILOT",
    "FAMILY PHOTOGRAPHER",
    "FAMOUS PLAYWRIGHT",
    "CAMP COUNSELOR",
    "SKILLED GLASSBLOWER",
    "HOST OF THE PARTY",
    "KINDHEARTED NEIGHBOR",
    "LEAGUE COMMISSIONER",
    "BOLD STREET MAGICIAN"
  ],
  "Happenings": [
    "SURPRISE BIRTHDAY PARTY",
    "OPENING NIGHT PREMIERE",
    "MIDNIGHT MOVIE MARATHON",
    "ANNUAL CHILI COOK OFF",
    "BACKYARD WEDDING",
    "FOURTH OF JULY PARADE",
    "FAMILY GAME NIGHT",
    "SCIENCE FAIR FINALS",
    "SUNRISE YOGA CLASS",
    "BIG COMPANY PICNIC",
    "WINTER COAT DRIVE",
    "SCHOOL TALENT SHOW",
    "NEIGHBORHOOD BLOCK PARTY",
    "CHAMPIONSHIP MATCH",
    "BLACK TIE FUNDRAISER",
    "SPRING ART WALK",
    "WEEKEND ROAD RALLY",
    "HOLIDAY COOKIE SWAP",
    "LIVE RADIO BROADCAST",
    "COUNTY SPELLING BEE",
    "ROOFTOP DINNER",
    "GRAND REOPENING",
    "CHARITY FUN RUN",
    "FINAL CURTAIN CALL",
    "LAST MINUTE CELEBRATION"
  ],
  "Fun & Games": [
    "CHARADES IN THE LIVING ROOM",
    "PERFECT BOWLING SCORE",
    "MINIATURE GOLF COURSE",
    "LASER TAG CHAMPION",
    "FINAL BOSS BATTLE",
    "FRIENDLY CARD GAME",
    "CHECKMATE IN THREE MOVES",
    "JIGSAW PUZZLE TABLE",
    "DOUBLE DUTCH JUMP ROPE",
    "CAPTURE THE FLAG",
    "WATER BALLOON TOSS",
    "BONUS ROUND",
    "HIGH SCORE SCREEN",
    "ROLLER SKATING NIGHT",
    "TRIVIA TEAM NAME",
    "WINNING LOTTERY TICKET",
    "HIDE AND SEEK SPOT",
    "FOUR SQUARE TOURNAMENT",
    "FOAM DART BLASTER",
    "ARCADE TOKEN CUP",
    "BOARD GAME CAFE",
    "SPEED CHESS CLOCK",
    "KARAOKE DUET",
    "GAME WINNING SHOT",
    "FRISBEE GOLF DISC"
  ],
  "In the Kitchen": [
    "PREHEATING THE OVEN",
    "SHARP CHEF'S KNIFE",
    "MEASURING CUPS AND SPOONS",
    "CAST IRON SKILLET",
    "SIMMERING SAUCEPAN",
    "FLOUR ON THE COUNTER",
    "SPICE RACK",
    "BUBBLING CASSEROLE",
    "WHISK IN A BOWL",
    "COOKIE SHEET",
    "FULL DISHWASHER",
    "CUTTING BOARD",
    "JAR OF PICKLES",
    "RECIPE BOX",
    "ROLLING PIN",
    "BREAKFAST NOOK",
    "STACK OF MIXING BOWLS",
    "KITCHEN TIMER",
    "COOLING RACK",
    "COFFEE GRINDER",
    "BASKET OF MUFFINS",
    "SILVERWARE DRAWER",
    "LOAF OF SOURDOUGH",
    "TEA KETTLE",
    "CLEAN APRON"
  ],
  "On the Map": [
    "GREAT SALT LAKE",
    "ROUTE SIXTY SIX",
    "ROCKY MOUNTAINS",
    "NEW ORLEANS JAZZ CLUBS",
    "FLORIDA KEYS",
    "SAN FRANCISCO BAY",
    "APPALACHIAN TRAIL",
    "CHICAGO RIVERWALK",
    "OREGON COAST",
    "AUSTIN FOOD TRUCKS",
    "GRAND CANYON",
    "SEATTLE FERRY TERMINAL",
    "MISSISSIPPI DELTA",
    "NASHVILLE MUSIC ROW",
    "BADLANDS",
    "BOSTON PUBLIC GARDEN",
    "LAS VEGAS STRIP",
    "SANTA FE PLAZA",
    "BLUE RIDGE PARKWAY",
    "BROOKLYN BRIDGE PARK",
    "OUTER BANKS",
    "DENVER UNION STATION",
    "SONORAN DESERT",
    "PORTLAND ROSE GARDEN",
    "UPPER PENINSULA"
  ],
  "Before & After: Bonus Round": [
    "DINING ROOM SERVICE",
    "COFFEE TABLE TENNIS",
    "PAPER CLIP ART",
    "CANDLE LIGHT DINNER",
    "PICTURE FRAME OF MIND",
    "BASKET CASE STUDY",
    "SAND BOX OFFICE",
    "BOWLING ALLEY CAT",
    "MORNING STAR FRUIT",
    "SILVER LINING ROOM",
    "CORN DOG WALKER",
    "CHICKEN SOUP KITCHEN",
    "PHOTO FINISH LINE",
    "BOOK MARK TWAIN",
    "GARDEN HOSE DOWN",
    "PENCIL SHARPENER IMAGE",
    "ICE CREAM SOCIAL MEDIA",
    "TABLE OF CONTENTS PAGE",
    "SUN FLOWER ARRANGEMENT",
    "POST OFFICE PARTY",
    "JELLY BEAN COUNTER",
    "TRAIN STATION WAGON",
    "LIGHT BULB MOMENT",
    "CARD SHARK TANK",
    "WINDOW SHOPPING CART"
  ],
  "Around the House": [
    "FRONT PORCH SWING",
    "FRESHLY MADE BED",
    "LAUNDRY BASKET",
    "SQUEAKY FLOORBOARD",
    "HALL CLOSET",
    "COZY READING CHAIR",
    "GARAGE DOOR OPENER",
    "STACK OF THROW PILLOWS",
    "MEDICINE CABINET",
    "FLICKERING LAMP",
    "BACKYARD PATIO",
    "FAMILY PHOTO WALL",
    "LINEN CLOSET",
    "FULL RECYCLING BIN",
    "WINDOW SEAT",
    "HOUSEPLANT ON THE SILL",
    "ATTIC STAIRCASE",
    "BASKET OF BLANKETS",
    "DINING ROOM TABLE",
    "MUDROOM BENCH",
    "BASEMENT FREEZER",
    "RAINY DAY UMBRELLA",
    "DOORBELL CHIME",
    "FRESH DOORMAT",
    "LIVING ROOM RUG"
  ],
  "Science & Nature": [
    "LUNAR ECLIPSE",
    "NORTHERN LIGHTS",
    "TIDE POOL",
    "MILKY WAY GALAXY",
    "ROLLING THUNDERSTORM",
    "WATER CYCLE",
    "FOSSILIZED FOOTPRINT",
    "RINGS OF SATURN",
    "HONEYCOMB PATTERN",
    "SPEED OF SOUND",
    "FIELD OF WILDFLOWERS",
    "DEEP SEA TRENCH",
    "SOLAR POWERED ROVER",
    "MIGRATION ROUTE",
    "MAGNETIC COMPASS NEEDLE",
    "FIRST SPRING BUDS",
    "VOLCANIC ASH CLOUD",
    "HUMAN SKELETON",
    "DOUBLE RAINBOW",
    "FOREST CANOPY",
    "METEOR SHOWER",
    "FROST LINE",
    "POLISHED GEODE",
    "JET STREAM",
    "TINY SEEDLING"
  ],
  "Show Business": [
    "STANDING OVATION",
    "OPENING MONOLOGUE",
    "BACKSTAGE PASS",
    "DIRECTOR'S CHAIR",
    "SOLD OUT CONCERT",
    "RED CARPET ARRIVAL",
    "DRAMATIC PAUSE",
    "CLOSING CREDITS",
    "MATINEE PERFORMANCE",
    "COSTUME DEPARTMENT",
    "LAUGH TRACK",
    "ENCORE SONG",
    "CAMERA OPERATOR",
    "STUNT DOUBLE",
    "SCRIPT READ THROUGH",
    "MAKEUP TRAILER",
    "BOX OFFICE HIT",
    "FINAL SCENE",
    "LIVE STUDIO AUDIENCE",
    "SOUND BOOTH",
    "FAMOUS CAMEO",
    "CAST PARTY",
    "QUICK COSTUME CHANGE",
    "STAGE MANAGER",
    "GOLDEN SPOTLIGHT"
  ],
  "Common Sayings": [
    "BETTER LATE THAN NEVER",
    "BREAK THE ICE",
    "CALL IT A DAY",
    "CUT TO THE CHASE",
    "EASIER SAID THAN DONE",
    "EVERY CLOUD HAS A SILVER LINING",
    "GO THE EXTRA MILE",
    "HIT THE GROUND RUNNING",
    "KEEP YOUR EYES PEELED",
    "LEAVE NO STONE UNTURNED",
    "MAKE A LONG STORY SHORT",
    "NO NEWS IS GOOD NEWS",
    "ONCE IN A BLUE MOON",
    "PRACTICE MAKES PERFECT",
    "READ THE ROOM",
    "SAVE IT FOR A RAINY DAY",
    "TAKE IT WITH A GRAIN OF SALT",
    "THE BALL IS IN YOUR COURT",
    "THE BEST OF BOTH WORLDS",
    "THROW CAUTION TO THE WIND",
    "UNDER THE WIRE",
    "WHEN PUSH COMES TO SHOVE",
    "YOU CAN SAY THAT AGAIN",
    "ZIP YOUR LIP",
    "A PIECE OF CAKE"
  ],
  "Office Life": [
    "MONDAY MORNING MEETING",
    "SHARED CALENDAR INVITE",
    "BREAK ROOM FRIDGE",
    "FRESH POT OF COFFEE",
    "QUARTERLY REPORT",
    "COLOR CODED SPREADSHEET",
    "PRINTER PAPER TRAY",
    "FRIENDLY STATUS UPDATE",
    "CONFERENCE ROOM TABLE",
    "QUICK BRAINSTORM",
    "OUT OF OFFICE REPLY",
    "WHITEBOARD MARKER",
    "TEAM LUNCH ORDER",
    "POLISHED SLIDE DECK",
    "ELEVATOR PITCH",
    "STACK OF STICKY NOTES",
    "DESK DRAWER SNACK",
    "VIDEO CALL BACKGROUND",
    "PROJECT KICKOFF",
    "TIDY EMAIL INBOX",
    "OFFICE NAMEPLATE",
    "FIRM HANDSHAKE",
    "DEADLINE EXTENSION",
    "SHARED DRIVE FOLDER",
    "LAST DONUT"
  ],
  "Travel & Leisure": [
    "WINDOW SEAT VIEW",
    "HOTEL LOBBY PIANO",
    "PASSPORT STAMP",
    "SCENIC OVERLOOK",
    "WEEKEND GETAWAY",
    "TRAIN DINING CAR",
    "PACKED BEACH BAG",
    "WALKING TOUR GUIDE",
    "SOUVENIR MAGNET",
    "BOARDING ANNOUNCEMENT",
    "SUNSCREEN REMINDER",
    "CITY BIKE RENTAL",
    "HARBOR BOAT RIDE",
    "MUSEUM AUDIO TOUR",
    "MAP WITH FOLDED CORNERS",
    "AIRBNB LOCKBOX",
    "ROADSIDE ATTRACTION",
    "RESORT POOL DECK",
    "CAMERA MEMORY CARD",
    "LAST FLIGHT HOME",
    "TRAIL MIX BAG",
    "LATE CHECKOUT",
    "POSTCARD STAMP",
    "RENTAL CAR COUNTER",
    "PERFECT TRAVEL DAY"
  ],
  "Tech & Gadgets": [
    "WIRELESS EARBUDS",
    "SMART HOME SPEAKER",
    "FOLDING PHONE SCREEN",
    "PASSWORD MANAGER",
    "MECHANICAL KEYBOARD",
    "PORTABLE CHARGER",
    "NOISE CANCELING HEADPHONES",
    "DIGITAL PHOTO FRAME",
    "FITNESS TRACKER",
    "TOUCHSCREEN GLOVES",
    "SOLAR PHONE CHARGER",
    "GAMING LAPTOP",
    "BLUETOOTH CAR ADAPTER",
    "STREAMING STICK",
    "VIRTUAL REALITY HEADSET",
    "ROBOT VACUUM",
    "SMARTWATCH ALARM",
    "TABLET STYLUS",
    "CABLE MANAGEMENT BOX",
    "WEBCAM PRIVACY COVER",
    "WIRELESS MOUSE PAD",
    "DIGITAL LEVEL",
    "USB-C DOCKING STATION",
    "MINI PROJECTOR",
    "BACKLIT DESK LAMP"
  ],
  "Sports & Outdoors": [
    "PICKUP BASKETBALL GAME",
    "WALK OFF HOME RUN",
    "MOUNTAIN BIKE TRAIL",
    "TENNIS PRACTICE WALL",
    "PERFECT FREE THROW",
    "CAMPFIRE STORY NIGHT",
    "KAYAK PADDLE STROKES",
    "BACKYARD BADMINTON NET",
    "FRESH POWDER SKI RUN",
    "MARATHON FINISH LINE",
    "SOCCER CORNER KICK",
    "FLY FISHING CAST",
    "ROCK CLIMBING HARNESS",
    "DISC GOLF COURSE",
    "BASEBALL SCORECARD",
    "TRAILHEAD SIGN",
    "VOLLEYBALL SERVE",
    "WATERPROOF TENT",
    "CROSS COUNTRY MEET",
    "SNOWBOARD HALFPIPE",
    "PADDLEBOARD BALANCE",
    "GOLF CART PATH",
    "BOWLING LEAGUE NIGHT",
    "RAIN DELAY",
    "ULTIMATE FRISBEE POINT"
  ],
  "Book Nook": [
    "MYSTERY NOVEL TWIST",
    "DOG EARED PAGE",
    "LIBRARY DUE DATE",
    "SIGNED FIRST EDITION",
    "CHAPTER ONE",
    "PAPERBACK SPINE",
    "FANTASY MAP INSERT",
    "POETRY COLLECTION",
    "BOOK CLUB DISCUSSION",
    "QUIET READING CORNER",
    "HARDCOVER DUST JACKET",
    "CHARACTER ARC",
    "SCIENCE FICTION SERIES",
    "LIBRARIAN'S CART",
    "MARGINAL NOTES",
    "BEDTIME STORY",
    "PLOT TWIST REVEAL",
    "NEW BOOK SMELL",
    "AUTHOR Q AND A",
    "WELL TIMED BOOKMARK",
    "HISTORICAL FICTION SAGA",
    "COZY MYSTERY",
    "SHORT STORY ANTHOLOGY",
    "READING CHALLENGE",
    "USED BOOKSTORE FIND"
  ],
  "Music & Sound": [
    "VINYL RECORD CRACKLE",
    "PERFECT HARMONY",
    "BASS GUITAR RIFF",
    "METRONOME CLICK",
    "DRUM SOLO FINALE",
    "JAZZ PIANO TRIO",
    "ACOUSTIC OPEN MIC",
    "WHISTLED MELODY",
    "SYNTHESIZER PAD",
    "BRASS SECTION",
    "MIXING BOARD FADER",
    "CROWD SINGALONG",
    "ORCHESTRA TUNING NOTE",
    "CASSETTE TAPE",
    "GARAGE BAND REHEARSAL",
    "CATCHY CHORUS",
    "MUSIC BOX WALTZ",
    "FIDDLE TUNE",
    "SUBWOOFER RUMBLE",
    "SOUND CHECK",
    "CHOIR PRACTICE ROOM",
    "LO-FI BEAT",
    "SAXOPHONE SOLO",
    "PICCOLO HIGH NOTE",
    "STUDIO HEADPHONE MIX"
  ],
  "Tiny Disasters": [
    "SPILLED COFFEE ON A WHITE SHIRT",
    "MISSING LEFT SOCK",
    "CRACKED PHONE SCREEN",
    "BURNT TOAST SMELL",
    "FORGOTTEN UMBRELLA",
    "JAMMED DESK DRAWER",
    "OVERFLOWING JUNK EMAIL",
    "WOBBLY CAFE TABLE",
    "FLAT SODA CAN",
    "LOST PARKING TICKET",
    "TANGLED HEADPHONE CORD",
    "SMUDGED WET PAINT",
    "EMPTY TAPE DISPENSER",
    "BROKEN PENCIL TIP",
    "MYSTERY FREEZER BURN",
    "SOGGY CEREAL BOWL",
    "UNSAVED DOCUMENT",
    "SQUEAKY SHOPPING CART",
    "CROOKED PICTURE FRAME",
    "FROZEN LOADING SCREEN",
    "DROPPED ICE CREAM CONE",
    "WRINKLED GIFT WRAP",
    "MISPLACED TV REMOTE",
    "LEAKY WATER BOTTLE",
    "STICKY KITCHEN FLOOR"
  ],
  "Impossible Errands": [
    "RETURNING A CLOUD",
    "BORROWING MOONLIGHT",
    "DELIVERING SILENCE",
    "FINDING LOST MONDAY",
    "POLISHING A SHADOW",
    "MAILING A THUNDERCLAP",
    "MEASURING A DAYDREAM",
    "FILING SNOWFLAKES",
    "CATCHING A SUNBEAM",
    "UNPACKING A RAINBOW",
    "PAINTING THE WIND",
    "COUNTING EVERY RAINDROP",
    "REPAIRING A WISH",
    "FOLDING A MIRAGE",
    "CHASING TOMORROW",
    "CHARGING A FIREFLY",
    "VACUUMING A BEACH",
    "TUNING A DOORBELL ECHO",
    "DELIVERING A SECRET",
    "IRONING A MAP",
    "UNSCRAMBLING AN EGG",
    "BOTTLING A LAUGH",
    "REWINDING A SUNSET",
    "SORTING STARLIGHT",
    "FINDING THE BOTTOM OF A LOOP"
  ],
  "Secret Menu": [
    "MIDNIGHT WAFFLE STACK",
    "DRAGON FRUIT FLOAT",
    "MAPLE BACON MILKSHAKE",
    "PICKLE BRINE POPCORN",
    "HONEY LIME FRIES",
    "CHILI MANGO LEMONADE",
    "PEANUT BUTTER RAMEN",
    "BLACKBERRY BASIL SODA",
    "CINNAMON ROLL BURGER",
    "GINGER PEACH TEA",
    "CARAMEL PRETZEL PIE",
    "SPICY PINEAPPLE TACOS",
    "ROSEMARY CHOCOLATE COOKIE",
    "GARLIC PARMESAN DOUGHNUT",
    "COCONUT CURRY NACHOS",
    "VANILLA CHAI PANCAKES",
    "SRIRACHA HONEY BISCUITS",
    "BLUEBERRY BBQ SLIDERS",
    "LEMON PEPPER WAFFLES",
    "TOASTED MARSHMALLOW LATTE",
    "RASPBERRY JALAPENO JAM",
    "MISO CARAMEL SUNDAE",
    "CHEDDAR APPLE EMPANADA",
    "MINT LIME COLA",
    "BROWN SUGAR TATER TOTS"
  ],
  "Absurd Paperwork": [
    "MOONLIGHT IMPORT PERMIT",
    "SANDWICH ASSEMBLY LICENSE",
    "RAINBOW STORAGE RECEIPT",
    "CLOUD OWNERSHIP FORM",
    "SIDEWALK CHALK APPLICATION",
    "LAUGHTER NOISE COMPLAINT",
    "TIME TRAVEL EXPENSE REPORT",
    "INVISIBLE INK CERTIFICATE",
    "DAYDREAM SAFETY WAIVER",
    "CONFETTI CLEANUP NOTICE",
    "PUDDLE DEPTH SURVEY",
    "SUNBEAM TRANSFER REQUEST",
    "SHADOW LENGTH AUDIT",
    "PILLOW FORT BUILDING CODE",
    "LUCKY PEN INSPECTION",
    "WISH FULFILLMENT CLAIM",
    "ELEVATOR MUSIC PERMIT",
    "SPARE BUTTON INVENTORY",
    "BUBBLE WRAP RELEASE FORM",
    "MIDNIGHT SNACK RECEIPT",
    "LOST IDEA REPORT",
    "RAIN DELAY EXCUSE NOTE",
    "BLANK PAGE AUTHORIZATION",
    "WEEKEND EXTENSION REQUEST",
    "OFFICIAL NAP SCHEDULE"
  ],
  "Weather Report": [
    "SCATTERED GLITTER SHOWERS",
    "MORNING FOG BANK",
    "LATE AFTERNOON THUNDER",
    "HIGH CHANCE OF CONFETTI",
    "SIDEWAYS RAIN GUSTS",
    "DRIZZLE AFTER MIDNIGHT",
    "COLD FRONT ARRIVAL",
    "HEAT WAVE WARNING",
    "PATCHY ROOFTOP FROST",
    "SUNBREAK OVER DOWNTOWN",
    "HUMID EVENING AIR",
    "FLASH FLOOD WATCH",
    "LAKE EFFECT SNOW",
    "DUST DEVIL CROSSING",
    "RAINBOW AFTER THE STORM",
    "CLEAR SKIES BY NOON",
    "SPARKLING ICE PELLETS",
    "WIND CHILL FACTOR",
    "SUNNY WITH SPRINKLES",
    "BAROMETER ON THE RISE",
    "THICK CLOUD COVER",
    "MUGGY SUMMER NIGHT",
    "FROSTY WINDSHIELD MORNING",
    "LIGHTNING OVER THE HILLS",
    "PERFECT PICNIC FORECAST"
  ],
  "Museum Oddities": [
    "TINY GOLDEN SHOVEL",
    "CLOCKWORK BUTTERFLY",
    "ANCIENT LUNCHBOX",
    "VELVET ROPE MAZE",
    "GLASS CASE OF BUTTONS",
    "DINOSAUR TOOTHBRUSH",
    "PAINTING WITH MOVING EYES",
    "CURSED TEACUP",
    "MOON ROCK PAPERWEIGHT",
    "VICTORIAN SELFIE STICK",
    "BRONZE BANANA STATUE",
    "WHISPERING MUMMY MASK",
    "MINIATURE CASTLE KEY",
    "FOSSILIZED SANDWICH",
    "SILVER SPOON COLLECTION",
    "MYSTERY HALLWAY PORTRAIT",
    "JELLYBEAN COLOR WHEEL",
    "RARE INVISIBLE INK",
    "CERAMIC SPACE HELMET",
    "MEDIEVAL GARDEN GNOME",
    "GLOWING MAP ROOM",
    "TAPESTRY OF BAD IDEAS",
    "PRESIDENTIAL PAPER CLIP",
    "ROMAN VENDING TOKEN",
    "POLISHED METEORITE SLICE"
  ],
  "Neighborhood Legends": [
    "GARAGE BAND GHOST",
    "MIDNIGHT SPRINKLER MYSTERY",
    "BICYCLE PARADE CHAMPION",
    "COOKIE RECIPE RIVALRY",
    "HAUNTED TREEHOUSE",
    "MAILBOX WITH A SECRET",
    "SIDEWALK CHALK PROPHECY",
    "OLD OAK TREASURE MAP",
    "PORCH LIGHT SIGNAL",
    "BASEMENT ARCADE RUMOR",
    "ROOFTOP TELESCOPE CLUB",
    "MYSTERY LAWN ORNAMENT",
    "FRIDAY NIGHT FIREWORKS",
    "BACK ALLEY MURAL",
    "SNOW DAY FORTRESS",
    "BLOCK PARTY DJ",
    "DOG WALKING MAYOR",
    "HIDDEN GARDEN GATE",
    "TOWNHOUSE TIME CAPSULE",
    "SKATEBOARD HILL RECORD",
    "CARDBOARD BOAT REGATTA",
    "DINER BOOTH POET",
    "LOCAL LEMONADE TYCOON",
    "CURB ALERT SOFA",
    "COMMUNITY POOL LEGEND"
  ],
  "Cosmic Errands": [
    "MARTIAN GROCERY LIST",
    "ORBITAL LOST AND FOUND",
    "SATELLITE OIL CHANGE",
    "LUNAR LIBRARY CARD",
    "COMET TAIL BRAID",
    "NEBULA PAINT SAMPLE",
    "ASTEROID MOVING DAY",
    "ZERO GRAVITY LAUNDRY",
    "VENUS WEATHER BALLOON",
    "PLUTO POSTCARD STAMP",
    "JUPITER STORM WARNING",
    "STARDUST VACUUM BAG",
    "ROCKET SHIP CAR WASH",
    "MOON BASE POTLUCK",
    "ALIEN TRANSLATION APP",
    "SOLAR FLARE SUNGLASSES",
    "GALAXY TOUR BROCHURE",
    "SPACE ELEVATOR MUSIC",
    "MERCURY TRAFFIC REPORT",
    "BLACK HOLE BOOKMARK",
    "ORION BELT BUCKLE",
    "COSMIC COFFEE BREAK",
    "MISSION CONTROL SNACKS",
    "METEORITE DOORSTOP",
    "INTERSTELLAR ROAD TRIP"
  ]
};

const PHRASES = Object.entries(PHRASE_GROUPS).flatMap(([category, phrases]) =>
  phrases.map((phrase) => ({ category, phrase }))
);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const initialSeconds = 180;
const wrongGuessPenalty = 2;
const solveBonusSeconds = 10;
const shortPhraseThreshold = 17;
const betweenPuzzleDelay = 520;
const highScoreKey = "quip-blitz-high-score-v1";

const els = {
  particleCanvas: document.querySelector("#particleCanvas"),
  timerMeter: document.querySelector(".timer-meter"),
  timer: document.querySelector("#timer"),
  timerBonusPop: document.querySelector("#timerBonusPop"),
  timerPenaltyPop: document.querySelector("#timerPenaltyPop"),
  solvedCount: document.querySelector("#solvedCount"),
  category: document.querySelector("#category"),
  puzzleBoard: document.querySelector("#puzzleBoard"),
  continuePrompt: document.querySelector("#continuePrompt"),
  keyboardPanel: document.querySelector(".keyboard-panel"),
  letterGrid: document.querySelector("#letterGrid"),
  startOverlay: document.querySelector("#startOverlay"),
  endOverlay: document.querySelector("#endOverlay"),
  startButton: document.querySelector("#startButton"),
  restartButton: document.querySelector("#restartButton"),
  startBest: document.querySelector("#startBest"),
  finalSolved: document.querySelector("#finalSolved"),
  finalCorrectKeys: document.querySelector("#finalCorrectKeys"),
  finalIncorrectKeys: document.querySelector("#finalIncorrectKeys"),
  finalAccuracy: document.querySelector("#finalAccuracy"),
  finalBest: document.querySelector("#finalBest")
};

const state = {
  status: "idle",
  timeLeft: initialSeconds,
  queue: [],
  current: null,
  guessed: new Set(),
  incorrect: new Set(),
  solved: 0,
  correctKeys: 0,
  incorrectKeys: 0,
  inputLocked: false,
  lastTick: performance.now(),
  continueReadyAt: 0,
  audio: null,
  highScore: loadHighScore(),
  particles: [],
  particleCtx: null,
  particleLast: performance.now(),
  particleSpawn: 0,
  particleRage: 0
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function letterCount(phrase) {
  return (phrase.match(/[A-Z]/g) || []).length;
}

function puzzleBonus(phrase) {
  return solveBonusSeconds;
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}

function isLetter(char) {
  return /^[A-Z]$/.test(char);
}

function loadHighScore() {
  try {
    const saved = window.localStorage.getItem(highScoreKey);
    const score = Number.parseInt(saved || "0", 10);
    return Number.isFinite(score) ? score : 0;
  } catch {
    return 0;
  }
}

function saveHighScore(score) {
  try {
    window.localStorage.setItem(highScoreKey, String(score));
  } catch {
    // High scores are a bonus; private browsing storage failures should not stop the game.
  }
}

function renderHighScore() {
  const phraseLabel = state.highScore === 1 ? "phrase" : "phrases";
  els.startBest.textContent = `Best run: ${state.highScore} ${phraseLabel}`;
  els.finalBest.textContent = String(state.highScore);
}

function ensureAudio() {
  if (!state.audio) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    state.audio = new AudioContext();
  }

  if (state.audio.state === "suspended") {
    state.audio.resume();
  }
}

function tone(frequency, start, duration, gain, type = "sine") {
  const ctx = state.audio;
  const osc = ctx.createOscillator();
  const volume = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  volume.gain.setValueAtTime(0.0001, start);
  volume.gain.exponentialRampToValueAtTime(gain, start + 0.01);
  volume.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(volume);
  volume.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

function playSound(kind) {
  ensureAudio();
  const now = state.audio.currentTime;

  if (kind === "correct") {
    tone(660, now, 0.075, 0.06, "triangle");
    tone(990, now + 0.035, 0.07, 0.045, "triangle");
    return;
  }

  if (kind === "wrong") {
    tone(145, now, 0.13, 0.075, "sawtooth");
    tone(92, now + 0.025, 0.1, 0.045, "square");
    return;
  }

  if (kind === "repeat") {
    tone(330, now, 0.045, 0.035, "sine");
    tone(250, now + 0.03, 0.045, 0.025, "sine");
    return;
  }

  if (kind === "win") {
    [523.25, 659.25, 783.99, 1046.5].forEach((note, index) => {
      tone(note, now + index * 0.045, 0.12, 0.065, "triangle");
    });
    return;
  }

  if (kind === "gameover") {
    [392, 329.63, 261.63, 196].forEach((note, index) => {
      tone(note, now + index * 0.13, 0.19, 0.06, index % 2 ? "triangle" : "sine");
    });
  }
}

function speakPhrase(phrase) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.rate = 1.12;
  utterance.pitch = 1.05;
  utterance.volume = 0.85;
  window.speechSynthesis.speak(utterance);
}

function animateBonus(seconds) {
  els.timerBonusPop.textContent = `+${seconds}s`;
  els.timerBonusPop.classList.remove("is-visible");
  void els.timerBonusPop.offsetWidth;
  els.timerBonusPop.classList.add("is-visible");
}

function animatePenalty() {
  els.timerPenaltyPop.textContent = `-${wrongGuessPenalty}s`;
  els.timerPenaltyPop.classList.remove("is-visible");
  els.timerMeter.classList.remove("wrong-flash");
  void els.timerPenaltyPop.offsetWidth;
  els.timerPenaltyPop.classList.add("is-visible");
  els.timerMeter.classList.add("wrong-flash");
}

function resizeParticles() {
  if (!els.particleCanvas || !state.particleCtx) return;

  const scale = Math.min(window.devicePixelRatio || 1, 2);
  els.particleCanvas.width = Math.floor(window.innerWidth * scale);
  els.particleCanvas.height = Math.floor(window.innerHeight * scale);
  els.particleCanvas.style.width = `${window.innerWidth}px`;
  els.particleCanvas.style.height = `${window.innerHeight}px`;
  state.particleCtx.setTransform(scale, 0, 0, scale, 0, 0);
}

function makeParticle(kind = "ambient", text = "") {
  const width = window.innerWidth || 1200;
  const height = window.innerHeight || 800;
  const urgency = state.status === "running" ? 1 - state.timeLeft / initialSeconds : 0.12;
  const angry = kind === "angry";
  const correct = kind === "correct";
  const rainbow = kind === "rainbow";
  const finale = kind === "finale";
  const burst = angry || correct || rainbow || finale;
  const angle = burst ? Math.random() * Math.PI * 2 : -Math.PI / 2 + (Math.random() - 0.5) * 0.9;
  const speed = burst
    ? 1.25 + Math.random() * (finale ? 5.8 : rainbow ? 4.8 : 3.2)
    : 0.24 + Math.random() * (0.62 + urgency * 0.55);
  const life = finale
    ? 92 + Math.random() * 130
    : rainbow
      ? 64 + Math.random() * 84
      : angry || correct
        ? 42 + Math.random() * 48
        : 230 + Math.random() * 260;
  const particleText = angry || correct ? text : "";
  const fontSize = particleText
    ? angry || correct
      ? 18 + Math.random() * 20
      : finale
        ? 18 + Math.random() * 26
        : 16 + Math.random() * 22
    : 0;

  return {
    x: burst ? width * (0.28 + Math.random() * 0.44) : Math.random() * width,
    y: burst ? height * (0.18 + Math.random() * 0.48) : height + 20,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size: burst ? 1.5 + Math.random() * (finale ? 5.2 : 4.2) : 1.1 + Math.random() * 2.8,
    life,
    maxLife: life,
    hue: angry
      ? 2 + Math.random() * 18
      : correct
        ? 112 + Math.random() * 38
        : rainbow || finale
          ? Math.random() * 360
          : 155 + Math.random() * 115,
    alpha: burst ? 0.72 + Math.random() * 0.2 : 0.34 + Math.random() * 0.28,
    swirl: burst ? 0.06 + Math.random() * 0.17 : 0.014 + Math.random() * 0.038,
    spin: Math.random() * Math.PI * 2,
    rotation: (Math.random() - 0.5) * 1.2,
    text: particleText,
    fontSize,
    square: !burst
  };
}

function burstAngryParticles(letter) {
  state.particleRage = 1;
  for (let i = 0; i < 19; i += 1) {
    state.particles.push(makeParticle("angry", letter));
  }
}

function burstCorrectParticles(letter) {
  for (let i = 0; i < 12; i += 1) {
    state.particles.push(makeParticle("correct", letter));
  }
}

function burstRainbowParticles() {
  for (let i = 0; i < 46; i += 1) {
    state.particles.push(makeParticle("rainbow"));
  }
}

function burstFinaleParticles(score) {
  const amount = Math.min(130, 45 + score * 6);
  state.particleRage = 1.25;
  for (let i = 0; i < amount; i += 1) {
    state.particles.push(makeParticle("finale"));
  }
}

function updateParticles(now) {
  const ctx = state.particleCtx;
  if (!ctx) return;

  const delta = Math.min((now - state.particleLast) / 16.67, 3);
  state.particleLast = now;
  state.particleRage = Math.max(0, state.particleRage - delta * 0.035);

  const width = window.innerWidth || 1200;
  const height = window.innerHeight || 800;
  const urgency = state.status === "running" ? 1 - state.timeLeft / initialSeconds : 0.08;
  const spawnRate = state.status === "idle" || state.status === "ended" ? 0.4 : 0.68 + urgency * 1.7;

  ctx.clearRect(0, 0, width, height);
  state.particleSpawn += spawnRate * delta;
  while (state.particleSpawn >= 1 && state.particles.length < 160) {
    state.particles.push(makeParticle());
    state.particleSpawn -= 1;
  }

  const speedMultiplier = 1 + urgency * 1.85 + state.particleRage * 0.85;
  state.particles = state.particles.filter((particle) => {
    particle.life -= delta;
    particle.spin += particle.swirl * delta * 9;
    particle.vx += Math.cos(particle.spin) * particle.swirl * delta;
    particle.vy += Math.sin(particle.spin) * particle.swirl * delta;
    particle.x += particle.vx * speedMultiplier * delta;
    particle.y += particle.vy * speedMultiplier * delta;

    const fade = Math.max(0, Math.min(1, particle.life / particle.maxLife));
    if (particle.text) {
      ctx.save();
      ctx.globalAlpha = particle.alpha * fade;
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation + particle.spin * 0.12);
      ctx.font = `900 ${particle.fontSize}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `hsl(${particle.hue}, 92%, 64%)`;
      ctx.fillText(particle.text, 0, 0);
      ctx.restore();
    } else {
      ctx.fillStyle = `hsla(${particle.hue}, 92%, 64%, ${particle.alpha * fade})`;
      if (particle.square) {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.spin * 0.12);
        ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        ctx.restore();
      } else {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    return (
      particle.life > 0 &&
      particle.x > -40 &&
      particle.x < width + 40 &&
      particle.y > -60 &&
      particle.y < height + 60
    );
  });
}

function renderKeyboard(repeatLetter = "") {
  els.letterGrid.innerHTML = alphabet
    .map((letter, index) => {
      const classes = ["key-chip"];
      const guessed = state.guessed.has(letter) || state.incorrect.has(letter);
      if (guessed) classes.push("guessed");
      if (state.incorrect.has(letter)) classes.push("bad");
      if (letter === repeatLetter) classes.push("repeat-hit");
      return `<button class="${classes.join(" ")}" type="button" data-letter="${letter}" style="--key-delay: ${index * 7}ms">${letter}</button>`;
    })
    .join("");
}

function renderPuzzle(newLetters = new Set(), repeatLetter = "") {
  if (!state.current) return;

  els.puzzleBoard.classList.remove("intro-board");
  const words = state.current.phrase.split(" ");
  let tileIndex = 0;
  els.puzzleBoard.innerHTML = words
    .map((word) => {
      const tiles = [...word]
        .map((char) => {
          const delay = (tileIndex % 9) * 18 + Math.floor(tileIndex / 9) * 5;
          tileIndex += 1;
          const letter = char.toUpperCase();
          const revealed = !isLetter(letter) || state.guessed.has(letter);
          const classes = ["tile"];
          if (revealed) classes.push("revealed");
          if (!isLetter(letter)) classes.push("punctuation");
          if (newLetters.has(letter)) classes.push("just-revealed");
          if (repeatLetter && letter === repeatLetter && revealed) classes.push("repeat-hit");
          const label = revealed ? char : "";
          return `<span class="${classes.join(" ")}" style="--tile-delay: ${delay}ms">${label}</span>`;
        })
        .join("");
      return `<span class="word">${tiles}</span>`;
    })
    .join("");
}

function updateHud() {
  els.timer.textContent = formatTime(state.timeLeft);
  els.solvedCount.textContent = String(state.solved);
}

function showContinuePrompt(message) {
  els.continuePrompt.innerHTML = message;
  els.continuePrompt.classList.add("is-visible");
  els.continuePrompt.disabled = false;
  state.continueReadyAt = performance.now() + 120;
}

function hideContinuePrompt() {
  els.continuePrompt.innerHTML = "";
  els.continuePrompt.classList.remove("is-visible");
  els.continuePrompt.disabled = true;
  state.continueReadyAt = 0;
}

function revealSolution() {
  if (!state.current) return;
  state.guessed = new Set((state.current.phrase.match(/[A-Z]/g) || []));
  renderPuzzle();
  renderKeyboard();
}

function nextPuzzle() {
  if (state.queue.length === 0) {
    state.queue = shuffle(PHRASES);
  }

  state.current = state.queue.pop();
  state.guessed = new Set();
  state.incorrect = new Set();
  state.status = "running";
  state.inputLocked = false;
  state.lastTick = performance.now();
  hideContinuePrompt();
  els.category.textContent = state.current.category;
  renderPuzzle();
  renderKeyboard();
  els.keyboardPanel.classList.remove("ready-reset");
  void els.keyboardPanel.offsetWidth;
  els.keyboardPanel.classList.add("ready-reset");
  window.setTimeout(() => els.keyboardPanel.classList.remove("ready-reset"), 470);
  updateHud();
  els.puzzleBoard.classList.add("board-enter");
  window.setTimeout(() => els.puzzleBoard.classList.remove("board-enter"), 540);
}

function startGame() {
  ensureAudio();
  state.status = "running";
  state.timeLeft = initialSeconds;
  state.queue = shuffle(PHRASES);
  state.current = null;
  state.guessed = new Set();
  state.incorrect = new Set();
  state.solved = 0;
  state.correctKeys = 0;
  state.incorrectKeys = 0;
  state.inputLocked = false;
  state.lastTick = performance.now();
  els.startOverlay.classList.remove("is-visible");
  els.endOverlay.classList.remove("is-visible");
  hideContinuePrompt();
  nextPuzzle();
}

function showRepeat(letter) {
  playSound("repeat");
  renderPuzzle(new Set(), letter);
  renderKeyboard(letter);
  window.setTimeout(() => {
    if (state.status !== "running") return;
    renderPuzzle();
    renderKeyboard();
  }, 230);
}

function isSolved() {
  return [...state.current.phrase].every((char) => !isLetter(char) || state.guessed.has(char));
}

function solveCurrentPuzzle() {
  const bonus = puzzleBonus(state.current.phrase);
  const solvedPhrase = state.current.phrase;
  state.inputLocked = true;
  state.status = "solved";
  state.solved += 1;
  state.timeLeft += bonus;
  updateHud();
  animateBonus(bonus);
  playSound("win");
  burstRainbowParticles();
  speakPhrase(solvedPhrase);
  showContinuePrompt(
    `<strong>Puzzle solved! +${bonus} seconds!</strong><span>Click or press any key for the next puzzle.</span>`
  );
}

function advanceAfterSolve() {
  if (state.status !== "solved") return;
  state.status = "transitioning";
  hideContinuePrompt();
  els.puzzleBoard.classList.add("board-exit");

  window.setTimeout(() => {
    els.puzzleBoard.classList.remove("board-exit");
    if (state.status === "transitioning") nextPuzzle();
  }, betweenPuzzleDelay);
}

function guessLetter(letter) {
  if (state.status !== "running" || state.inputLocked || !state.current) return;

  if (state.guessed.has(letter) || state.incorrect.has(letter)) {
    showRepeat(letter);
    return;
  }

  if (state.current.phrase.includes(letter)) {
    state.guessed.add(letter);
    state.correctKeys += 1;
    playSound("correct");
    burstCorrectParticles(letter);
    renderPuzzle(new Set([letter]));
    renderKeyboard();

    if (isSolved()) {
      solveCurrentPuzzle();
    }
    return;
  }

  state.incorrect.add(letter);
  state.incorrectKeys += 1;
  state.timeLeft = Math.max(0, state.timeLeft - wrongGuessPenalty);
  const expired = state.timeLeft <= 0;
  animatePenalty();
  if (!expired) playSound("wrong");
  burstAngryParticles(letter);
  renderKeyboard();
  updateHud();

  if (expired) {
    showExpiredSolution();
  }
}

function showExpiredSolution() {
  if (state.status === "ended" || state.status === "expired") return;
  const finalPhrase = state.current ? state.current.phrase : "";
  state.status = "expired";
  state.timeLeft = 0;
  state.inputLocked = true;
  updateHud();
  revealSolution();
  playSound("gameover");
  burstFinaleParticles(state.solved);
  showContinuePrompt(
    `<strong>Game over!</strong><span>Click or press any key for final scoring.</span>`
  );
  window.setTimeout(() => speakPhrase(finalPhrase), 760);
}

function endGame() {
  if (state.status === "ended") return;
  state.status = "ended";
  state.inputLocked = true;
  hideContinuePrompt();
  const totalKeys = state.correctKeys + state.incorrectKeys;
  const accuracy = totalKeys === 0 ? 0 : Math.round((state.correctKeys / totalKeys) * 100);
  if (state.solved > state.highScore) {
    state.highScore = state.solved;
    saveHighScore(state.highScore);
  }
  renderHighScore();
  burstFinaleParticles(state.solved);
  els.finalSolved.textContent = String(state.solved);
  els.finalCorrectKeys.textContent = String(state.correctKeys);
  els.finalIncorrectKeys.textContent = String(state.incorrectKeys);
  els.finalAccuracy.textContent = `${accuracy}%`;
  els.endOverlay.classList.add("is-visible");
}

function gameLoop(now) {
  updateParticles(now);

  if (state.status === "running") {
    const delta = (now - state.lastTick) / 1000;
    state.timeLeft = Math.max(0, state.timeLeft - delta);
    updateHud();

    if (state.timeLeft <= 0) {
      showExpiredSolution();
    }
  }

  state.lastTick = now;
  requestAnimationFrame(gameLoop);
}

function handleKeydown(event) {
  const key = event.key;

  if (state.status === "solved") {
    event.preventDefault();
    advanceAfterSolve();
    return;
  }

  if (state.status === "expired") {
    event.preventDefault();
    endGame();
    return;
  }

  if (key === " ") {
    event.preventDefault();
    if (state.status === "idle" || state.status === "ended") {
      startGame();
    } else if (state.status === "solved") {
      advanceAfterSolve();
    } else if (state.status === "expired") {
      endGame();
    }
    return;
  }

  if (key.length === 1 && /^[a-z]$/i.test(key)) {
    event.preventDefault();
    guessLetter(key.toUpperCase());
  }
}

function continueFromPrompt() {
  if (state.status === "solved") {
    advanceAfterSolve();
  } else if (state.status === "expired") {
    endGame();
  }
}

function handleGlobalClick(event) {
  if (state.status !== "solved" && state.status !== "expired") return;
  if (performance.now() < state.continueReadyAt) return;
  if (els.startOverlay.classList.contains("is-visible") || els.endOverlay.classList.contains("is-visible")) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  continueFromPrompt();
}

function handleKeyboardClick(event) {
  const key = event.target.closest("[data-letter]");
  if (!key || !els.letterGrid.contains(key)) return;
  guessLetter(key.dataset.letter);
}

function init() {
  if (els.particleCanvas) {
    state.particleCtx = els.particleCanvas.getContext("2d");
    resizeParticles();
    window.addEventListener("resize", resizeParticles);
  }
  renderHighScore();
  renderKeyboard();
  updateHud();
  hideContinuePrompt();
  els.startButton.addEventListener("click", startGame);
  els.restartButton.addEventListener("click", startGame);
  els.continuePrompt.addEventListener("click", continueFromPrompt);
  els.letterGrid.addEventListener("click", handleKeyboardClick);
  document.addEventListener("click", handleGlobalClick);
  document.addEventListener("keydown", handleKeydown);
  requestAnimationFrame(gameLoop);
}

init();
