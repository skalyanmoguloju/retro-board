import React from 'react';
import PropTypes from 'proptypes';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header'
import IconUpload from 'terra-icon/lib/icon/IconUpload';
import IconClipboard from 'terra-icon/lib/icon/IconClipboard';
import IconDownload from 'terra-icon/lib/icon/IconDownload';
import IconComment from 'terra-icon/lib/icon/IconComment';

const SettingsPanel = (props) => {
  const getButton = (text, icon) => (
    <Button
      style={{border: 0, height: '3em', textAlign: 'left'}}
      text={text}
      icon={icon}
      variant="ghost"
      isBlock/>
  );
  return (
    <Spacer>
      <ActionHeader
        onClose={props.onCloseSettingsPanel}
      />
      <Spacer margin="large+2">
        {getButton("Copy board to clipboard", <IconClipboard/>)}
        {getButton("Export board to PDF", <IconDownload/>)}
        {getButton("Export board to CSV", <IconDownload/>)}
        {getButton("Export board to JPG", <IconDownload/>)}
        {getButton("Import CSV", <IconUpload/>)}
        {getButton("Show/hide comments", <IconComment/>)}
      </Spacer>
    </Spacer>
  )
};

SettingsPanel.propTypes = {
  onCloseSettingsPanel: PropTypes.func,
};

SettingsPanel.defaultProp = {
  onCloseSettingsPanel: () => {},
};


export default SettingsPanel;