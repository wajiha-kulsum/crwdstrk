import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"; // Adjust this based on your actual file structure

const Navbar: React.FC = () => { // Define the component type as a functional component
  return (
    <div className="fixed z-10 w-full p-4 bg-gray-100 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <a href="/" className="text-lg font-bold text-gray-900">
          LOGO
        </a>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Support
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Login/Register Buttons */}
        <div className="flex space-x-4">
        <a
            href="/tryFree"
            className="inline-block px-4 py-2 text-sm font-medium text-white transition-all duration-300 transform bg-gray-900 border border-gray-900 rounded-lg shadow-sm hover:bg-gray-800 hover:translate-x-1"
          >
            Try for Free
          </a>
          <a
            href="#"
            className="inline-block px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-300 transform border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 hover:translate-x-1"
          >
            Login
          </a>
          <a
            href="#"
            className="inline-block px-4 py-2 text-sm font-medium text-white transition-all duration-300 transform bg-gray-900 border border-gray-900 rounded-lg shadow-sm hover:bg-gray-800 hover:translate-x-1"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
