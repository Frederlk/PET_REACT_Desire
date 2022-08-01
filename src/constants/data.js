import images from "./images";

const { homeSlider } = images;
const homeSlides = [
    {
        title: "furniture collection",
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
        link: "27701a5f-af0f-4560-ae4a-aab01b3b9de3",
        tags: [
            { tag: "Living room", link: "Living room" },
            { tag: "Couch", link: "Couch" },
        ],
        img: collectionImages.collection01,
    },
    {
        title: "furniture",
        link: "bc89bf1d-2605-449a-93c3-d39669bfdb23",
        tags: [
            { tag: "Living furntiture", link: "Living furntiture" },
            { tag: "Pillow", link: "Pillow" },
        ],
        img: collectionImages.collection02,
    },
    {
        title: "furniture collection",
        link: "e4b3487b-2f56-4b09-86f9-958cfe7e994d",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Chair", link: "Chair" },
        ],
        img: collectionImages.collection03,
    },
    {
        title: "Truffaut literally trust literally",
        link: "0707c4e3-fbd3-4805-a02d-ab2279e4400b",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Table", link: "Table" },
        ],
        img: collectionImages.collection04,
    },
    {
        title: "furniture collection",
        link: "d808b5b2-4bbf-4078-9ef7-db1c8f67275d",
        tags: [
            { tag: "Room furntiture Living room furntiture", link: "Room furntiture Living room furntiture" },
            { tag: "Couch", link: "Couch" },
        ],
        img: collectionImages.collection05,
    },
    {
        title: "Collection",
        link: "ee227c5b-0d9f-406e-9529-8bd6ca9573c5",
        tags: [
            { tag: "Living room", link: "Living room" },
            { tag: "Couch", link: "Couch" },
        ],
        img: collectionImages.collection01,
    },
    {
        title: "furniture",
        link: "3233ee4a-10d2-4b11-bc9b-449dc27b84a3",
        tags: [
            { tag: "Living furntiture", link: "Living furntiture" },
            { tag: "Pillow", link: "Pillow" },
        ],
        img: collectionImages.collection02,
    },
    {
        title: "furniture collection",
        link: "e610f954-22ff-42f0-853c-e93c306d6ef5",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Chair", link: "Chair" },
        ],
        img: collectionImages.collection03,
    },
    {
        title: "Truffaut literally trust literally",
        link: "3b03c8c4-0acb-45bd-af47-81342364399a",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Table", link: "Table" },
        ],
        img: collectionImages.collection04,
    },
    {
        title: "furniture collection",
        link: "bf1ac65c-b2fa-4a00-b66a-f78fcfaaa823",
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
        categories: ["Dining room furniture", "Office furniture"],
    },
    {
        img: galleryImages.gallery04,
        thumb: galleryImages.galleryThumb04,
        alt: "04",
        categories: ["Dining room furniture", "Living room furniture"],
    },
    {
        img: galleryImages.gallery05,
        thumb: galleryImages.galleryThumb05,
        alt: "05",
        categories: ["Dining room furniture", "Office furniture"],
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
        categories: ["Bedroom furniture", "Dining room furniture"],
    },
    {
        img: galleryImages.gallery10,
        thumb: galleryImages.galleryThumb10,
        alt: "10",
        categories: ["Bedroom furniture", "Dining room furniture", "Chair"],
    },
];

const { blogImages } = images;
const blogItems = [
    {
        img: blogImages.blog01,
        date: new Date(2022, 6, 13),
        link: "dc95be89-9c30-42d8-bf7f-c9db22c09d5f",
        author: "Ann Summers",
        tags: ["Interior", "Bedroom", "Office furniture", "Dining room furniture"],
        category: "Simple interiror design",
        title: "Listicle actually selvage activated charcoal for the drinking vinegar",
        previewText: `Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table`,
        content: `
        <p>
        Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally
        williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin
        pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy
        pabst enamel pin edison bulb farm-to-table.
        </p>
        <p>
            Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray
            stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony
            intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr
            williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo
            santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.
        </p>
        <div>
            <q>“Simplicity is not the goal. It is the by-product of a good idea and modest expectations”</q>
            <span>Paul Rand</span>
        </div>
        <p>
            Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring
            book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table.
        </p>
        <p>
            Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray
            stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony
            intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr
            williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo
            santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.
        </p>
        `,
        comments: [
            {
                id: "bc681db7-252c-4c83-a0cf-137df9432e0b",
                avatar: blogImages.avatar,
                name: "Lea Brown",
                date: new Date(2022, 7, 12),
                text: "Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
                replied: [
                    {
                        id: "bc681db7-252c-4c83-a0cf-137df9432e0basfafasf",
                        avatar: blogImages.avatar,
                        name: "Kee Tar",
                        date: new Date(2022, 7, 12),
                        text: "Tumeric YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
                        replied: [],
                    },
                ],
            },
        ],
    },
    {
        img: blogImages.blog02,
        date: new Date(2022, 6, 12),
        link: "3aaa4c30-a2ce-44af-9b0e-1e9f2442a5f2",
        author: "Finnagan Morningstar",
        tags: ["Dining room furniture", "Table"],
        category: "Dining room",
        title: "Red selfies edison bulb four dollar toast humblebrag",
        previewText: `Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table`,
        content: "",
        comments: [],
    },
    {
        img: blogImages.blog03,
        date: new Date(2022, 5, 12),
        link: "9641d375-1354-454c-b22a-568c543096ee",
        author: "Lux Morningstar",
        tags: ["Bedroom", "Table"],
        category: "Design",
        title: "Authentic kogi shabby chic",
        previewText: `Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table`,
        content: "",
        comments: [
            {
                id: "bc681db7-252c-4c83-a0cf-137df9432e0b",
                avatar: blogImages.avatar,
                name: "Lou Green",
                date: new Date(2022, 7, 12),
                text: "Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
                replied: [],
            },
        ],
    },
];

const socialLinks = [
    {
        title: "Facebook",
        link: "#Facebook",
        icon: "_icon-facebook",
    },
    {
        title: "Instagram",
        link: "#Instagram",
        icon: "_icon-inst",
    },
    {
        title: "Pinterest",
        link: "#Pinterest",
        icon: "_icon-pin",
    },
    {
        title: "WhatsApp",
        link: "#WhatsApp",
        icon: "_icon-whatsapp",
    },
    {
        title: "Youtube",
        link: "#Youtube",
        icon: "_icon-youtube",
    },
];

const blogSide = {
    categories: ["Dining room", "Office furniture", "Simple interiror design", "Design", "Bedroom furniture"],
    tags: ["Dining room furniture", "Interior", "Table", "Bedroom", "Office furniture"],
};

export default { homeSlides, collectionItems, galleryItems, blogItems, socialLinks, blogSide };
