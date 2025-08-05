import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const navigation = [
  { name: 'Sorting', href: '/sorting' },
  { name: 'Pathfinding', href: '/pathfinding' },
  { name: 'Graph', href: '/graph' },
  { name: 'Dynamic Programming', href: '/dynamic-programming' },
  { name: 'Searching', href: '/searching' },
]

export default function Navbar() {
    return(
        <>
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between bg-primary py-3.5 px-6">
                <div className="flex lg:flex-1">
                    <NavLink to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="text-2xl">ALGOSCOPE</span>
                        <img src={Logo} alt="logo" className="h-8 w-auto"/>
                    </NavLink>
                </div>
                <div className="flex gap-x-12">
                    {navigation.map((item) => (
                        <NavLink to={item.href} className="text-lg rounded-xl px-2 hover:bg-surface" key={item.name}>{item.name}</NavLink>
                    ))}
                </div>
            </nav>
                    </header>
        </>
    )
}