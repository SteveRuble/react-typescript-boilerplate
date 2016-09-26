import LoadingIndicator from 'components/LoadingIndicator';

import expect from 'expect';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('<LoadingIndicator />', () => {
  it('should render 14 divs', () => {
    const renderedComponent = shallow(
      <LoadingIndicator />
    );
    expect(renderedComponent.find('div').length).toEqual(14);
  });
});
