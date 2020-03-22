import Link from "next/link";
import {nav} from './../../pages/api/navbar'
import Dropdown from './../layout/Dropdown'

export default class NavBar extends React.Component {
    
    render() {
    return (        
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                {
                    nav.map(item=>(
                        <li className="nav-item dropdown">
                        <Link href={item.href}>
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {item.label}
                            </a>
                        </Link>
                        {
                            item.items.length > 0 &&
                                <Dropdown items={item.items} key={item}/>
                        }
                    </li>
                    ))
                }
                </ul>
            </div>
            </nav>
            <style jsx>{`
            `}</style>
        </div>
    )}

}
