import styled from 'styled-components';

const LabelWarp = styled.label`
  color: ${({ status }) => {
    switch (status) {
      case 'success':
        return '#5e9e5e';

      case 'error':
        return '#db2828';

      default:
        return '#000';
    }
  }};
`;

export default LabelWarp;
