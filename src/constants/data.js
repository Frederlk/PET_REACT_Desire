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

export default { homeSlides, collectionItems };
