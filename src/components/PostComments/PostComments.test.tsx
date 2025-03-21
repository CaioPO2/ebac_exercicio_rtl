import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

function inserirComentario(text: string) {
    const txtarea = screen.getByTestId('text-comment')
    const btn = screen.getByTestId('button-comment')

    fireEvent.change(txtarea, { target: { value: text } })
    fireEvent.click(btn)
}

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve renderizar dois comentarios', () => {
        render(<PostComment />)

        inserirComentario('Primeiro Comentario')
        inserirComentario('Segundo Comentario')

        const comentario = screen.getByTestId('comment')
        expect(comentario).toHaveLength(2)
    })
});

