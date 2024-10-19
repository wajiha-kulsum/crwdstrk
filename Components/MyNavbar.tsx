import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/assessment', label: 'Assessment' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/about', label: 'About' },
  ]

const MyNavbar = () => {
    return (
        <div className="flex items-center justify-center pt-8 bg-gray-100 pb-8 rounded-b-3xl">
            <NavigationMenu>
                <NavigationMenuList className=" space-x-6">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/" className={`${navigationMenuTriggerStyle()} px-6 py-5 rounded-full hover:border-gray-800`}>
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href="/assessment" className={navigationMenuTriggerStyle()}>
                            Assessment
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href="/dashboard" className={navigationMenuTriggerStyle()}>
                            Dashboard
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default MyNavbar