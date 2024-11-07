import { useParams } from 'react-router-dom';
import { data } from './PortfolioItems';
import { PortfolioItem as PortfolioPiece } from '../components/PortfolioItem';

export const PortfolioItem = () => {
    const params = useParams();
    const portfolioId = parseInt(params.id);

    const portfolioPiece = data.find(item => item.id === portfolioId)

    return (
        <PortfolioPiece name={portfolioPiece?.name} image={portfolioPiece?.image} description={portfolioPiece.description} />
    )
}