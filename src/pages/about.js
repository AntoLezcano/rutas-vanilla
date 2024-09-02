export function About() {
  const $container = document.createElement("div");
  $container.classList.add("w-1/2", "mx-auto", "p-4", "bg-white", "rounded-md");
  $container.innerHTML = `
  <h1 class="text-2xl text-center font-bold">ABOUT</h1>
  <br>
  <h4 class = "font-bold text-center"> Vanilla Router</h4>
  <p class="mt-4">In web development, a “vanilla router” refers to a lightweight routing solution built using plain JavaScript (without relying on any framework or library). </p>
  <h1 class= "text-2x1 font-bold text-center">How Does Vanilla Router Work?</h1>
  <h4 class = "font-bold">URL Management:</h4>
  <p class="mt-4">The router listens to changes in the URL of the web application, which can be triggered by user navigation (e.g., clicking links) or programmatically (e.g., changing the URL via JavaScript).</p>
  <br>
  <h4 class = "font-bold">Routing Logic:</h4>
  <p class="mt-4">The router matches the current URL with predefined routes. Each route is associated with a specific view or content that should be displayed.</p>
  <br>
   <h4 class = "font-bold">Content Rendering:</h4>
  <p class="mt-4">Based on the matched route, the router dynamically updates the page content. This often involves modifying the DOM (Document Object Model) to show the appropriate view without requiring a full page reload.</p>
  <br>
`;

  return $container;
}
