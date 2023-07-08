//Accommodation data
let accommodations = [
    {
        id: 0,
        title: "Awesomely Ambient Home",
        bed: "1bed",
        feature: "Eco",
        location: "Queenstown",
        rating: 4.63,
        price: 225,
        MaxGuest: 2,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/37fb1f95-fd76-4a02-a829-b762486ed30a.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/73749bb7-d3a7-4e80-bbee-1e9a1e8cf649.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/46a6abc0-a01d-450d-ac4a-a131b77e0356.jpg?im_w=1200",
            sideImage3: "https://a0.muscache.com/im/pictures/4775ff15-3889-496b-b900-10bfbd38e356.jpg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/16720df9-ebdb-4a34-b25d-1f829557530b.jpg?im_w=720"
        },
        description: `
        This funky studio is situated on the upper level of the apartment has stunning views of Lake Wakatipu & the Remarkables mountain range with its own balcony with BBQ and access to the Spa pool on the large patio at the back of the property.<br>
    
        We are aiming to be as eco friendly as we possibly can be. All our cleaning is done using only chemical free products. And our newer properties have solar panels and wood pellet fires, resulting more self sufficiency and lower emissions. Even our hair products that we supply to our guests are NZ made, sulphate free, not tested on animals and palm oil free!!!`
    },
    {
        id: 1,
        title: "The Artist Residence - Tim Wilson",
        bed: "1bed",
        feature: "Unique",
        location: "Queenstown",
        rating: 4.97,
        price: 563,
        MaxGuest: 3,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-22046218-unapproved/original/21cd134b-1bb7-46b8-9778-7f0636ef4344.JPEG?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-22046218-unapproved/original/26edb796-9d7f-4cf8-a8be-5400ca395252.JPEG?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-22046218-unapproved/original/a377ba70-ecb6-4360-a05f-3e151d225e26.JPEG?im_w=1200",
            sideImage3: "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-22046218-unapproved/original/15de6a11-32c2-4102-8cef-0d6287d61dd3.JPEG?im_w=1200",
            sideImage4: "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-22046218-unapproved/original/12254978-b077-4144-b4cf-a4a8e2fde711.JPEG?im_w=1200"
        },
        description: `
        Luxurious and spacious private residential suite in a newly built Frank Lloyd Wright inspired contemporary residence. Situated on prestigious Queenstown Hill with expansive views of Lake Wakatipu, Cecil Peak, Walter Peak, Queenstown Gondola and the majestic Remarkables mountain ranges.<br>
        The privately accessed suite has a super king size bed with luxury linen, a spacious walk-in wardrobe, mini fridge, tea and coffee making facilities and a luxury ensuite with stand alone bath and walk in shower. Relax either inside or outside on the terrace with undoubtably the best sunset views in Queenstown.
        `
    },
    {
        id: 2,
        title: "Place to stay in a home",
        bed: "1bed",
        feature: "Budget",
        location: "Dudedin",
        rating: 4.73,
        price: 102,
        MaxGuest: 2,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/c97289c9-9d9a-416f-954d-97e324b7f4cf.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/81b61387-fc10-400a-a3ab-48e8c1190bc1.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/1f45f014-c9bc-424d-be65-b477e9549ff2.jpg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/0403ebde-77f7-43eb-a98e-e668cc973dfd.jpg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/866593dd-7a90-47e2-82d3-6ce8d189b156.jpg?im_w=1200"
        },
        description: `
        Cozy tiny room with Queen size bed, double sofa and separate bathroom. Great garden view with in the garden setting. Quite and private space with separate entrance of the room and locked door. Only 5 - 10 mins walking to the bus station, super market, cafe and restaurant.<br>

        Our separate room setting in the garden, Quite and private space with separate entrance of the room and locked door. Only 5 - 10 mins walking to the bus station, super market, cafe and restaurant.
        `
    },
    {
        id: 3,
        title: "Pisa Cabin on a hill",
        bed: "1bed",
        feature: "View",
        location: "Wanaka",
        rating: 4.97,
        price: 259,
        MaxGuest: 2,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/5c4e3b32-e85d-4fc2-bb4a-a3632875f0ba.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/625ff8e2-2390-4b20-96a8-f1b44398fab4.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/bf1b001d-bec7-4f2c-b636-8e3b9f87af2d.jpg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/32cf34b0-2bba-4074-9f22-d8bcb93ecfe5.jpg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/3eeb8bcc-db7b-4f4b-b7ea-28501fdbbde6.jpg?im_w=720"
        },
        description: `
        A cabin on a hillside made of gold in historic Bendigo, the best-kept secret in Central Otago. Surrounded by vineyards on a rustic landscape steeped in gold mining history. We're 30 minutes from Wanaka, 50 from Queenstown airport, at the heart of everything that makes Central Otago so beautiful and unique. There's much to explore from walks to wineries to a day on the lake and skiing in Wanaka. Pour yourself a glass of Vino, soak in the outdoor tub and be awed by the panoramic views.<br>

        The cabin sleeps two guests comfortably in a Queen bed, with a full en-suite, kitchenette, wood burner and modern furnishings. The cabin has sliding doors that open out onto your deck that look over the panoramic surrounding views. Soak all your worries away in the outdoor tub to the left of the cabin. The night sky is something wonderful to behold here away from light pollution and if you're lucky you may even glimpse the magical Southern Lights in all their glory.
        `
    },
    {
        id: 4,
        title: "Highlands on Homestead rural cottage",
        bed: "2beds",
        feature: "Unique",
        location: "Oamaru",
        rating: 4.98,
        price: 140,
        MaxGuest: 4,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/c62991d1-f07b-4e6d-8854-f20b48731830.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/8c5600dc-1228-4b9e-946f-16935cf4bde6.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/28eb74ba-ac37-4cfe-897a-0ff77d1a792d.jpg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/616b384c-c3d7-44a4-8f7d-f2ee140fce2a.jpg?im_w=1200",
            sideImage4: "https://a0.muscache.com/im/pictures/ebc65e06-b8c1-4388-b61f-3631a00f804f.jpg?im_w=1200"
        },
        description: `
        Spacious, comfortable and modern 1 bedroom unit with ensuite. A 2nd DETACHED room as an additional bedroom is available (see photo, fees apply) The cottage is equipped with microwave, stove top, toaster, kettle and basic utensils to prepare a simple meal. Private, delightful garden & decks facing the sun. Outdoor seating provided. Your well behaved, house trained dog is welcome to stay. Please let me know if your travelling with your furry friend and/or you require the 2nd bedroom.
        `
    },
    {
        id: 5,
        title: "The Cabin - Unique Cosy Log Cabin",
        bed: "1bed",
        feature: "Eco",
        location: "Twizel",
        rating: 4.82,
        price: 143,
        MaxGuest: 2,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-808050400152847708/original/49b4cc3c-8e85-41c3-bdcd-6d5f1426b2c1.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-808050400152847708/original/922d06c7-ec8d-47ca-b242-30e1c9b98508.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-808050400152847708/original/28514e0d-1cc4-4f7b-b1fc-2cb74472ee7c.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-808050400152847708/original/69648cca-0634-4d9f-b95e-405a53a8e69a.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-808050400152847708/original/8653a6a6-8375-4f69-845b-89087a8a9880.jpeg?im_w=720"
        },
        description: `
        Situated in Urban Twizel with a short walk to the shopping area. Enjoy what the Mackenzie Country District has to offer, with it’s stunning night skies and aqua blue lakes. Enjoyed from a hand-crafted log cabin to start you out on the right note. Enjoy a memorable visit when you stay in this unique place.
        `
    },
    {
        id: 6,
        title: "Starlight Garden Apartment",
        bed: "1bed",
        feature: "Eco",
        location: "Tekapo",
        rating: 4.92,
        price: 255,
        MaxGuest: 2,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-53572834/original/1cbb79c1-b608-4f5b-8bd0-ba051a0e402e.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/28c867d9-e23a-410f-964e-8cb7f6603a49.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-737962770696162213/original/2d59acaa-48cd-4ea2-a7eb-076bba36bf69.jpeg?im_w=1200",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-53572834/original/42a4e0d8-1013-4d28-a9dc-e5a47dfe4d0d.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/6e6fc34d-6dae-4bf6-bc1b-665e30b59e9d.jpg?im_w=720"
        },
        description: `
        Immerse yourself in this spacious and serene space. By day relax and enjoy the beautiful cottage garden, the stunning views of Lake Tekapo, surrounding mountains and The Church of the Good Shepherd. Then into the night be captivated by the breathtaking night sky. Just 5 minutes walk to Lake Tekapo and the Church of the Good Shepherd. Super King size bed. An ideal space for couples. Not suitable for children or infants.
        `
    },
    {
        id: 7,
        title: "Antair Lodge Private entrance",
        bed: "1bed",
        feature: "Budget",
        location: "Tekapo",
        rating: 4.40,
        price: 150,
        MaxGuest: 2,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-724032101282396401/original/7382016d-71cb-49b0-8340-0edad5a38ee9.png?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-726335587138410525/original/10d774dc-3e8c-42ec-a255-ec4c80610dc6.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-724032101282396401/original/9b6f731e-580d-4d39-aaf1-cc1db497c825.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-726335587138410525/original/6b48c30e-6573-482d-b25c-6c7843ea6ce4.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-724032101282396401/original/922fff5b-0b61-48c1-a29b-5ceae2228088.jpeg?im_w=720"
        },
        description: `
        This room provides great value and comfort for your stay in Tekapo. The bedroom has a TV with free view channels, en suite bathroom with shower, toilet and toiletries. The room is small (10m 2) but suitable for light travelers to stop over 1 or 2 nights in Tekapo for stargazing.
        There are total 5 bed rooms in the lodge. Living room and kitchen is shared for all the guests.
        `
    },
    {
        id: 8,
        title: "Cozy 3-Bedroom near Hagley Park",
        bed: "3beds",
        feature: "Family",
        location: "Christchurch",
        rating: 5.0,
        price: 200,
        MaxGuest: 6,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-885008300585910921/original/a10f16d3-1473-4b46-aa75-2b20921fc8ab.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-885008300585910921/original/c39d3faa-a818-47db-b0d2-706c85a06da6.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-885008300585910921/original/458d9335-7840-4c09-a279-04d43d1719f9.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-885008300585910921/original/f99cd500-4b08-4cbf-b88f-69dd7b6efe77.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-885008300585910921/original/a8525920-2e05-46fd-9bc6-8b2002b82320.jpeg?im_w=720"
        },
        description: `
        Stay in style at our 3-Bedroom, 1.5 bathrooms with internal access Garage (3 Storey) home near Christchurch CBD, local eateries, and Hagley Park. Modern furnishings, cozy bedrooms with Queen beds, fully equipped kitchen, and open plan living/dining area. Walk to top restaurants, cafes, and shops. We offer a 5-star experience and are always available to provide recommendations. Book now for a memorable stay in vibrant Christchurch! Sofa bed available for an extra guest - linen additional cost.
        `
    },
    {
        id: 9,
        title: "Park Views w/Carpark & Office Space",
        bed: "2beds",
        feature: "Budget",
        location: "Christchurch",
        rating: 4.89,
        price: 135,
        MaxGuest: 5,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-862692765851273009/original/e4529893-a55d-4c04-92e3-62c36778726b.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-862692765851273009/original/d3d15ea8-dbe3-4704-8a77-19d06d596078.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-862692765851273009/original/402cbfd2-66e4-4c97-9a68-ec8f7d8b20b4.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-862692765851273009/original/f1db1e8c-ce58-43b2-aafa-35671dac9714.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-862692765851273009/original/d514ada3-f536-4934-b5d1-419bf28eb861.jpeg?im_w=720"
        },
        description: `
        Newly built 2 Storey 1 bedroom 1 bathroom complete with private courtyard facing Middleton Park and enjoying the views right from the comfort of the bedroom through a Juliette balcony. Complete with King bed, Office/Study Nook, Free carparking space with EV charger and fully equipped kitchen - this home away from home is the perfect escape. Comfortably accommodating up to 3 guests with the use of the sofa bed in the living area. Come enjoy Christchurch whilst also having a peaceful park setting.
        `
    },
    {
        id: 10,
        title: "Scandinavian Holiday Retreat",
        bed: "4beds",
        feature: "Family",
        location: "Hanmer Springs",
        rating: 4.96,
        price: 240,
        MaxGuest: 8,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/d8840a69-e0a8-4bff-8a79-15e173985b73.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/3d473818-ae31-4930-a243-54eed31c3430.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/c3549b14-3774-4697-8964-a70f99db2628.jpg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/77a06a30-203b-4797-93a4-06c9b93a2709.jpg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/774e609a-ee6c-492a-b3a6-215e074a7eb3.jpg?im_w=720"
        },
        description: `
        Beautifully renovated Scandinavian 3 bedroom holiday retreat. Beautiful interior decor set in a tranquil setting with stunning views. Walking distance to town and close to forest walks. The house accommodates 6 guests with 2 queen beds and 2 singles. Fitted with a heat pump to keep you warm and cosy and french doors out to a deck for Summer dining. Enjoy all that Hanmer has to offer!
        `
    },
    {
        id: 11,
        title: "Central Getaway w/ free parking",
        bed: "2beds",
        feature: "Unique",
        location: "Wellington",
        rating: 5.0,
        price: 235,
        MaxGuest: 4,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-875157790555646818/original/60c1500c-e238-46a6-80c0-39513ef3cc9a.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-875157790555646818/original/f4603532-38f7-4389-ac65-3dc174a5f4a9.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-875157790555646818/original/46623087-76fd-41b7-a48f-5522bea494c3.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-875157790555646818/original/e86bb33c-91fd-41f1-8408-581361ce890d.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-875157790555646818/original/6f5f8a1e-46ee-4b91-929e-076c44bd9363.jpeg?im_w=720"
        },
        description: `
        Welcome to your home away from home in the heart of Wellington! A central location that puts you in the midst of all the hustle and bustle of the city, while also providing a peaceful setting where you can escape from it all.
        `
    },
    {
        id: 12,
        title: "Treehouse w/outdoor bath",
        bed: "2beds",
        feature: "Eco",
        location: "Wellington",
        rating: 4.65,
        price: 165,
        MaxGuest: 4,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-38735089/original/a1dcf5c6-906a-4a9c-8882-a401d55231c9.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-38735089/original/5ed709c4-770c-42c4-87a1-9530522fe820.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-38735089/original/f5916e78-83c6-4b3c-9be4-4132e7bde8fe.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-38735089/original/209c962c-9b40-4d61-85ee-3d25b25586e7.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-38735089/original/4ee54358-dc9d-47eb-84a1-a8043f9d4963.jpeg?im_w=720"
        },
        description: `
        We'd love to welcome you to our recently renovated home, surrounded by native bush and frequently visited by native birds. This lovely home is only 10 mins to Wellington CBD, and located in a quiet and safe neighbourhood.<br>

        Pop down to the local coffee shop, spend time exploring native bush-walks and mountain bike tracks, unwind in our outdoor bath or just spend time in the house and garden enjoying our lovely private outlook. A perfect getaway!
        `
    },
    {
        id: 13,
        title: "Sunny & Tranquil Cottage",
        bed: "4beds",
        feature: "Family",
        location: "Taupo",
        rating: 4.90,
        price: 237,
        MaxGuest: 6,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/02e370d4-01ab-4e1b-8a77-d56b8e9b6bc1.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/c46c0c2e-7ef3-4869-b6d0-f6d5b4cb03ab.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/b821758f-6bbf-40eb-af9c-06ca7f2d4bd7.jpg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/ef564bf0-be3d-491e-a9a3-d04e0ea12ab5.jpg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/0c824bb9-7a62-4433-95d1-99b985682ba0.jpg?im_w=720"
        },
        description: `
        Whalesong Cottage is a spacious, light and relaxing haven, perfect for a fun family/group holiday, romantic getaway or business trip.<br>

        The contemporary, art-filled open plan lounge flows seamlessly onto a north-facing, sunny deck with outdoor sofas, bar leaner, BBQ, table and benches.<br>

        Renovated from top to bottom, our cottage is fresh and clean, with modern furniture including comfy beds for an awesome nights sleep.<br>

        Kids playground over the road.<br>
        `
    },
    {
        id: 14,
        title: "Something different",
        bed: "2beds",
        feature: "Family",
        location: "Rotorua",
        rating: 4.98,
        price: 330,
        MaxGuest: 4,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/26dc944b-5e28-4067-861f-e30b8a675c39.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-779748019592384899/original/c1fea367-46cc-474e-8b85-7cc137ebd43b.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-779748019592384899/original/0ac4182c-b23b-4dba-bafc-1b9bc279619f.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-779748019592384899/original/d088ed0a-6cd3-4f1d-a0b1-115a309e3e5c.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-779748019592384899/original/4a55f36d-802f-49ff-ba00-94cd2fb58b76.jpeg?im_w=720"
        },
        description: `
        Stay in the centre of the action in this one-of-a-kind place.
        Located next to Rotorua Golf Course and a 5 minute ride from MTB Rotorua world famous Mountainbike park as well as two of Rotorua's most Iconic Maori Tourist attractions, My home is the perfect location for exploring Rotorua and all it has to offer.<br>
        The surroundings maybe a little more formal but you'll find I offer a relaxed laid back home environment.
        `
    },
    {
        id: 15,
        title: "The Flax Pod",
        bed: "1bed",
        feature: "Unique",
        location: "Rotorua",
        rating: 4.95,
        price: 222,
        MaxGuest: 2,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-843793300105208367/original/e019e254-7d21-476d-86a3-0012da7a2419.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-843793300105208367/original/37f9092b-8763-47a8-9ea9-c2c4efb5ff9f.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-843793300105208367/original/96ecc998-0ff9-41e3-a5f3-3200b1c46d30.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-843793300105208367/original/02651834-3300-4ac3-80ef-e2dc7370b910.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-843793300105208367/original/2c0a4dfa-93f5-4d8e-b70e-a78ca84fe2c8.jpeg?im_w=720"
        },
        description: `
        The Flax Pod, a newly built sanctuary beneath Mount Ngongotahā. Relax, unwind, and indulge in this blissful haven. Immerse yourself in a captivating book, soak in the outdoor bath, or bask in the afternoon sun. Foodies will delight in the full kitchen and Weber BBQ. Store your mountain bikes in the purpose-built shed. Walk to Skyline Skyrides and the supermarket. Forest and CBD just 10 minutes away. Off-street parking and a spacious turnaround. Discover serenity and luxury at The Flax Pod.
        `
    },
    {
        id: 16,
        title: "Cozy Loft Hideaway",
        bed: "3beds",
        feature: "Budget",
        location: "Tauranga",
        rating: 4.71,
        price: 150,
        MaxGuest: 4,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/61c8b16b-c781-4c52-af07-2633a21daab8.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/c54a67f7-09db-4670-bf63-f0aa9fa12cba.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/89184db9-ef93-4e5c-b2be-cca5572caf66.jpg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/5daf9699-f1d8-47fd-8a6e-e91f5f8dd8c6.jpg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/6fb646b6-f347-4592-bea0-bc97c687b6b9.jpg?im_w=720"
        },
        description: `
        Not many Mount Maunganui holidays give you the chance to enjoy staying in such a unique and exciting tiny house. Why do ‘normal’ when you can book this modernist wonder with thrilling twin-loft bedrooms, soaring ceilings and the sharp-uncluttered ambiance of an architecturally designed masterpiece?<br>
        This is a great place to stay and only a block from town or the beach – book it today and make sure that your holiday at the Mount is genuinely one to remember.
        `
    },
    {
        id: 17,
        title: "River Gypsy House Bus and Wagon",
        bed: "2beds",
        feature: "Unique",
        location: "Coromandel",
        rating: 4.85,
        price: 155,
        MaxGuest: 6,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/a118f9c5-8ac7-478a-b3e1-e91732769daa.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/08ad701c-0b2f-44fe-b025-a75b341385fa.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/a2d64828-a459-4565-adcc-3d9df5c8bc12.jpg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/9eff053d-78d1-41d0-986d-5bc11c089a71.jpg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/4da3acb5-675d-49a7-8273-ee2a1eb9ca79.jpg?im_w=720"
        },
        description: `
        back to basics here with a quirky bus & toilet,hot shower outside. The bus is old but cozy and in a private area for you & friends to enjoy. please expect budget glamping with all the natural experiences.Native bush,the River across the road to swim in,the sea 2kms aswell as a dairy, pub,walks and cafes very close. perfect for a group reunion with a camp kitchen and pizza oven for use 3 nights or more.
        `
    },
    {
        id: 18,
        title: "THE BEACH LOFT 200m from beach",
        bed: "2beds",
        feature: "Unique",
        location: "Coromandel",
        rating: 4.93,
        price: 182,
        MaxGuest: 3,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-831258142401144195/original/fe8731c1-70f1-4ac8-972f-b775f8bfa316.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-831258142401144195/original/f8735122-4b1f-4c4d-9d5a-702f36b0e8ee.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-831258142401144195/original/8087b19e-fe21-4c92-8752-dbe735c20b96.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-27093364/original/a3e22032-97ec-4d1b-a16e-e1d01a7e98ab.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-831258142401144195/original/6742a123-ba61-4dc2-929c-a9c7a8379a69.jpeg?im_w=720"
        },
        description: `
        THE BEACH LOFT is a spacious studio with one queen and a single bed, a dining area and a bathroom with a separate toilet. Its design makes it perfect for a romantic getaway for 2, or a holiday for 3. The studio is just a 200m barefoot stroll along a grassy verge to our beautiful beach, including its magic vista of island outcrops and warm water temperatures. We are 100m to the local shop, café, bar and restaurant and on the doorstep of Cathedral Cove, Te Whanganui-A-Hei and Hot Water Beach!
        `
    },
    {
        id: 19,
        title: "Stylish cozy city life 1-bedroom",
        bed: "1bed",
        feature: "Budget",
        location: "Auckland",
        rating: 4.86,
        price: 152,
        MaxGuest: 2,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-873680970114394980/original/44a8cbe9-e40c-4df6-8c67-d16c6a1117db.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-873680970114394980/original/22212ae4-9879-4121-b522-ea01b30ffeb5.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-873680970114394980/original/d913f0ad-8f30-45d8-a6da-526acc27c580.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-873680970114394980/original/f80e2da7-5858-401a-9283-3548abd49902.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-873680970114394980/original/ce133ad3-844c-4d2d-b8bb-88302b4e92b1.jpeg?im_w=720"
        },
        description: `
        This stylishly designed apartment is within walking distance to Queen Street, Sky Tower and restaurants. It is a fashionable style of little studio hidden in the heart of Auckland.<br>
        Fully functional kitchen & laundry, open plan dining & living area, large floor-to-ceiling double glazed sliding door, great view look into the city, comfy queen size bed, complimentary amenities, suitable for short & long term stay. Free unlimited WiFi, 43 inches smart TV.
        `
    },
    {
        id: 20,
        title: "Urban Jungle Apartment",
        bed: "2beds",
        feature: "Unique",
        location: "Auckland",
        rating: 4.65,
        price: 178,
        MaxGuest: 3,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/5a1cfcae-34d2-4469-a4e2-ae16ecf8b68d.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/e8ad0fde-cf65-44d3-829d-c84712c8d1a3.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/add1e1aa-fea5-4f69-9cc5-4395f62587ef.jpg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/db847c41-f7cd-4df9-a2a4-73ddf941921a.jpg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/837d159e-074c-406c-9272-19f4443cb1aa.jpg?im_w=720"
        },
        description: `
        Unique Subtropical getaway loft apartment in the heart of Auckland City.
        Recently renovated, spacious with 3.6m high ceilings on a heritage building, delicately decorated and inspired on the subtropical rainforest of the Auckland west coast.
        `
    },
    {
        id: 21,
        title: "Highlands Apt- Lake Views",
        bed: "2beds",
        feature: "View",
        location: "Queenstown",
        rating: 4.89,
        price: 579,
        MaxGuest: 4,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-30715663/original/5eebb3fb-2976-41dd-a853-b6e9807346bf.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-30715663/original/0e2f32e5-c0bc-447d-bb08-df1ad36cba17.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-30715663/original/78aa499a-e9f4-4655-a451-77f65713a356.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-30715663/original/a67e6c60-dd17-4265-b868-9c7f661fc3b7.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-30715663/original/8d2f74dc-eb98-4ffc-ba7e-1bcf3c7608a3.jpeg?im_w=720"
        },
        description: `
        Our two bedroom accommodation has just been completely renovated and offers a modern and well appointed kitchen, bathroom and living space suitable for up to four guests. A warm modern apartment for a true Alpine winter feel.<br>
        Located just a five minute drive to the heart of Queenstown in popular Queenstown hill, you can enjoy panoramic views of the Lake Wakatipu & the Remarkables mountain range. The property has been lovingly crafted to provide a comfortable but relaxed feel with modern finishes and high end appliances. It's located in a quiet street that allows you to get away from the noise and bustle of the city. Enjoy the private sunny outdoor living area with views over the lake.
        `
    },
    {
        id: 22,
        title: "The Warehouse",
        bed: "4beds",
        feature: "Unique",
        location: "Auckland",
        rating: 4.60,
        price: 520,
        MaxGuest: 6,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-893941560570254831/original/e21fa014-2dab-4017-9827-0f45575b48c9.jpeg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/miso/Hosting-893941560570254831/original/4da8d5e9-47db-4cf3-80f4-e97eb8a73c35.jpeg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/miso/Hosting-893941560570254831/original/082a06d2-5aef-4156-aad2-e0008f810b8a.jpeg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/miso/Hosting-893941560570254831/original/20465af2-6bfb-4263-ba45-e720ce88d476.jpeg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/miso/Hosting-893941560570254831/original/632d6b7f-d7a9-4024-8bdc-80144f28e321.jpeg?im_w=720"
        },
        description: `
        Wow, Amazing, Unique, Cool, Spacious and very memorable.<br>
        This warehouse conversion is 240sqm of massive living space on its own private floor!<br>
        Two double bedrooms with queen size beds, third bedroom loft with two single beds<br>
        Private entrance, one car park, no lift, the apartment is on the third floor<br>
        Commercial heating and cooling systems in ceiling<br>
        NB - one arcade game unit, new table tennis table and a foosball machine
        `
    },
    {
        id: 23,
        title: "location close to city for 1 to 2 people",
        bed: "1beds",
        feature: "Budget",
        location: "Auckland",
        rating: 4.68,
        price: 73,
        MaxGuest: 2,
        image: {
            mainImage: "https://a0.muscache.com/im/pictures/airflow/Hosting-752432468822072687/original/ac3ab3e1-ff1d-49b4-89e7-305b543b4631.jpg?im_w=1200",
            sideImage1: "https://a0.muscache.com/im/pictures/airflow/Hosting-752432468822072687/original/5fdc0d25-1df3-445c-be95-86b5622b132d.jpg?im_w=720",
            sideImage2: "https://a0.muscache.com/im/pictures/airflow/Hosting-752432468822072687/original/90b49c3b-a48e-48d6-a30d-e0d489cdd20a.jpg?im_w=720",
            sideImage3: "https://a0.muscache.com/im/pictures/airflow/Hosting-752432468822072687/original/0837901d-43be-4675-a041-c2fea190df3e.jpg?im_w=720",
            sideImage4: "https://a0.muscache.com/im/pictures/airflow/Hosting-752432468822072687/original/19f87a8d-35fd-4af9-a011-f862b0e2a4a8.jpg?im_w=720"
        },
        description: `
        Our house is fantastically located in Morningside only 20mins from city centre by train or bus - easy walking distance to Eden Park (sport & concert events)<br>

        The bus stop is literally 50metres from the front door and the train station (Morningside or kingsland) only 5/10 minutes walk away<br>

        Also a short stroll to St Lukes, a major shopping mall with all major banks, retail, cinema and supermarket<br>
        `
    }
];
