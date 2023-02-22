export const categories = {
  BOARDS: "Boards",
  CANOENIG: "Canoenig",
  EQUIMPENT: "Equipment",
  PADDLING: "Paddling",
  RENTAL: "Rental",
  SCUBADIVING: "Scubadiving",
  SURFING: "Surfing",
};
const products = [
  {
    name: "TUNDER SHORT BOARD",
    slug: "tunder-short-board",
    categories: [categories.EQUIMPENT, categories.BOARDS],
    image: "/images/turf-board.png",
    sku: "001",
    price: 150,
    newPrice: 130,
    rating: 4,
    tags: ["boards", "surf"],
    reviews: 3,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!",
  },
  {
    name: "SCUBA DIVING WETSUIT",
    slug: "scuba-diving-wetsuit",
    categories: [categories.SCUBADIVING],
    image: "/images/wet-suit.png",
    sku: "002",
    price: 160,
    newPrice: 140,
    rating: 3,
    tags: ["boards", "surf"],
    reviews: 1,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!",
  },
  {
    name: "WOMAN'S WETSUIT PRO",
    slug: "woman-wetsuit",
    categories: [categories.SCUBADIVING],
    image: "/images/female-wet-suit.png",
    sku: "003",
    price: 150,
    rating: 3,
    tags: ["boards", "surf"],
    reviews: 3,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!",
  },
  {
    name: "BOARD PADDLE PAIR",
    slug: "board-paddle-pair",
    categories: [categories.CANOENIG, categories.EQUIMPENT],
    image: "/images/board-paddles.png",
    sku: "004",
    price: 100,
    rating: 2,
    tags: ["boards", "surf"],
    reviews: 3,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!",
  },
  {
    name: "KAYAK WITH PADDLES",
    slug: "kayak-with-paddles",
    categories: [categories.CANOENIG, categories.PADDLING],
    image: "/images/kayak-with-paddles.png",
    sku: "005",
    price: 160,
    rating: 4,
    tags: ["boards", "surf"],
    reviews: 2,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!",
  },
  {
    name: "LIGHT PADDLE PAIR",
    slug: "ligh-paddle-pair",
    categories: [categories.CANOENIG, categories.EQUIMPENT],
    image: "/images/light-paddles.png",
    sku: "006",
    price: 120,
    rating: 5,
    tags: ["boards", "surf"],
    reviews: 1,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, vitae nulla, nihil debitis praesentium, cupiditate fugit ipsam alias nostrum tempora nam laborum dignissimos quas. Ipsum odit tenetur dolorum et!",
  },
];

export default products;
