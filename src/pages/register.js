export function registerPage() {
  const $container = document.createElement("div");
  $container.classList.add(
    "w-1/2",
    "mx-auto",
    "p-8",
    "bg-white",
    "rounded-lg",
    "shadow-md"
  );

  $container.innerHTML = `
 <h1 class="text-2xl font-bold mb-6 text-center">REGISTER</h1>
  <hr class="mb-6">
  <form class="space-y-4">
    <div>
      <label for="first-name" class="block text-sm font-medium text-gray-700">First Name:</label>
      <input type="text" id="first-name" name="first-name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
    </div>
    <div>
      <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name:</label>
      <input type="text" id="last-name" name="last-name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
      <input type="email" id="email" name="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
    </div>
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
      <input type="password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
    </div>
    <div>
      <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
    </div>
    <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</button>
  </form>
  `;
  return $container;
}
