import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Menu, Modal} from 'antd';
import {useWallet} from '@solana/wallet-adapter-react';
import {Notifications} from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import {MenuOutlined} from '@ant-design/icons';
import {HowToBuyModal} from '../HowToBuyModal';
import {
  Cog,
  CurrentUserBadge,
  CurrentUserBadgeMobile,
} from '../CurrentUserBadge';
import { ConnectButton } from '@oyster/common';
import { MobileNavbar } from '../MobileNavbar';

const getDefaultLinkActions = (connected: boolean) => {
  return [
    <Link to={`/`} key={'explore'}>
      <Button className="app-btn">Explore</Button>
    </Link>,
    <Link to={`/myrmidons`} key={'myrmidons'}>
      <Button className="app-btn">{'Myrmidons'}</Button>
    </Link>,
    <a target="_blank" rel="noopener noreferrer" href={"https://myrill.io/whitepaper"}>
      <Button  className="app-btn">Whitepaper</Button>
    </a>,
     <a target="_blank" rel="noopener noreferrer" href={"https://myrill.io/club"}>
      <Button  className="app-btn">Myrill Club</Button>
    </a>,
  ];
};

const DefaultActions = ({vertical = false}: { vertical?: boolean }) => {
  const {connected} = useWallet();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
      }}
    >
      {getDefaultLinkActions(connected)}
    </div>
  );
};

export const MetaplexMenu = () => {
  const { width } = useWindowDimensions();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const {connected} = useWallet();

  if (width < 768)
    return (
      <>
        <Modal
          title={<img src={'/myrill-logo.svg'}/>}
          visible={isModalVisible}
          footer={null}
          className={'modal-box'}
          closeIcon={
            <img
              onClick={() => setIsModalVisible(false)}
              src={'/modals/close.svg'}
            />
          }
        >
          <div className="site-card-wrapper mobile-menu-modal">
            <Menu onClick={() => setIsModalVisible(false)}>
              {getDefaultLinkActions(connected).map((item, idx) => (
                <Menu.Item key={idx}>{item}</Menu.Item>
              ))}
            </Menu>
            <div className="actions">
              {!connected ? (
                <div className="actions-buttons">
                  <ConnectButton
                    onClick={() => setIsModalVisible(false)}
                    className="secondary-btn"
                  />
                  <HowToBuyModal
                    onClick={() => setIsModalVisible(false)}
                    buttonClassName="black-btn"
                  />
                </div>
              ) : (
                <>
                  <CurrentUserBadgeMobile
                    showBalance={false}
                    showAddress={true}
                    iconSize={24}
                    closeModal={() => {
                      setIsModalVisible(false);
                    }}
                  />
                  <Notifications/>
                  <Cog/>
                </>
              )}
            </div>
          </div>
        </Modal>
        <MenuOutlined
          onClick={() => setIsModalVisible(true)}
          style={{fontSize: '1.4rem'}}
        />
      </>
    );

  return <DefaultActions/>;
};

export const LogoLink = () => {
  return (
    <Link to={`/`}>
      <img className="myrill-logo" src={'/myrill-logo.svg'}/>
    </Link>
  );
};

export const AppBar = () => {
  const {connected} = useWallet();
  return (
    <>
      <MobileNavbar />
      <div id="desktop-navbar">
        <div className="app-left">
          <LogoLink/>
          &nbsp;&nbsp;&nbsp;
          <MetaplexMenu/>
        </div>
        <div className="app-right">
          {!connected && (
            <HowToBuyModal buttonClassName="modal-button-default"/>
          )}
          {!connected && (
            <ConnectButton style={{height: 48}} allowWalletChange/>
          )}
          {connected && (
            <>
              <CurrentUserBadge
                showBalance={false}
                showAddress={true}
                iconSize={24}
              />
              <Notifications/>
              <Cog/>
            </>
          )}
        </div>
      </div>
    </>
  );
};
