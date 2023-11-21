
import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Dropdown = ({ label, children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown-container') && showDropdown) {
        setShowDropdown(false);
      }
    });
    return () => {
      document.removeEventListener('click', (event) => {
        if (!event.target.closest('.dropdown-container') && showDropdown) {
          setShowDropdown(false);
        }
      });
    };
  }, [showDropdown]);

  return (
    <DropdownContainer>
      <DropdownLabel onClick={toggleDropdown}>{label}</DropdownLabel>
      <DropdownContent showDropdown={showDropdown}>{children}</DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;



const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownLabel = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const DropdownContent = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0;
  display: ${props => (props.showDropdown ? 'block' : 'none')};
`;



