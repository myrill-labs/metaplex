import React from 'react';
import {Card, CardProps} from 'antd';
import {ArtContent} from '../ArtContent';
import {AuctionView, useArt} from '../../hooks';
import {AmountLabel} from '../AmountLabel';
import {useAuctionStatus} from './hooks/useAuctionStatus';
import {useTokenList} from '../../contexts/tokenList';
import {ArtType} from "../../types";
import {useMeta} from "@oyster/common";
import {CardLoader} from "../MyLoader";

export interface AuctionCard extends CardProps {
  auctionView: AuctionView;
}

export const AuctionRenderCard = (props: AuctionCard) => {
  const {auctionView} = props;
  const id = auctionView.thumbnail.metadata.pubkey;
  const art = useArt(id);
  const name = art?.title || ' ';
  const tokenInfo = useTokenList().mainnetTokens.filter(m => m.address == auctionView.auction.info.tokenMint)[0]
  const {status, amount} = useAuctionStatus(auctionView);
  const {isLoading} = useMeta();

  let badge = '';
  if (art.type === ArtType.NFT) {
    badge = 'Unique';
  } else if (art.type === ArtType.Master) {
    badge = 'NFT 0';
  } else if (art.type === ArtType.Print) {
    badge = `${art.edition} of ${art.supply}`;
  }

  const card = (

    <div>
      {isLoading
        ? <CardLoader key={auctionView.auction.pubkey}/>
        :
        <Card hoverable={true} className={`auction-render-card`} bordered={false}>
          <div className={'card-art-info'}>
            <div className="auction-gray-wrapper">
             {/* <div className={'card-artist-info'}>*/}
             {/*   <MetaAvatar creators={creators.length ? [creators[0]] : undefined}/>*/}
             {/*   <span className={'artist-name'}>*/}
             {/*  {creators[0]?.name ||*/}
             {/*  creators[0]?.address?.substr(0, 6) ||*/}
             {/*  'Go to auction'}*/}
             {/*     ...*/}
             {/*</span>*/}
             {/* </div>*/}
              <div className={'art-content-wrapper'}>
                <ArtContent
                  className="auction-image no-events"
                  preview={false}
                  pubkey={id}
                  allowMeshRender={false}
                />
              </div>
              <div className={'art-name'}>{name}</div>
              <br/>
              <div className="card-artist-info__subtitle">
                <p className="info-message__main">{badge}</p>
              </div>
              {/*isInstantSaleStr? {isInstantSaleStr}*/}
              {/*{auctionView.isInstantSale*/}
              {/*  ? <div>Instant Sale</div>*/}
              {/*  : <div className="auction-info-container">*/}
              {/*    <div className={'info-message'}>ENDING IN</div>*/}
              {/*    <AuctionCountdown auctionView={auctionView} labels={false}/>*/}
              {/*  </div>*/}
              {/*}*/}
            </div>
          </div>
          <div className="card-bid-info">
            <span className={'text-uppercase info-message'}>{status}</span>
            <AmountLabel
              containerStyle={{flexDirection: 'row'}}
              title={status}
              amount={amount}
              iconSize={24}
              tokenInfo={tokenInfo}
            />
          </div>
        </Card>
      }
    </div>

  );

  return card;
};
