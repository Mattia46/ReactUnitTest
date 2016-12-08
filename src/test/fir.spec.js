import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


const Test = ({mattia}) => {
  return (
    <FirstComponent greeting={mattia} />
  )
}

const FirstComponent = ({greeting}) => {
return(
  <div>
    <h1>Greeting</h1>
    <div>{ greeting }</div>
  </div>
  )
};

describe('First Component', () => {
  it('should render', () => {
    const renderer = TestUtils.createRenderer();
    //renderer.render(<Test mattia='ciao Mattia' />);
    renderer.render(React.createElement(FirstComponent, { className: 'MyComponent' }, 'some child text'));
    //renderer.render(<FirstComponent greeting='ciao Mattia' />);
    const output = renderer.getRenderOutput();
    console.log('****', output);
    //expect(output.type).toBe('div');
    //expect(output.props.children).toEqual([
      //<h1>Greeting</h1>
    //])
    //console.log('****', output.props);
    //console.log('****', output.props.children[0].props.children);
  });
});
