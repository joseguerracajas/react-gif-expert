import { render, screen } from "@testing-library/react";
import { GrifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/UseFetchGifs";

jest.mock('../../src/hooks/UseFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Federer';

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GrifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/cualquier/saitama.jpg',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/cualquier/cosa.jpg',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GrifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });

})