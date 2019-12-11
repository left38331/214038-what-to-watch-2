import React from 'react';
import {mount} from 'enzyme';
import PropTypes from 'prop-types';

import withUserSign from 'hocs/with-user-sign/with-user-sign';

describe(`HoC withValidation should work correctly`, () => {
  let component;

  const mockComponent = ({
    email,
    password,
    submitRef,
    onFormChange,
    onSubmit
  }) => (
    <form onSubmit={onSubmit}>
      <input name="email" value={email} onChange={onFormChange} />
      <input name="password" value={password} onChange={onFormChange} />
      <button type="submit" ref={submitRef}></button>
    </form>
  );

  mockComponent.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,

    submitRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({current: PropTypes.instanceOf(Element)}),
    ]),

    onFormChange: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  const HocComponent = withUserSign(mockComponent);

  beforeEach(() => {
    component = mount(<HocComponent />);
  });

  it(`intial state set correctly`, () => {
    expect(component.state(`email`)).toBe(``);
    expect(component.state(`password`)).toBe(``);
  });
});
