import "./style.css";

window.onload = function() {
  let some_var = "This is a variable.";
  some_var = "You can reassign normal vars";
  const some_const = "But constants are *immutable*.";

  /**
   * Data types!
   */

  // Strings
  let some_string = "Strings are text.";
  let some_other_string = 'They can also use single quotes.';
  let str_literal = `String literals can also...
  have break returns in them!
  (And they do some fancy stuff we'll get back to!)`;

  // Numbers!
  let some_number = 100;
  let some_int = 1;
  let some_float = 1.0;

  // Booleans
  let some_bool = true;
  let some_expression = (1 + 2) === 3;
  
  // Nothing
  let some_null = null; // This is N O T H I N G N E S S.
  let some_undef; // This hasn't been assigned (so no data lives here yet.)

  // Arrays
  let some_arr = [
    "Ill Met In Lankhmar - Fritz Leiber",   // <-- this is item #0
    "Consider Phlebas - Ian M. Banks",      // <-- this is item #1
    "King City - Brandon Graham",           // <-- this is item #2
    "Transmetropolitan - Warren Ellis",     // <-- this is item #3
    "100 Years Of Solitude - Gabriel Garcia Marquez",
    "Guards! Guards! - Terry Pratchett",
  ];

  // You can access items with var_name[index of the item]
  // Like this:
  some_arr[2];
  // console.log(some_arr[3]);
  // You can assign much the same way:
  some_arr[3] = "The Incal - Moebius";
  // console.log(some_arr[3]);

  // Objects
  let some_obj = {
    title: "Ill Met In Lankmar",
    author: "Fritz Leiber",
    published: 1995,
    is_awesome: true,
    isbn10: null,
    isbn13: "978-156504894-2",
  };
};
