import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

import Typography from '../../styles/Typography';
import Colors from '../../styles/Colors';
import PriceFormat from '../common/PriceFormat';
import Divider from '../common/Divider';

const BidListItemBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
  .bid {
    &-user {
      ${Typography.Subtitle1};
      color: ${Colors.onSurfaceHigh};
    }
    &-date {
      ${Typography.Body2};
      color: ${Colors.onSurfaceMedium};
    }
    &-price {
      ${Typography.Subtitle2};
    }
  }
`;

const BidListItem = ({ member, price, createDt }) => {
  return (
    <>
      <BidListItemBlock>
        <img
          alt="프로필 이미지"
          src={
            member.memberImagePath
              ? member.memberImagePath
              : `https://avatars.dicebear.com/v2/identicon/${member.memberName}${member.memberId}.svg`
          }
        />
        <div>
          <h4 className="bid-user">{member.memberName}</h4>
          <Moment
            className="bid-date"
            date={createDt}
            format="YYYY-MM-DD HH:mm.ss"
          />
        </div>
        <PriceFormat className="bid-price" price={price} />
      </BidListItemBlock>
      <Divider thick="1px" />
    </>
  );
};

export default BidListItem;
