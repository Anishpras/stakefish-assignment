import SocialLink from '.';

describe('<SocialLink>', () => {
  it('mounts', () => {
    cy.mount(<SocialLink name="Test" value="" />);
  });
});
