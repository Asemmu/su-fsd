import { React } from 'react'


export default function Header() {
    

    return (
        <header className="bg-black">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href='/' className="-m-1.5 p-1.5">
                        <span className="text-white">Files App</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                </nav>
               
        </header>
    )
}
