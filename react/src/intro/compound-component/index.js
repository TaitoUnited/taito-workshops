import React from 'react';
import styled, { css } from 'styled-components';

const MenuItem = styled.div`
  cursor: default;
  text-align: center;
  padding: 8px 12px;
  color: #222;
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`;

class Dropmenu extends React.Component {
  static Item = MenuItem;

  state = {
    isOpen: false,
    activeItem: null,
  };

  toggleMenu = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  render() {
    const { children, trigger } = this.props;
    const { isOpen, activeItem } = this.state;

    return (
      <Wrapper>
        <Trigger onClick={this.toggleMenu}>{trigger}</Trigger>

        <MenuWrapper isOpen={isOpen}>
          <Menu>
            {React.Children.map(children, (child, index) =>
              React.cloneElement(child, {
                isActive: index === activeItem,
                onClick: () => this.setState({ activeItem: index }),
              })
            )}
          </Menu>
        </MenuWrapper>
      </Wrapper>
    );
  }
}

const ARROW_HEIGHT = 12;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuWrapper = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
  bottom: 0;
  left: 50%;
  border-radius: 6px;
  z-index: 99;
  transform: translate(-50%, calc(100% + 40px));
  transition: transform 0.3s cubic-bezier(0.2, 0.71, 0.14, 0.91),
    opacity 0.3s ease;

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, calc(100% + 16px));
    `}

  ${props =>
    !props.isOpen &&
    css`
      visibility: hidden;
      pointer-events: none;
      opacity: 0;
    `}
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 200px;

  &:after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-bottom: ${`${ARROW_HEIGHT}px solid`};
    border-left: ${`${ARROW_HEIGHT}px solid transparent`};
    border-right: ${`${ARROW_HEIGHT}px solid transparent`};
    border-bottom-color: #fff;
    left: ${`calc(50% - ${ARROW_HEIGHT}px)`};
    top: -${ARROW_HEIGHT}px;
  }
`;

const Trigger = styled.div`
  position: relative;
  display: inline-block;
  border: none;
  background: none;
  padding: 0;
`;

export default Dropmenu;
