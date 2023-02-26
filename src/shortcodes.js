module.exports = {
  title(text) {
    return `
  <h1 class="text-3xl md:text-3xl font-bold text-center mb-12 mt-12 uppercase">
  ${text}
  </h1>
  `;
  },
  button(icon, link) {
    return `
    <a href="${link}" target="_blank" class="p-3 block w-fit mx-auto hover:bg-hover leading-tight rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-green"
  >
    <img class="w-8 h-8 inline" src="/coloquio-kuhn/img/icons/${icon}.svg" alt=""/>


  </a>
    `;
  },
};
