import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const recentUnitMenuContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 2px solid ${colors.BACK};

  .unitMenuBox {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .volumeMenu {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .volume {
      width: 15px;
      height: 15px;
      background: ${colors.SKY5};
    }
    .v1 {
      background: ${colors.SKY4};
    }
    .v2 {
      background: ${colors.SKY3};
    }
    .v3 {
      background: ${colors.SKY2};
    }
    .v4 {
      background: ${colors.SKY1};
    }
  }
  .durationMenu {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .duration {
      width: 15px;
      height: 15px;
      background: ${colors.PURPLE5};
    }
    .d1 {
      background: ${colors.PURPLE4};
    }
    .d2 {
      background: ${colors.PURPLE3};
    }
    .d3 {
      background: ${colors.PURPLE2};
    }
    .d4 {
      background: ${colors.PURPLE1};
    }
  }
  .value {
    margin-left: 5px;
    font-weight: 600;
  }
`
