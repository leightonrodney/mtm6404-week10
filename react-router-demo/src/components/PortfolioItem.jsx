export const PortfolioItem = ({name, image, description}) => {
    return (
        <div>
            <img src={image} alt={name} style={{ width: '300px' }} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}