import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    slug: 'barnaby-bumblebee-plushie',
    name: 'Barnaby the Bumblebee',
    description: 'A plump, ultra-soft bumblebee plushie crocheted with premium plush chenille yarn. Features tiny adorable wings and sweet blush cheeks. Perfect for cuddling or as an accent buddy on your desk.',
    images: [
      'https://images.unsplash.com/photo-1627998794066-5a484cae63e2?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Plushies',
    price: 1999,
    stock: 12,
    rating: 4.9,
    tags: ['kawaii', 'plushie', 'bee', 'gift', 'chenille'],
    isBestSeller: true,
    isNewArrival: false,
    dimensions: '6" L x 5" W x 5" H',
    materials: ['Super-soft Polyester Chenille Yarn', 'Hypoallergenic Polyester Fiberfill', 'Plastic Safety Eyes (10mm)'],
    careInstructions: 'Spot clean gently with cold water. Allow to air dry completely. Do not machine wash.',
    reviews: [
      { id: 'r1_1', userName: 'Meera Sharma', rating: 5, date: 'May 12, 2026', comment: 'So unimaginably soft! Barnaby looks even cuter in person. My son immediately named him Bee-bee-Ji!' },
      { id: 'r1_2', userName: 'Arjun Goel', rating: 4, date: 'April 20, 2026', comment: 'Extremely well-made and durable. The stitches are perfectly tight. Totally worth the price!' }
    ]
  },
  {
    id: 'p2',
    slug: 'oliver-baby-octopus',
    name: 'Oliver the Baby Octopus',
    description: 'Our signature mascot plushie! Oliver is a friendly pastel mint octopus with curly tentacle hooks. Made of 100% combed cotton yarn, he is super soft, tactile, and sensory-friendly.',
    images: [
      'https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1615486511487-12f0c7f56815?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Plushies',
    price: 1599,
    stock: 15,
    rating: 5.0,
    tags: ['mascot', 'octopus', 'pastel', 'baby-safe', 'tactile'],
    isBestSeller: true,
    isNewArrival: false,
    dimensions: '4" L x 4" W x 4.5" H',
    materials: ['100% Combed Milk Cotton Yarn', 'Hypoallergenic Polyfill', 'Hand-embroidered Eyes (100% Cotton Thread)'],
    careInstructions: 'Machine washable in a delicate mesh bag on cold/gentle cycle. Lay flat to dry.',
    reviews: [
      { id: 'r2_1', userName: 'Kavya Murthy', rating: 5, date: 'May 28, 2026', comment: 'The little curly tentacles are so fun to fiddle with! Cotton yarn is so high quality and baby-safe.' },
      { id: 'r2_2', userName: 'Sneha Lal', rating: 5, date: 'May 15, 2026', comment: 'Perfect addition to my pastel desk setup! He is absolute perfection.' }
    ]
  },
  {
    id: 'p3',
    slug: 'penelope-pastel-penguin',
    name: 'Penelope the Pastel Penguin',
    description: 'Penelope wears a cozy removable lavender scarf. Crocheted with baby-grade acrylic blend yarn, she features cute felt-backed eyes and adorable flat flippers.',
    images: [
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Plushies',
    price: 2199,
    stock: 8,
    rating: 4.8,
    tags: ['winter', 'penguin', 'scarf', 'cuddle'],
    isBestSeller: false,
    isNewArrival: true,
    dimensions: '7.5" L x 5.5" W x 5.5" H',
    materials: ['Anti-pilling Pastel Acrylic Yarn', 'Hypoallergenic Polyester Fiberfill', 'Vibrant Felt Accents', '12mm Safety Eyes'],
    careInstructions: 'Hand wash recommended with mild baby detergent. Squeeze out excess water gently (do not wring), dry flat.',
    reviews: [
      { id: 'r3_1', userName: 'Riya Patel', rating: 5, date: 'May 04, 2026', comment: 'Penelope is so sweet, and her tiny lavender scarf is just too adorable! Highly recommend Happy Hookers.' }
    ]
  },
  {
    id: 'p4',
    slug: 'sammy-strawberry-turtle',
    name: 'Sammy the Strawberry Turtle',
    description: 'A cute cozy turtle featuring a ripe red strawberry shell studded with delicate white seeds. Sammy has tiny mint-green flippers and a playful happy smile.',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Plushies',
    price: 1799,
    stock: 6,
    rating: 4.9,
    tags: ['turtle', 'strawberry', 'fruit', 'cottagecore'],
    isBestSeller: false,
    isNewArrival: true,
    dimensions: '5" L x 4.5" W x 3" H',
    materials: ['Premium Cotton-Acrylic Yarn', 'Hypoallergenic Polyester Fiberfill', 'Safety Eyes (8mm)'],
    careInstructions: 'Spot clean only with cold water and mild soap.',
    reviews: [
      { id: 'r4_1', userName: 'Esha Kapoor', rating: 5, date: 'May 19, 2026', comment: 'Omg, a strawberry turtle! The level of detailing is spectacular. Will shop here again!' }
    ]
  },
  {
    id: 'p5',
    slug: 'pippa-pastel-axolotl',
    name: 'Pippa the Baby Axolotl',
    description: 'Pippa has fuzzy pink gills and a tiny curly tail. She is stitched with ultra-lofty fluffy yarn, giving her an adorable airy squishiness that is incredibly stress-relieving.',
    images: [
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Plushies',
    price: 1899,
    stock: 10,
    rating: 4.7,
    tags: ['axolotl', 'pink', 'lofty', 'fuzzy', 'stress-relief'],
    isBestSeller: false,
    isNewArrival: false,
    dimensions: '6.5" L x 4" W x 4" H',
    materials: ['Polyester Bouclé Fluffy Yarn', 'Premium Cotton Accents', 'Safety Eyes with Backings'],
    careInstructions: 'Do not agitate. Hand wash with wool wash, pat dry.',
    reviews: []
  },
  // BAGS
  {
    id: 'p6',
    slug: 'daisy-fields-tote',
    name: 'Daisy Fields Tote Bag',
    description: 'A dreamy, spacious shoulder bag composed of hand-stitched retro daisy granny squares. Features a thick, comfortable strap that won\'t stretch out over time, and a secure fabric lining inside.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Bags',
    price: 3999,
    stock: 5,
    rating: 4.9,
    tags: ['bag', 'daisy', 'retro', 'granny-square', 'cottagecore', 'fashion'],
    isBestSeller: true,
    isNewArrival: false,
    dimensions: '13" W x 14" H (Strap Drop: 11")',
    materials: ['100% Mercerized Craft Cotton Yarn (heavyweight)', 'Internal Canvas Linen Lining', 'Magnetic Brass Snap Closure'],
    careInstructions: 'Gently hand wash inside-out. Reshape flat to dry on a white towel to minimize shape shifting.',
    reviews: [
      { id: 'r6_1', userName: 'Nisha Rao', rating: 5, date: 'May 01, 2026', comment: 'I get compliments everywhere I go! The lining inside is extremely sturdy, so keys and lipsticks don\'t poke through. Amazing!' },
      { id: 'r6_2', userName: 'Lipika Trivedi', rating: 4, date: 'April 14, 2026', comment: 'Very thick straps and beautifully lined. I carried multiple books in it and it held up beautifully!' }
    ]
  },
  {
    id: 'p7',
    slug: 'strawberry-knit-purse',
    name: 'Retro Strawberry Handbag',
    description: 'A charming structural purse shaped like a succulent, ripe strawberry. Crowned with hand-stitched green leaves that act as the folding lid closure. Fastened with a cute hand-carved wooden button.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Bags',
    price: 3199,
    stock: 4,
    rating: 5.0,
    tags: ['strawberry', 'purse', 'handcrafted', 'statement-piece'],
    isBestSeller: false,
    isNewArrival: true,
    dimensions: '9" W x 10" H x 3" D',
    materials: ['Premium Milk Cotton Yarn', 'Wooden Hoop Button', 'Polka-dot Satin Lining'],
    careInstructions: 'Dry clean recommended to maintain leaf stiffness and custom structural form.',
    reviews: [
      { id: 'r7_1', userName: 'Jyoti Banerjee', rating: 5, date: 'May 23, 2026', comment: 'Literal strawberry magic. It is so spacious yet maintains its iconic shape perfectly! Absolute craftsmanship.' }
    ]
  },
  {
    id: 'p8',
    slug: 'slouchy-velvet-shoulder-bag',
    name: 'Velvet Midnight Slouch Bag',
    description: 'A gorgeous slouchy hobo bag crocheted with ultra-soft, shimmering black velvet chenille yarn. Combines comfortable drape with high utility.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Bags',
    price: 3599,
    stock: 7,
    rating: 4.8,
    tags: ['velvet', 'hobo-bag', 'luxury', 'chic', 'dark-aesthetic'],
    isBestSeller: false,
    isNewArrival: false,
    dimensions: '12" W x 11" H x 4" D',
    materials: ['High-Grade Velvet Chenille Yarn', 'Heavy Satin Inner Pocket', 'Zippered Main Closure'],
    careInstructions: 'Spot clean only. Rub gently with a soft sponge, do not ring or iron.',
    reviews: []
  },
  // KEYCHAINS
  {
    id: 'p9',
    slug: 'lucky-clover-charm',
    name: 'Lucky Four-Leaf Clover Charm',
    description: 'Bring a touch of luck wherever you wander! Hand-hooked clover in a rich forest green with miniature beaded details and a secured gold lobster-claw clasp.',
    images: [
      'https://images.unsplash.com/photo-1590483736622-39da8af7fe8f?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Keychains',
    price: 699,
    stock: 30,
    rating: 4.9,
    tags: ['keychain', 'clover', 'luck', 'charm', 'accessory'],
    isBestSeller: true,
    isNewArrival: false,
    dimensions: '2" W x 3" H (including key ring)',
    materials: ['Combed Egyptian Cotton Thread', 'Gold-plated Alloy lobster clasp', 'Tiny green metallic beads'],
    careInstructions: 'Wipe clean with a damp cloth if dirty.',
    reviews: [
      { id: 'r9_1', userName: 'Farah Memon', rating: 5, date: 'May 11, 2026', comment: 'So miniature and cute! Attached to my car keys, and I swear I\'ve had better luck finding parking since!' }
    ]
  },
  {
    id: 'p10',
    slug: 'chonky-boba-tea-keyring',
    name: 'Chonky Boba Tea Keychain',
    description: 'A tiny boba milk tea complete with a tiny pink straw, micro tapioca pearls crocheted right into the base, and a happy little face. Guaranteed sweet-tooth vibes!',
    images: [
      'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Keychains',
    price: 799,
    stock: 25,
    rating: 5.0,
    tags: ['boba', 'milktea', 'tapioca', 'cute-face', 'accessories'],
    isBestSeller: true,
    isNewArrival: false,
    dimensions: '2.5" H x 1.5" W',
    materials: ['Combed Cotton Thread', 'Hypoallergenic Stuffing', 'Premium Silver Key Ring & Charm Loop'],
    careInstructions: 'Dip clean in soapy water, rinse gently, and let air dry.',
    reviews: [
      { id: 'r10_1', userName: 'Tanya Lahiri', rating: 5, date: 'April 30, 2026', comment: 'The cuteness is out of bounds! I put Oliver octopus and this boba keychain on my backpack, best matching charm duo EVER!' }
    ]
  },
  {
    id: 'p11',
    slug: 'mini-fried-egg-charm',
    name: 'Lazy Fried Egg Keychain',
    description: 'Sunny-side up and super sleepy! Features a perfect happy golden yolk center on a fluffy white background. Essential cozy breakfast styling.',
    images: [
      'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Keychains',
    price: 599,
    stock: 18,
    rating: 4.8,
    tags: ['egg', 'breakfast', 'cozy', 'smiling-yolk'],
    isBestSeller: false,
    isNewArrival: true,
    dimensions: '2.2" W x 2.5" H',
    materials: ['100% Milk Cotton Thread', 'Stainless Steel Ring'],
    careInstructions: 'Spot wash with mild detergent and warm water.',
    reviews: []
  },
  {
    id: 'p12',
    slug: 'red-toadstool-mushroom-keyring',
    name: 'Happy Red Toadstool Charm',
    description: 'A delightful magical red forest mushroom with tiny hand-stitched white spots and a jolly matching smiley face. Forest guardian for your house keys!',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Keychains',
    price: 699,
    stock: 22,
    rating: 4.9,
    tags: ['mushroom', 'toadstool', 'forest', 'cottagecore', 'fairytales'],
    isBestSeller: false,
    isNewArrival: false,
    dimensions: '3" H x 1.8" W',
    materials: ['Anti-fuzz cotton acrylic threads', 'Durable steel key clasp'],
    careInstructions: 'Wipe clean gently.',
    reviews: []
  },
  // HOME DECOR
  {
    id: 'p13',
    slug: 'hanging-ivy-coasters',
    name: 'Hanging Ivy Leaf Coasters (4-Pack)',
    description: 'Bring garden potting vibes inside! This premium boxed set includes four coasters designed like fresh ivy leaves, stored inside a matching crocheted "hanging plant pot" hanger.',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Home Decor',
    price: 2399,
    stock: 9,
    rating: 5.0,
    tags: ['home', 'coaster', 'plant', 'ivy', 'indoor-garden', 'table-decor'],
    isBestSeller: true,
    isNewArrival: false,
    dimensions: 'Coaster: 4" Diameter, Pot: 5" H x 4" W',
    materials: ['100% Heavy-duty Heat-absorbent Craft Cotton Yarn', 'Wood Ring Accent for Hanging Pot'],
    careInstructions: 'Highly moisture-absorbent. Machine washable in cold water, reshape and dry flat to prevent curling.',
    reviews: [
      { id: 'r13_1', userName: 'Divya Hegde', rating: 5, date: 'May 20, 2026', comment: 'Pure brilliance. When not in use, they sit inside their little pot looking like a real ivy plant! Absorbent and practical.' },
      { id: 'r13_2', userName: 'Kunal Kohli', rating: 5, date: 'May 06, 2026', comment: 'Gave this to my plant-loving sister and she went nuts! Crochet detailing is extraordinary.' }
    ]
  },
  {
    id: 'p14',
    slug: 'cozy-tulip-bouquet',
    name: 'Everlasting Tulip Crochet Bouquet',
    description: 'Never wilt! A stunning, custom-arranged bouquet of three beautiful crochet tulips in soft peach, pastel yellow, and dusty rose. Perfect eco-friendly centerpiece wrapped on thick kraft wrap and tied with premium ribbon.',
    images: [
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Home Decor',
    price: 2799,
    stock: 6,
    rating: 4.8,
    tags: ['tulip', 'bouquet', 'flowers', 'table-decor', 'gift-ideas'],
    isBestSeller: false,
    isNewArrival: true,
    dimensions: '12" H x 6" W',
    materials: ['Satin Combed Milk Cotton', 'Wrapped Floral Metal Stems', 'Ribbon bow', 'Eco kraft packaging'],
    careInstructions: 'Dust lightly with a soft brush or hair dryer on cold/low setting.',
    reviews: [
      { id: 'r14_1', userName: 'Mansi Fernandes', rating: 5, date: 'May 24, 2026', comment: 'The ideal gift! Best part is I don\'t have to remember to water them. Magnificent!' }
    ]
  },
  {
    id: 'p15',
    slug: 'desktop-potted-cactus',
    name: 'Saguaro Desktop Cactus (Zero Water!)',
    description: 'A adorable small saguaro cactus crocheted in vibrant pine green, potted inside a cute terracotta pot wrapper. Topped with a miniature bright yellow blossom.',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Home Decor',
    price: 1499,
    stock: 14,
    rating: 4.9,
    tags: ['cactus', 'office-decor', 'potted-plant', 'zero-watering'],
    isBestSeller: false,
    isNewArrival: false,
    dimensions: '5" H x 2.8" W',
    materials: ['Medium Acrylic Threads', 'Slight weighted bead bottom for high stability', 'Blossom accents'],
    careInstructions: 'Spot dry only.',
    reviews: []
  },
  {
    id: 'p16',
    slug: 'kawaii-cloud-wall-hanging',
    name: 'Kawaii Cloud Wall Hanging',
    description: 'A plush puffy white cloud hanging accent, featuring three colorful dangling pastel raindrops. Composed of soft roving-blend wool to produce a pillowy dreamlike texture.',
    images: [
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Home Decor',
    price: 2099,
    stock: 5,
    rating: 4.7,
    tags: ['baby-nursery', 'cloud', 'wall-accent', 'pastel-rain', 'dreamy'],
    isBestSeller: false,
    isNewArrival: true,
    dimensions: '8" W x 12" H (including hanging cord)',
    materials: ['Soft Merino Roving Blend', 'Pastel Raindrop Drops', 'Wood dowel rod hanger'],
    careInstructions: 'Shake gently to remove dust. Do not wash.',
    reviews: []
  },
  // CUSTOM ORDERS
  {
    id: 'p17',
    slug: 'custom-pet-portrait',
    name: 'Custom Amigurumi Pet Portrait',
    description: 'Send us 3 reference photos of your beloved dog, cat, rabbit, or bird, and our veteran hookers will crochet a highly-detailed, individualized chibi portrait-doll replica! Absolute treasure of a keepsake.',
    images: [
      'https://images.unsplash.com/photo-1590483736622-39da8af7fe8f?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Custom Orders',
    price: 5199,
    stock: 10,
    rating: 5.0,
    tags: ['custom', 'pet-portrait', 'dog', 'cat', 'amigurumi', 'personalized'],
    isBestSeller: true,
    isNewArrival: false,
    dimensions: 'Approx 5" - 6" Tall',
    materials: ['Individually selected cotton/acrylic color blends', 'Safe lock-backer eyes', 'Custom fur styling wire brushing'],
    careInstructions: 'A detailed, customized care card will be included with your portrait based on fibers used.',
    reviews: [
      { id: 'r17_1', userName: 'Rahul Wadhwa', rating: 5, date: 'May 18, 2026', comment: 'I actually cried. They captured my late Golden Retriever Rusty so perfectly, even his crooked white patch on his chest! Unbelievable masterwork.' },
      { id: 'r17_2', userName: 'Chitra Verma', rating: 5, date: 'May 10, 2026', comment: 'Excellent communication and absolute craftsmanship. My puppy loves it!' }
    ]
  },
  {
    id: 'p18',
    slug: 'memory-crochet-blanket',
    name: 'Custom Memory Patchwork Blanket',
    description: 'Choose your size and select from 15 custom pastel color palettes. We will hand-crochet a heavy, luxurious, heirloom-grade granny square blanket tailored to your specifications. Generously bordered.',
    images: [
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Custom Orders',
    price: 11999,
    stock: 3,
    rating: 5.0,
    tags: ['blanket', 'heirloom', 'custom-colors', 'granny-squares', 'luxury'],
    isBestSeller: true,
    isNewArrival: false,
    dimensions: 'Baby (30"x30") / Throw (45"x60") / Custom',
    materials: ['Premium Anti-pilling Milk Cotton Yarn', 'Satin Brand Tag'],
    careInstructions: 'Machine washable on cold-gentle with mild soap. Lay flat to dry or tumble dry low in a protected mesh garment bag.',
    reviews: [
      { id: 'r18_1', userName: 'Nisha Joshi', rating: 5, date: 'May 02, 2026', comment: 'The weight of this blanket is so comforting! It is beautifully woven, dense but incredibly breathable. Our baby curls up in it every single day.' }
    ]
  },
  {
    id: 'p19',
    slug: 'made-to-measure-cardigan',
    name: 'Custom Pastel Patchwork Cardigan',
    description: 'An iconic chunky, oversized cardigan custom crochet-knit to your exact measurements! Select your favourite patchwork arrangement (Strawberries, Lilac Blossoms, Retro Daisies). Extremely warm, cozy, and viral-aesthetic.',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Custom Orders',
    price: 9599,
    stock: 5,
    rating: 4.9,
    tags: ['cardigan', 'custom-wear', 'fashion', 'viral-aesthetic', 'chunky-knit'],
    isBestSeller: false,
    isNewArrival: true,
    dimensions: 'Custom Made-to-measure (XS to 3XL)',
    materials: ['Lofty chunky cotton wool blend', 'Hand-carved premium timber buttons'],
    careInstructions: 'Dry clean or cold hand wash. Reshape flat to maintain structural fit.',
    reviews: [
      { id: 'r19_1', userName: 'Ekta Prasad', rating: 5, date: 'May 28, 2026', comment: 'Absolutely spectacular. Feels like concert vibes merged with sweet teddy bears. Perfect slouch and length!' }
    ]
  },
  {
    id: 'p20',
    slug: 'personalized-initial-coasters',
    name: 'Monogram Initial Tea Mug Rugs',
    description: 'A custom pair of thick premium mug rugs crocheted with heavy cream cotton thread and hand-embordered with your requested initial in a gorgeous vintage script.',
    images: [
      'https://images.unsplash.com/photo-1576016770956-debb63d900ad?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Custom Orders',
    price: 1199,
    stock: 20,
    rating: 4.8,
    tags: ['monogram', 'coasters', 'personalized', 'gift', 'mug-rug'],
    isBestSeller: false,
    isNewArrival: false,
    dimensions: '4.5" W x 4.5" H',
    materials: ['Craft double-weave pure cotton threads'],
    careInstructions: 'Gently hand wash, flat dry.',
    reviews: []
  }
];
