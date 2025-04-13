import { useGame } from '../../context/GameContext';
import { useState } from 'react';
import './SettingsPanel.css';

export default function SettingsPanel() {
  const { settings, toggleSetting } = useGame();
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={`settings-panel ${isOpen ? 'open' : ''}`}>
      <button className="settings-toggle" onClick={togglePanel}>
        {isOpen ? '✕' : '⚙️'}
      </button>
      
      {isOpen && (
        <div className="settings-content">
          <h3>Settings</h3>
          
          <div className="setting-option">
            <span>Background Music</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.backgroundMusic} 
                onChange={() => toggleSetting('backgroundMusic')} 
              />
              <span className="slider"></span>
            </label>
          </div>
          
          <div className="setting-option">
            <span>Sound Effects</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.soundEffects} 
                onChange={() => toggleSetting('soundEffects')} 
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}