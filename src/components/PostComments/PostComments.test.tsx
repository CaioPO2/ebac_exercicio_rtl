import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

function inserirComentario(text: string) {
    const txtarea = screen.getAllByTestId('text-comment')
    const btn = screen.getAllByTestId('button-comment')

    fireEvent.change(txtarea, { taregt: { value: text } })
    fireEvent.click(btn)
}

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve renderizar dois comentarios', () => {
        render(<PostComment />)

        inserirComentario('Primeiro Comentario')
        inserirComentario('Segundo Comentario')

        const comentario = screen.getAllByTestId('comment')
        expect(comentario).toHaveLength(2)
    })
});

