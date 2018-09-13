export * from './index-core';

import coreRenderWebChat from './index-core';
import createCognitiveServicesWebSpeechPonyfill from './createCognitiveServicesWebSpeechPonyfill';
import createBrowserWebSpeechPonyfill from './createBrowserWebSpeechPonyfill';
import renderMarkdown from './renderMarkdown';
import { createAdaptiveCardsAttachmentMiddleware } from 'botframework-webchat-component';

// Add additional props to <WebChat>, so it support additional features
const renderWebChat = (props, element) => {
  const attachmentMiddleware = [];

  if (props.attachmentMiddleware) {
    attachmentMiddleware.push(props.attachmentMiddleware);
  }

  attachmentMiddleware.push(createAdaptiveCardsAttachmentMiddleware());

  return coreRenderWebChat(
    {
      ...props,
      attachmentMiddleware,
      renderMarkdown
    },
    element
  );
}

export {
  createCognitiveServicesWebSpeechPonyfill,
  createBrowserWebSpeechPonyfill,
  renderMarkdown,
  renderWebChat
}

window['WebChat'] = {
  ...window['WebChat'],
  createCognitiveServicesWebSpeechPonyfill,
  createBrowserWebSpeechPonyfill,
  renderMarkdown,
  renderWebChat
};
