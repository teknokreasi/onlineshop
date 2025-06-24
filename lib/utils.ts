export const categoryMenuList = [
  {
    id: 1,
    title: "Ponsel Pintar",
    src: "/smart phone icon.png",
    href: "/shop/smart-phones"
  },
  {
    id: 2,
    title: "Tablet",
    src: "/tablet icon.png",
    href: "/shop/tablets"
  },
  {
    id: 3,
    title: "Mouse",
    src: "/mouse icon.png",
    href: "/shop/mouses"
  },
  {
    id: 4,
    title: "Kamera",
    src: "/camera icon.png",
    href: "/shop/cameras"
  },
  {
    id: 5,
    title: "Jam Tangan Pintar",
    src: "/smart watch.png",
    href: "/shop/watches"
  },
  {
    id: 6,
    title: "Laptop",
    src: "/laptop icon.png",
    href: "/shop/laptops"
  },
  {
    id: 7,
    title: "PC",
    src: "/pc icon.png",
    href: "/shop/computers"
  },
  {
    id: 8,
    title: "Printer",
    src: "/printers icon.png",
    href: "/shop/printers"
  },
  {
    id: 9,
    title: "Headset",
    src: "/ear buds icon.png",
    href: "/shop/earbuds"
  },
  {
    id: 10,
    title: "Headphone",
    src: "/headphone icon.png",
    href: "/shop/headphones"
  },
];

export const incentives = [
  {
    name: "Bebas Ongkir",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "Dukungan Penuh 24/7",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Keranjang Belanja Cepat",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Diskon", href: "#" },
    { name: "Berita", href: "#" },
    { name: "Daftarkan Diskon", href: "#" },
  ],
  about: [
    { name: "Tentang Global Tujuh", href: "#" },
    { name: "Bekerja Bersama Kami", href: "#" },
    { name: "Profil Perusahaan", href: "#" },
  ],
  buy: [
    { name: "Kartu Loyalitas Perusahaan", href: "#" },
    { name: "Aturan Penggunaan", href: "#" },
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Komplain", href: "#" },
    { name: "Rekan", href: "#" },
  ],
  help: [
    { name: "Kontak", href: "#" },
    { name: "Cara Membeli di Global Tujuh", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
