import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Divider, Row} from 'antd';
import BN from 'bn.js';

import Masonry from 'react-masonry-css';
import {CardLoader} from '../MyLoader';
import {useMeta} from '../../contexts';
import {AuctionRenderCard} from '../AuctionRenderCard';
import {AuctionViewState, useAuctions} from '../../hooks';
import ReactMarkdown from 'react-markdown';

interface Connect {
  label: string;
  url: string;
}

interface Author {
  name: string;
  avatar?: string;
  details?: string;
  stats?: string[];
  connectWith?: Connect[];
}

interface HeadContent {
  title: string;
  subtitle: string;
  bannerImage: string;
  author?: Author;
}

interface ImageCaption {
  text: string;
  linkText?: string;
  linkUrl?: string;
}

interface ArticleSection {
  title?: string;
  paragraphs: string[];
  image?: string;
  caption?: ImageCaption;
}

interface MidContent {
  sections: ArticleSection[];
  markdown: string;
}

interface LeftContent {
  author: Author;
}

//https://stackoverflow.com/questions/1480133/how-can-i-get-an-objects-absolute-position-on-the-page-in-javascript
const cumulativeOffset = (element: HTMLElement) => {
  let top = 0,
    left = 0;
  let cumulativeElement: Element | null = element;
  do {
    // @ts-ignore
    top += cumulativeElement.offsetTop || 0;
    // @ts-ignore
    left += cumulativeElement.offsetLeft || 0;
    // @ts-ignore
    cumulativeElement = cumulativeElement.offsetParent;
  } while (cumulativeElement);

  return {
    top: top,
    left: left,
  };
};
export const StaticPage = (props: {
  // headContent: HeadContent;
  leftContent?: LeftContent;
  midContent: MidContent;
  bottomContent: boolean;
}) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  const auctions = useAuctions(AuctionViewState.Live);
  const {isLoading} = useMeta();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const liveAuctions = auctions.sort(
    (a, b) =>
      a.auction.info.endedAt
        ?.sub(b.auction.info.endedAt || new BN(0))
        .toNumber() || 0,
  );

  const liveAuctionsView = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {!isLoading
        ? liveAuctions.map((m, idx) => {
          const id = m.auction.pubkey;
          return (
            <Link to={`/auction/${id}`} key={idx}>
              <AuctionRenderCard key={id} auctionView={m}/>
            </Link>
          );
        })
        : [...Array(10)].map((_, idx) => <CardLoader key={idx}/>)}
    </Masonry>
  );

  const addGradients = () => {
    const headerGradient = document.getElementById('static-header-gradient');
    const endGradient = document.getElementById('static-end-gradient');
    const upper = document.getElementById('header-container');
    const lower = document.getElementById('bottom-container');
    if (headerGradient) headerGradient.style.display = 'inline-block';
    if (endGradient) endGradient.style.display = 'inline-block';

    if (upper && headerGradient) {
      const container = cumulativeOffset(upper);
      headerGradient.style.top = `${
        container.top + upper.offsetHeight - headerGradient.offsetHeight
      }px`;
    }
    if (lower && endGradient) {
      const container = cumulativeOffset(lower);
      endGradient.style.top = `${container.top}px`;
    }
  };

  useEffect(() => {
    addGradients();
    return () => {
      const headerGradient = document.getElementById('static-header-gradient');
      const endGradient = document.getElementById('static-end-gradient');
      if (headerGradient) headerGradient.style.display = 'none';
      if (endGradient) endGradient.style.display = 'none';
    };
  }, [dimensions]);

  useEffect(() => {
    setTimeout(() => addGradients(), 500);
  }, []);

  const headerSection = (
    <section id="header-container">
      {/*<span id="header-gradient"></span>*/}
      <Row>
        <Col className="header-middle">

          <a href="https://myrill-labs.github.io/whitepaper/">
            <input type="button" value="Get the white paper" className="gradient-btn" style={{fontSize:'24px', fontWeight:100}}/>
          </a>


        </Col>
      </Row>
    </section>
  );
  const leftSection = props.leftContent && (
    <section id="left-container" className="author-container">
      <img
        src={props.leftContent?.author.avatar}
        className="author-avatar"
        alt="author image"
      />
      <p className="author-name">{props.leftContent?.author.name}</p>
      <div className="author-details">
        <p className="author-subtitle">Details</p>
        <p>{props.leftContent?.author.details}</p>
      </div>
      <div className="author-stats">
        <p className="author-subtitle">Stats</p>
        {props.leftContent?.author.stats?.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
      <div className="author-connect">
        <p className="author-subtitle">Connect with the artist</p>
        {props.leftContent?.author.connectWith?.map((e, i) => (
          <p>
            <a key={i} href={e.url}>
              {e.label}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
  const rightSection = <section id="right-container"></section>;
  const finalSection = (
    <section id="bottom-container">
      {/*<p className="bottom-title">Shop the Collection</p>*/}
      {/*{liveAuctionsView}*/}
    </section>
  );

  const markdown = props.midContent.markdown;


  return (
    <Fragment>
      {headerSection}
      <Row className="static-page-container">
        <Col xs={24} md={4}>
          {leftSection}
        </Col>
        <Col xs={24} md={16}>
          <div className="middle-background">
            <ReactMarkdown className="paragraph-text" children={markdown}/>
          </div>
        </Col>
        <Col xs={24} md={4}>
          {rightSection}
        </Col>
      </Row>
      {props.bottomContent && finalSection}
    </Fragment>
  );
};
