export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("bg-gray-500", "text-white", "py-4");

  $header.innerHTML = `
  <h1 class="text-2xl">Vanilla Router</h1>
  <nav>
    <ul class="flex justify-center mt-4">
      <li class="mr-6">
        <a href="/" class="hover:underline">Home</a>
      </li>
      <li class="mr-6">
        <a href="/about" class="hover:underline">About</a>
      </li>
      <li class="mr-6">
        <a href="/contact" class="hover:underline">Contact</a>
      </li>
      <li class="flex items-center ml-auto space-x-2">
        <a href="/login" class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800">Login</a>
        <a href="/register" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</a>
      </li>
    </ul>
  </nav>
  `;
  return $header;
}
