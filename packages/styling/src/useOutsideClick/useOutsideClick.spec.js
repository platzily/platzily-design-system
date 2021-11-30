import React, { useRef, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import useOutsideClick from './useOutsideClick';

describe('@styling/useOutsideClick', () => {
  it('Given a render when user call the hook it should add the event to window.document and fire the callback when clicked outside', () => {
    // arrange
    let status;
    const Test = () => {
      const [title, setTitle] = useState('Title');
      const ref = useRef();
      status = useOutsideClick({ ref, callback: () => setTitle('foo') });
      return (
        <div>
          <h1 role="alert" ref={ref}>{title}</h1>
          <div role="main" />
        </div>
      );
    };

    // act
    render(<Test />);
    const title = screen.getByRole('alert');
    const main = screen.getByRole('main');

    // assert
    expect(status).toBe('onDocument');
    expect(title.innerHTML).toBe('Title');
    fireEvent.mouseDown(main);
    expect(title.innerHTML).toBe('foo');
  });

  it('Given a render when user call the hook it should add the event to window.document and not fire the callback when clicked inside', () => {
    // arrange
    let status;
    const Test = () => {
      const [title, setTitle] = useState('Title');
      const ref = useRef();
      status = useOutsideClick({ ref, callback: () => setTitle('foo') });
      return (
        <div>
          <h1 role="alert" ref={ref}>
            {title}
            <div role="main" />
          </h1>
        </div>
      );
    };

    // act
    render(<Test />);
    const title = screen.getByRole('alert');
    const main = screen.getByRole('main');

    // assert
    expect(status).toBe('onDocument');
    expect(title.innerHTML.includes('Title')).toBe(true);
    fireEvent.mouseDown(main);
    expect(title.innerHTML.includes('Title')).toBe(true);
  });
});
