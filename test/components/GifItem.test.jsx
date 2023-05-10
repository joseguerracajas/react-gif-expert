import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const id = '12345';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} id={id} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} id={id} />);
        // expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de tener el titulo en el componente', () => { 
        render(<GifItem title={title} url={url} id={id} />);
        expect(screen.getByText(title)).toBeTruthy();
     });
})