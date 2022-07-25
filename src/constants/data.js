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
        thumb: galleryImages.galleryThumb01,
        alt: "01",
        categories: ["Chair", "Office furniture"],
    },
    {
        img: galleryImages.gallery02,
        thumb: galleryImages.galleryThumb02,
        alt: "02",
        categories: ["Chair", "Living room furniture"],
    },
    {
        img: galleryImages.gallery03,
        thumb: galleryImages.galleryThumb03,
        alt: "03",
        categories: ["Dining room futniture", "Office furniture"],
    },
    {
        img: galleryImages.gallery04,
        thumb: galleryImages.galleryThumb04,
        alt: "04",
        categories: ["Dining room futniture", "Living room furniture"],
    },
    {
        img: galleryImages.gallery05,
        thumb: galleryImages.galleryThumb05,
        alt: "05",
        categories: ["Dining room futniture", "Office furniture"],
    },
    {
        img: galleryImages.gallery06,
        thumb: galleryImages.galleryThumb06,
        alt: "06",
        categories: ["Bedroom furniture", "Living room furniture", "Chair"],
    },
    {
        img: galleryImages.gallery07,
        thumb: galleryImages.galleryThumb07,
        alt: "07",
        categories: ["Bedroom furniture", "Office furniture"],
    },
    {
        img: galleryImages.gallery08,
        thumb: galleryImages.galleryThumb08,
        alt: "08",
        categories: ["Bedroom furniture", "Living room furniture", "Chair"],
    },
    {
        img: galleryImages.gallery09,
        thumb: galleryImages.galleryThumb09,
        alt: "09",
        categories: ["Bedroom furniture", "Dining room futniture"],
    },
    {
        img: galleryImages.gallery10,
        thumb: galleryImages.galleryThumb10,
        alt: "10",
        categories: ["Bedroom furniture", "Dining room futniture", "Chair"],
    },
];

const { ideasImages } = images;
const blogItems = [
    {
        img: ideasImages.ideas01,
        date: new Date(2022, 6, 13),
        link: "dc95be89-9c30-42d8-bf7f-c9db22c09d5f",
        author: "Ann Summers",
        tags: ["Inrerior"],
        title: "Listicle actually selvage activated charcoal for the drinking vinegar",
        previewText: `Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table`,
        content: "",
        comments: [
            {
                id: "bc681db7-252c-4c83-a0cf-137df9432e0b",
                avatar: "Lea Brown",
                name: "",
                date: "August 12, 2020",
                text: "Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
            },
        ],
    },
    {
        img: ideasImages.ideas02,
        date: new Date(2022, 6, 12),
        link: "3aaa4c30-a2ce-44af-9b0e-1e9f2442a5f2",
        author: "Finnagan Morningstar",
        tags: ["Dining room interior"],
        title: "Red selfies edison bulb four dollar toast humblebrag",
        previewText: `Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table`,
        content: "",
        comments: [],
    },
];

export default { homeSlides, collectionItems, galleryItems, blogItems };
