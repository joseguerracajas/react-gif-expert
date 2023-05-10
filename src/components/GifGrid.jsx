import { useFetchGifs } from "../hooks/UseFetchGifs";
import { GifItem } from "./GifItem";

export const GrifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Loading...</h2>}
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
