import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve renderizar dois comentarios', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('text-comment'), {
            target: {
                value: 'Primeiro comentario'
            }
        });
        fireEvent.click(screen.getByTestId('button-comment'));

        fireEvent.change(screen.getByTestId('text-comment'), {
            target: {
                value: 'Segundo comentario'
            }
        });
        fireEvent.click(screen.getByTestId('button-comment'));

        expect(screen.getAllByTestId('comment')).toHaveLength(2);
    })
});

