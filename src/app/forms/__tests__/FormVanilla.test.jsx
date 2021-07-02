import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { renderUi } from '../../helpers/testHelpers';
import FormVanilla from '../FormVanilla';

afterEach(cleanup);
describe('test Form Vanilla', () => {
  it('render without exceptions', (done) => {
    const { container } = renderUi(<FormVanilla />);
    expect(container).not.toBeUndefined();
    done();
  });
  it('should show error message after submit', (done) => {
    const { container, getByText } = renderUi(<FormVanilla />);
    expect(container).not.toBeUndefined();
    container.querySelector('button[type="submit"]').click();
    expect(getByText('required')).not.toBeUndefined();

    done();
  });
  it('should remove error message after add first name', (done) => {
    const { container, getByText } = renderUi(<FormVanilla />);
    expect(container).not.toBeUndefined();
    container.querySelector('button[type="submit"]').click();
    expect(getByText('required')).not.toBeUndefined();
    fireEvent.change(container.querySelector('input[name="firstName"]'), {
      target: { value: 'teste' },
    });
    expect(container.querySelector('input[name="firstName"]').value).toEqual('teste');
    container.querySelector('button[type="submit"]').click();
    expect(container.querySelector('.Mui-error')).toBeNull();
    done();
  });
});
