import images from "./images";

const { homeSlider } = images;
const homeSlides = [
    {
        title: "Furniture collection",
        text: `Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic
        lyft ethical drinking vinegar austint`,
        img: homeSlider.chair01,
    },
    {
        title: "Collection furniture",
        text: `Deep v you probably haven't heard of them banh mi synth actually affogato.`,
        img: homeSlider.chair02,
    },
    {
        title: "Collection numero 1",
        text: `Deep v you probably haven't heard of them banh mi synth actually affogato. Deep v you
        probably haven't heard of them banh mi synth`,
        img: homeSlider.chair03,
    },
];

const { collectionImages } = images;
const collectionItems = [
    {
        title: "Collection",
        tags: [
            { tag: "Living room", link: "Living room" },
            { tag: "Couch", link: "Couch" },
        ],
        img: collectionImages.collection01,
    },
    {
        title: "Furniture",
        tags: [
            { tag: "Living furntiture", link: "Living furntiture" },
            { tag: "Pillow", link: "Pillow" },
        ],
        img: collectionImages.collection02,
    },
    {
        title: "Furniture collection",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Chair", link: "Chair" },
        ],
        img: collectionImages.collection03,
    },
    {
        title: "Truffaut literally trust literally",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Table", link: "Table" },
        ],
        img: collectionImages.collection04,
    },
    {
        title: "Furniture collection",
        tags: [
            { tag: "Room furntiture Living room furntiture", link: "Room furntiture Living room furntiture" },
            { tag: "Couch", link: "Couch" },
        ],
        img: collectionImages.collection05,
    },
];

const { galleryImages } = images;
const galleryItems = [
    {
        img: galleryImages.gallery01,
        alt: "01",
        categories: ["Chair", "Office furniture"],
    },
    {
        img: galleryImages.gallery02,
        alt: "02",
        categories: ["Chair", "Living room furniture"],
    },
    {
        img: galleryImages.gallery03,
        alt: "03",
        categories: ["Dining room futniture", "Office furniture"],
    },
    {
        img: galleryImages.gallery04,
        alt: "04",
        categories: ["Dining room futniture", "Living room furniture"],
    },
    {
        img: galleryImages.gallery05,
        alt: "05",
        categories: ["Dining room futniture", "Office furniture"],
    },
    {
        img: galleryImages.gallery06,
        alt: "06",
        categories: ["Bedroom furniture", "Living room furniture", "Chair"],
    },
    {
        img: galleryImages.gallery07,
        alt: "07",
        categories: ["Bedroom furniture", "Office furniture"],
    },
    {
        img: galleryImages.gallery08,
        alt: "08",
        categories: ["Bedroom furniture", "Living room furniture", "Chair"],
    },
    {
        img: galleryImages.gallery09,
        alt: "09",
        categories: ["Bedroom furniture", "Dining room futniture"],
    },
    {
        img: galleryImages.gallery10,
        alt: "10",
        categories: ["Bedroom furniture", "Dining room futniture", "Chair"],
    },
];

export default { homeSlides, collectionItems, galleryItems };
