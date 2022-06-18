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
import {ConnectButton} from '@oyster/common';


const getDefaultLinkActions = (connected: boolean) => {
  return [
    <Link to={`/`} key={'explore'}>
      <Button className="app-btn">Explore</Button>
    </Link>,
    <Link to={`/artworks`} key={'artwork'}>
      <Button className="app-btn">{connected ? 'My Items' : 'Artwork'}</Button>
    </Link>,
    <Link to={`/artists`} key={'artists'}>
      <Button className="app-btn">Creators</Button>
    </Link>,
    <a target="_blank" rel="noopener noreferrer" href={"https://myrill.io/whitepaper"}>
      <Button className="app-btn">Whitepaper</Button>
    </a>,
    <a target="_blank" rel="noopener noreferrer" href={"https://myrill.io/club"}>
      <Button className="app-btn">Myrill Club</Button>
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
  const {width} = useWindowDimensions();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const {connected} = useWallet();

  if (width < 768)
    return (
      <>
        <Modal
          title={<img style={{maxHeight: "32px"}} src={'/myrill-logo.svg'}/>}
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
      <img alt={"logo"} style={{maxHeight: "32px"}} src={'/myrill-logo.svg'}/>
    </Link>
  );
};

export const AppBar = () => {

  const {connected} = useWallet();

  function myFunction() {
    const x = document.getElementById("myTopnav");
    // @ts-ignore
    if (x.className === "topnav") {
      // @ts-ignore
      x.className += " responsive";
    } else {
      // @ts-ignore
      x.className = "topnav";
    }
  }


  return (
    <>

      <div className="topnav" id="myTopnav">

        <a href="https://myrill.io/">
          <img style={{"height": "22px", "position": "relative", "bottom": "3px"}} alt="logo"
               src="https://myrill.io/assets/img/logo/logo2.svg"/>
        </a>
        <a href="https://myrill.io/yield">Yield</a>
        <a href="https://myrill.io/team">Team</a>
        <a href="https://myrill.io/mint">Mint</a>
        <a href="https://myrill.io/marketplace">Marketplace</a>
        <a href="https://myrill.io/talks">Talks</a>
        <a href="https://myrill.io/blog">Blog</a>
        <a href="https://myrill.io/career">Career</a>

        <a href="https://myrill.io/discord">
          <svg height="16px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord"
               className="svg-inline--fa fa-discord fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 640 512">
            <path fill="currentColor"
                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
          </svg>
        </a>
        <a href="https://myrill.io/twitter">
          <svg height="16px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
               className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
          </svg>
        </a>
        <a href="https://myrill.io/linkedin">
          <svg height="16px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
               className="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512">
            <path fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
        </a>

        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <svg height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
               className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512">
            <path fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </a>
      </div>


      {!connected && (
        <div style={{display: "flex", alignItems: "center", justifyContent: "end", margin: "10px"}}>
          <ConnectButton style={{height: 48}} allowWalletChange/>
        </div>
      )}
      {connected && (
        <>
          <div style={{display: "flex", alignItems: "center", justifyContent: "end"}}>

            <CurrentUserBadge
              showBalance={false}
              showAddress={true}
              iconSize={24}
            />
            <Notifications/>
            <Cog/>
          </div>

        </>
      )}


    </>
  );
};
