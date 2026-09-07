const { products } = require("../src/data/products.ts");

console.log("Analyzing catalog of", products.length, "products for color variants...\n");

const groups = {};

products.forEach(p => {
  const colors = [
    "Black", "White", "Maroon", "Wine", "Burgundy", "Ruby Red", "Crimson", "Scarlet", "Rose", "Dusty Rose", "Blush Pink", "Baby Pink", "Coral Peach", "Peach", "Salmon Pink", "Magenta", "Rani Pink",
    "Royal Blue", "Navy Blue", "Powder Blue", "Sky Blue", "Midnight Blue", "Indigo Blue", "Cerulean Blue", "Steel Blue", "Teal", "Teal Green", "Deep Teal", "Turquoise",
    "Emerald Green", "Forest Green", "Bottle Green", "Sage Green", "Mint Green", "Olive Green", "Pistachio Green", "Lime Green", "Sea Green",
    "Mustard Yellow", "Golden Ochre", "Lemon Yellow", "Haldi Yellow", "Sunshine Yellow", "Amber", "Tangerine Orange", "Rust Orange", "Burnt Orange", "Terracotta",
    "Plum Purple", "Aubergine", "Lavender", "Lilac", "Mauve", "Violet",
    "Ivory Cream", "Off-White", "Cream", "Beige", "Champagne Gold", "Camel Brown", "Warm Taupe", "Mocha Brown", "Chocolate Brown", "Charcoal Grey", "Silver Grey", "Ash Grey", "Graphite"
  ];
  
  let baseName = p.name;
  for (const c of colors) {
    const reg = new RegExp(`^${c}\\s+`, 'i');
    if (reg.test(baseName)) {
      baseName = baseName.replace(reg, '');
      break;
    }
  }

  const key = `${p.productType}__${baseName.toLowerCase().trim()}`;
  if (!groups[key]) {
    groups[key] = [];
  }
  groups[key].push(p);
});

const multiGroups = Object.entries(groups).filter(([k, v]) => v.length > 1);

console.log(`Found ${multiGroups.length} design groups with multiple color variants:`);
multiGroups.forEach(([k, list]) => {
  console.log(`\n--- Base (${list[0].productType}): count=${list.length} ---`);
  list.forEach(item => {
    console.log(`  - [${item.productCode}] ${item.color} (₹${item.price}) -> ${item.name} | img: ${item.primaryImage}`);
  });
});
