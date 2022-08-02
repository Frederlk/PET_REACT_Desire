import images from "./images";

const { chairImages } = images;
const homeSlides = [
    {
        title: "furniture collection",
        text: `Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic
        lyft ethical drinking vinegar austint`,
        img: chairImages.chair01,
        imgWebp: chairImages.chair01_WEBP,
    },
    {
        title: "Collection furniture",
        text: `Deep v you probably haven't heard of them banh mi synth actually affogato.`,
        img: chairImages.chair02,
        imgWebp: chairImages.chair02_WEBP,
    },
    {
        title: "Collection numero 1",
        text: `Deep v you probably haven't heard of them banh mi synth actually affogato. Deep v you
        probably haven't heard of them banh mi synth`,
        img: chairImages.chair03,
        imgWebp: chairImages.chair03_WEBP,
    },
];

const { contentImages } = images;
const collectionItems = [
    {
        title: "Collection",
        link: "27701a5f-af0f-4560-ae4a-aab01b3b9de3",
        tags: [
            { tag: "Living room", link: "Living room" },
            { tag: "Couch", link: "Couch" },
        ],
        img: contentImages.content01,
        imgWebp: contentImages.content01_WEBP,
    },
    {
        title: "furniture",
        link: "bc89bf1d-2605-449a-93c3-d39669bfdb23",
        tags: [
            { tag: "Living furntiture", link: "Living furntiture" },
            { tag: "Pillow", link: "Pillow" },
        ],
        img: contentImages.content02,
        imgWebp: contentImages.content02_WEBP,
    },
    {
        title: "furniture collection",
        link: "e4b3487b-2f56-4b09-86f9-958cfe7e994d",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Chair", link: "Chair" },
        ],
        img: contentImages.content03,
        imgWebp: contentImages.content03_WEBP,
    },
    {
        title: "Truffaut literally trust literally",
        link: "0707c4e3-fbd3-4805-a02d-ab2279e4400b",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Table", link: "Table" },
        ],
        img: contentImages.content04,
        imgWebp: contentImages.content04_WEBP,
    },
    {
        title: "furniture collection",
        link: "d808b5b2-4bbf-4078-9ef7-db1c8f67275d",
        tags: [
            { tag: "Room furntiture Living room furntiture", link: "Room furntiture Living room furntiture" },
            { tag: "Couch", link: "Couch" },
        ],
        img: contentImages.content05,
        imgWebp: contentImages.content05_WEBP,
    },
    {
        title: "Collection",
        link: "ee227c5b-0d9f-406e-9529-8bd6ca9573c5",
        tags: [
            { tag: "Living room", link: "Living room" },
            { tag: "Couch", link: "Couch" },
        ],
        img: contentImages.content06,
        imgWebp: contentImages.content06_WEBP,
    },
    {
        title: "furniture",
        link: "3233ee4a-10d2-4b11-bc9b-449dc27b84a3",
        tags: [
            { tag: "Living furntiture", link: "Living furntiture" },
            { tag: "Pillow", link: "Pillow" },
        ],
        img: contentImages.content07,
        imgWebp: contentImages.content07_WEBP,
    },
    {
        title: "furniture collection",
        link: "e610f954-22ff-42f0-853c-e93c306d6ef5",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Chair", link: "Chair" },
        ],
        img: contentImages.content08,
        imgWebp: contentImages.content08_WEBP,
    },
    {
        title: "Truffaut literally trust literally",
        link: "3b03c8c4-0acb-45bd-af47-81342364399a",
        tags: [
            { tag: "Living room furntiture", link: "Living room furntiture" },
            { tag: "Table", link: "Table" },
        ],
        img: contentImages.content09,
        imgWebp: contentImages.content09_WEBP,
    },
    {
        title: "furniture collection",
        link: "bf1ac65c-b2fa-4a00-b66a-f78fcfaaa823",
        tags: [
            { tag: "Room furntiture Living room furntiture", link: "Room furntiture Living room furntiture" },
            { tag: "Couch", link: "Couch" },
        ],
        img: contentImages.content10,
        imgWebp: contentImages.content10_WEBP,
    },
];

const galleryItems = [
    {
        img: contentImages.content01,
        imgWebp: contentImages.content01_WEBP,
        alt: "01",
        categories: ["Chair", "Office furniture"],
    },
    {
        img: contentImages.content02,
        imgWebp: contentImages.content02_WEBP,
        alt: "02",
        categories: ["Chair", "Living room furniture"],
    },
    {
        img: contentImages.content03,
        imgWebp: contentImages.content03_WEBP,
        alt: "03",
        categories: ["Dining room furniture", "Office furniture"],
    },
    {
        img: contentImages.content04,
        imgWebp: contentImages.content04_WEBP,
        alt: "04",
        categories: ["Dining room furniture", "Living room furniture"],
    },
    {
        img: contentImages.content05,
        imgWebp: contentImages.content05_WEBP,
        alt: "05",
        categories: ["Dining room furniture", "Office furniture"],
    },
    {
        img: contentImages.content06,
        imgWebp: contentImages.content06_WEBP,
        alt: "06",
        categories: ["Bedroom furniture", "Living room furniture", "Chair"],
    },
    {
        img: contentImages.content07,
        imgWebp: contentImages.content07_WEBP,
        alt: "07",
        categories: ["Bedroom furniture", "Office furniture"],
    },
    {
        img: contentImages.content08,
        imgWebp: contentImages.content08_WEBP,
        alt: "08",
        categories: ["Bedroom furniture", "Living room furniture", "Chair"],
    },
    {
        img: contentImages.content09,
        imgWebp: contentImages.content09_WEBP,
        alt: "09",
        categories: ["Bedroom furniture", "Dining room furniture"],
    },
    {
        img: contentImages.content10,
        imgWebp: contentImages.content10_WEBP,
        alt: "10",
        categories: ["Bedroom furniture", "Dining room furniture", "Chair"],
    },
];

const { blogImages } = images;
const blogItems = [
    {
        img: blogImages.blog01,
        imgWebp: blogImages.blog01_WEBP,
        date: new Date(2022, 6, 13),
        link: "dc95be89-9c30-42d8-bf7f-c9db22c09d5f",
        author: "Ann Summers",
        tags: ["Bedroom furniture", "Living room furniture", "Office furniture"],
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
                avatarWebp: blogImages.avatar_WEBP,
                name: "Lea Brown",
                date: new Date(2022, 7, 12),
                text: "Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
                replied: [
                    {
                        id: "bc681db7-252c-4c83-a0cf-137df9432e0basfafasf",
                        avatar: blogImages.avatar,
                        avatarWebp: blogImages.avatar_WEBP,
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
        imgWebp: blogImages.blog02_WEBP,
        date: new Date(2022, 6, 12),
        link: "3aaa4c30-a2ce-44af-9b0e-1e9f2442a5f2",
        author: "Finnagan Morningstar",
        tags: ["Living room furniture", "Office furniture", "Dining room furniture"],
        category: "Dining room",
        title: "Red selfies edison bulb four dollar toast humblebrag",
        previewText: `Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table`,
        content: "",
        comments: [],
    },
    {
        img: blogImages.blog03,
        imgWebp: blogImages.blog03_WEBP,
        date: new Date(2022, 5, 12),
        link: "9641d375-1354-454c-b22a-568c543096ee",
        author: "Lux Morningstar",
        tags: ["Dining room furniture", "Chair"],
        category: "Design",
        title: "Authentic kogi shabby chic",
        previewText: `Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table`,
        content: "",
        comments: [
            {
                id: "bc681db7-252c-4c83-a0cf-137df9432e0b",
                avatar: blogImages.avatar,
                avatarWebp: blogImages.avatar_WEBP,
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

const filters = {
    categories: ["Dining room", "Office furniture", "Simple interiror design", "Design", "Bedroom furniture"],
    tags: ["Bedroom furniture", "Living room furniture", "Office furniture", "Dining room furniture", "Chair"],
};

export default { homeSlides, collectionItems, galleryItems, blogItems, socialLinks, filters };
