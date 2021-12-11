import {useWallet} from '@solana/wallet-adapter-react';
import {Col, Layout, Row, Tabs} from 'antd';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

import {useMeta} from '../../../../contexts';
import {CardLoader} from '../../../../components/MyLoader';
import {Banner} from '../../../../components/Banner';
import {HowToBuyModal} from '../../../../components/HowToBuyModal';

import {useAuctionsList} from './hooks/useAuctionsList';
import {AuctionRenderCard} from '../../../../components/AuctionRenderCard';

const {TabPane} = Tabs;
const {Content} = Layout;

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
}

export const SalesListView = () => {
  const [activeKey, setActiveKey] = useState(LiveAuctionViewState.All);
  const {isLoading} = useMeta();
  const {connected} = useWallet();
  const {auctions, hasResaleAuctions} = useAuctionsList(activeKey);

  return (
    <>
      <div style={{backgroundColor: 'rgba(100, 100, 100, 0.01)', fontFamily:'Montserrat', fontSize: '18px', margin: '5%'}}>
          Welcome to the Myrill NFT Marketplace. Here are listed Club memberships.
        If you want to purchase multiples memberships,
        contact us on <a href={"https://discord.gg/UQudVUA3KE"}>discord</a>.

        You can consult <a href={"https://docs.google.com/spreadsheets/d/1WQ_7eOxxE" +
        "pOb23kSNxaOb-OtklSlNPMxJnn3HoVKO4g/edit#gid=0"}>here</a> the status of the sales.

        If you want to purchase on mobile, you will need a mobile compatible wallet. Solfare is realising one soon.
      </div>
      {/*<Banner*/}
      {/*  src="/myrill-main-banner.png"*/}
      {/*  headingText="Myrill.io Store"*/}
      {/*  subHeadingText="Buy club membership NFTs."*/}
      {/*  actionComponent={<HowToBuyModal buttonClassName="secondary-btn" />}*/}
      {/*  useBannerBg*/}
      {/*/>*/}
      <Layout>
        <Content style={{display: 'flex', flexWrap: 'wrap'}}>
          <Col style={{width: '100%', marginTop: 32}}>
            <Row>
              <Tabs
                activeKey={activeKey}
                onTabClick={key => setActiveKey(key as LiveAuctionViewState)}
              >
                <TabPane
                  tab={
                    <>
                      <span className="live"></span> Live
                    </>
                  }
                  key={LiveAuctionViewState.All}
                ></TabPane>
                {hasResaleAuctions && (
                  <TabPane
                    tab="Secondary Marketplace"
                    key={LiveAuctionViewState.Resale}
                  ></TabPane>
                )}
                {/*<TabPane tab="Ended" key={LiveAuctionViewState.Ended}></TabPane>*/}
                {/*{connected && (*/}
                {/*  <TabPane*/}
                {/*    tab="Participated"*/}
                {/*    key={LiveAuctionViewState.Participated}*/}
                {/*  ></TabPane>*/}
                {/*)}*/}
              </Tabs>
            </Row>
            <Row>
              <div className="artwork-grid">
                {isLoading &&
                [...Array(10)].map((_, idx) => <CardLoader key={idx}/>)}
                {!isLoading &&
                auctions.map(auction => (
                  <Link
                    key={auction.auction.pubkey}
                    to={`/auction/${auction.auction.pubkey}`}
                  >
                    <AuctionRenderCard auctionView={auction}/>
                  </Link>
                ))}
              </div>
            </Row>
          </Col>
        </Content>
      </Layout>
    </>
  );
};
