export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Beige",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { Value: "white", label: "White" },
      { Value: "beige", label: "Beige" },
      { Value: "blue", label: "Blue" },
      { Value: "brown", label: "Brown" },
      { Value: "green", label: "Green" },
      { Value: "purple", label: "Purple" },
      { Value: "yellow", label: "Yellow" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 To ₹399" },
      { value: "399-999", label: "₹399 To ₹999" },
      { value: "999-1999", label: "₹999 To ₹1999" },
      { value: "1999-2999", label: "₹1999 To ₹2999" },
      { value: "2999 -", label: "₹2999 -" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { Value: "20", label: "20% And Above" },
      { Value: "30", label: "30% And Above" },
      { Value: "40", label: "40% And Above" },
      { Value: "50", label: "50% And Above" },
      { Value: "60", label: "60% And Above" },
      { Value: "70", label: "70% And Above" },
      { Value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In stock" },
      { value: "out_of_stock", label: "Out of stock" },
    ],
  },
];

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
