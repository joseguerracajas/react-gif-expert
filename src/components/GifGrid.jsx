import { useFetchGifs } from "../hooks/UseFetchGifs";
import PropTypes from 'prop-types';
import { GifItem } from "./GifItem";

export const GrifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifItem.propTypes = {
    category: PropTypes.string.isRequired,
}