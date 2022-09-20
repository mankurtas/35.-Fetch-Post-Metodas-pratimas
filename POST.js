const baseUrl = "https://olive-bead-glazer.glitch.me";

const post = {
  brand: "ww",
  model: "gold",
};

//!! Kodel as gaunu kad neteisingi duomenys paduoti, nematau klaidos.
//! Gal gali pakomentuoti.

autoPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch(baseUrl, {
    method: "POST",
    body: new FormData(autoPostForm),
  });

  const message = await response.json();
  console.log(message);
});

//? Jei tiesiog paprastai, tai veikia
// const sendPost = async () => {
//   try {
//     const response = await fetch(baseUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(post),
//     });
//     const message = await response.json();
//     console.log(message);
//   } catch (error) {
//     console.log(error);
//   }
// };

// sendPost();
