import "./style.css";

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
  ];

  // For Of Loop
  // for (const book of books) {
  // console.log(`${book.title} — ${book.author}`);
  // }

  // Old-School For Loop
  // for (
  //   let idx = 0;
  //   idx < books.length;
  //   idx++
  // ) {
  //   console.log(`${books[idx].title} — ${books[idx].author}`);
  // }

  // For In
  // for (const idx in books) {
  //   console.log(`${books[idx].title} — ${books[idx].author}`);
  // }

  // While loop
  // let count = 0;
  // while (count < 100) {
  //   console.log(count);
  //   count++;
  // }

  // Conditionals
  // A shorter version of the if/else statement
  // is called a ternary.
  // for (const book of books) {
  //   if (book.num_pages < 300) {
  //     console.log(`I could read ${book.title} in a day`);
  //   } else if (book.num_pages < 600) {
  //     console.log(`I could read ${book.title} in a weekend.`);
  //   } else {
  //     console.log(`I could read ${book.title} in a week.`);
  //   }
  // }
};
