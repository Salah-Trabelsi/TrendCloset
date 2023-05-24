const products = [
    {
      id: "recZkNf2kwmdBcqd0",
      name: "Dr.Denim",
      price: 59.99,
      image:
        "https://img01.ztat.net/article/spp-media-p1/c277736afb794de38cd7b7c9a2adaf50/5f1f251e09634e95a4219ff8e1b7e60d.jpg?imwidth=1800",
  
      description:
        "MADI - Hemd",
        category: "Herren",
        Stock: '24'
    },
    {
      id: "recEHmzvupvT8ZONH",
      name: "Noisy May",
      price: 39.99,
      image:
        "https://img01.ztat.net/article/spp-media-p1/5675589099514b4a8ddc9a4dbbff9395/71ab4305cc4c424a8c2f59ca857c9964.jpg?imwidth=1800",
  
      description:
        "STRAPLESS DRESS - Cocktailkleid/festliches Kleid",
        category: "Damen",
        Stock: '51'
    },
    {
      id: "rec5NBwZ5zCD9nfF0",
      name: "Nike Performance",
      price: 74.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/1c398555e47a4ffc9103085ded1afb9f/767d70196ed04785b148cf03f729a5f3.jpg?imwidth=1800",
      description:
        "LIVERPOOL CLUB HOODIE - Vereinsmannschaften",
        category: "Herren",
        Stock: '81'
    },
    {
      id: "recd1jIVIEChmiwhe",
      name: "Nike Sportswear",
      price: 43.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/c1cc9383d0e640a69b342537c6ed3d10/140ec68aba7646fda5d94f607003a344.jpg?imwidth=1800",
  
      description:
        "AIR MOCK BODYSUIT - Top",
        category: "Damen",
        Stock: '22'
    },
    {
      id: "recoM2MyHJGHLVi5l",
      name: "Guess",
      price: 110.00,
      image:
        "https://img01.ztat.net/article/spp-media-p1/25c34613c79f460d968e4bb73c49350c/05c551bf65dd4ba4abc791a7a9c95c1b.jpg?imwidth=1800",
      description:
        "Guess Hemd",
        category: "Herren",
        Stock: '12'
    },
    {
      id: "recotY5NhDQFdkm",
      name: "Ellesse",
      price: 31.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/9575f6b4990a44ee87a6db8bd79a22e5/f8e39242d26045408ed9ea5032093e0f.jpg?imwidth=1800",
  
      description:
        "GULLIA - Langarmshirt",
        category: "Damen",
        Stock: '26'
    },
    {
      id: "rec1Ntk7siEEW9ha1",
      name: "Kigili",
      price: 34.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/dca37b5106db4c09857c80c5a3758deb/19122347da254f7fb84c9fa84eabad92.jpg?imwidth=1800",
      description:
        "DANIEL - Hemd",
        category: "Herren",
        Stock: '10'
    },
    {
      id: "recNZ0koOqEmilmoz",
      name: "Bershka",
      price: 7.99,
      image:
        "https://img01.ztat.net/article/spp-media-p1/e18f0892346443e2bb921645f9bb2934/1d5869bab07c4002a0a35e673c6f225a.jpg?imwidth=1800",
      description:
        "SLEEVELESS - Top",
        category: "Damen",
        Stock: '27'
    },
    {
      id: "recrfxv3EwpvJwvjq",
      name: "Guess",
      price: 29.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/2067f63e02ca434896fdd56b8e9b1d2f/355c0d27cea644429d839941ec3d1984.jpg?imwidth=1800",
      description:
        "CORE TEE - T-Shirt basic",
        category: "Herren",
        Stock: '37'
    },
    {
      id: "recoW8ecgjtKx2Sj2",
      name: "Even&Odd",
      price: 9.99,
      image:
        "https://img01.ztat.net/article/spp-media-p1/269f95b048954cbab65338b0707eb557/d5cae9fb310e4d539b865ccf338a9220.jpg?imwidth=1800",
  
      description:
        "SHORT SLEEVE - T-Shirt basic",
        category: "Damen",
        Stock: '47'
    },
    {
      id: "recEOA6qtDag1hRbU",
      name: "Calvin Klein",
      price: 79.99,
      image:
        "https://img01.ztat.net/article/spp-media-p1/a876ccd3fb5f4314982dc53c508c8a09/50a1d44f3b0942bf871793236741bfde.jpg?imwidth=1800",
  
      description:
        "J30J322905BEH BEH - Shorts",
        category: "Herren",
        Stock: '37'
    },
    {
      id: "recoAJYUCuEKxcPSr",
      name: "The North Face",
      price: 34.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/7b0f226c2ba6432aa5cc0c0356b23b60/4b44640add7445818854d93e66a6ebf9.jpg?imwidth=1800",
  
      description:
        "NEW CROP ZUMU TEE - T-Shirt basic",
        category: "Damen",
        Stock: '47'
    },
    {
      id: "recQ0fMd8T0Vk211E",
      name: "Emporio Armani",
      price: 38.65,
      image:
        "https://img01.ztat.net/article/spp-media-p1/6e0050416f3f40c3b7d9d4edc8242222/e93c305ab75044f1a48583693916c0ff.jpg?imwidth=1800",
      description:
        "Sweatshirt",
        category: "Herren",
        Stock: '27'
    },
    {
      id: "rec7CjDWKRgNQtrKe",
      name: "adidas by Stella McCartney",
      price: 99.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/5db4a58274f948138a7c8f97ee4ebce8/c4910b8db21a494c8943099cfac1531e.jpg?imwidth=1800",
      description:
        "ASMC REG - Sweatshirt",
        category: "Damen",
        Stock: '17'
    },
    {
      id: "recF0KpwlkF7e8kXO",
      name: "Tommy Hilfiger",
      price: 34.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/fe1adb685f4d4c28a045eed4aed61957/bad269ff734b42ce82756607200f0bbd.jpg?imwidth=1800",
      description:
        "LOGO TEE - T-Shirt print",
        category: "Herren",
        Stock: '14'
    },
    {
      id: "recs5BSVU3qQrOj4E",
      name: "Ellesse",
      price: 39.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/085783da322f4ecbaee31400b3dd952e/89dde47a8d3e4d2abfaefdef4a35fa96.jpg?imwidth=1800",
      description:
        "CONTENTI CROP - Langarmshirt",
        category: "Damen",
        Stock: '12'
    },
    {
      id: "recroK1VD8qVdMP5H",
      name: "Versace Jeans Couture",
      price: 59.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/c10f71ffd9ae4efe9210f38d17a2aba9/4f3244b208c7421ba913a162fad5fdde.jpg?imwidth=1800",
      description:
        "Poloshirt",
        category: "Herren",
        Stock: '12'
    },
    {
      id: "rec7JInsuCEHgmaGe",
      name: "Even&Odd",
      price: 12.04,
      image:
        "https://img01.ztat.net/article/spp-media-p1/8a09da68cc5845ac9bfef202f1378b4f/5b7cd741a8aa40ab8933fc54d3a3db20.jpg?imwidth=1800",
      description: "Cape",
        category: "Damen",
        Stock: '18'
    },
    {
      id: "rec3jeKnhInKHJuz2",
      name: "The North Face",
      price: 23.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/5a2054521ea63c76b967129ac00f99e0/53e05d695047435790cf3ffaf5b8e17c.jpg?imwidth=1800",
      description:
        "SIMPLE DOME TEE - T-Shirt print",
        category: "Herren",
        Stock: '12'
    },
    {
      id: "recv2ohxljlK2FZO7",
      name: "Polo Ralph Lauren",
      price: 99.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/cf83d0c0c5234558bd7abfdc2854ae15/547f07a2f73d45f8acf2fa824e452d06.jpg?imwidth=1800",
      description:
        "STRIPE SHORT SLEEVE - T-Shirt print",
        category: "Damen",
        Stock: '15'
    },
    {
      id: "recm7wC8TBVdU9oEL",
      name: "Ellesse",
      price: 14,
      image:
        "https://img01.ztat.net/article/spp-media-p1/e2c7102a485e47248a8052e58488c875/68cafa3ad706430c91dcf7fd356aadeb.jpg?imwidth=1800",
      description:
        "ALONA - T-Shirt print",
        category: "Herren",
        Stock: '12'
    },
    {
      id: "rectfNsySwAJeWDN2",
      name: "Nike Sportswear",
      price: 53.95,
      image:
        "https://img01.ztat.net/article/spp-media-p1/39f9b9cfdacd4951bcd3820d804e2743/fc9404f7cbb24e9784be56496d5c74b2.jpg?imwidth=1800",
      description:
        "CREW - Sweatshirt",
        category: "Damen",
        Stock: '12'
    },
  ];
  export default products;
  