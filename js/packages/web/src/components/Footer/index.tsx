import React from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { footerConf } from './footerData';
import { LABELS } from '../../constants';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        {footerConf.components.map(component => (
          <div className="footer-section-container">
              {component.links.map(link => (
              <div className="body-text">
                <a href={link.url} target="_blank" className="footer-link">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-foot">
        <div className="small-body footer-link">
          2021 {LABELS.STORE_NAME}, All rights reserved
        </div>
      </div>
    </div>
  );
};
