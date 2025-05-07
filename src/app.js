import "./style.css";

/**
 * Generates HTML for a book card component.
 * @param {*} book 
 * @param {*} options 
 * @returns HTMLDivElement
 */
function BookCard(book = {}, options = {
  width: "20rem",
}) {
  const card = document.createElement("div");
  card.classList.add("card", "mx-auto", "mb-2");
  card.style.width = options.width;

  const cover = document.createElement("img");
  cover.alt = `The cover of the book ${book.title} by ${book.author}`;
  cover.src = book.cover ? book.cover : "/assets/img/rigo-baby.jpg";
  cover.classList.add("card-img-top");

  const body = document.createElement("div");
  body.classList.add("card-body");

  const header = document.createElement("h5");
  header.classList.add("card-title");
  header.innerHTML = book.title ? book.title : "Some Coding Book Or Something";
  body.appendChild(header);

  const cardText = document.createElement("p");
  cardText.classList.add("card-body");
  cardText.innerHTML = `By ${book.author ? book.author : "Some Nerd (in the cool sense, because we know nerds are cool.)"}`;
  body.appendChild(cardText);

  card.appendChild(cover);
  card.appendChild(body);

  return card;
}

/**
 * Generates a Bootstrap button component.
 * @param {*} buttonData
 * @returns string
 */
const Button = ({
  htmlTag = "button",
  variant = "primary",
  outline = false,
  label = "Button",
  type = "button",
  events = {},
}) => {
  const button = document.createElement(htmlTag);
  button.type = type;
  button.classList.add("btn", `btn-${outline ? "outline-" : ""}${variant}`);
  button.innerHTML = label;

  for (const event in events) {
    button.addEventListener(event, events[event]);
  }

  return button
}

window.onload = function () {
  const books = [
    {
      num_pages: 293,
      year_published: 1997,
      author: "Ray Bradbury",
      isbn10: "0-380-72940-7",
      have_read: true,
      cover: "https://pictures.abebooks.com/isbn/9780553136951-us.jpg",
      title: "Something Wicked This Way Comes",
      isbn13: "978-0-380-72940-1",
      is_awesome: true,
      id: 2,
    },
    {
      num_pages: 383,
      year_published: 1970,
      author: "Gabriel Garcia Marquez",
      isbn10: "0-380-01503-X",
      have_read: true,
      cover: "https://m.media-amazon.com/images/I/81dy4cfPGuL._SY522_.jpg",
      title: "One Hundred Years of Solitude",
      isbn13: null,
      is_awesome: true,
      id: 3,
    },
    {
      num_pages: 470,
      year_published: 1992,
      author: "Neal Stephenson",
      isbn10: null,
      have_read: false,
      cover:
        "https://i5.walmartimages.com/seo/Snow-Crash-Hardcover-9780613361620_f11eea3c-5e60-4a1b-936b-67c9c4455e27_1.0a9c061d4600a35fb739ad85e9e9aa06.jpeg",
      title: "Snow Crash",
      isbn13: "978-061336162",
      is_awesome: true,
      id: 4,
    },
    {
      num_pages: 815,
      year_published: 2002,
      author: "Douglas Adams",
      isbn10: null,
      have_read: false,
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404613595i/13.jpg",
      title: "The Ultimate Hitchiker's Guide To The Galaxy",
      isbn13: "978-0-645-45374-7",
      is_awesome: true,
      id: 5,
    },
    {
      num_pages: 509,
      year_published: 1995,
      author: "Garth Nix",
      isbn10: "0-06-447183-7",
      have_read: true,
      cover:
        "https://garthnix.com/wp-content/uploads/2022/01/cover-old-kingdom-3-boxed-set-pichi.jpg",
      title: "Sabriel",
      isbn13: null,
      is_awesome: true,
      id: 8,
    },
    {
      num_pages: 148,
      year_published: 2021,
      author: "Various",
      isbn10: "",
      have_read: true,
      cover:
        "https://s3-ap-southeast-2.amazonaws.com/cloud1.berkelouw.com.au/new_books/9781912559329.jpg",
      title: "On Cats — An Anthology",
      isbn13: "978-1-912559-32-9",
      is_awesome: true,
      id: 13,
    },
    {
      num_pages: 515,
      year_published: 1987,
      author: "Iain M. Banks",
      isbn10: "",
      have_read: true,
      cover:
        "https://m.media-amazon.com/images/I/519JNfG+uNL._AC_UF1000,1000_QL80_.jpg",
      title: "Consider Phlebas",
      isbn13: "978-0-356-52163-3",
      is_awesome: true,
      id: 16,
    },
    {
      num_pages: 918,
      year_published: 2000,
      author: "Neal Stephenson",
      isbn10: "0-380-78862-4",
      have_read: true,
      cover:
        "https://www.carnegielibrary.org/wp-content/uploads/2018/03/Crypto.jpg",
      title: "Cryptonomicon",
      isbn13: "978-0-380-78862-0",
      is_awesome: true,
      id: 17,
    },
    {
      num_pages: 494,
      year_published: 1995,
      author: "Fritz Lieber",
      isbn10: null,
      have_read: true,
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1223645907i/102266.jpg",
      title: "Ill Met In Lankhmar",
      isbn13: "9781565048942",
      is_awesome: true,
      id: 18,
    },
    {
      num_pages: 424,
      year_published: 2017,
      author: "Brandon Graham",
      isbn10: null,
      have_read: true,
      cover: "https://atomicbooks.com/cdn/shop/products/kingcity_1600x.jpg",
      title: "King City",
      isbn13: "978-1-60706-510-4",
      is_awesome: true,
      id: 19,
    },
  ];

  const buttons = [
    {
      label: "&lt;&mdash;",
      events: {
        click: () => {
          currentBook = (currentBook - 1 >= 0) ? (currentBook - 1) : (books.length - 1);
          updateBook();
        },
      },
    },
    {
      label: "&mdash;&gt;",
      events: {
        click: () => {
          currentBook = (currentBook + 1) % books.length;
          updateBook();
        },
      },
    },
  ];

  let currentBook = 0;

  const updateBook = () => {
    // We're going to need to find the card on the page.
    const card = document.querySelector("#target");
    card.querySelector("div.card").replaceWith(BookCard(books[currentBook]));
  }

  updateBook();

  const controls = document.querySelector("#controls");

  for (const buttonData of buttons) {
    controls.appendChild(
      Button(buttonData)
    );
  }
};
