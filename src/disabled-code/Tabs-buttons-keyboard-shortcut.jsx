import React from 'react';

// For Tabs.component file
const TabsButtonsKeyboardDisabled = () => {
  const HandleKeyDownTabsButtonSwitch = (event, AvailableWordType) => {
    switch (event.key) {
      case '!': // Noun 1
        if (TabListElement?.current?.childElementCount >= 2) {
          event.preventDefault();
          return (!AvailableWordType.noun && AdjectiveTabButton?.current?.click()) || NounTabButton?.current?.click();
        }
        break;
      case '@': // Verb 2
        event.preventDefault();
        return VerbTabButton?.current?.click();
      case '#': // Adjective 3
        if (AvailableWordType?.noun && AvailableWordType?.verb) {
          event.preventDefault();
          return AdverbTabButton?.current?.click() || PhraseTabButton?.current?.click() || AdjectiveTabButton?.current?.click();
        }
        break;
      case '$': // Phrase 4
        event.preventDefault();
        return AdverbTabButton?.current?.click() || PhraseTabButton?.current?.click();
      case '%': // Adverb 5
        if (AvailableWordType?.phrase) {
          event.preventDefault();
          AdverbTabButton?.current?.click();
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', (e) => HandleKeyDownTabsButtonSwitch(e, AvailableWordType));
    return () => {
      document.removeEventListener('keydown', (e) => HandleKeyDownTabsButtonSwitch(e, AvailableWordType));
    };
  }, [AvailableWordType]);

  return (
    <div />
  );
};

export default TabsButtonsKeyboardDisabled;
