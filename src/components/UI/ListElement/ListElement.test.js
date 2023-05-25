import renderer from 'react-test-renderer';
import ListElement from './ListElement';

it('renders a description and amount', () => {
    const component = renderer.create(
        <ListElement description='Some random description' amount='255' />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})