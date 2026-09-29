import carSeat from "./assets/images/carseat-rear-1.jpeg";
import mediaUnit from "./assets/images/curtains-1.jpeg";
import customTable from "./assets/images/custom-table.jpg";
import outdoorBench from "./assets/images/carpentry-1.jpeg";
import patioLounge from "./assets/images/patio-lounge.jpg";

// Real showroom photography — De Palace Mall
import furnitureShop from "./assets/images/showroom-beige-sofa-set-wide.webp";
import reupholstery from "./assets/images/showroom-white-curved-sofa.webp";
import interiorDesign from "./assets/images/showroom-beige-sofas-brown-chairs-art.webp";
import bedManufacturing from "./assets/images/upholstered-bubble-bed-grey.webp";

// Extra real photos, used as gallery images on the detail pages
import furnitureShopAlt1 from "./assets/images/showroom-brown-corner-sofa.webp";
import furnitureShopAlt2 from "./assets/images/showroom-blue-sofa-green-ottomans.webp";
import reupholsteryAlt1 from "./assets/images/showroom-brown-sofa-grey-armchairs.webp";
import reupholsteryAlt2 from "./assets/images/showroom-grey-sectional-brown-chair.webp";
import interiorDesignAlt1 from "./assets/images/showroom-white-sectional-mustard-pillow.webp";
import interiorDesignAlt2 from "./assets/images/showroom-brown-sofas-patterned-ottoman-wide.webp";
import bedManufacturingAlt1 from "./assets/images/showroom-beige-sofas-brown-chairs-wide.webp";

export const SERVICES = [
  {
    slug: "furniture-shop",
    name: "Furniture Shop",
    img: furnitureShop,
    gallery: [furnitureShopAlt1, furnitureShopAlt2],
    text: "Explore our shop for high-quality furniture that combines timeless style with exceptional craftsmanship.",
    long: "Browse a curated showroom of sofas, sectionals, beds and accent pieces — each one built for comfort as much as looks. Whether you're furnishing a new home or replacing a single statement piece, our team will help you find (or build) the right fit.",
    highlights: [
      "Ready-to-buy showroom pieces",
      "Made-to-order sizing and fabric options",
      "Delivery and in-home setup",
    ],
  },
  {
    slug: "reupholstery",
    name: "Reupholstery",
    img: reupholstery,
    gallery: [reupholsteryAlt1, reupholsteryAlt2],
    text: "We replace worn fabric and padding, restoring your pieces to their original beauty.",
    long: "From a tired sofa to a family heirloom armchair, reupholstery is where we started and what we do best. We strip each piece back to the frame, rebuild the padding where needed, and finish it in a fabric of your choice — so it looks new and holds up for years.",
    highlights: [
      "Full frame inspection and repair",
      "Foam and padding replacement",
      "Hundreds of fabrics to choose from",
    ],
  },
  {
    slug: "car-upholstery",
    name: "Car Upholstery",
    img: carSeat,
    text: "High-quality materials and meticulous craftsmanship for a comfortable, stylish interior.",
    long: "Give your vehicle's interior a fresh look and feel. We reupholster seats, door panels and headliners in leather or fabric, matching factory stitching or building a custom design from scratch.",
    highlights: [
      "Leather and fabric options",
      "Seats, panels and headliners",
      "Custom stitching patterns",
    ],
  },
  {
    slug: "curtains-and-blinds",
    name: "Curtains and Blinds",
    img: mediaUnit,
    text: "A wide range of styles, fabrics, and functionalities to suit your home.",
    long: "From soft sheers to blackout blinds, we measure, make and fit window treatments that match your interior and control light exactly how you want it.",
    highlights: [
      "Custom measuring and fitting",
      "Blackout, sheer and thermal fabrics",
      "Motorised options available",
    ],
  },
  {
    slug: "custom-furniture",
    name: "Custom Furniture",
    img: customTable,
    text: "Custom design and fabrication, bringing your unique vision to life.",
    long: "Have a piece in mind that doesn't exist yet? We design and build custom furniture from concept sketches to finished product — matched to your space, your style and your budget.",
    highlights: [
      "One-on-one design consultation",
      "Built to your exact dimensions",
      "Choice of timber, finish and fabric",
    ],
  },
  {
    slug: "carpentry",
    name: "Carpentry",
    img: outdoorBench,
    text: "Framing, finishing, custom builds, and repairs — reliable, quality craftsmanship.",
    long: "Our carpentry team handles everything from structural framing to fine finishing work — built-in cabinetry, repairs, and custom builds carried out to a high standard.",
    highlights: [
      "Framing and structural work",
      "Built-in cabinetry and shelving",
      "Repairs and finishing carpentry",
    ],
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    img: interiorDesign,
    gallery: [interiorDesignAlt1, interiorDesignAlt2],
    text: "Comprehensive interior design, from concept to a beautiful, functional space.",
    long: "We help you plan a room from the ground up — layout, furniture, fabrics, lighting and finishing touches — so the end result feels considered, not accidental.",
    highlights: [
      "Full room and space planning",
      "Furniture and fabric selection",
      "Concept to installation",
    ],
  },
  {
    slug: "headboard-bed-manufacturing",
    name: "Headboard & Bed Manufacturing",
    img: bedManufacturing,
    gallery: [bedManufacturingAlt1],
    text: "Traditional designs to custom creations, for any bedroom.",
    long: "From classic panel headboards to sculptural, fully upholstered bed frames, we build beds to your chosen size, shape and fabric — designed to be the centrepiece of the room.",
    highlights: [
      "Custom sizing, including super king",
      "Upholstered and panelled styles",
      "Matching headboard and bed base",
    ],
  },
  {
    slug: "patio",
    name: "Patio",
    img: patioLounge,
    text: "Design and enjoy a beautiful, functional outdoor space for relaxing and entertaining.",
    long: "We design and furnish outdoor living spaces built to handle the elements without giving up on comfort or style — lounges, dining sets and daybeds made with weather-resistant materials.",
    highlights: [
      "Weather-resistant fabrics and frames",
      "Lounge, dining and daybed sets",
      "Custom sizing for your patio or deck",
    ],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
