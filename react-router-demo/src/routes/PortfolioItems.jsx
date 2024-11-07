import { Link } from "react-router-dom";
import { PortfolioItem } from "../components/PortfolioItem";

export const data = [
    {
        id: 1,
        name: 'Real Estate Website',
        image: 'https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/8367ad40ecf0474eb436a0852ad79e5f.jpg',
        description: 'This is a really cool website!'
    },
    {
        id: 2,
        name: 'Photography Website',
        image: 'https://www.hubspot.com/hubfs/Google%20Drive%20Integration/photography%20website%20templates_22023-Apr-07-2023-02-10-24-8820-PM.png',
        description: 'This is another really cool website!'
    }
];

export const PortfolioItems = () => {

    return (
        <>
        <h2>Portfolio</h2>
        <div>
            {data.map((portfolioObject) => (
                <Link key={portfolioObject.id} to={`/portfolio/${portfolioObject.id}`}>
                    <PortfolioItem name={portfolioObject.name} image={portfolioObject.image} description={portfolioObject.description}  />
                </Link>
            ))}
        </div>
        </>
    )
}