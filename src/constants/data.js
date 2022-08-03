import images from "./images";
const { chairImages, contentImages, avatarImages } = images;

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

const blogItems = [
    {
        img: contentImages.content01,
        imgWebp: contentImages.content01_WEBP,
        date: new Date(2022, 5, 14),
        link: "9641d375-1354-454c-b22a",
        author: "Finibus Bonorum",
        tags: ["Floor", "Bedroom", "Walls"],
        category: "Design",
        title: "1914 translation by H. Rackham",
        previewText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
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
        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=1200:*' alt='1914 translation by H. Rackham'/>
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
                id: "bc681db7-252c-4c83-a0cf-137df9432e0bfslfs",
                avatar: avatarImages.avatar01,
                avatarWebp: avatarImages.avatar01_WEBP,
                name: "Lia Towe",
                date: new Date(2022, 7, 16),
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                replied: [],
            },
        ],
    },
    {
        img: contentImages.content02,
        imgWebp: contentImages.content02_WEBP,
        date: new Date(2022, 6, 10),
        link: "b7acd07a-c25e-4739-189c67627cf8",
        author: "Tyrus Gibs",
        tags: ["Table", "Chair"],
        category: "Office furniture",
        title: "Five Top Reasons Why You Face Obstacles In Learning Furniture",
        previewText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        content: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src='https://images.ctfassets.net/5de70he6op10/31JhRUGEk57sqHFkVtdgiJ/268691daa0341dbd4b6e85b7d10ca073/Furniture_Gateway_01.jpg?w=856&q=80&fm=jpg&fl=progressive' alt='Five Top Reasons Why You Face Obstacles In Learning Furniture'/>
            <p>
                Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray
                stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony
                intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr
                williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust fund palo
                santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.
            </p> `,
        comments: [],
    },
    {
        img: contentImages.content03,
        imgWebp: contentImages.content03_WEBP,
        date: new Date(2022, 6, 12),
        link: "b7acd07a-c25e-4739-189c67627cf8-k21341m",
        author: "Zirpin Destro",
        tags: ["Bedroom", "Couch", "Chair"],
        category: "Bedroom furniture",
        title: "Seven Difficult Things About Furniture.",
        previewText: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`,
        content: `
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
            <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p> 
            <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            </p> `,
        comments: [
            {
                id: "bc681db7-252c-4c83-a0cf-137df9432e0b21312jn",
                avatar: avatarImages.avatar02,
                avatarWebp: avatarImages.avatar02_WEBP,
                name: "Carry Fish",
                date: new Date(2022, 6, 12),
                text: "Semiotics man bun venmo viral cliche",
                replied: [
                    {
                        id: "bc681db7-252c-4c83-a0cf-137df9432e0basfafasfasf21",
                        avatar: avatarImages.avatar03,
                        avatarWebp: avatarImages.avatar03_WEBP,
                        name: "Chager Soi",
                        date: new Date(2022, 6, 13),
                        text: "Everyday carry actually neutra authentic kogi shabby",
                        replied: [],
                    },
                ],
            },
        ],
    },
    {
        img: contentImages.content04,
        imgWebp: contentImages.content04_WEBP,
        date: new Date(2022, 8, 1),
        link: "b7acd07a-c25e341m",
        author: "Nelot Telvanni",
        tags: ["Walls", "Table", "Plant"],
        category: "Simple interior",
        title: "Furniture Is So Famous, But Why?",
        previewText: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`,
        content: `
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
            </p>
            <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p> 
            <div>
            <q>"It's a pity.I understand why you want to preserve such a wonderful relic of Dwemer culture.But now, I'm sorry, I don't have time for empty chatter”</q>
            <span>Divayth Fyr</span>
            </div>
            <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            </p> `,
        comments: [
            {
                id: "bc681db7-a0cf-137df9432e0b21312jn",
                avatar: avatarImages.avatar04,
                avatarWebp: avatarImages.avatar04_WEBP,
                name: "Almalexia",
                date: new Date(2022, 8, 2),
                text: "It's extraordinary to look into a baby's face and see a piece of your flesh and your spirit. It makes you realize you are a part of the human race.",
                replied: [
                    {
                        id: "bc681db7-252c-4c83-asfafasfasf21",
                        avatar: avatarImages.avatar01,
                        avatarWebp: avatarImages.avatar01_WEBP,
                        name: "Sotha Sil",
                        date: new Date(2022, 8, 3),
                        text: "I watch. I wonder. I build. I tear down. Am I a god? A surely as any are.",
                        replied: [],
                    },
                    {
                        id: "bc681db7-252c-4c2e0basfafasfasf21",
                        avatar: avatarImages.avatar02,
                        avatarWebp: avatarImages.avatar02_WEBP,
                        name: "Vivec",
                        date: new Date(2022, 8, 4),
                        text: "Defy me, and you will know what it is to stand against a god.",
                        replied: [],
                    },
                ],
            },
        ],
    },
    {
        img: contentImages.content05,
        imgWebp: contentImages.content05_WEBP,
        date: new Date(2022, 4, 27),
        link: "b7acd07a-c25e341m-fw-213fsa14-safa",
        author: "Aaron Galua",
        tags: ["Table", "Chair", "Plant"],
        category: "Dining room",
        title: "This Is Why Furniture Is So Famous!",
        previewText: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language`,
        content: `
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
            </p>
            <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            </p> `,
        comments: [
            {
                id: "bc681db7-a0cf-137df9432e0b21312jn",
                avatar: avatarImages.avatar02,
                avatarWebp: avatarImages.avatar02_WEBP,
                name: "Anastasia",
                date: new Date(2022, 4, 28),
                text: "Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth",
                replied: [
                    {
                        id: "bc681db7-252c-4c83-asfafasfasf21",
                        avatar: avatarImages.avatar04,
                        avatarWebp: avatarImages.avatar04_WEBP,
                        name: "Kostan",
                        date: new Date(2022, 5, 1),
                        text: "Thats Right!",
                        replied: [
                            {
                                id: "bc681db7-252c-4c2e0basfafasfasf21-124",
                                avatar: avatarImages.avatar03,
                                avatarWebp: avatarImages.avatar03_WEBP,
                                name: "Ilya",
                                date: new Date(2022, 5, 4),
                                text: "Cred selfies edison bulb four dollar toast humblebrag",
                                replied: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        img: contentImages.content06,
        imgWebp: contentImages.content06_WEBP,
        date: new Date(2022, 5, 14),
        link: "b7acd07a-c25123124vfe341m-fw-213fsa14-safa",
        author: "Bayun The Cat",
        tags: ["Bedroom", "Table", "Floor", "Walls"],
        category: "Design",
        title: "Five Reasons Why People Like Furniture.",
        previewText: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.`,
        content: `
            <p>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
            </p>
            <p>
                I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary. 
                I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath
            </p> `,
        comments: [
            {
                id: "bc681db7-252c-4c83-a0cf-137df9432e0b",
                avatar: avatarImages.avatar01,
                avatarWebp: avatarImages.avatar01_WEBP,
                name: "Lou Green",
                date: new Date(2022, 7, 12),
                text: "Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
                replied: [],
            },
        ],
    },
    {
        img: contentImages.content07,
        imgWebp: contentImages.content07_WEBP,
        date: new Date(2022, 6, 9),
        link: "bm-fw-213fsa14-safa",
        author: "Lotor",
        tags: ["Couch", "Plant", "Table"],
        category: "Dining room",
        title: "10 Quick Tips Regarding Furniture.",
        previewText: `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?"`,
        content: `
            <p>
            One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?"
            </p>
            <p>
            he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. 
            </p>
            <img src='https://media.glamourmagazine.co.uk/photos/6138aaf86c53c747be7bd6cd/16:9/w_2560%2Cc_limit/madecom-luxe-maximalist-dion-sofa_sf.jpg' alt='10 Quick Tips Regarding Furniture.'/>
        `,
        comments: [],
    },
    {
        img: contentImages.content08,
        imgWebp: contentImages.content08_WEBP,
        date: new Date(2022, 7, 14),
        link: "bm-fw-213fsa14-saasfasf01231fa",
        author: "Lotor",
        tags: ["Bedroom", "Table"],
        category: "Dining room",
        title: "This Year Will Be The Year of Desing.",
        previewText: `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?"`,
        content: `
            <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!"
            </p>
            <img src='https://images.squarespace-cdn.com/content/v1/57d639638419c25872205844/1479338167344-RJDOV0FT9KLKP990PXOR/design-header.jpg?format=2500w' alt='This Year Will Be The Year of Desing.'/>
            <p>
            my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox.
            </p>
            <p> The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just</p>
        `,
        comments: [
            {
                id: "bc681db7-252c0b21312jn",
                avatar: avatarImages.avatar02,
                avatarWebp: avatarImages.avatar02_WEBP,
                name: "Ghubash",
                date: new Date(2022, 7, 15),
                text: "This handy tool helps you create dummy text for all your layout needs.",
                replied: [],
            },
        ],
    },
    {
        img: contentImages.content09,
        imgWebp: avatarImages.content09_WEBP,
        date: new Date(2022, 6, 13),
        link: "dc95be89-9c30-42d8-bf7f-c9db22c09d5f",
        author: "Ann Summers",
        tags: ["Chair", "Couch", "Plant"],
        category: "Simple interior",
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
                avatar: avatarImages.avatar03,
                avatarWebp: avatarImages.avatar03_WEBP,
                name: "Lea Brown",
                date: new Date(2022, 7, 12),
                text: "Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
                replied: [
                    {
                        id: "bc681db7-252c-4c83-a0cf-137df9432e0basfafasf",
                        avatar: avatarImages.avatar01,
                        avatarWebp: avatarImages.avatar01_WEBP,
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
        img: contentImages.content10,
        imgWebp: avatarImages.content10_WEBP,
        date: new Date(2022, 6, 12),
        link: "3aaa4c30-a2ce-44af-9b0e-1e9f2442a5f2",
        author: "Finnagan Morningstar",
        tags: ["Table", "Bedroom", "Walls"],
        category: "Dining room",
        title: "Red selfies edison bulb four dollar toast humblebrag",
        previewText: `Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table`,
        content: "",
        comments: [],
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
    tags: ["Table", "Bedroom", "Chair", "Couch", "Plant", "Floor", "Walls"],
    categories: ["Dining room", "Office furniture", "Simple interior", "Design", "Bedroom furniture"],
};

export default { homeSlides, blogItems, socialLinks, filters };
